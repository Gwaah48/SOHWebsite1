import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import OfficeCards from '@/components/OfficeCards';
import SectionHeader from '@/components/SectionHeader';
import ServiceGrid from '@/components/ServiceGrid';
import { site, trustCards, values } from '@/lib/site';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Empowering every ability. Supporting every journey.</div>
            <h1 style={{ marginTop: 22 }}>
              Compassionate NDIS support built around people, community, and independence.
            </h1>
            <p>
              Springs of Hope Care Services delivers person-centred in-home and community
              support across the Kimberleyand Perth Metro, helping participants and families move forward
              with confidence, dignity, and the right support around them.
            </p>
            <div className="hero-actions">
              <Link href="/referrals" className="button">
                Make a Referral
              </Link>
              <Link href="/services" className="button-ghost">
                Explore Services
              </Link>
            </div>
            <div className="stat-row">
              <div className="stat-card">Registered NDIS Provider</div>
              <div className="stat-card">Offices in Kununurra, Halls Creek, Fitzroy Crossing and Perth Metro</div>
              <div className="stat-card">Registration Number: {site.registrationNumber}</div>
            </div>
          </div>
          <div className="hero-card">
            <Image
              src="/logo.jpg"
              alt="Springs of Hope logo"
              width={900}
              height={900}
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeader
              eyebrow="Welcome"
              title="Care that feels personal, professional, and genuinely supportive."
              body="We walk beside people with disability and their families with thoughtful support that values dignity, confidence, and long-term wellbeing. Every support plan should feel individual, practical, and responsive to real life."
            />
            <div className="grid-2">
              {values.map((item) => (
                <div key={item.title} className="card soft">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/logo.jpg"
            alt="Springs of Hope brand identity"
            width={900}
            height={900}
            className="split-image"
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Flexible supports that strengthen everyday independence."
            body="Our service mix reflects what participants most often look for from trusted NDIS providers: practical daily support, community access, skill development, transport assistance, and safe, tailored living support."
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card warm">
            <SectionHeader
              eyebrow="Why choose us"
              title="Local presence, cultural connection, and support built on trust."
              body="Families often look for a provider that is easy to reach, clear in communication, respectful in practice, and strong on follow-through. Springs of Hope is designed around those expectations."
            />
            <div className="check-list">
              {trustCards.map((item) => (
                <div key={item.title} className="card" style={{ padding: 22 }}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cta-panel">
            <div className="eyebrow">Service areas</div>
            <h2>Proudly supporting Kimberley communities.</h2>
            <p>
              We operate across Western Australia with a strong focus on the Kimberley,
              offering locally informed supports that respect community context, family
              relationships, and culture.
            </p>
            <OfficeCards />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div className="eyebrow">Start here</div>
          <h2>Need support or want to refer someone?</h2>
          <p>
            We welcome enquiries from participants, families, support coordinators,
            hospitals, schools, and community partners.
          </p>
          <div className="cta-row">
            <Link href="/referrals" className="button">
              Go to Referrals <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
