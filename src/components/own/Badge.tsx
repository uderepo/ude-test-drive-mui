/** Свой компонент: только экспорт по умолчанию. */
export default function Badge({ label }: { label: string }) {
  return <span style={{ padding: '4px 10px', borderRadius: '999px', backgroundColor: '#fde68a' }}>{label}</span>;
}
