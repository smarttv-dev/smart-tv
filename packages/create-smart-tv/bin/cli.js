#!/usr/bin/env node

// Check Node.js version
const nodeVersion = process.versions.node;
const majorVersion = parseInt(nodeVersion.split(".")[0], 10);

if (majorVersion < 16) {
  console.error("Error: Node.js version 16 or higher is required.");
  console.error(`Current version: ${nodeVersion}`);
  console.error("");
  console.error("Please update Node.js:");
  console.error("  Visit https://nodejs.org/");
  console.error("  Use nvm: nvm install 18 && nvm use 18");
  console.error("  Use brew: brew install node");
  process.exit(1);
}

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const minimist = require("minimist");

const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch (e) {
    return false;
  }
}

async function copyRecursive(src, dest, excludePatterns = []) {
  const sStat = await stat(src);
  if (sStat.isDirectory()) {
    if (!(await exists(dest))) await mkdir(dest, { recursive: true });
    const items = await readdir(src);
    for (const it of items) {
      // Skip excluded directories/files and hidden files
      if (
        excludePatterns.some((pattern) => it.includes(pattern)) ||
        it.startsWith(".DS_Store") ||
        it.startsWith("node_modules")
      ) {
        continue;
      }
      await copyRecursive(
        path.join(src, it),
        path.join(dest, it),
        excludePatterns
      );
    }
  } else {
    // Skip copying certain files that might cause issues
    const fileName = path.basename(src);
    if (fileName === ".DS_Store" || fileName === "Thumbs.db") {
      return;
    }
    await copyFile(src, dest);
  }
}

async function updatePackageJson(packageJsonPath, projectName, destPath) {
  try {
    const content = await readFile(packageJsonPath, "utf8");
    const packageData = JSON.parse(content);

    // Update the package name
    packageData.name = projectName;

    // Check if we're in a workspace environment (for local development)
    const workspaceRoot = path.resolve(__dirname, "..", "..", "..");
    const destInWorkspace = destPath.startsWith(workspaceRoot);
    const isWorkspace =
      destInWorkspace &&
      ((await exists(path.join(workspaceRoot, "pnpm-workspace.yaml"))) ||
        (await exists(path.join(process.cwd(), "pnpm-workspace.yaml"))));

    if (isWorkspace) {
      // We're in a workspace environment, use workspace references
      if (!packageData.dependencies) {
        packageData.dependencies = {};
      }
      packageData.dependencies["@smart-tv/player"] = "workspace:*";
      packageData.dependencies["@smart-tv/query"] = "workspace:*";
      packageData.dependencies["@smart-tv/ui"] = "workspace:*";
    }

    // Write back the updated package.json
    await writeFile(
      packageJsonPath,
      JSON.stringify(packageData, null, 2) + "\n"
    );
  } catch (err) {
    console.warn("Warning: Could not update package.json:", err.message);
  }
}

async function main() {
  const argv = minimist(process.argv.slice(2));
  const name = argv._[0];

  // Handle version flag
  if (argv.version || argv.v) {
    const packageJsonPath = path.join(__dirname, "..", "package.json");
    try {
      const content = await readFile(packageJsonPath, "utf8");
      const packageData = JSON.parse(content);
      console.log(packageData.version || "1.0.0");
    } catch (err) {
      console.log("1.0.0");
    }
    process.exit(0);
  }

  // Handle help flag
  if (argv.help || argv.h) {
    console.log("create-smart-tv-app");
    console.log("");
    console.log("Usage: create-smart-tv-app <project-name> [options]");
    console.log("");
    console.log("Arguments:");
    console.log("  project-name    Name of the project to create");
    console.log("");
    console.log("Options:");
    console.log("  -v, --version   Show version number");
    console.log("  -h, --help      Show help");
    console.log("");
    console.log("Examples:");
    console.log("  npx create-smart-tv-app my-smart-tv-app");
    console.log("  npm create smart-tv-app@latest netflix-clone");
    console.log("  pnpm create smart-tv-app streaming-platform");
    console.log("  yarn create smart-tv-app cinema-hub");
    console.log("");
    console.log("Documentation: https://smart-tv-docs.vercel.app");
    process.exit(0);
  }

  if (!name) {
    console.error("Error: Project name is required");
    console.error("");
    console.error("Usage:");
    console.error("  create-smart-tv-app <project-name>");
    console.error("");
    console.error("Example:");
    console.error("  npx create-smart-tv-app my-smart-tv-app");
    process.exit(2);
  }

  // Validate project name
  if (!/^[a-z0-9_-]+$/i.test(name)) {
    console.error("Error: Invalid project name");
    console.error(
      "Project name can only contain letters, numbers, hyphens, and underscores."
    );
    console.error("");
    console.error("Example: my-app, smart-tv-app, myapp123");
    process.exit(2);
  }

  const cwd = process.cwd();
  const templatePath = path.join(__dirname, "..", "template");
  const dest = path.join(cwd, name);

  if (await exists(dest)) {
    console.error(`Error: Directory ${name} already exists.`);
    process.exit(3);
  }

  console.log("");
  console.log(`Creating a new Smart TV app in ${dest}`);
  console.log("");

  // Check if template exists
  if (!(await exists(templatePath))) {
    console.error(`Error: Template not found at ${templatePath}`);
    console.error("Please reinstall create-smart-tv-app.");
    process.exit(4);
  }

  try {
    console.log("Installing packages. This might take a couple of minutes.");
    console.log("");

    // Copy template files
    await copyRecursive(templatePath, dest);

    // Update package.json with project name and dependencies
    const packageJsonPath = path.join(dest, "package.json");
    await updatePackageJson(packageJsonPath, name, dest);

    console.log("Success! Created", name, "at", dest);
    console.log("");
    console.log("We suggest that you begin by typing:");
    console.log("");
    console.log("  cd", name);
    console.log("  npm install");
    console.log("  npm run dev");
    console.log("");
    console.log("Happy coding!");
  } catch (err) {
    console.error("");
    console.error("Error: Failed to create project");
    console.error(err.message);
    console.error("");
    process.exit(4);
  }
}

main();
