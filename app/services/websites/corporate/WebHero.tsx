import React from 'react'

const WebHero = () => {
	return (
		<section>
			<div className='w-fll min-h-[80vh] relative overflow-hidden flex flex-col justify-center'>
				<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcBZvHenLEWs2fxCffOksIZg61x7lFi73ZL7sTAkRYUyBDTJTMdaI_rgakSe-uF_v0uiUlZlfaAZxCQXNO1OmelDK-Dtw7Js926mQtm_yHeVqS7aTwUo4SQoUx8AnY3bzRl1mt4XjbVVoFmatpX8XrOa3dxciaKBT34xD-dkQln8JdLnPxkKubmdokEtlN-yWrlQIC9IaxH5Pt63f6UNwgn-Z6PzZZ--nMi5Vm9lrVE7ANmdtPdzgWuA" alt="corporate office background" className="object-cover w-full h-full absolute inset-0 z-0"/>
				<div className='absolute inset-0 bg-on-background/70 z-10'></div>
				<div className='relative z-20 px-12 mx-auto stack-lg w-full h-full mt-24'>
					<div className='px-8 space-y-8 mt-8 md:mt-16'>
						<h1 className='font-semibold  text-5xl max-w-xl text-white'>
							Authoritative Corporate Presence
						</h1>
						<p className='text-white text-sm max-w-lg'>We design and engineer digital platforms that communicate enterprise reliability and strategic vision.</p>
						<button className='bg-tertiary-container px-4 py-3 text-white shimmer-btn '>Consult with our Strategists</button>
					</div>
				</div>
			</div>
		</section>
	)
}
export default WebHero
