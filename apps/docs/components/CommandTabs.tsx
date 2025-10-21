"use client";
import React from "react";

type CommandMap = Record<string, string>;

export default function CommandTabs({
  commands,
}: {
  commands: CommandMap;
}): React.ReactElement {
  const tabs = Object.keys(commands);
  const [active, setActive] = React.useState<string>(() => tabs[0] ?? "");

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
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3 bg-gray-50 p-3 dark:bg-gray-800">
        <div className="inline-flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black">
            ▸
          </span>
        </div>
        <div className="flex-1">
          <div className="inline-flex rounded-md border border-gray-100 bg-white p-1 dark:border-gray-700 dark:bg-gray-900">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded px-3 py-1 text-xs ${active === t ? "bg-gray-100 font-medium dark:bg-gray-800" : "text-gray-600 dark:text-gray-400"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={copy}
            className="rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="bg-white p-4 dark:bg-gray-900">
        <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
          {commands[active]}
        </div>
      </div>
    </div>
  );
}
