import {
  Activity,
  Binary,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Cloud,
  Cog,
  Cpu,
  Factory,
  FileStack,
  FlaskConical,
  Gauge,
  Globe,
  Handshake,
  Landmark,
  Layers2,
  LineChart,
  Lock,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export type HomeCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
};

export const heroHighlights = [
  'Products and platforms',
  'Software engineering services',
  'Enterprise solution delivery',
  'Consulting and digital transformation',
];

export const heroStats = [
  { label: 'Programs delivered', value: '120+' },
  { label: 'Enterprise sectors served', value: '11' },
  { label: 'Client retention', value: '94%' },
];

export const overviewCards: HomeCard[] = [
  {
    icon: Building2,
    title: 'Multi-capability technology partner',
    description:
      'We combine platform products, engineering services, and consulting capabilities so enterprise teams can execute with one accountable partner.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise delivery discipline',
    description:
      'Architecture governance, release controls, and measurable delivery routines are built into every engagement from day one.',
  },
  {
    icon: Handshake,
    title: 'Built for long-term transformation',
    description:
      'Beyond implementation, we support modernization roadmaps, capability uplift, and operating model evolution across business units.',
  },
];

export const productCards: HomeCard[] = [
  {
    icon: Blocks,
    title: 'Operational Platform Accelerators',
    description: 'Reusable product foundations for workflow-heavy internal systems, approvals, and enterprise reporting operations.',
    bullets: ['Workflow orchestration', 'Audit-ready reporting', 'Role-based controls'],
  },
  {
    icon: Network,
    title: 'Integration and Orchestration Fabric',
    description: 'Connect ERP, CRM, finance, and service operations with governed API and event-driven interoperability.',
    bullets: ['API gateway patterns', 'Data contracts', 'Event processing'],
  },
  {
    icon: Orbit,
    title: 'Industry Product Experience Layers',
    description: 'Enterprise portals and product surfaces designed for adoption, trust, and measurable operational clarity.',
    bullets: ['Customer portals', 'Operations consoles', 'Executive dashboards'],
  },
];

export const serviceCards: HomeCard[] = [
  {
    icon: Cpu,
    title: 'Custom Software Engineering',
    description: 'Architecture-led engineering for core business systems and digital products.',
  },
  {
    icon: Globe,
    title: 'Web and Mobile Experience Delivery',
    description: 'Responsive, high-performance interfaces across customer and internal journeys.',
  },
  {
    icon: Cloud,
    title: 'Cloud and Backend Engineering',
    description: 'Scalable services, API ecosystems, and resilient platform foundations.',
  },
  {
    icon: Binary,
    title: 'Enterprise Integration Services',
    description: 'System interoperability and automation for complex operational environments.',
  },
  {
    icon: Layers2,
    title: 'UI/UX Engineering Systems',
    description: 'Design systems and interaction architecture for enterprise-grade usability.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Consulting and Modernization',
    description: 'Digital transformation guidance, re-platforming plans, and managed evolution.',
  },
];

export const solutionsCards: HomeCard[] = [
  {
    icon: Landmark,
    title: 'Financial and Regulated Operations',
    description: 'Modernize critical workflows with security, traceability, and compliance at the core.',
  },
  {
    icon: Factory,
    title: 'Industrial and Supply Chain Execution',
    description: 'Connect planning, operations, and service functions through real-time digital coordination.',
  },
  {
    icon: Activity,
    title: 'Healthcare and Service Organizations',
    description: 'Improve care and service operations through integrated systems and process visibility.',
  },
  {
    icon: FileStack,
    title: 'Public Sector and Education Programs',
    description: 'Deliver transparent, user-centered digital systems for multi-stakeholder environments.',
  },
];

export const whyChooseUs = [
  {
    icon: Lock,
    title: 'Security and governance by design',
    description: 'Delivery models are structured around access governance, auditability, and operational trust.',
  },
  {
    icon: Gauge,
    title: 'Faster execution without quality trade-offs',
    description: 'We accelerate release cycles through reusable foundations and mature engineering discipline.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Outcomes linked to business KPIs',
    description: 'Technical decisions are aligned to measurable performance, efficiency, and adoption outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Product thinking across every engagement',
    description: 'Even services engagements benefit from product-grade UX, architecture, and roadmap clarity.',
  },
];

export const processSteps = [
  { phase: '01', title: 'Diagnose', description: 'Assess operating context, systems, constraints, and strategic goals.' },
  { phase: '02', title: 'Architect', description: 'Define solution blueprint, governance model, and delivery roadmap.' },
  { phase: '03', title: 'Engineer', description: 'Build in iterative increments with quality gates and transparency.' },
  { phase: '04', title: 'Integrate', description: 'Connect workflows, data layers, and enterprise systems end-to-end.' },
  { phase: '05', title: 'Enable', description: 'Support rollout, adoption, and capability transfer to internal teams.' },
  { phase: '06', title: 'Evolve', description: 'Advance modernization backlog and scale capabilities over time.' },
];

export const expertiseGroups = [
  {
    icon: Cog,
    title: 'Engineering Platforms',
    tags: ['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'Microservices'],
  },
  {
    icon: Cloud,
    title: 'Cloud and DevOps',
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Observability'],
  },
  {
    icon: LineChart,
    title: 'Data and Intelligence',
    tags: ['Data pipelines', 'Business intelligence', 'Analytics', 'Governance', 'Data quality'],
  },
  {
    icon: Bot,
    title: 'Applied AI and Automation',
    tags: ['Agentic workflows', 'Predictive support', 'Document intelligence', 'Process automation'],
  },
  {
    icon: BrainCircuit,
    title: 'Enterprise Architecture',
    tags: ['Domain modeling', 'Integration patterns', 'Security architecture', 'Scalability planning'],
  },
  {
    icon: FlaskConical,
    title: 'Quality Engineering',
    tags: ['Test strategy', 'Automation suites', 'Performance testing', 'Release assurance'],
  },
];

export const trustMetrics = [
  { label: 'Enterprise programs delivered', value: '120+' },
  { label: 'Average go-live acceleration', value: '35%' },
  { label: 'Multi-year strategic clients', value: '42' },
  { label: 'Delivery quality score', value: '98.1%' },
];

export const proofPoints = [
  'Cross-industry delivery across finance, healthcare, education, logistics, and B2B technology.',
  'Structured PMO and architecture governance model for large transformation programs.',
  'Senior-led squads with hands-on technical leadership throughout discovery to scale.',
];

export const partnerStrip = ['Global enterprise teams', 'Mid-market leaders', 'Digital-first operators', 'Transformation offices'];

export const footerLinks = {
  company: [
    { label: 'About company', to: '/company' },
    { label: 'Case studies', to: '/case-studies' },
    { label: 'Contact', to: '/contact' },
  ],
  capabilities: [
    { label: 'Products and platforms', to: '/products' },
    { label: 'Software engineering services', to: '/services' },
    { label: 'Enterprise solutions', to: '/solutions' },
    { label: 'Consulting and modernization', to: '/services/modernization-and-support' },
  ],
  connect: [
    { label: 'hello@techionyx.com', to: 'mailto:hello@techionyx.com' },
    { label: '+1 (415) 555-0142', to: 'tel:+14155550142' },
    { label: 'LinkedIn', to: 'https://www.linkedin.com' },
  ],
};

export const headerNav = [
  { label: 'Company', to: '/company' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Consulting', to: '/services/modernization-and-support' },
];
