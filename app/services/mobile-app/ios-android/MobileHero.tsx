import React from 'react'

const MobileHero = () => {
	return (
		<section
			className="relative pt-section-gap pb-stack-lg px-margin-desktop md:px-margin-desktop max-w-container-max mx-auto overflow-hidden mesh-bg">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10 items-center">
				<div className="md:col-span-6 flex flex-col gap-stack-lg">
					<span
						className="font-label-md text-label-md text-primary uppercase tracking-widest border border-outline-variant/30 rounded-full px-4 py-2 self-start bg-surface-container-lowest shadow-sm">Mobile App Development</span>
					<h1 className="font-semibold font-serif md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background leading-tight">
						Engineering <span className="text-primary">Fluid</span> Mobile Experiences
					</h1>
					<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
						We architect native and cross-platform mobile applications that seamlessly blend
						high-performance engineering with intuitive, modern structural design.
					</p>
					<div className="flex flex-wrap gap-4 pt-stack-sm">
						<button
							className="bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-3 rounded-lg shadow-sm hover:bg-primary hover:text-on-primary transition-colors">
							View Case Studies
						</button>
						<button
							className="bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition-colors">
							Our Process
						</button>
					</div>
				</div>
				<div className="md:col-span-6 relative flex justify-end mt-stack-lg md:mt-0">
					<div
						className="relative w-full max-w-[300px] aspect-[9/16] bg-surface-container-lowest border border-outline-variant/20 rounded-[2.5rem] p-3 shadow-[0_20px_60px_-15px_rgba(0,101,141,0.2)] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
						<div
							className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-lowest rounded-b-2xl z-20 shadow-sm"></div>
						<img className="w-full h-full object-cover rounded-[2rem]"
						     data-alt="A sleek, modern mobile application UI mockup displayed within a minimalist digital phone frame."
						     src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyb0e4pAUeaaw9Wyjt9jDLsFNxAnvIg9KcMOshIX55eIlrgD36FCKiH3BMEyfoxJhtEc6nYMw4Wf3CJEow_fNDe9F_QeCXhbXvMhBPGmW5Q-VjBx1ziUWlZrcLt9HTzcB7ZWDYKLfvJgVGVp_aX8Hxb6xGYuE7_YCMLDhehLWhqGAgIA9gEGqu7ORGFoDUVtNfjLYXWcKawH7EMrH-Hhr3Xv5-2aqVDf9ShPpvGrqgFMC9BoufN6PBWw"/>
					</div>
					<div
						className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
					<div
						className="absolute -z-10 bottom-1/4 -right-10 w-48 h-48 bg-tertiary-container/10 rounded-full blur-2xl"></div>
				</div>
			</div>
		</section>
	)
}
export default MobileHero
