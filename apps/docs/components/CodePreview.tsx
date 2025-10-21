"use client";
import React from "react";

type Props = {
  code: string;
  language?: "bash" | "sh" | "js" | "ts" | "jsx" | "tsx" | "json";
  preview?: React.ReactNode;
};

// Very small client-side highlighter for bash and JS-like code.
function tokenizeBash(line: string) {
  const pattern =
    /(#[^\n]*|--?[A-Za-z0-9-]+|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\b[\w@:\/.\-]+\b)/g;
  const parts: Array<{ text: string; type?: string }> = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(line))) {
    if (m.index > last) parts.push({ text: line.slice(last, m.index) });
    const token = m[0];
    let type;
    if (token.startsWith("#")) type = "comment";
    else if (token.startsWith("-")) type = "flag";
    else if (/^['"`]/.test(token)) type = "string";
    else type = "word";
    parts.push({ text: token, type });
    last = m.index + token.length;
  }
  if (last < line.length) parts.push({ text: line.slice(last) });
  return parts;
}

function tokenizeJS(code: string) {
  const pattern =
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\b(?:const|let|var|function|return|import|from|export|default|class|new|if|else|for|while|await|async|try|catch|switch|case|break)\b|\b\d+\b)/g;
  const parts: Array<{ text: string; type?: string }> = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(code))) {
    if (m.index > last) parts.push({ text: code.slice(last, m.index) });
    const token = m[0];
    let type;
    if (/^\/\//.test(token) || /^\/\*/.test(token)) type = "comment";
    else if (/^['"`]/.test(token)) type = "string";
    else if (/^\d+$/.test(token)) type = "number";
    else type = "keyword";
    parts.push({ text: token, type });
    last = m.index + token.length;
  }
  if (last < code.length) parts.push({ text: code.slice(last) });
  return parts;
}

export default function CodePreview({
  code,
  language = "bash",
  preview,
}: Props): React.ReactElement {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // ignore clipboard errors
    }
  };

  const lines = code.split("\n");

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-transparent dark:border-gray-800">
      {preview ? (
        <div className="bg-gray-50 p-3 dark:bg-gray-900">{preview}</div>
      ) : null}

      <div className="bg-white p-4 dark:bg-black">
        <button
          onClick={copy}
          className="absolute right-4 top-4 z-10 rounded border border-gray-200 bg-gray-100 px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-800"
        >
          Copy
        </button>

        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-900 dark:text-gray-100">
          <code>
            {lines.map((ln, idx) => {
              if (language === "bash" || language === "sh") {
                const parts = tokenizeBash(ln);
                return (
                  <div key={idx} className="leading-6">
                    {parts.map((p, i) => (
                      <span
                        key={i}
                        className={
                          p.type === "comment"
                            ? "italic text-gray-500"
                            : p.type === "flag"
                              ? "text-yellow-700"
                              : p.type === "string"
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-900 dark:text-gray-100"
                        }
                      >
                        {p.text}
                      </span>
                    ))}
                  </div>
                );
              }

              const parts = tokenizeJS(
                ln + (idx < lines.length - 1 ? "\n" : "")
              );
              return (
                <div key={idx} className="leading-6">
                  {parts.map((p, i) => (
                    <span
                      key={i}
                      className={
                        p.type === "string"
                          ? "text-green-600 dark:text-green-400"
                          : p.type === "comment"
                            ? "italic text-gray-500"
                            : p.type === "number"
                              ? "text-indigo-600"
                              : p.type === "keyword"
                                ? "font-medium text-purple-600 dark:text-purple-400"
                                : "text-gray-900 dark:text-gray-100"
                      }
                    >
                      {p.text}
                    </span>
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
