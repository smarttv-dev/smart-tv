import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function DialogDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Dialog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A modal dialog component for displaying important information, confirmations, and forms that require user attention.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Dialog } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create a simple dialog with title and content.
        </p>
        <CodePreview
          language="tsx"
          code={`const [isOpen, setIsOpen] = useState(false);

<>
  <Button focusKey="open-dialog" onEnterPress={() => setIsOpen(true)}>
    Open Dialog
  </Button>
  
  <Dialog
    focusKey="basic-dialog"
    open={isOpen}
    onClose={() => setIsOpen(false)}
  >
    <Dialog.Title>Confirmation</Dialog.Title>
    <Dialog.Content>
      Are you sure you want to continue?
    </Dialog.Content>
    <Dialog.Actions>
      <Button focusKey="cancel" onEnterPress={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button focusKey="confirm" onEnterPress={handleConfirm}>
        Confirm
      </Button>
    </Dialog.Actions>
  </Dialog>
</>`}
        />
      </div>

      {/* Alert Dialog */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Alert Dialog</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Display important alerts or warnings.
        </p>
        <CodePreview
          language="tsx"
          code={`<Dialog
  focusKey="alert-dialog"
  open={showAlert}
  onClose={() => setShowAlert(false)}
  variant="alert"
>
  <Dialog.Title>Error</Dialog.Title>
  <Dialog.Content>
    <p>Something went wrong. Please try again.</p>
  </Dialog.Content>
  <Dialog.Actions>
    <Button focusKey="ok" onEnterPress={() => setShowAlert(false)}>
      OK
    </Button>
  </Dialog.Actions>
</Dialog>`}
        />
      </div>

      {/* Form Dialog */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Form Dialog</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use dialogs for collecting user input.
        </p>
        <CodePreview
          language="tsx"
          code={`<Dialog
  focusKey="form-dialog"
  open={showForm}
  onClose={() => setShowForm(false)}
>
  <Dialog.Title>Edit Profile</Dialog.Title>
  <Dialog.Content>
    <form>
      <input 
        type="text" 
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  </Dialog.Content>
  <Dialog.Actions>
    <Button focusKey="cancel" onEnterPress={() => setShowForm(false)}>
      Cancel
    </Button>
    <Button focusKey="save" onEnterPress={handleSave}>
      Save
    </Button>
  </Dialog.Actions>
</Dialog>`}
        />
      </div>

      {/* Props Reference */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Default</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusKey</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Unique identifier</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">open</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Dialog visibility state</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onClose</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Close callback</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">variant</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">default</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Visual variant (default, alert, confirm)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">closeOnBackdropClick</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">true</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Close when clicking backdrop</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use dialogs sparingly for important information only</li>
          <li>Always provide a clear way to close the dialog</li>
          <li>Focus the primary action button when dialog opens</li>
          <li>Keep dialog content concise and scannable</li>
          <li>Use appropriate variants for different dialog types</li>
          <li>Trap focus within the dialog while open</li>
        </ul>
      </div>
    </div>
  );
}
