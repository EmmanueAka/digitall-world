import React from 'react'
import MatrixSection from "@/components/StarsBackground";

const StartProject = () => {
	return (
		<MatrixSection>
			<div className='w-full h-82 flex flex-col items-center justify-center space-y-5'>
				<div className='text-2xl text-center text-white font-semibold  mt-8'>
					Ready to Architect Your Digital Future?
					<p className='text-center text-sm font-light text-white/70'>Partner with us to build a robust, scalable, and visually compelling digital platform that drives business growth.</p>
				</div>
				<button className='px-4 py-3 text-white shimmer-btn bg-tertiary-container rounded-full flex items-center justify-center group transition-transform duration-300 hover:scale-105 active:scale-95'>
					Start a Project Discussion
					<span className='material-symbols-outlined group-hover:translate-x-1'>arrow_forward</span>
				</button>
			</div>
		</MatrixSection>
	)
}
export default StartProject
