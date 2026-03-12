import nodemailer from 'nodemailer';
import { site } from '@/lib/site';

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getMailer() {
  const host = getRequiredEnv('SMTP_HOST');
  const port = Number(getRequiredEnv('SMTP_PORT'));
  const user = getRequiredEnv('SMTP_USER');
  const pass = getRequiredEnv('SMTP_PASS');

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendSiteEmail(subject: string, html: string, replyTo?: string) {
  const transporter = getMailer();
  const from = process.env.MAIL_FROM || `Website Enquiries <no-reply@${new URL(site.url).hostname}>`;
  const to = process.env.MAIL_TO || site.emails.join(',');

  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    replyTo,
  });
}
