type Props = {
  eyebrow: string;
  title: string;
  body?: string;
};

export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
