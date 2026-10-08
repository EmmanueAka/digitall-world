import React from 'react'
import StarBackground from "@/components/StarsBackground";
import MatrixSection from "@/components/StarsBackground";

const Contact = () => {
	return (
		<MatrixSection className='mt-6 bg-gray-800 h-[400px] relative overflow-hidden flex items-center justify-center px-8'>
			<div className='flex items-center justify-center flex-col '>
				<h2 className='text-5xl font-bold text-white mt-16 text-center'>Ready to engineer your digital future?</h2>
				<p className='text-gray-100 text-sm text-center max-w-lg mx-auto mt-5'>Partner with DigitAll World to build robust, scalable, and beautifully designed digital platforms that drive your business forward.</p>
				<button className='px-4 py-2 transition-transform duration-300 bg-tertiary-container mt-5 hover:text-white  hover:bg-secondary-fixed-dim cursor-pointer hover:scale-105 hover:rounded-full hover:border border-white active:scale-95'>Start a Project</button>
			</div>
		</MatrixSection>
	)
}
export default Contact
