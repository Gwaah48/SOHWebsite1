import { site } from '@/lib/site';

export default function OfficeCards() {
  return (
    <div className="grid-3">
      {site.offices.map((office) => (
        <div key={office.name} className="card office-card">
          <h3>{office.name}</h3>
          <small>Office location</small>
          <p>{office.blurb}</p>
        </div>
      ))}
    </div>
  );
}
