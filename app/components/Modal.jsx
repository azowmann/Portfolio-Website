import React from 'react';

export default function Modal([ isOpen, onClose, content ]) {
    if (isOpen) return null;
}

return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">{content?.title}</h2>
        {content?.images?.map((src, idx) => (
          <img key={idx} src={src} alt={`modal-img-${idx}`} className="mb-4 rounded" />
        ))}
        <p>{content?.text}</p>
      </div>
    </div>
);