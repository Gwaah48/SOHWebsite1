import {
  Car,
  CheckCircle2,
  ClipboardList,
  FileText,
  HeartHandshake,
  Home,
  MapPin,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const site = {
  name: 'Springs of Hope Care Services',
  shortName: 'Springs of Hope',
  description:
    'Registered NDIS provider delivering person-centred in-home, community, and referral-ready disability supports across the Kimberley.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://springsofhope.com.au',
  registrationNumber: '4050125886',
  phone: '1300 087 355',
  emails: ['info@springsofhope.com.au', 'admin@springsofhope.com.au'],
  mainOffice: '41 Thomas Street, Halls Creek WA 6770',
  postalAddress: 'PO Box 1672, Kununurra WA 6743',
  offices: [
    {
      name: 'Kununurra',
      blurb: 'Regional coordination and participant support hub for East Kimberley communities.',
    },
    {
      name: 'Halls Creek',
      blurb: 'Main office location supporting participants, families, and referral partners.',
    },
    {
      name: 'Fitzroy Crossing',
      blurb: 'Community-based access point supporting participants across the central Kimberley.',
    },
  ],
  keywords: [
    'NDIS provider Kimberley',
    'NDIS support Halls Creek',
    'Kununurra disability support',
    'Fitzroy Crossing NDIS',
    'Supported independent living WA',
    'NDIS referrals Kimberley',
  ],
  socialPreview: '/logo.jpg',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/referrals', label: 'Referrals' },
  { href: '/contact', label: 'Contact' },
];

export const values = [
  {
    title: 'Person-centred care',
    body: 'We listen first, tailor support thoughtfully, and build services around each participant’s goals, choices, and lived experience.',
  },
  {
    title: 'Choice and control',
    body: 'Participants should feel informed, respected, and in control of how supports are delivered and what success looks like for them.',
  },
  {
    title: 'Quality and safety',
    body: 'Our team is committed to ethical, professional support aligned with NDIS expectations, privacy, dignity, and safe practice.',
  },
  {
    title: 'Community and culture',
    body: 'We value strong local relationships and culturally respectful support across the Kimberley and surrounding communities.',
  },
];

export const services: Service[] = [
  {
    title: 'Daily Living Support',
    icon: Home,
    description:
      'Respectful assistance with personal routines and everyday tasks including personal care, meal preparation, household support, medication prompts, and home-based independence.',
  },
  {
    title: 'Community Participation',
    icon: Users,
    description:
      'Support to take part in social, cultural, recreational, and community activities that build confidence, belonging, and connection.',
  },
  {
    title: 'Development of Life Skills',
    icon: CheckCircle2,
    description:
      'Practical coaching in budgeting, communication, cooking, travel confidence, routines, and other day-to-day skills that strengthen independence.',
  },
  {
    title: 'Supported Independent Living (SIL)',
    icon: ShieldCheck,
    description:
      'Tailored ongoing support for people living independently or in shared homes, with help matched to goals, routines, and support needs.',
  },
  {
    title: 'Assist Travel & Transport',
    icon: Car,
    description:
      'Reliable transport assistance for appointments, shopping, community access, work, study, and day-to-day participation.',
  },
  {
    title: 'In-Home & Community Access',
    icon: HeartHandshake,
    description:
      'Flexible support delivered where it matters most: at home, in the community, and in ways that respect each participant’s preferences and culture.',
  },
];

export const referralSteps = [
  {
    title: 'Send an enquiry or referral',
    text: 'Participants, families, support coordinators, hospitals, schools, and health professionals can contact our team to start the intake process.',
  },
  {
    title: 'Talk through goals and support needs',
    text: 'We discuss current supports, priorities, funding, preferences, risks, and the kind of team or schedule that may be the best fit.',
  },
  {
    title: 'Match supports and confirm availability',
    text: 'Our team identifies the most suitable services, location coverage, and support workers based on needs, compatibility, and capacity.',
  },
  {
    title: 'Set up service agreement and commence',
    text: 'Once supports are agreed, we confirm the schedule, communication preferences, responsibilities, and begin services with a clear plan.',
  },
];

export const faqs = [
  {
    q: 'Who can make a referral?',
    a: 'Participants, family members, carers, guardians, support coordinators, plan managers, allied health professionals, hospitals, schools, and community organisations can all make a referral.',
  },
  {
    q: 'Do you work with self-managed and plan-managed participants?',
    a: 'Yes. We can support participants depending on their funding arrangement, service requirements, and our local capacity.',
  },
  {
    q: 'What information helps with a referral?',
    a: 'A participant summary, goals, support needs, preferred service location, funding details, risks or health considerations, and key contact information are all helpful.',
  },
  {
    q: 'Will there be a service agreement?',
    a: 'Yes. We use a clear service agreement so everyone understands the supports being delivered, schedules, responsibilities, and how changes are handled.',
  },
];

export const trustCards = [
  {
    title: 'Local offices and regional reach',
    body: 'With offices in Kununurra, Halls Creek, and Fitzroy Crossing, we are well positioned to support participants across the Kimberley region.',
  },
  {
    title: 'Professional and compassionate team',
    body: 'Our team includes Registered Nurses and experienced support workers with backgrounds across disability, community health, aged care, and hospital settings.',
  },
  {
    title: 'Clear intake and referral pathway',
    body: 'We make it easy for participants, families, and referrers to understand next steps, capacity, and service commencement.',
  },
];

export const providerDetails = [
  { icon: ShieldCheck, text: 'Registered NDIS Provider' },
  { icon: FileText, text: `Registration Number: ${site.registrationNumber}` },
  { icon: MapPin, text: 'Offices in Kununurra, Halls Creek, and Fitzroy Crossing' },
  { icon: ClipboardList, text: 'Referral-ready intake and service agreement process' },
];
