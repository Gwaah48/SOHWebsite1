import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ServiceGrid from '@/components/ServiceGrid';

export default function ServicesPage() {
  return (
    <main className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Support options designed around daily life, goals, and independence."
          body="Our services reflect the kinds of supports participants and referrers commonly look for from NDIS providers: reliable daily assistance, community inclusion, capacity building, transport help, and safe supported living."
        />
        <ServiceGrid />

        <div className="grid-3" style={{ marginTop: 28 }}>
          <div className="card">
            <h3>Who we support</h3>
            <p>
              Participants seeking in-home supports, community access, capacity building,
              transport assistance, or supported daily living arrangements.
            </p>
          </div>
          <div className="card">
            <h3>How support is shaped</h3>
            <p>
              We work with participants, families, and referrers to understand goals,
              preferences, routines, communication needs, and risks before services commence.
            </p>
          </div>
          <div className="card">
            <h3>Getting started</h3>
            <p>
              Enquire directly or submit a referral and our team will talk through needs,
              availability, and next steps toward a service agreement.
            </p>
          </div>
        </div>

        <div className="cta-row">
          <Link href="/referrals" className="button">Make a Referral</Link>
          <Link href="/contact" className="button-secondary">Contact Our Team</Link>
        </div>
      </div>
    </main>
  );
}
