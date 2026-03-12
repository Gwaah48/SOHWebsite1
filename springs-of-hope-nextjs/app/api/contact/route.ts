import { NextResponse } from 'next/server';
import { escapeHtml, isSpamTrapFilled, requireFields } from '@/lib/forms';
import { sendSiteEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (isSpamTrapFilled(formData)) {
      return NextResponse.json({ ok: true, message: 'Thanks, your enquiry has been received.' });
    }

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      enquiryType: String(formData.get('enquiryType') || ''),
      message: String(formData.get('message') || ''),
    };

    const missing = requireFields(payload, ['name', 'email', 'message']);
    if (missing) {
      return NextResponse.json({ ok: false, message: missing }, { status: 400 });
    }

    await sendSiteEmail(
      `Website contact enquiry from ${payload.name}`,
      `
        <h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone || 'Not provided')}</p>
        <p><strong>Enquiry type:</strong> ${escapeHtml(payload.enquiryType || 'Not selected')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replaceAll('\n', '<br/>')}</p>
      `,
      payload.email,
    );

    return NextResponse.json({ ok: true, message: 'Thanks, your enquiry has been sent.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        message:
          'We could not send your enquiry right now. Please email Springs of Hope directly while the form is being checked.',
      },
      { status: 500 },
    );
  }
}
