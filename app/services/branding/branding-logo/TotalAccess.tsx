import React from 'react'

const TotalAccess = () => {
	return (
		<section
			className="w-full flex flex-col gap-10 my-10 p-8 md:p-12 rounded-3xl bg-surface-container-lowest shadow-sm">
			<div className="flex flex-col gap-2">
				<span className="font-label-md text-label-md text-primary uppercase tracking-widest">Our Engineering Process</span>
				<h2 className="font-headline-xl text-headline-xl text-on-background">The 4-Stage Architectural
					Protocol</h2>
				<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
					A structured, milestone-driven framework that eliminates subjective ambiguity in visual decision
					making.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="p-6 rounded-xl bg-surface flex flex-col gap-4">
					<span className="font-headline-lg text-headline-lg text-primary font-bold">01</span>
					<h4 className="font-headline-md text-headline-md text-on-background">Semiotics &amp; Essence
						Discovery</h4>
					<p className="font-body-md text-body-md text-on-surface-variant">
						In-depth competitive positioning audit, archetype categorization, and semiotic mapping to define
						unique visual whitespace.
					</p>
				</div>
				<div className="p-6 rounded-xl bg-surface flex flex-col gap-4">
					<span className="font-headline-lg text-headline-lg text-primary font-bold">02</span>
					<h4 className="font-headline-md text-headline-md text-on-background">Geometric Architecture</h4>
					<p className="font-body-md text-body-md text-on-surface-variant">
						Vector construction on modular coordinate grids. Comprehensive stress tests for visual balance,
						optical illusion correction, and reduction.
					</p>
				</div>
				<div className="p-6 rounded-xl bg-surface flex flex-col gap-4">
					<span className="font-headline-lg text-headline-lg text-primary font-bold">03</span>
					<h4 className="font-headline-md text-headline-md text-on-background">Chromatic Spectrum Design</h4>
					<p className="font-body-md text-body-md text-on-surface-variant">
						Engineering emotional resonance through calibrated hue ratios. Stress-testing across light,
						dark, and tactile surface environments.
					</p>
				</div>
				<div className="p-6 rounded-xl bg-surface flex flex-col gap-4">
					<span className="font-headline-lg text-headline-lg text-primary font-bold">04</span>
					<h4 className="font-headline-md text-headline-md text-on-background">Enterprise Brand
						Governance</h4>
					<p className="font-body-md text-body-md text-on-surface-variant">
						Final packaging into dynamic cloud repositories, developer token endpoints, and authoritative
						physical specimen manuals.
					</p>
				</div>
			</div>
		</section>
	)
}
export default TotalAccess
