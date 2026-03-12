import { services } from '@/lib/site';

export default function ServiceGrid() {
  return (
    <div className="grid-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className="card">
            <div className="icon-badge">
              <Icon size={24} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}
