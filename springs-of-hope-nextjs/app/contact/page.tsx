import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name} for NDIS support enquiries, referrals, and local office information across the Kimberley.`,
};

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch with Springs of Hope Care Services."
          body="Whether you are exploring support for yourself, a loved one, or a participant you work with, our team is here to help."
        />

        <div className="split">
          <div className="cta-panel">
            <h3>Contact details</h3>
            <div className="contact-list" style={{ marginTop: 20 }}>
              <div>{site.phone}</div>
              <div>{site.emails[0]}</div>
              <div>{site.emails[1]}</div>
              <div>Registration Number: {site.registrationNumber}</div>
            </div>

            <div className="address-box">
              <strong>Main office</strong>
              <p>{site.mainOffice}</p>
            </div>
            <div className="address-box">
              <strong>Postal address</strong>
              <p>{site.postalAddress}</p>
            </div>
          </div>

          <div className="form-card">
            <h3>Send us an enquiry</h3>
            <p>A simple contact form for participants, families, and referral partners.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
