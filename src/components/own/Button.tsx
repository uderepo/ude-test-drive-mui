/** Своя кнопка проекта (не MUI): имя совпадает с Button библиотеки нарочно. */
export function Button({ text }: { text: string }) {
  return <button style={{ padding: '8px 14px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '6px' }}>{text}</button>;
}
