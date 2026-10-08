import React from 'react'
import MatrixSection from "@/components/StarsBackground";

const Architecture = () => {
	return (
		<section className='px-16'>
			<MatrixSection className='mt-12 w-full rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 md:p-12 shadow-md'>
				{/* Safe Container Patch: Standard div enforces the center alignment cleanly */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">

					<div className="flex flex-col gap-4 max-w-2xl">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-lowest/10 text-primary-fixed-dim font-label-md text-label-md w-fit">
							<span className="material-symbols-outlined text-body-md">architecture</span>
							Brand Architecture Onboarding
						</div>
						<h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-surface-container-lowest">
							Ready to Architect Your Brand’s Visual Legacy?
						</h2>
						<p className="font-body-lg text-body-lg text-surface-variant">
							Collaborate with our digital architects to design a durable, high-impact brand system that commands leadership in your market vertical.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto items-center justify-center">
						<button className="bg-primary shimmer-btn hover:scale-105 active:scale-95 hover:bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg transition-all text-center w-full sm:w-auto">
							Start Your Identity Project
						</button>
						<button className="bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-container-lowest font-label-md text-label-md px-8 py-4 rounded-lg transition-colors text-center w-full sm:w-auto">
							Review Specimen Book
						</button>
					</div>

				</div>
			</MatrixSection>
		</section>
	)
}
export default Architecture
