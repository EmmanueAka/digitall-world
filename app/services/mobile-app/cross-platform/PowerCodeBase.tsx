import React from 'react'


const PowerCodeBase = () => {
	return (
		<section>
			<div className='w-12 border-b-3 border-primary'/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
				<div className='space-y-6 mt-4'>
					<h3 className='text-4xl font-semibold max-w-[350px]'>The Power of Single- Codebase Engineering</h3>
					<p className='mt-4 max-w-[350px]'>By leveraging advanced frameworks like Flutter and React Native, we architect unified solutions that eliminate redundancies. A single, robust codebase ensures absolute brand consistency, accelerates time-to-market, and simplifies long-term maintenance without compromising native-level performance.</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
					<div className='flex items-start justify-start flex-col space-y-5 group p-4 hover:shadow-lg shadow-soft hover:-translate-y-3 transition-transform duration-300 rounded-xl bg-white'>
						<div className=' bg-primary/20 p-2'>
						<span className='material-symbols-outlined text-[42px] text-primary'>code_blocks</span>
						</div>
						<h3 className='font-semibold text-xl'>Unified Codebase</h3>
						<p>Streamlined development cycles reducing operational overhead and accelerating deployment pipelines.</p>
					</div>
					<div className='flex items-start justify-center bg-white flex-col space-y-5 group p-4 hover:shadow-lg shadow-soft hover:-translate-y-3 transition-transform duration-300 rounded-xl'>
						<div className=' bg-primary/20 p-2'>
							<span className='material-symbols-outlined text-[42px] text-primary'>speed</span>
						</div>
						<h3 className='font-semibold text-xl'>Native Performance</h3>
						<p>Hardware-accelerated rendering and direct API access for flawlessly smooth, native-feel interactions.</p>
					</div>
				</div>
			</div>
			<section className='pt-24 flex flex-col gap-12'>
				<div className="max-w-3xl">
					<div className="w-12 h-1 bg-primary mb-8 rounded-full"></div>
					<h2 className="font-serif font-semibold text-3xl text-on-background mb-4">Architectural
						Symmetry</h2>
					<p className="font-body-lg text-body-lg text-on-surface-variant">Precision across all viewports. Our
						design system scales intelligently from desktop commands down to mobile gestures.</p>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8 h-auto lg:h-[700px]'>
					<div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden relative group shadow-soft">
						<img alt="Tablet and mobile responsive design showcase"
						     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						     src="https://lh3.googleusercontent.com/aida/AEtjO1WFjYlztGefr3uYEvg5pY6RtB8ij0JnYK60PnK2CSYP05lUNiFtIqKw84_WnuNdKugrJfDufsmEbdmRnYlL84EEwiWKdVb9tBu6keELPooUdl98WoBdK5sD3Lsl6TOhgKV4cpP-Tf2ZxQwIxeGQC7tUlko1jVyJ88JP_pOhEYtkpJZ1MsyeCIVMIG72Hh87LSgxze5c3wTC6NSyRPlX5gv-8vdT4pnUuAt1PujP5uqNsRDnoRegvPQwHsQ" />
						<div
							className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent opacity-90"></div>
						<div className="absolute bottom-0 left-0 p-10 md:p-14 w-full md:w-4/5">
							<span
								className="inline-block bg-primary/90 backdrop-blur-sm text-on-primary font-label-md text-label-md px-4 py-2 rounded-full mb-6 uppercase tracking-wider shadow-sm">Responsive Rigor</span>
							<h3 className="font-headline-xl text-headline-xl text-surface-container-lowest mb-4">Fluid
								Breakpoint Architecture</h3>
							<p className="font-body-lg text-body-lg text-surface-container-low/90 leading-relaxed">Layouts
								engineered to transition seamlessly, preserving information hierarchy and interaction
								models across diverse device dimensions.</p>
						</div>
					</div>
					<div
						className="border border-outline-variant/20 rounded-3xl group p-8 bg-surface-container-lowest shadow-soft flex flex-col justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
							<div className='w-full h-36 rounded-2xl overflow-hidden bg-surface-container-low/40'>
								<img src='https://lh3.googleusercontent.com/aida/AEtjO1WiZggZAYI6dJRrOFC-1wRlLgBcZSC4KvZsF0uXopMwurx4xqQZ1qlQpQ7l2VpmY6lTWOtstJUuRkQ1apCvecQ11RmIcp3PezKMDWYA9V5D-DkHYDGAwgE7tChBTwrpp0fp0XgGunB9F1KLAkKOmfxi45d9OdbyY9vhxEYNMOHJhGm-8BqtO7bdgw49OAURf3L7cUkwnC9psB_J9o02FTMNDaNZCNFGtTeyjH999jFSMR3gJCYS90-b1Z_A' className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-500'/>
							</div>
						<div className="w-12 h-12 p-2  rounded-full bg-surface-container-low flex items-center justify-center mt-2 mb-6">
							<span className="material-symbols-outlined text-primary text-2xl">api</span>
						</div>
						<h4 className="font-headline-md text-headline-md text-on-background mb-3">Unified API</h4>
						<p className="font-body-md text-body-md text-on-surface-variant">Centralized data orchestration
							ensuring synchronous state across all client applications.</p>
					</div>
					<div className="border border-outline-variant/20 rounded-3xl p-8 bg-surface-container-lowest shadow-soft flex flex-col justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
						<div className='w-full h-36 rounded-2xl overflow-hidden bg-surface-container-low/40'>
							<img src='/mobile_image.jpg' className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-500'/>
						</div>
						<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-6">
							<span className="material-symbols-outlined text-primary text-2xl">sync_alt</span>
						</div>
						<h4 className="font-headline-md text-headline-md text-on-background mb-3">Real-time Sync</h4>
						<p className="font-body-md text-body-md text-on-surface-variant">Instantaneous data propagation utilizing advanced WebSocket architectures for live state management.</p>
					</div>
				</div>
			</section>
		</section>
	)
}
export default PowerCodeBase
