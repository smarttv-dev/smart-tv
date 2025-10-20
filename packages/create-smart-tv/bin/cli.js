#!/usr/bin/env node

// Check Node.js version
const nodeVersion = process.versions.node;
const majorVersion = parseInt(nodeVersion.split('.')[0], 10);

if (majorVersion < 16) {
  console.error('❌ Error: Node.js version 16 or higher is required.');
  console.error(`   Current version: ${nodeVersion}`);
  console.error('');
  console.error('Please update Node.js:');
  console.error('  • Visit https://nodejs.org/');
  console.error('  • Use nvm: nvm install 18 && nvm use 18');
  console.error('  • Use brew: brew install node');
  process.exit(1);
}

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const minimist = require('minimist');

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
    if (!await exists(dest)) await mkdir(dest, { recursive: true });
    const items = await readdir(src);
    for (const it of items) {
      // Skip excluded directories/files and hidden files
      if (excludePatterns.some(pattern => it.includes(pattern)) || it.startsWith('.DS_Store') || it.startsWith('node_modules')) {
        continue;
      }
      await copyRecursive(path.join(src, it), path.join(dest, it), excludePatterns);
    }
  } else {
    // Skip copying certain files that might cause issues
    const fileName = path.basename(src);
    if (fileName === '.DS_Store' || fileName === 'Thumbs.db') {
      return;
    }
    await copyFile(src, dest);
  }
}

async function getPackageVersion(packagePath) {
  try {
    const packageJsonPath = path.join(packagePath, 'package.json');
    if (await exists(packageJsonPath)) {
      const content = await readFile(packageJsonPath, 'utf8');
      const packageData = JSON.parse(content);
      return packageData.version || '1.0.0';
    }
  } catch (err) {
    console.warn(`⚠ Could not read version from ${packagePath}:`, err.message);
  }
  return '1.0.0'; // fallback version
}

async function getSmartTvPackageVersions() {
  // Try to find the packages directory relative to this CLI
  const packagesDir = path.resolve(__dirname, '..', '..');
  
  const versions = {};
  const packageNames = ['player', 'query', 'ui'];
  
  for (const packageName of packageNames) {
    const packagePath = path.join(packagesDir, packageName);
    const version = await getPackageVersion(packagePath);
    versions[`@smart-tv/${packageName}`] = `^${version}`;
  }
  
  return versions;
}

async function updatePackageJson(packageJsonPath, projectName, destPath) {
  try {
    const content = await readFile(packageJsonPath, 'utf8');
    const packageData = JSON.parse(content);
    
    // Update the package name
    packageData.name = projectName;
    
    // Add smart-tv dependencies if they don't exist
    if (!packageData.dependencies) {
      packageData.dependencies = {};
    }
    
    // Check if we're in a workspace environment
    const workspaceRoot = path.resolve(__dirname, '..', '..', '..');
    const destInWorkspace = destPath.startsWith(workspaceRoot);
    const isWorkspace = destInWorkspace && (
      await exists(path.join(workspaceRoot, 'pnpm-workspace.yaml')) || 
      await exists(path.join(process.cwd(), 'pnpm-workspace.yaml'))
    );
    
    if (isWorkspace) {
      // We're in a workspace environment, use workspace references
      packageData.dependencies = {
        ...packageData.dependencies,
        '@smart-tv/player': 'workspace:*',
        '@smart-tv/query': 'workspace:*', 
        '@smart-tv/ui': 'workspace:*'
      };
      console.log('✓ Using workspace dependencies');
    } else {
      // We're using the published version, get actual versions from package.json files
      const smartTvVersions = await getSmartTvPackageVersions();
      packageData.dependencies = {
        ...packageData.dependencies,
        ...smartTvVersions
      };
      console.log('✓ Using package versions:', Object.entries(smartTvVersions).map(([pkg, ver]) => `${pkg}@${ver}`).join(', '));
    }
    
    // Write back the updated package.json
    await writeFile(packageJsonPath, JSON.stringify(packageData, null, 2) + '\n');
    console.log('✓ Updated package.json with smart-tv dependencies');
  } catch (err) {
    console.warn('⚠ Could not update package.json:', err.message);
  }
}

async function main() {
  const argv = minimist(process.argv.slice(2));
  const name = argv._[0];
  
  // Handle version flag
  if (argv.version || argv.v) {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    try {
      const content = await readFile(packageJsonPath, 'utf8');
      const packageData = JSON.parse(content);
      console.log(packageData.version || '1.0.0');
    } catch (err) {
      console.log('1.0.0');
    }
    process.exit(0);
  }
  
  // Handle help flag
  if (argv.help || argv.h) {
    console.log('🚀 Create Smart TV App');
    console.log('');
    console.log('Usage: create-smart-tv-app <project-name> [options]');
    console.log('');
    console.log('Arguments:');
    console.log('  project-name    Name of the project to create');
    console.log('');
    console.log('Options:');
    console.log('  -v, --version   Show version number');
    console.log('  -h, --help      Show help');
    console.log('');
    console.log('Examples:');
    console.log('  npx create-smart-tv-app my-smart-tv-app');
    console.log('  npm create smart-tv-app@latest netflix-clone');
    console.log('  pnpm create smart-tv-app streaming-platform');
    console.log('  yarn create smart-tv-app cinema-hub');
    console.log('');
    console.log('Visit https://smart-tv-docs.vercel.app for documentation');
    process.exit(0);
  }
  
  if (!name) {
    console.error('❌ Error: Project name is required');
    console.error('');
    console.error('Usage: create-smart-tv-app <project-name>');
    console.error('');
    console.error('Examples:');
    console.error('  npx create-smart-tv-app my-smart-tv-app');
    console.error('  npm create smart-tv-app@latest my-app');
    console.error('  pnpm create smart-tv-app my-streaming-app');
    console.error('  yarn create smart-tv-app my-cinema-app');
    console.error('');
    console.error('The project name should be:');
    console.error('  - lowercase (recommended)');
    console.error('  - without spaces (use hyphens or underscores)');
    console.error('  - valid npm package name');
    console.error('');
    console.error('💡 Tip: Use descriptive names like "netflix-clone", "streaming-app", or "smart-tv-dashboard"');
    process.exit(2);
  }

  // Validate project name
  if (!/^[a-z0-9_-]+$/i.test(name)) {
    console.error('❌ Error: Invalid project name');
    console.error('Project name can only contain letters, numbers, hyphens, and underscores.');
    console.error('');
    console.error('Valid examples: my-app, smart_tv_app, myapp123');
    process.exit(2);
  }

  const cwd = process.cwd();
  const templatePath = path.join(__dirname, '..', 'template');
  const dest = path.join(cwd, name);
  
  if (await exists(dest)) {
    console.error(`❌ Destination ${dest} already exists. Aborting.`);
    process.exit(3);
  }

  console.log('');
  console.log('🚀 Creating Smart TV project...');
  console.log(`📦 Project name: ${name}`);
  console.log(`📁 Destination: ${dest}`);
  console.log('');

  // Check if template exists
  if (!await exists(templatePath)) {
    console.error(`❌ Template not found at ${templatePath}`);
    console.error('Please reinstall create-smart-tv-app or report this issue.');
    process.exit(4);
  }

  try {
    console.log('📋 Copying template files...');
    // Copy template files
    await copyRecursive(templatePath, dest);
    console.log('✅ Template files copied successfully');
    
    console.log('📝 Updating project configuration...');
    // Update package.json with project name and dependencies
    const packageJsonPath = path.join(dest, 'package.json');
    await updatePackageJson(packageJsonPath, name, dest);
    
    console.log('');
    console.log('Smart TV project created successfully!');
    console.log('');
    console.log('Get started:');
    console.log(`  cd ${name}`);
    console.log('  npm install     # Install dependencies');
    console.log('  npm run dev     # Start development server');
    console.log('');
  } catch (err) {
    console.error('');
    console.error('❌ Failed to create project:');
    console.error(`   ${err.message}`);
    console.error('');
    console.error('🔧 Troubleshooting:');
    console.error('  • Make sure you have write permissions in the current directory');
    console.error('  • Ensure the project name doesn\'t contain special characters');
    console.error('  • Try running with sudo if permission issues persist (not recommended)');
    console.error('  • Check if the destination folder already exists');
    console.error('');
    console.error('💬 Need help? Visit https://github.com/smarttv-dev/smart-tv/issues');
    process.exit(4);
  }
}

main();
