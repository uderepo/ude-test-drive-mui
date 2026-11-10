type CardProps = { title: string };

/** Свой компонент: именной экспорт и тот же — по умолчанию. */
export function Card({ title }: CardProps) {
  return (
    <div style={{ padding: '16px', border: '1px solid #94a3b8', borderRadius: '8px', minWidth: '240px' }}>
      <strong>{title}</strong>
    </div>
  );
}

export default Card;
