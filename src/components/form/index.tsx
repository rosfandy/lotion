// components/DocumentForm.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormProps {
  onClose: () => void;
  onSubmit: (id: string, title: string) => void;
}

const DocumentForm: React.FC<FormProps> = ({ onClose, onSubmit }) => {
  const [documentId, setDocumentId] = useState<string>("");
  const [documentTitle, setDocumentTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (documentId && documentTitle) {
      onSubmit(documentId, documentTitle);
      window.location.reload();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white p-6 rounded-md md:w-1/3"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl mb-4">Create Document</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="documentId" className="block text-sm mb-1">
              Document ID
            </label>
            <input
              type="text"
              id="documentId"
              value={documentId}
              onChange={(e) => setDocumentId(e.target.value)}
              className="border w-full px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="documentTitle" className="block text-sm mb-1">
              Document Title
            </label>
            <input
              type="text"
              id="documentTitle"
              value={documentTitle}
              onChange={(e) => setDocumentTitle(e.target.value)}
              className="border w-full px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="flex md:flex-row flex-col gap-y-4 justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default DocumentForm;
