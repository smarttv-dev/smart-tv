"use client";
import React from 'react';

type CommandMap = Record<string, string>;

export default function CommandTabs({ commands }: { commands: CommandMap }): React.ReactElement {
  const tabs = Object.keys(commands);
  const [active, setActive] = React.useState<string>(() => (tabs[0] ?? ''));

  const copy = async () => {
    try {
      const v = commands[active];
      if (!v) return;
      await navigator.clipboard.writeText(v);
    } catch {
      // ignore
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800">
        <div className="inline-flex items-center gap-2">
          <span className="w-6 h-6 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded">▸</span>
        </div>
        <div className="flex-1">
          <div className="inline-flex rounded-md p-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-3 py-1 text-xs rounded ${active === t ? 'bg-gray-100 dark:bg-gray-800 font-medium' : 'text-gray-600 dark:text-gray-400'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button onClick={copy} className="px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">Copy</button>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-gray-900">
        <div className="font-mono text-sm text-gray-900 dark:text-gray-100">{commands[active]}</div>
      </div>
    </div>
  );
}
