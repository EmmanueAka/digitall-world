import React from 'react'

const Testimonial = () => {
	return (
		<section className='h-auto px-8 w-full flex items-center justify-center text-black'>
			<div className='flex flex-col max-w-2xl items-center justify-center mt-12  mb-12 space-y-5'>
				<span className='material-symbols-outlined text-seoncdary/30 text-[64px]'>format_quote</span>
				<p className='text-center font-bold text-2xl'>
					"DigitAll World transformed our fragmented digital ecosystem into a cohesive, highly performant
					publishing machine. Their focus on architectural precision is unmatched in the industry."
				</p>

				<div className="flex items-center gap-stack-md">
					<div
						className="w-16 h-16 rounded-full overflow-hidden bg-surface-container border border-outline-variant/30">
						<img alt="Client Headshot" className="w-full h-full object-cover"
						     src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX71gGxSReogR653pP7RRzcpi5BT1CCK-idUWk-AttG-WD6hHAUpkkquBSqT4cspNHt015YylcbSqTk41kpNJKMW0PoR3MYEdvD-zhXST_wND8DZ9MKCANZunfBtUJVqlBkfCZmZqtW4Luzdxm7ZnutFyTlXk0CB_9ST-Fw4KtRIg6rZRegJMxAWnMPh0KWyMWwKub1OFJ4jcBe57meAnkOtGvvw5ybJ_QYkIwbFpyD_0GypMYHJnC1A"/>
					</div>
					<div className="flex flex-col text-left">
						<span className="font-label-md text-[10px] font-semibold text-on-surface">Marcus Vance</span>
						<span
							className="font-body-md text-[10px] text-on-surface-variant">CTO, Global News Network</span>
					</div>
				</div>
				</div>
		</section>
)
}
export default Testimonial
