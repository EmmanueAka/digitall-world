import {
	BookOpen,
	PencilRuler,
	CardSim,
	TabletSmartphone,
	Search,
	CompassIcon,
	CodeXml,
	Metronome,
	DraftingCompassIcon,
	Network,
	EyeIcon,
	ShieldIcon,
	ArrowRight,
	Layers,
	Brain,
	Sparkles,
	FlaskConical,
	Palette,
	BadgeCheck
} from 'lucide-react'
import Link from "next/link";

export const CARD_LIST = [
	{icon: BookOpen, title: "Publishing Systems", desc: "Architecting scalable, high-performance content delivery networks and editorial workflows designed for rigorous daily publishing demands.", href:""},
	{icon: PencilRuler, title: "Digital Design", desc: "Crafting intuitive, minimalist user interfaces rooted in deep structural logic. We prioritize clarity, performance, and accessibility.", href:""},
	{icon: CardSim, title: "Corporate Branding", desc: "Developing authoritative brand identities. From visual token systems to comprehensive style guidelines that ensure consistency at scale.", href:""},
	{icon: TabletSmartphone, title: "Mobile Apps", desc: "Building native and cross-platform mobile experiences that seamlessly extend your digital ecosystem into the hands of your users.", href:""},
]

export const CARD_APPROACH = [
	{icon: Search, title: "1. Discovery", desc: "Deep dive into business requirements, user needs, and technical constraints." },
	{icon: CompassIcon, title: "2. Blueprinting", desc: "Defining structural wireframes, system architectures, and component libraries." },
	{icon: CodeXml, title: "3. Engineering", desc: "Precision development employing modern frameworks and robust backend infrastructure." },
	{icon: Metronome, title: "4. Optimization", desc: "Continuous refinement for performance, security, and sustained scalability."}
]

export const WHY_CARD = [
	{icon: DraftingCompassIcon, title: "Architectural Precision", desc: "Every component, grid, and typography scale is mathematically aligned for structural integrity."},
	{icon: Network, title: "Scalable Systems", desc: "Built on modular foundations that allow your digital presence to grow without technical debt."},
	{icon: EyeIcon, title: "Strategic Vision", desc: "Design that serves business objectives, driving conversion through clarity and user-centric logic."},
	{icon: ShieldIcon, title: "Enterprise Reliability", desc: "Rigorous testing and robust infrastructure ensuring your platforms perform flawlessly under pressure."}
]

export const ENTERPRISE_CARD = [
	{icon: "corporate_fare", title: "Global Brand Management", des: "Ensuring consistent brand messaging and visual identity across all global digital touchpoints, solidifying market position."},
	{icon: "finance", title: "Investor Relations Portals", des: "Secure, real-time data integration and robust financial reporting interfaces designed for clarity and stakeholder confidence."},
	{icon: "group", title: "Stakeholder Engagement Hubs", des: "Tailored user journeys that address the specific needs of partners, employees, and board members with precision."}
]

export const DESIGN_METHOD_CARDS = [
	{icon: "architecture", title: "Scalable Architecture", desc: "Engineered for growth, our systems adapt seamlessly to expanding corporate structures and complex integration requirements."},
	{icon: "security", title: "Security & Compliance", desc: "Rigorous adherence to global security protocols and data privacy regulations, ensuring your enterprise assets remain protected."},
	{icon: "speed", title: "Performance Optimization", desc: "Precision-tuned digital experiences that deliver lightning-fast load times and uncompromised stability under high traffic demands."},

]

export const FEATURED_CORPORATE_CARD = [
	{icon: "business", title: "Financial Sector", sub: "Global Banking Portal", desc: "A unified digital experience serving millions of enterprise banking clients worldwide."},
	{icon: "precision_manufacturing", title: "Manufacturing", sub: "Supply Chain Logistics", desc: "Robust data visualization and management tools for complex international logistics operations." },
	{icon: "domain", title: "Real Estate", sub: "Commercial Portfolio", desc: "Immersive investor relations platform showcasing premium international properties."},

]

export const BRANDING_CARD = [
	{head: "Strategic Impact", title: "4.8x", sub: "Improvement", desc: "Measured brand recognition and cognitive market recall within 90 days post-rebrand."},
	{head: "Geometric Fidelity", title: "100%", sub: "Vector Fidelity", desc: "Scale-invariant rendering from 16px ultra-dense micro-favicons to 80ft structural architectural signage."},
	{head: "Enterprise Deployment", title: "48+", sub: "Global Releases", desc: "Complete brand ecosystems delivered across FinTech, SaaS, Bio-Tech, abd Spatial Architectures."},
]

export const DISCIPLINE = [
	{
		icon: Brain,
		title: 'Cognitive UX & Journey Mapping',
		description: 'Heuristic reviews, contextual research, and clear interaction paths shaped around how people actually think.',
		outcome: 'Mental model mapping',
	},
	{
		icon: Layers,
		title: 'Design Systems & Living Tokens',
		description: 'Flexible components, accessible patterns, and shared design tokens that keep every product experience coherent.',
		outcome: 'Reusable design foundations',
	},
	{
		icon: Sparkles,
		title: 'Micro-interactions & Motion',
		description: 'Purposeful transitions and responsive feedback that make complex interfaces feel clear and effortless.',
		outcome: 'Meaningful state feedback',
	},
	{
		icon: FlaskConical,
		title: 'Usability Testing',
		description: 'Clickable prototypes tested with real users to validate key decisions before development begins.',
		outcome: 'Evidence-led decisions',
	},
]

export const METRICS = [
	{ value: '64%', label: 'Less friction', detail: 'Reduction in cognitive load and task completion time across complex workflows.' },
	{ value: '99.4%', label: 'Design fidelity', detail: 'Design-to-code accuracy through shared variables and clear handoff.' },
	{ value: '3.4×', label: 'Conversion lift', detail: 'Average improvement across user flows after experience optimization.' },
	{ value: '140+', label: 'Systems built', detail: 'Production-ready design systems for products across multiple industries.' },
]

export const PHASES = [
	{
		number: '01',
		icon: Search,
		title: 'Audit & Discovery',
		description: 'Understand your users, product goals, and current experience through research and behavioral review.',
		milestone: 'UX friction index',
	},
	{
		number: '02',
		icon: Network,
		title: 'Information Architecture',
		description: 'Organize content and journeys into clear structures, then validate them with wireflows and prototypes.',
		milestone: 'Validated wireflows',
	},
	{
		number: '03',
		icon: Palette,
		title: 'Interface & Design System',
		description: 'Shape the visual language, accessible components, and interaction patterns that bring the product to life.',
		milestone: 'Complete UI kit',
	},
	{
		number: '04',
		icon: BadgeCheck,
		title: 'Validation & Handoff',
		description: 'Test the finished experience, document the system, and give engineers a confident path to implementation.',
		milestone: 'Production-ready handoff',
	},
]
