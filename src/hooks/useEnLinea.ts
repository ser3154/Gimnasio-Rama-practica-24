import { useEffect, useState } from 'react';

export function useEnLinea(): boolean {
  const [enLinea, setEnLinea] = useState(navigator.onLine);

  useEffect(() => {
    const prender = () => setEnLinea(true);
    const apagar = () => setEnLinea(false);
    window.addEventListener('online', prender);
    window.addEventListener('offline', apagar);
    return () => {
      window.removeEventListener('online', prender);
      window.removeEventListener('offline', apagar);
    };
  }, []);

  return enLinea;
}