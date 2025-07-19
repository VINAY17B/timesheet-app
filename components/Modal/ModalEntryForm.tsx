import { Fragment } from "react";

interface ModalEntryFormProps {
  onClose: () => void;
}

export default function ModalEntryForm({ onClose }: ModalEntryFormProps) {
  return (
    <Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">Add new task</h2>
          <input
            type="text"
            placeholder="Task name"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:underline"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
