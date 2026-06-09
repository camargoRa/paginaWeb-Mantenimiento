// src/componets/Toast.jsx
import { useEffect, useState } from 'react';

const estilos = {
  success: 'bg-green-50 border-green-400 text-green-800',
  error:   'bg-red-50 border-red-400 text-red-800',
  warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
  info:    'bg-blue-50 border-blue-400 text-blue-800',
};

const iconos = {
  success: '✓',
  error:   '✕',
  warning: '⚠',
  info:    'ℹ',
};

function ToastItem({ toast, onRemove }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  return (
    <div className={`
      flex items-start gap-3 px-4 py-3 rounded-lg border
      shadow-sm text-sm max-w-sm w-full transition-all duration-300
      ${estilos[toast.tipo]}
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
    `}>
      <span className="font-bold text-base leading-none mt-0.5">{iconos[toast.tipo]}</span>
      <span className="flex-1">{toast.mensaje}</span>
      <button onClick={() => onRemove(toast.id)} className="opacity-50 hover:opacity-100 transition-opacity">×</button>
    </div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
}