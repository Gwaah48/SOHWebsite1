import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import { providerDetails, site, values } from '@/lib/site';

const teamCards = [
  {
    title: 'Registered Nurses',
    text: 'Clinical insight, coordination support, and a strong focus on safe, high-quality care.',
  },
  {
    title: 'Support Workers',
    text: 'Reliable day-to-day support that promotes dignity, confidence, and practical independence.',
  },
  {
    title: 'Referral Partners',
    text: 'A collaborative intake pathway for families, coordinators, allied health teams, schools, and hospitals.',
  },
];

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          eyebrow="About us"
          title="A trusted NDIS provider grounded in compassion, dignity, and real community connection."
          body="Springs of Hope Care Services is a registered NDIS service provider dedicated to delivering exceptional in-home and community access support to people with disability. Our team brings experience from hospitals, aged care, community, and disability settings, with a strong focus on respectful relationships and individualised care."
        />

        <div className="split">
          <div className="check-list">
            <div className="card">
              <h3>Our mission</h3>
              <p>
                To provide high-quality, person-centred supports that empower participants to
                live with greater independence, safety, inclusion, and confidence.
              </p>
            </div>
            <div className="card">
              <h3>Our vision</h3>
              <p>
                A future where every person we support feels valued, heard, and equipped to
                pursue the life they choose.
              </p>
            </div>
            <div className="card">
              <h3>What guides us</h3>
              <div className="grid-2">
                {values.map((item) => (
                  <div key={item.title} className="card soft" style={{ padding: 20 }}>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-panel">
              <h3>Our team approach</h3>
              <div className="grid-3">
                {teamCards.map((card) => (
                  <div key={card.title} className="card office-card" style={{ padding: 22 }}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="check-list">
            <Image
              src="/logo.jpg"
              alt="Springs of Hope logo"
              width={900}
              height={900}
              className="split-image"
            />
            <div className="info-panel soft">
              <h3>Provider details</h3>
              <div className="check-list" style={{ marginTop: 18 }}>
                {providerDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <Icon size={20} color="var(--primary)" />
                      <span>{detail.text}</span>
                    </div>
                  );
                })}
                <div>Main office: {site.mainOffice}</div>
                <div>Postal address: {site.postalAddress}</div>
                <div>{site.emails.join(' · ')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
