import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import ReferralForm from '@/components/ReferralForm';
import SectionHeader from '@/components/SectionHeader';
import { faqs, referralSteps, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Referrals',
  description: `Submit an NDIS referral to ${site.name} and download the Springs of Hope referral form.`,
};

export default function ReferralsPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Referrals"
          title="A clearer, more confident referral pathway for participants, families, and professionals."
          body="This page is designed to help referrers quickly understand who can refer, what information is helpful, what happens next, and how supports begin."
        />

        <div className="split">
          <div className="info-panel">
            <h3>How referrals work</h3>
            <div className="step-list" style={{ marginTop: 24 }}>
              {referralSteps.map((step, index) => (
                <div key={step.title} className="step-item">
                  <div className="step-number">{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="check-list">
            <div className="cta-panel">
              <h3>Who can refer?</h3>
              <p>
                Participants, families, carers, support coordinators, hospitals, schools,
                allied health professionals, and community organisations are all welcome to refer.
              </p>
            </div>
            <div className="info-panel soft">
              <h3>Helpful referral information</h3>
              <div className="check-list" style={{ marginTop: 18 }}>
                {[
                  'Participant name and contact details',
                  'NDIS goals and funded supports',
                  'Current support needs and preferred schedule',
                  'Location and service area requirements',
                  'Health, mobility, communication, or risk information',
                  'Key contacts such as family, guardian, coordinator, or plan manager',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="split" style={{ marginTop: 28 }}>
          <div className="form-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <h3>Referral enquiry form</h3>
                <p>This form is ready to send via the site API once SMTP settings are added.</p>
              </div>
              <Link href="/referral-form.pdf" className="button-secondary" target="_blank">
                Download referral PDF
              </Link>
            </div>
            <ReferralForm />
          </div>

          <div className="check-list">
            <div className="info-panel">
              <h3>Service agreements</h3>
              <p>
                We use a written service agreement so participants and providers are clear on
                what supports are being delivered, how they will be delivered, and how changes are managed.
              </p>
              <div className="note-box">
                Clear agreements help set expectations around schedules, communication,
                cancellations, responsibilities, and service reviews.
              </div>
            </div>
            <div className="info-panel">
              <h3>Frequently asked questions</h3>
              <div className="faq-list" style={{ marginTop: 18 }}>
                {faqs.map((faq) => (
                  <div key={faq.q} className="card soft" style={{ padding: 20 }}>
                    <strong>{faq.q}</strong>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
