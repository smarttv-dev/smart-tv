import React from 'react';
import CodePreview from '../../../../components/CodePreview';
import CommandTabs from '../../../../components/CommandTabs';

const installer = {
  pnpm: 'pnpm add @smart-tv/ui @smart-tv/player @smart-tv/query',
  npm: 'npm install @smart-tv/ui @smart-tv/player @smart-tv/query',
  yarn: 'yarn add @smart-tv/ui @smart-tv/player @smart-tv/query'
};

export default function UsagePage(): React.ReactElement {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Usage</h1>
      <p className="text-sm text-gray-600 mb-4">Guides and examples to use the Smart TV packages in your project.</p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Installing packages</h2>
        <p className="text-sm text-gray-600 mt-2">Install the libraries you need. In a monorepo you can use workspace references.</p>
        <div className="mt-3">
          <CommandTabs commands={installer} />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold">Basic example (UI)</h2>
        <p className="text-sm text-gray-600 mt-2">Example component using the UI package.</p>
        <div className="mt-3">
          <CodePreview
            code={`import { Button } from '@smart-tv/ui'

export default function Example() {
  return <Button>Play</Button>
}`}
            language="tsx"
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Player example</h2>
        <p className="text-sm text-gray-600 mt-2">A minimal Video player integration.</p>
        <div className="mt-3">
          <CodePreview
            code={`import { VideoPlayer } from '@smart-tv/player'

export default function Player() {
  return <VideoPlayer src="/media/sample.mp4" />
}`}
            language="tsx"
          />
        </div>
      </section>
    </div>
  );
}
