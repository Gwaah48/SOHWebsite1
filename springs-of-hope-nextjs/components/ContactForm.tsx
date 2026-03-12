'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import type { FormResponse } from '@/lib/forms';

export default function ContactForm() {
  const [status, setStatus] = useState<FormResponse | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const payload = (await response.json()) as FormResponse;
      setStatus(payload);
      if (payload.ok) form.reset();
    } finally {
      setPending(false);
    }
  }

  return (
    <form id="contact-form" className="form-grid" onSubmit={handleSubmit}>
      <input name="name" placeholder="Full name" required />
      <input name="email" type="email" placeholder="Email address" required />
      <input name="phone" placeholder="Phone number" />
      <select name="enquiryType" defaultValue="">
        <option value="" disabled>
          Enquiry type
        </option>
        <option>General enquiry</option>
        <option>Service enquiry</option>
        <option>Referral</option>
        <option>Partnership enquiry</option>
      </select>
      <textarea name="message" placeholder="How can we help?" required />
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden-field" aria-hidden="true" />
      <button className="button" disabled={pending}>
        {pending ? 'Sending…' : 'Submit Enquiry'}
      </button>
      {status ? (
        <div className={`status-box ${status.ok ? 'status-success' : 'status-error'}`}>{status.message}</div>
      ) : null}
      <div className="note-box">
        Forms deliver to {site.emails[0]} and {site.emails[1]} once SMTP settings are added in Vercel.
      </div>
    </form>
  );
}
