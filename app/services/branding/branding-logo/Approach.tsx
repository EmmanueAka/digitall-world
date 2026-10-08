import React from 'react'

const Approach = () => {
	return (
		<section className="w-full flex flex-col gap-10 my-16 px-16 mt-8">
			<div className="flex flex-col gap-3 max-w-2xl">
				<span className="font-label-md text-label-md text-primary uppercase tracking-widest">Enterprise Deliverables Portfolio</span>
				<h2 className="font-headline-xl text-headline-xl text-on-background">No Guesswork. Total Asset
					Governance.</h2>
				<p className="font-body-lg text-body-lg text-on-surface-variant">
					Every brand engagement produces a comprehensive blueprint: design token hierarchies, multi-format
					vectors, and physical specimen cards designed to enforce absolute brand consistency.
				</p>
			</div>
			{/*<!-- Integrated Graphic & Deliverables Overview -->*/}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
				<div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-sm bg-surface-container-lowest">
					<img alt="Comprehensive Brand Guidelines and Design Tokens Blueprint on desktop"
					     className="w-full h-[420px] object-cover"
					     src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0HPQpDowXX2OqwNasI-YElZIuv20vcbIyaQ0kg6JDyl8vb5KBZAfWNKjwqd-zwpHVazn1k9tchJGtXIQ0Mw416CdQo1IOnLGt-0DoO0JET7lvbSXNtM_S1FNtt9wmyUHrGJsoZiJHWYoT5bg9BjrD0aTADaHnAhrmfYp6jXy8QkPgtefkX7sTxDDppTUSAxu82aGnx5OyOQ_2o3_3fI_QTUT2-wRQ4mXSFIIdlcc8en4jSHBx0pn9Tw"/>
				</div>
				<div className="lg:col-span-6 flex flex-col gap-6">
					{/*<!-- Item 1 -->*/}
					<div className="p-6 rounded-xl bg-surface-container-lowest flex gap-5 items-start shadow-sm">
						<div className="p-3 rounded-lg bg-surface-container-high text-primary shrink-0">
							<span className="material-symbols-outlined">token</span>
						</div>
						<div className="flex flex-col gap-1">
							<h4 className="font-headline-md text-headline-md text-on-background">Living
								Tokens &amp; Harmony Systems</h4>
							<p className="font-body-md text-body-md text-on-surface-variant">
								CSS variables, Figma Variables, and Tailwind color maps with Pantone Solid Coated, CMYK,
								and WCAG AAA compliance matrices.
							</p>
						</div>
					</div>
					{/* <!-- Item 2 -->*/}
					<div className="p-6 rounded-xl bg-surface-container-lowest flex gap-5 items-start shadow-sm">
						<div className="p-3 rounded-lg bg-surface-container-high text-primary shrink-0">
							<span className="material-symbols-outlined">text_fields</span>
						</div>
						<div className="flex flex-col gap-1">
							<h4 className="font-headline-md text-headline-md text-on-background">Typography
								Hierarchies &amp; Licenses</h4>
							<p className="font-body-md text-body-md text-on-surface-variant">
								Full typographic scale specifications, web-optimized WOFF2 files, pairing guidelines,
								and fallback font stacks for zero layout shifts.
							</p>
						</div>
					</div>
					{/* <!-- Item 3 -->*/}
					<div className="p-6 rounded-xl bg-surface-container-lowest flex gap-5 items-start shadow-sm">
						<div className="p-3 rounded-lg bg-surface-container-high text-primary shrink-0">
							<span className="material-symbols-outlined">deployed_code</span>
						</div>
						<div className="flex flex-col gap-1">
							<h4 className="font-headline-md text-headline-md text-on-background">Cross-Platform Vector
								Ecosystem</h4>
							<p className="font-body-md text-body-md text-on-surface-variant">
								Precision SVGs with clean XML paths, lossless EPS print masters, and instant-use social
								media kit variants for every major platform.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Approach
