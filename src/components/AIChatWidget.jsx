import { useState } from 'react';

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const sampleResponse = "To sell your license, click on 'Sell My Licenses' and fill out the form.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-64 bg-white dark:bg-gray-800 shadow-xl rounded p-4">
          <div className="text-sm font-bold mb-2">Ask SoftBot 🤖</div>
          <p className="text-xs mb-2">Q: How do I sell my license?</p>
          <p className="text-xs italic">A: {sampleResponse}</p>
          <button onClick={() => setOpen(false)} className="text-xs text-blue-500 mt-2">Close</button>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-full">
          Chat
        </button>
      )}
    </div>
  );
}