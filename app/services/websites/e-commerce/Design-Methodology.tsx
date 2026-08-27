import React from 'react'

const METHOD_CARDS = [
	{title: "Scalable Ecosystems", desc: "We don't just build pages; we engineer robust digital ecosystems. Our architecture is designed to scale seamlessly with your business, integrating seamlessly with complex backend systems and third-party APIs while maintaining peak performance."},
	{title: "Technical Rigor", desc: "Every line of code and structural decision is guided by strict adherence to modern web standards. We prioritize clean, semantic markup, optimized asset delivery, and robust security protocols to ensure lasting stability and speed."},
	{title: "Performance-Driven", desc: "Speed is a feature. Our methodology involves continuous performance profiling, minimizing render-blocking resources, and leveraging edge caching to deliver sub-second load times across all devices and networks."},
	{title: "Future-Proof Architecture", desc: "We anticipate technological shifts. By employing headless architectures, microservices, and decoupled front-ends, we build platforms that can evolve rapidly without requiring ground-up rebuilds."}
]

const DesignMethodology = () => {
	return (
		<section className='mt-24 px-12'>
			<div className='mt-12'>
				<h2 className='text-4xl font-semibold font-serif'>Design Methodology</h2>
				<div className='border-b border-gray-300/30 mt-8'/>
				<div className='px-8 grid grid-cols-1 md:grid-cols-2 gap-2 mt-12'>
					{METHOD_CARDS.map((item, idx) => (
						<div key={idx} className='bg-white p-6 border-gray-300/30 border'>
							<h3 className='font-semibold text-2xl text-secondary'>{item.title}</h3>
							<p className='text-gray-600 mt-2'>{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default DesignMethodology
