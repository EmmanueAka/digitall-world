import React from 'react'
import MatrixSection from "@/components/StarsBackground";

const ReadyArchitect = () => {
	return (
		<MatrixSection className='flex items-center justify-center mt-24 px-8 w-full h-[450px] bg-on-primary-container relative'>
			<div className='flex items-center justify-center flex-col w-full h-full'>
				<h2 className='font-serif font-semibold text-[46px] text-white'>Ready to Architect Your Book?</h2>
				<p className='text-center text-wrap text-sm text-gray-300 max-w-xl'>Submit your manuscript details and structural requirements. Our team will provide a comprehensive proposal for layout, cover design, and formatting execution.</p>
				<button className='mt-6 shimmer-btn glass-panel rounded-full transition-transform duration-400 hover:scale-105 active:scale-95 px-4 py-1.5 text-white'>Get a Publication Quote</button>
			</div>
		</MatrixSection>
	)
}
export default ReadyArchitect
