'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, site } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-wrap" aria-label={site.name}>
          <Image src="/logo.jpg" alt="Springs of Hope logo" width={84} height={84} priority />
          <div className="logo-meta">
            <strong>{site.name}</strong>
            <small>Registered NDIS Provider · {site.registrationNumber}</small>
          </div>
        </Link>

        <nav className="nav">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={active ? 'active' : ''}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
