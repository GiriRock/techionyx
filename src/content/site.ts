import {
  AppWindow,
  Binary,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CloudCog,
  Cpu,
  DatabaseZap,
  Fingerprint,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Layers2,
  Lock,
  Radar,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type SiteNavItem = {
  label: string;
  to: string;
};

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights?: string[];
};

export type ProductDetail = IconCard & {
  slug: string;
  eyebrow: string;
  summary: string;
  valuePoints: string[];
  capabilities: string[];
  outcomes: string[];
};

export type ServiceDetail = IconCard & {
  slug: string;
  eyebrow: string;
  summary: string;
  engagementFocus: string[];
  deliverables: string[];
  outcomes: string[];
};

export type SolutionDetail = IconCard & {
  slug: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  client: string;
  sector: string;
  brand: {
    label: string;
    mark: string;
    accentFrom: string;
    accentTo: string;
    note?: string;
  };
  summary: string;
  challenge: string;
  solution: string[];
  impact: string[];
  metrics: { label: string; value: string }[];
};

export const primaryNav: SiteNavItem[] = [
  { label: 'Company', to: '/company' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

export const companyPillars: IconCard[] = [
  {
    icon: Shield,
    title: 'Enterprise-grade execution',
    description:
      'We deliver digital systems with the structure, quality controls, and release discipline expected in complex business environments.',
  },
  {
    icon: Sparkles,
    title: 'Product thinking with delivery rigor',
    description:
      'Every engagement balances UX clarity, engineering quality, and commercially aware decision-making from discovery through launch.',
  },
  {
    icon: Workflow,
    title: 'Products, services, and solutions in one model',
    description:
      'We combine reusable platforms, bespoke engineering services, and enterprise solution delivery so clients can work with one focused technology partner.',
  },
  {
    icon: Globe2,
    title: 'Long-term transformation partnership',
    description:
      'We support roadmap evolution, modernization, and operational scale well beyond the first release or implementation milestone.',
  },
];

export const productDetails: ProductDetail[] = [
  {
    slug: 'operational-accelerators',
    eyebrow: 'Operational Accelerators',
    icon: Blocks,
    title: 'Enterprise workflow accelerators',
    description:
      'Reusable platform foundations that reduce time-to-value for workflow systems, approvals, dashboards, and reporting-heavy operations.',
    summary:
      'A reusable foundation for workflow, administration, and reporting experiences that helps enterprise teams stand up digital operations faster without sacrificing governance or flexibility.',
    highlights: ['Workflow engines', 'Admin foundations', 'Reporting modules'],
    valuePoints: [
      'Reduces repetitive platform setup for multi-team delivery programs.',
      'Creates stronger consistency across internal tools and approval journeys.',
      'Supports enterprise governance and extensibility from the first release.',
    ],
    capabilities: ['Role-based admin patterns', 'Workflow orchestration', 'Reporting and audit trails', 'Configurable dashboard foundations'],
    outcomes: ['Faster launch of internal systems', 'Improved process visibility', 'Lower reinvention across product teams'],
  },
  {
    slug: 'integration-platforms',
    eyebrow: 'Integration Platforms',
    icon: Radar,
    title: 'Integration and orchestration foundations',
    description:
      'Structured integration foundations that connect ERP, CRM, finance, support, and internal systems with cleaner governance.',
    summary:
      'A dependable integration layer for organizations that need business systems to work together cleanly across operations, finance, service, and customer workflows.',
    highlights: ['API orchestration', 'Data exchange', 'System interoperability'],
    valuePoints: [
      'Removes brittle point-to-point integration sprawl.',
      'Improves data consistency and operational reliability across platforms.',
      'Enables better reporting, automation, and future solution expansion.',
    ],
    capabilities: ['Connector architecture', 'Event and API workflows', 'Data mapping and validation', 'Operational monitoring'],
    outcomes: ['Fewer manual handoffs', 'Cleaner system interoperability', 'Stronger digital transformation foundations'],
  },
  {
    slug: 'industry-focused-product-experiences',
    eyebrow: 'Industry Product Experiences',
    icon: AppWindow,
    title: 'Industry portals and experience layers',
    description:
      'Digital portals and product layers designed around customer journeys, operations visibility, and enterprise usability.',
    summary:
      'Purpose-built experiences for client, partner, and operations users who need clarity, performance, and enterprise-grade interaction design.',
    highlights: ['Client portals', 'Operations consoles', 'Workflow dashboards'],
    valuePoints: [
      'Improves user trust with clearer, more deliberate interface architecture.',
      'Balances enterprise complexity with accessible, high-confidence UX.',
      'Supports product differentiation without drifting into overdesigned patterns.',
    ],
    capabilities: ['Portal architecture', 'Journey-focused UX systems', 'Responsive product interfaces', 'Role-aware workflow surfaces'],
    outcomes: ['Higher adoption for business users', 'Clearer process completion', 'Stronger digital brand maturity'],
  },
];

export const productCards: IconCard[] = productDetails.map((item) => ({
  icon: item.icon,
  title: item.title,
  description: item.description,
  highlights: item.highlights,
}));

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'custom-software-engineering',
    eyebrow: 'Engineering Service',
    icon: Cpu,
    title: 'Product and custom software engineering',
    description:
      'Architect and build web platforms, digital products, and business-critical applications with senior engineering leadership.',
    summary:
      'A structured engineering engagement for organizations building new digital products, internal systems, or modern enterprise applications that need strong technical leadership and dependable execution.',
    highlights: ['Full-stack delivery', 'Architecture guidance', 'Quality engineering'],
    engagementFocus: ['Solution architecture and delivery planning', 'Cross-functional engineering execution', 'Quality, release, and platform governance'],
    deliverables: ['Application architecture', 'Web platform implementation', 'Delivery reporting and technical leadership'],
    outcomes: ['Faster movement from concept to release', 'Stronger engineering consistency', 'Higher confidence in long-term maintainability'],
  },
  {
    slug: 'web-and-mobile-application-development',
    eyebrow: 'Engineering Service',
    icon: Smartphone,
    title: 'Web and mobile experience delivery',
    description:
      'Create polished, secure user experiences across responsive web and cross-platform mobile surfaces.',
    summary:
      'A product-minded delivery service focused on customer-facing and internal interfaces that need responsive performance, strong usability, and clean engineering architecture.',
    highlights: ['Responsive frontends', 'Cross-platform apps', 'Design-led implementation'],
    engagementFocus: ['Responsive product experiences', 'Cross-platform mobile flows', 'UX system implementation'],
    deliverables: ['Design-to-code execution', 'Cross-platform application builds', 'Component and interface systems'],
    outcomes: ['Improved usability and adoption', 'Consistent digital experience quality', 'Faster iteration across channels'],
  },
  {
    slug: 'cloud-and-backend-engineering',
    eyebrow: 'Engineering Service',
    icon: DatabaseZap,
    title: 'Cloud and backend engineering',
    description:
      'Design APIs, services, data platforms, and delivery pipelines engineered for resilience, observability, and scale.',
    summary:
      'A backend and cloud capability for teams modernizing services, standing up API ecosystems, or building the operational backbone behind enterprise applications.',
    highlights: ['API platforms', 'Cloud infrastructure', 'Service modernization'],
    engagementFocus: ['Backend architecture and service design', 'Cloud deployment and platform reliability', 'Observability and operational resilience'],
    deliverables: ['API and service layers', 'Cloud delivery workflows', 'Data and integration backbones'],
    outcomes: ['Higher reliability under growth', 'Cleaner backend scaling paths', 'Improved release confidence'],
  },
  {
    slug: 'enterprise-integration-services',
    eyebrow: 'Engineering Service',
    icon: Binary,
    title: 'Enterprise integration services',
    description:
      'Unify fragmented business systems with stable interfaces, automation layers, and event-driven workflows.',
    summary:
      'A focused integration practice for organizations connecting ERP, CRM, operations, finance, support, and custom systems in a cleaner, more manageable way.',
    highlights: ['ERP / CRM sync', 'Automation pipelines', 'Business process integration'],
    engagementFocus: ['Business system interoperability', 'Workflow automation', 'Data exchange and interface governance'],
    deliverables: ['Integration architecture', 'Automation pipelines', 'Data and process orchestration'],
    outcomes: ['Reduced manual effort', 'Stronger cross-system consistency', 'Better reporting and operational continuity'],
  },
  {
    slug: 'ui-ux-engineering-systems',
    eyebrow: 'Engineering Service',
    icon: Layers2,
    title: 'UI / UX engineering systems',
    description:
      'Shape intuitive user journeys and component systems that improve adoption, clarity, and interface consistency.',
    summary:
      'A design-engineering service that connects product thinking, information hierarchy, and reusable interface systems for enterprise-grade usability.',
    highlights: ['Design systems', 'Interaction design', 'Accessibility standards'],
    engagementFocus: ['Interface architecture', 'Design system implementation', 'Accessibility and clarity improvements'],
    deliverables: ['Reusable UI foundations', 'Workflow-focused interaction patterns', 'Design-quality implementation guidance'],
    outcomes: ['More credible user experiences', 'Improved adoption across business users', 'Greater consistency across digital surfaces'],
  },
  {
    slug: 'modernization-and-support',
    eyebrow: 'Engineering Service',
    icon: CloudCog,
    title: 'Consulting, modernization, and support',
    description:
      'Guide transformation roadmaps, modernize legacy systems, and provide ongoing engineering support for evolving digital estates.',
    summary:
      'A consultative modernization and support model for organizations improving aging systems while keeping business operations steady, delivery risk controlled, and transformation priorities visible.',
    highlights: ['Transformation advisory', 'Re-platforming', 'Managed enhancement roadmaps'],
    engagementFocus: ['Transformation and modernization planning', 'Platform hardening and optimization', 'Managed enhancement and support governance'],
    deliverables: ['Roadmaps and architecture recommendations', 'Performance and reliability improvements', 'Structured post-launch support and modernization backlogs'],
    outcomes: ['Lower platform risk', 'Extended system lifespan', 'Clearer path to future transformation'],
  },
];

export const serviceCards: IconCard[] = serviceDetails.map((item) => ({
  icon: item.icon,
  title: item.title,
  description: item.description,
  highlights: item.highlights,
}));

export const solutionDetails: SolutionDetail[] = [
  {
    slug: 'enterprise-workflow-modernization',
    eyebrow: 'Workflow Modernization',
    icon: Landmark,
    title: 'Enterprise workflow modernization',
    description:
      'Reimagine slow, manual, or fragmented operational processes as connected, measurable digital systems.',
    summary:
      'A modernization approach for internal operations where process visibility, approvals, governance, and service quality all need to improve together.',
    highlights: ['Approvals and governance', 'Service operations', 'Internal tooling'],
    challenge:
      'Many organizations operate across disconnected spreadsheets, email-heavy approvals, and partial systems that create risk, delays, and poor visibility.',
    approach: [
      'Map the real workflow, exceptions, and governance requirements before implementation.',
      'Design streamlined approval, task, and reporting experiences around operational roles.',
      'Integrate with the systems already used by finance, operations, or leadership teams.',
    ],
    outcomes: ['Shorter cycle times', 'Higher reporting confidence', 'Reduced process fragmentation'],
  },
  {
    slug: 'customer-and-partner-platforms',
    eyebrow: 'Customer and Partner Platforms',
    icon: Building2,
    title: 'Customer and partner platforms',
    description:
      'Deliver secure self-service experiences, portals, and ecosystems that improve service quality and visibility.',
    summary:
      'Digital platforms for customers, partners, and account teams who need reliable access to information, requests, and service interactions.',
    highlights: ['Partner portals', 'Customer platforms', 'Account management flows'],
    challenge:
      'External stakeholders often experience fragmented service journeys across email, disconnected portals, and low-visibility support workflows.',
    approach: [
      'Define the most important relationship journeys and interaction touchpoints.',
      'Shape role-aware portal experiences with stronger security and usability standards.',
      'Connect service, account, and operational systems so experience and execution remain aligned.',
    ],
    outcomes: ['Improved stakeholder experience', 'Better self-service adoption', 'Stronger service transparency'],
  },
  {
    slug: 'digital-transformation-initiatives',
    eyebrow: 'Transformation Initiatives',
    icon: Handshake,
    title: 'Digital transformation initiatives',
    description:
      'Support business transformation with product strategy, architecture planning, and implementation across multiple systems.',
    summary:
      'A structured delivery approach for organizations moving through broader digital change across products, internal systems, integrations, and operating models.',
    highlights: ['Transformation programs', 'Roadmap definition', 'Execution governance'],
    challenge:
      'Transformation efforts often stall when strategy, architecture, and delivery governance are not connected tightly enough to day-to-day execution.',
    approach: [
      'Align transformation goals with the most valuable technical and workflow milestones.',
      'Break large initiatives into measurable product, platform, and integration workstreams.',
      'Maintain leadership visibility with steady reporting, risk framing, and release planning.',
    ],
    outcomes: ['Clearer transformation momentum', 'Lower delivery risk', 'Stronger alignment between technology and operations'],
  },
];

export const solutionCards: IconCard[] = solutionDetails.map((item) => ({
  icon: item.icon,
  title: item.title,
  description: item.description,
  highlights: item.highlights,
}));

export const caseStudies: CaseStudy[] = [
  {
    slug: 'regional-logistics-modernization',
    eyebrow: 'Case Study',
    title: 'Modernizing logistics operations with a connected workflow platform',
    client: 'Regional logistics company',
    sector: 'Logistics and operations',
    brand: {
      label: 'Regional Logistics Company',
      mark: 'RL',
      accentFrom: '#0f172a',
      accentTo: '#0ea5e9',
      note: 'Client-approved branding can replace this placeholder asset.',
    },
    summary:
      'Techionyx helped a logistics organization replace fragmented operational workflows with a connected platform spanning requests, approvals, dispatch coordination, and reporting.',
    challenge:
      'The client relied on spreadsheets, disconnected systems, and manual status updates, making it difficult to coordinate work, manage exceptions, and give leadership reliable visibility.',
    solution: [
      'Designed a workflow-centered operations platform with role-specific dashboards for dispatch, supervisors, and leadership.',
      'Integrated data flows between operational systems and reporting layers to reduce duplicate handling.',
      'Created structured release milestones so the team could modernize incrementally without disrupting day-to-day operations.',
    ],
    impact: ['Improved process traceability across operational teams', 'Shorter handoff times between request and execution', 'Higher confidence in leadership reporting and exception tracking'],
    metrics: [
      { label: 'Approval cycle reduction', value: '37%' },
      { label: 'Manual status updates reduced', value: '52%' },
      { label: 'Leadership reporting cadence', value: 'Weekly' },
    ],
  },
  {
    slug: 'partner-portal-transformation',
    eyebrow: 'Case Study',
    title: 'Rebuilding a partner service portal for enterprise-scale collaboration',
    client: 'B2B platform provider',
    sector: 'Enterprise technology',
    brand: {
      label: 'B2B Platform Provider',
      mark: 'BP',
      accentFrom: '#082f49',
      accentTo: '#14b8a6',
      note: 'Client-approved branding can replace this placeholder asset.',
    },
    summary:
      'A partner portal transformation that improved self-service, document visibility, and account collaboration while aligning the experience with core operational systems.',
    challenge:
      'Partners lacked a clear digital surface for service requests, account information, and operational updates, leading to delays and heavy dependency on manual support channels.',
    solution: [
      'Redesigned the portal experience around the most frequent partner journeys and operational actions.',
      'Implemented stronger role-based access and cleaner information architecture for enterprise usability.',
      'Connected the portal to internal workflow and account systems to improve continuity across teams.',
    ],
    impact: ['Higher partner self-service usage', 'More consistent service operations across teams', 'Improved experience quality for strategic external stakeholders'],
    metrics: [
      { label: 'Partner self-service adoption', value: '+44%' },
      { label: 'Support dependency reduced', value: '31%' },
      { label: 'Rollout model', value: 'Phased' },
    ],
  },
];

export const industries: IconCard[] = [
  {
    icon: Landmark,
    title: 'Financial and regulated environments',
    description: 'Systems that require trust, process discipline, auditability, and secure access management.',
  },
  {
    icon: ShoppingBag,
    title: 'Commerce and customer experience',
    description: 'Digital journeys, ordering systems, and service layers that support scalable growth.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare and service operations',
    description: 'Operational platforms where usability, reliability, and integration quality matter every day.',
  },
  {
    icon: GraduationCap,
    title: 'Education and knowledge ecosystems',
    description: 'Portals, workflow systems, and engagement platforms for structured multi-stakeholder experiences.',
  },
];

export const whyChooseUsCards: IconCard[] = [
  {
    icon: Fingerprint,
    title: 'Product + services operating model',
    description:
      'We approach delivery with the quality bar of a product company and the flexibility of a trusted engineering and consulting partner.',
  },
  {
    icon: Lock,
    title: 'Security and enterprise readiness',
    description:
      'Architecture, release decisions, and delivery workflows are shaped around operational trust, access control, and governance from the start.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Commercially grounded decisions',
    description:
      'We help teams make smart tradeoffs across scope, speed, technical quality, and long-term leverage without losing sight of business priorities.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Align on goals, users, current systems, and the business outcomes that matter most.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Shape the experience, technical architecture, and release strategy with clarity and confidence.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Deliver in focused increments with transparent execution, QA discipline, and stakeholder visibility.',
  },
  {
    step: '04',
    title: 'Integrate',
    description: 'Connect business systems, workflows, and data flows so the product works in the real operating environment.',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Support release readiness, rollout planning, and adoption with strong operational confidence.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Continue improving, scaling, and modernizing the platform as your business evolves.',
  },
];

export const expertiseGroups = [
  {
    title: 'Frontend and experience engineering',
    items: ['React and TypeScript', 'Design systems', 'Accessibility-led UI architecture'],
  },
  {
    title: 'Backend and cloud systems',
    items: ['API ecosystems', 'Cloud-native services', 'Observability and release workflows'],
  },
  {
    title: 'Enterprise integration',
    items: ['System interoperability', 'Automation workflows', 'Data exchange patterns'],
  },
  {
    title: 'Modernization strategy',
    items: ['Legacy platform evolution', 'Re-platforming planning', 'Performance and maintainability'],
  },
];

export const trustStats = [
  { label: 'Client satisfaction', value: 98, suffix: '%' },
  { label: 'Average kickoff lead time', value: 10, suffix: ' days' },
  { label: 'Senior delivery practitioners', value: 12, suffix: '+' },
  { label: 'Structured reporting cadence', value: 1, suffix: ' wk' },
];

export const footerGroups = {
  company: primaryNav.filter((item) => item.label !== 'Home'),
  capabilities: [
    { label: 'Products and platforms', to: '/products' },
    { label: 'Engineering services', to: '/services' },
    { label: 'Enterprise solutions', to: '/solutions' },
    { label: 'Consulting and modernization', to: '/services/modernization-and-support' },
    { label: 'Case studies', to: '/case-studies' },
  ],
  connect: [
    { label: 'hello@techionyx.com', to: 'mailto:hello@techionyx.com' },
    { label: 'Book a strategy call', to: '/contact' },
  ],
};

export function getProductBySlug(slug?: string) {
  return productDetails.find((item) => item.slug === slug);
}

export function getSolutionBySlug(slug?: string) {
  return solutionDetails.find((item) => item.slug === slug);
}

export function getServiceBySlug(slug?: string) {
  return serviceDetails.find((item) => item.slug === slug);
}

export function getCaseStudyBySlug(slug?: string) {
  return caseStudies.find((item) => item.slug === slug);
}
