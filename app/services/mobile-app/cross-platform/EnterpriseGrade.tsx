import React from 'react'

const EnterpriseGrade = () => {
	return (
		<section>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div
					className='order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-soft aspect-square lg:aspect-[4/5] group'>
					<img src='/phone-in.jpg' alt='phone in hand'
					     className='w-full h-full object-cover rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-105'/>
					<div
						className="absolute inset-0 border border-outline-variant/20 rounded-3xl pointer-events-none"></div>
				</div>
				<div className="order-1 lg:order-2 flex flex-col gap-8 lg:pl-8">
					<div>
						<div className="w-12 h-1 bg-primary mb-8 rounded-full"></div>
						<h2 className="font-headline-xl text-headline-xl text-on-background mb-6 leading-tight">
							Enterprise-Grade<br/>Contextual Integration
						</h2>
						<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
							We construct digital environments designed for high-stakes operational settings. Our
							cross-platform solutions integrate deeply with enterprise ecosystems, bridging legacy
							systems with modern interfaces while maintaining rigorous security protocols and data
							integrity.
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<div
							className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-lowest transition-colors duration-300">
							<div
								className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
								<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
							</div>
							<div>
								<strong className="font-headline-md text-xl text-on-background block mb-1">Shared
									Business Logic</strong>
								<span className="font-body-md text-body-md text-on-surface-variant">Core algorithms maintained centrally, reducing systemic drift.</span>
							</div>
						</div>
						<div
							className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-lowest transition-colors duration-300">
							<div
								className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
								<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
							</div>
							<div>
								<strong className="font-headline-md text-xl text-on-background block mb-1">Platform-Specific
									Optimization</strong>
								<span className="font-body-md text-body-md text-on-surface-variant">Tailored deployment pipelines targeting specific OS nuances for peak performance.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default EnterpriseGrade
