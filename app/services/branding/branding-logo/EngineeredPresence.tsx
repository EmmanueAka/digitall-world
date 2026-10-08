import React from 'react'

export const EngineeredPresence = () => {
	return (
		<section className="w-full flex flex-col gap-10 mt-12 px-16">
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
				<div>
					<span className="font-label-md text-label-md text-primary uppercase tracking-widest">Formal Logomark Typologies</span>
					<h2 className="font-headline-xl text-headline-xl text-on-background mt-2">Engineered for Cross-Modal
						Presence</h2>
				</div>
				<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
					Every brand mark is stress-tested through structural grid matrices, high-contrast reductions, and
					kinetic micro-motion environments.
				</p>
			</div>
			{/*Archetypes Visual Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
				{/*Left: Visual Board Presentation (Image 50) -->*/}
				<div
					className="lg:col-span-5 rounded-2xl overflow-hidden bg-surface-container-lowest flex flex-col shadow-sm">
					<div className="relative w-full h-80 lg:h-full min-h-[380px]">
						<img alt="Distinct Identity Explorations across multiple brand verticals"
						     className="w-full h-full object-cover"
						     src="/bg-centric.jpg"/>
						<div
							className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md">
							<span
								className="font-caption text-caption uppercase tracking-wider text-on-surface font-semibold">Live Case Wall: Vertical Studies</span>
						</div>
					</div>
					<div className="p-6 bg-surface-container-low flex flex-col gap-2">
						<span className="font-label-md text-label-md text-on-background font-semibold">Identity Matrix Calibration</span>
						<p className="font-caption text-caption text-on-surface-variant">Comparing monogram geometry,
							fluid 3D forms, architectural motifs, and corporate wordmarks across uniform test
							environments.</p>
					</div>
				</div>
				{/* <!-- Right: The 4 Archetype Cards Bento -->*/}
				<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
					{/* <!-- Archetype 1 -->*/}
					<div
						className="p-6 rounded-xl bg-surface-container-lowest flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col gap-3">
							<div
								className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
								<span className="material-symbols-outlined">polyline</span>
							</div>
							<h3 className="font-headline-md text-headline-md text-on-background">Geometric
								Monograms</h3>
							<p className="font-body-md text-body-md text-on-surface-variant">
								Built on mathematical ratios and structural isometric axes. High memorability index with
								flawless digital down-scaling.
							</p>
						</div>
						<div
							className="pt-4 flex items-center justify-between text-caption font-caption text-secondary">
							<span>Golden Ratio Grids</span>
							<span className="material-symbols-outlined text-primary text-body-lg">arrow_forward</span>
						</div>
					</div>
					{/* <!-- Archetype 2 -->*/}
					<div
						className="p-6 rounded-xl bg-surface-container-lowest flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col gap-3">
							<div
								className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
								<span className="material-symbols-outlined">filter_tilt_shift</span>
							</div>
							<h3 className="font-headline-md text-headline-md text-on-background">3D Fluid Kinetics</h3>
							<p className="font-body-md text-body-md text-on-surface-variant">
								Radiant volumetric meshes designed for spatial computing, dynamic UI transitions, and
								video-first branding.
							</p>
						</div>
						<div
							className="pt-4 flex items-center justify-between text-caption font-caption text-secondary">
							<span>Volumetric Render Specs</span>
							<span className="material-symbols-outlined text-primary text-body-lg">arrow_forward</span>
						</div>
					</div>
					{/* <!-- Archetype 3 -->*/}
					<div
						className="p-6 rounded-xl bg-surface-container-lowest flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col gap-3">
							<div
								className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container">
								<span className="material-symbols-outlined">match_word</span>
							</div>
							<h3 className="font-headline-md text-headline-md text-on-background">Authoritative
								Wordmarks</h3>
							<p className="font-body-md text-body-md text-on-surface-variant">
								Bespoke letterforms, calibrated optical kerning, and proprietary ligatures engineered
								for legal, financial, and enterprise trust.
							</p>
						</div>
						<div
							className="pt-4 flex items-center justify-between text-caption font-caption text-secondary">
							<span>Custom OpenType Sets</span>
							<span className="material-symbols-outlined text-primary text-body-lg">arrow_forward</span>
						</div>
					</div>
					{/* <!-- Archetype 4 -->*/}
					<div
						className="p-6 rounded-xl bg-surface-container-lowest flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col gap-3">
							<div
								className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface">
								<span className="material-symbols-outlined">shield</span>
							</div>
							<h3 className="font-headline-md text-headline-md text-on-background">Architectural
								Emblems</h3>
							<p className="font-body-md text-body-md text-on-surface-variant">
								Timeless institutional presence through minimal hairline contours, balanced verticality,
								and monumental silhouettes.
							</p>
						</div>
						<div
							className="pt-4 flex items-center justify-between text-caption font-caption text-secondary">
							<span>Line Weight Calibration</span>
							<span className="material-symbols-outlined text-primary text-body-lg">arrow_forward</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
