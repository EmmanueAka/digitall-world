import React from 'react'
import Image from "next/image";

const PlatformHero = () => {
	return (
		<section className='relative w-full min-h-[75vh] flex items-center rounded-3xl overflow-hidden shadow-soft group'>
				<img src="/bg-hero.jpeg" alt="images" className='w-full h-full absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105'/>
			<div className="absolute inset-0 bg-gradient-to-r from-on-background/60 via-on-background/20 to-transparent"></div>
			<div className='p-4'>
				<div className="relative z-10 w-full px-8 md:px-16 lg:w-2/3 xl:w-1/2">
					<div className="glass-card p-10 md:p-14 rounded-2xl shadow-2xl flex flex-col gap-8 transform transition-transform duration-500 hover:-translate-y-1">
						<div className="inline-flex items-center gap-3 bg-surface-container-low/80 backdrop-blur-sm px-2 py-3 rounded-xl w-fit border border-outline-variant/20 shadow-sm">
							<span className="material-symbols-outlined text-[18px] text-primary">devices</span>
							<span className="font-semibold text-primary uppercase">Cross-Platform Solutions</span>
						</div>
						<h1 className="text-[64px] leading-15 font-bold">
							Universal<br/><span className="text-primary">Digital Architecture</span>
						</h1>
						<p className="font-body-lg text-body-lg text-on-surface-variant">
							Engineering unified experiences that scale with precision across every device and platform. We
							translate complex business logic into fluid, high-performance interfaces.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 mt-2">
							<button
								className="bg-primary text-on-primary  font-bold text-label-md px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-surface-tint hover:-translate-y-0.5 transition-all duration-300">
								Schedule a Technical Audit
							</button>
							<button
								className="bg-surface-container-lowest text-primary border border-outline-variant/50 font-bold text-label-md px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all duration-300">
								View Case Studies
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default PlatformHero
