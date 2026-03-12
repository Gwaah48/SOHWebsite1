'use client';

import { useState } from 'react';
import type { FormResponse } from '@/lib/forms';

export default function ReferralForm() {
  const [status, setStatus] = useState<FormResponse | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/referral', {
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
    <form id="referral-form" className="form-grid" onSubmit={handleSubmit}>
      <input name="referrerName" placeholder="Referrer name" required />
      <input name="organisation" placeholder="Organisation (if applicable)" />
      <input name="phone" placeholder="Phone" />
      <input name="email" type="email" placeholder="Email" required />
      <input name="participantLocation" placeholder="Participant suburb / community" />
      <textarea
        name="details"
        placeholder="Tell us about the participant, the required supports, and any preferred commencement timeframe"
        required
      />
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden-field" aria-hidden="true" />
      <button className="button" disabled={pending}>
        {pending ? 'Sending…' : 'Submit Referral'}
      </button>
      {status ? (
        <div className={`status-box ${status.ok ? 'status-success' : 'status-error'}`}>{status.message}</div>
      ) : null}
    </form>
  );
}
