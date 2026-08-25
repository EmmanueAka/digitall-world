import React from 'react'

const Formatting = () => {
	return (
		<section className='mt-24 px-24'>
			<div className='h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
				<div>
					<h2 className='text-3xl font-serif font-bold'>Formatting: Digital & Print</h2>
					<p className='text-sm text-on-primary-fixed-variant mt-6 max-w-lg'>Execution is where strategy becomes reality. We deliver flawless, print-ready PDF masters tailored to specific press requirements alongside highly optimized EPUB files. Our structural markup ensures the digital reading experience retains the integrity and typographic hierarchy of the physical book across all e-reader platforms.</p>
				</div>

				<div className='flex flex-row items-center justify-center gap-2'>
					<div className='bg-on-surface-variant/10 flex flex-col border border-on-secondary-container/20 items-center justify-center w-48 h-48 text-center'>
						<span className='material-symbols-outlined text-[62px] text-primary'>book</span>
						<span className='font-bold mt-4'>Print Ready</span>
						<span className='text-[8px]'>CMYK, Bleed, PDF/X</span>
					</div>
					<div className='bg-on-surface-variant/10 flex flex-col border border-on-secondary-container/20 items-center justify-center w-48 h-48 text-center'>
						<span className='material-symbols-outlined text-[62px] text-primary'>tablet_mac</span>
						<span className='font-bold mt-4'>Valid, Reflowable</span>
						<span className='text-[8px]'>EPUB Optimized</span>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Formatting
