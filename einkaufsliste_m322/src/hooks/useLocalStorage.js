import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // liest gespeicherten wert, sonst inti. value
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  // speichert automatisch, sobald sich value oder key verändert
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}