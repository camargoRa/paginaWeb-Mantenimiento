// useToast.js
import { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (tipo, msg, duracion = 4000) => {
    const id = Date.now();
    setToasts(t => [...t, { id, tipo, mensaje: msg }]);
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id));
    }, duracion);
  };

  const removeToast = (id) => {
    setToasts(t => t.filter(x => x.id !== id));
  };

  return { toasts, addToast, removeToast };
}