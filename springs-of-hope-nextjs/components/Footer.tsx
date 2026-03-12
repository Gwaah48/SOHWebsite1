import Link from 'next/link';
import Image from 'next/image';
import { navItems, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo-wrap">
            <Image src="/logo.jpg" alt="Springs of Hope logo" width={76} height={76} />
            <div className="logo-meta">
              <strong>{site.name}</strong>
              <small>Registered NDIS Provider · {site.registrationNumber}</small>
            </div>
          </div>
          <p>
            Person-centred disability support across the Kimberley, focused on dignity,
            safety, connection, and meaningful everyday outcomes.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <strong>Pages</strong>
            <div className="check-list" style={{ marginTop: 12 }}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <strong>Contact</strong>
            <div className="check-list" style={{ marginTop: 12 }}>
              <div>{site.emails[0]}</div>
              <div>{site.emails[1]}</div>
              <div>{site.phone}</div>
              <div>{site.mainOffice}</div>
              <div>{site.postalAddress}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
