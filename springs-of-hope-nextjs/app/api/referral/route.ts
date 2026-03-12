import { NextResponse } from 'next/server';
import { escapeHtml, isSpamTrapFilled, requireFields } from '@/lib/forms';
import { sendSiteEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (isSpamTrapFilled(formData)) {
      return NextResponse.json({ ok: true, message: 'Thanks, your referral has been received.' });
    }

    const payload = {
      referrerName: String(formData.get('referrerName') || ''),
      organisation: String(formData.get('organisation') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      participantLocation: String(formData.get('participantLocation') || ''),
      details: String(formData.get('details') || ''),
    };

    const missing = requireFields(payload, ['referrerName', 'email', 'details']);
    if (missing) {
      return NextResponse.json({ ok: false, message: missing }, { status: 400 });
    }

    await sendSiteEmail(
      `Website referral from ${payload.referrerName}`,
      `
        <h2>New referral enquiry</h2>
        <p><strong>Referrer:</strong> ${escapeHtml(payload.referrerName)}</p>
        <p><strong>Organisation:</strong> ${escapeHtml(payload.organisation || 'Not provided')}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone || 'Not provided')}</p>
        <p><strong>Participant location:</strong> ${escapeHtml(payload.participantLocation || 'Not provided')}</p>
        <p><strong>Referral details:</strong></p>
        <p>${escapeHtml(payload.details).replaceAll('\n', '<br/>')}</p>
      `,
      payload.email,
    );

    return NextResponse.json({ ok: true, message: 'Thanks, your referral has been sent.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        message:
          'We could not send your referral right now. Please email Springs of Hope directly while the form is being checked.',
      },
      { status: 500 },
    );
  }
}
