import Image from 'next/image'
import Link from 'next/link'
import {
	ArrowRight,
	BadgeCheck,
	Brain,
	CalendarDays,
	Eye,
	FlaskConical,
	Layers,
	Network,
	Palette,
	Search,
	Sparkles,
} from 'lucide-react'
import {DISCIPLINE, METRICS, PHASES} from "@/lib/constants";
import MatrixSection from "@/components/StarsBackground";


const ProductPage = () => {
	return (
		<div className="overflow-hidden pt-28 text-on-background">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-24 px-5 pb-24 sm:px-8 lg:gap-32 lg:px-12">
				<section className="flex flex-col gap-10" aria-labelledby="product-hero-title">
					<div className="max-w-4xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
							<span className="h-2 w-2 rounded-full bg-tertiary-container" />
							Human-centered systems & product architecture
						</div>
						<h1 id="product-hero-title" className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] text-on-background sm:text-5xl lg:text-6xl">
							Architecting intuitive digital systems & living interfaces
						</h1>
						<p className="mt-6 max-w-3xl text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">
							We design frictionless journeys, modular design systems, and enterprise-ready experiences that bring human needs and business goals together.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-on-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
								Start a UX discovery <ArrowRight size={17} aria-hidden="true" />
							</Link>
							<a href="#methodology" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-outline-variant bg-white/70 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
								Explore our methodology <Layers size={17} aria-hidden="true" />
							</a>
						</div>
					</div>

					<figure className="relative isolate min-h-90 overflow-hidden rounded-xl bg-on-primary-container sm:min-h-115 lg:min-h-135">
						<Image
							src="/ui-hero.jpg"
							alt="Layered product interface concepts arranged as a digital architecture"
							fill
							priority
							sizes="(max-width: 1280px) 100vw, 1280px"
							className="-z-10 object-cover object-center"
						/>
						<div className="absolute inset-0 z-0 bg-linear-to-t from-on-background/75 via-on-background/5 to-transparent" />
						<figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-lg border border-white/30 bg-white/90 px-4 py-3 text-xs font-semibold leading-5 text-on-background shadow-lg backdrop-blur sm:inset-x-auto sm:left-6 sm:bottom-6 sm:text-sm">
							<Layers size={18} className="shrink-0 text-primary" aria-hidden="true" />
							Multi-platform architecture · Micro-interactions · Living design tokens
						</figcaption>
					</figure>
				</section>

				<section aria-label="Product design outcomes" className="grid grid-cols-1 divide-y divide-outline-variant/60 border-y border-outline-variant/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
					{METRICS.map((metric, index) => (
						<div key={metric.label} className={`py-6 sm:px-6 lg:py-3 ${index % 2 === 0 ? 'sm:pl-0' : ''} ${index === 3 ? 'lg:pr-0' : ''}`}>
							<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
								<span className={`font-serif text-3xl font-semibold ${index === 2 ? 'text-tertiary' : 'text-primary'}`}>{metric.value}</span>
								<span className="text-sm font-bold text-on-surface-variant">{metric.label}</span>
							</div>
							<p className="mt-2 max-w-xs text-sm leading-6 text-on-surface-variant">{metric.detail}</p>
						</div>
					))}
				</section>

				<section id="methodology" className="scroll-mt-28 space-y-9" aria-labelledby="disciplines-title">
					<div className="max-w-2xl">
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"><Network size={15} aria-hidden="true" /> Disciplines & capabilities</p>
						<h2 id="disciplines-title" className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">Precision engineering for human attention</h2>
						<p className="mt-4 leading-7 text-on-surface-variant">Every interface is an operational instrument. We combine behavioral insight and thoughtful architecture to make products feel natural, clear, and resilient.</p>
					</div>
					<div className="grid items-stretch gap-6 lg:grid-cols-12">
						<figure className="relative min-h-95 overflow-hidden rounded-xl bg-on-primary-container lg:col-span-5">
							<Image
								src="/ui-screen.jpg"
								alt="Design team mapping interface components and user journeys at a studio workstation"
								fill
								sizes="(max-width: 1024px) 100vw, 42vw"
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-on-background/75 via-transparent to-transparent" />
							<figcaption className="absolute bottom-5 left-5 right-5 flex items-center gap-2 text-sm font-semibold text-white">
								<span className="h-2 w-2 rounded-full bg-tertiary-container" />
								Live design laboratory: tokens & wireflows
							</figcaption>
						</figure>
						<div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
							{DISCIPLINE.map(({ icon: Icon, title, description, outcome }) => (
								<article key={title} className="flex min-h-64 flex-col justify-between border-t-2 border-primary/20 bg-white p-5 transition-colors hover:border-primary sm:p-6">
									<div>
										<div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-container-low text-primary"><Icon size={21} aria-hidden="true" /></div>
										<h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
										<p className="mt-3 text-sm leading-6 text-on-surface-variant">{description}</p>
									</div>
									<p className="mt-5 border-t border-outline-variant/50 pt-4 text-xs font-bold uppercase tracking-wide text-primary">{outcome}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="architecture" className="scroll-mt-28 space-y-8" aria-labelledby="architecture-title">
					<div className="max-w-3xl">
						<p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Architectural depth</p>
						<h2 id="architecture-title" className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">Engineered for production scale and better decisions</h2>
					</div>
					<div className="grid gap-6 lg:grid-cols-2">
						<article className="overflow-hidden rounded-xl border border-outline-variant/60 bg-white">
							<div className="relative aspect-video bg-surface-container-low">
								<Image
									src="/ui-img.jpg"
									alt="Modular interface components and visual design tokens arranged as a system"
									fill
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="object-cover"
								/>
								<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-xs font-bold text-on-background shadow-sm backdrop-blur"><Layers size={15} className="text-primary" aria-hidden="true" /> Design systems</div>
							</div>
							<div className="p-6 sm:p-8">
								<h3 className="text-xl font-semibold">Living components, built to scale</h3>
								<p className="mt-3 text-sm leading-7 text-on-surface-variant">We build clear component hierarchies and semantic tokens that help teams deliver consistent, multi-brand experiences. Shared foundations reduce handoff ambiguity as products grow.</p>
								<div className="mt-6 grid gap-4 border-t border-outline-variant/50 pt-5 sm:grid-cols-2">
									<div><p className="text-sm font-bold">Semantic tokens</p><p className="mt-1 text-xs leading-5 text-on-surface-variant">Context-aware color and type rules</p></div>
									<div><p className="text-sm font-bold">Clear handoff</p><p className="mt-1 text-xs leading-5 text-on-surface-variant">Implementation-ready component specs</p></div>
								</div>
							</div>
						</article>
						<article className="overflow-hidden rounded-xl border border-outline-variant/60 bg-white">
							<div className="relative aspect-video bg-surface-container-low">
								<Image
									src="/ui-ux.jpg"
									alt="User flow analytics showing conversion paths and points of friction"
									fill
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="object-cover"
								/>
								<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-xs font-bold text-on-background shadow-sm backdrop-blur"><Eye size={15} className="text-tertiary" aria-hidden="true" /> Experience analytics</div>
							</div>
							<div className="p-6 sm:p-8">
								<h3 className="text-xl font-semibold">Behavior informed by evidence</h3>
								<p className="mt-3 text-sm leading-7 text-on-surface-variant">We pair user research with journey analytics to find where people hesitate, get lost, or leave. Those insights guide practical improvements to navigation, forms, and conversion paths.</p>
								<div className="mt-6 grid gap-4 border-t border-outline-variant/50 pt-5 sm:grid-cols-2">
									<div><p className="text-sm font-bold">Flow optimization</p><p className="mt-1 text-xs leading-5 text-on-surface-variant">Simpler, more useful user journeys</p></div>
									<div><p className="text-sm font-bold">Cognitive ease</p><p className="mt-1 text-xs leading-5 text-on-surface-variant">Less friction in complex tasks</p></div>
								</div>
							</div>
						</article>
					</div>
				</section>

				<section className="space-y-9" aria-labelledby="process-title">
					<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<div className="max-w-2xl">
							<p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Execution framework</p>
							<h2 id="process-title" className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">A clear path from insight to impact</h2>
							<p className="mt-4 leading-7 text-on-surface-variant">Four considered phases keep teams aligned from early discovery through production handoff.</p>
						</div>
						<div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant"><BadgeCheck size={17} className="text-primary" aria-hidden="true" /> Accessibility considered from day one</div>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{PHASES.map(({ number, icon: Icon, title, description, milestone }) => (
							<article key={number} className="flex min-h-75 flex-col justify-between border border-outline-variant/60 bg-white p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6">
								<div>
									<div className="flex items-center justify-between"><span className="font-serif text-4xl font-semibold text-primary/30">{number}</span><Icon size={20} className="text-on-surface-variant" aria-hidden="true" /></div>
									<h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
									<p className="mt-3 text-sm leading-6 text-on-surface-variant">{description}</p>
								</div>
								<p className="mt-6 border-t border-outline-variant/50 pt-4 text-xs font-bold uppercase tracking-wide text-primary">Milestone: {milestone}</p>
							</article>
						))}
					</div>
				</section>

				<MatrixSection className='id="discovery" className="scroll-mt-28 overflow-hidden rounded-xl bg-on-primary-container px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14" aria-labelledby="discovery-title"'>
					<div >
						<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
							<div className="max-w-2xl">
								<p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-fixed"><BadgeCheck size={16} aria-hidden="true" /> Product architecture advisory</p>
								<h2 id="discovery-title" className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">Ready to make your product feel effortless?</h2>
								<p className="mt-4 max-w-xl leading-7 text-white/75">Let’s shape an accessible, scalable product experience around the people who use it and the team who builds it.</p>
							</div>
							<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
								<button className="inline-flex min-h-12 transition-transform duration-300 hover:scale-105 active:scale-95 items-center shimmer-btn justify-center gap-2 rounded-md bg-tertiary-container px-5 py-3 text-sm font-bold text-on-tertiary-container hover:bg-tertiary-fixed-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
									<CalendarDays size={17} aria-hidden="true" /> Schedule a UX audit
								</button>
								<a href="#architecture" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
									Review our approach <ArrowRight size={17} aria-hidden="true" />
								</a>
							</div>
						</div>
					</div>
				</MatrixSection>
			</div>
		</div>
	)
}

export default ProductPage
