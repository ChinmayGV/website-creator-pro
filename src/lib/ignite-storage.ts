const memory = new Map<string, string>();
const prefix = "esyaignite.v1.";
export function loadLocal<T>(key: string, fallback: T): T {
  try { const value = window.localStorage.getItem(prefix + key); return value ? JSON.parse(value) as T : fallback; }
  catch { const value = memory.get(key); return value ? JSON.parse(value) as T : fallback; }
}
export function saveLocal<T>(key: string, value: T) {
  try { window.localStorage.setItem(prefix + key, JSON.stringify(value)); }
  catch { memory.set(key, JSON.stringify(value)); }
}
export function resetLocal() {
  try { Object.keys(window.localStorage).filter(k => k.startsWith(prefix)).forEach(k => window.localStorage.removeItem(k)); }
  catch { memory.clear(); }
}
