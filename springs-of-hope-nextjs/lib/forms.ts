export type FormResponse = {
  ok: boolean;
  message: string;
};

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function requireFields(payload: Record<string, string>, fields: string[]) {
  for (const field of fields) {
    if (!payload[field]?.trim()) {
      return `Please complete the ${field} field.`;
    }
  }
  return null;
}

export function isSpamTrapFilled(formData: FormData) {
  return String(formData.get('website') || '').trim().length > 0;
}
