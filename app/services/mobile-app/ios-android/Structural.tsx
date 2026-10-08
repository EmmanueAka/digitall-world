import React from 'react'
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faAndroid} from "@fortawesome/free-brands-svg-icons";

const Structural = () => {
	return (
		<section className='mt-24  w-full h-auto flex flex-col items-center justify-center'>
			<div className='w-full min-h-[250px] h-auto bg-white flex flex-col items-center justify-center space-y-8 '>
				<h2 className=" text-headline-xl font-serif font-semibold text-on-background mb-stack-md">Structural
					Capabilities</h2>
				<p className="font-body-lg text-body-lg max-w-xl text-center text-on-surface-variant">
					Comprehensive mobile solutions tailored for specific platform requirements and enterprise scale.</p>
			</div>
			<section className='px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-8 border border-secondary/10 rounded-lg mt-8 py-4'>
					<div className='col-span-2 flex items-center justify-between border border-primary/30 p-4 rounded-xl hover:border-primary bg-white'>
						<div>
							<div className='bg-primary/30 p-2 rounded-lg w-12 h-12 flex items-center justify-center hover:scale-110'>
								<FontAwesomeIcon icon={faApple} className='w-10 h-10'/>
							</div>
							<h3 className='text-2xl font-bold text-black'>Native iOS Engineering</h3>
							<p>Precision-crafted applications leveraging Swift and SwiftUI for maximum performance, fluid animations, and deep integration with the Apple ecosystem.</p>
						</div>
						<div className='w-full h-full group'>
							<div className='w-[300px] h-64 relative p-2 rounded-lg group-hover:border group-hover:border-primary/30 overflow-hidden'>
								<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7LZhh0XuBpQ62YLyMXC1yq2Z7uig9KWsvXieMGV0QOw6Vz_nfyx78UuH58zyoy-ZEudsatnHymogqX1Wi_q6bVOACqME3tMd2PkhyJKiHLCeI9tDua_3ZFA7DCAZL-A8EzeEvLallVfNIYy4Bxhp_n8GK7qn6mTOWoIG9vYWdtP061ss7_7EA3J_8rys31wF6m-dAv-396XXdegr3krH_dhSj2JF8zwFolLE3NEjASrn089_UkEolQ" alt="SwiftUI design" fill className="object-cover p-2 w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-300 " />
							</div>
						</div>
					</div>
					<div className='flex flex-col items-start justify-center bg-white border border-primary/30 hover:border-primary rounded-xl p-3 space-y-2'>
						<div className='bg-primary/30 p-2 rounded-lg w-12 h-12 flex items-center justify-center hover:scale-110'>
							<FontAwesomeIcon icon={faAndroid} className='w-10 h-10'/>
						</div>
						<h3 className='text-2xl text-black font-semibold'>Native Android</h3>
						<p>
							Robust architectures built with Kotlin and Jetpack Compose, ensuring scalability across the fragmented Android device landscape.
						</p>
					</div>
				</div>
			</section>
			<div className='px-12 mt-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full'>
					<div className=' bg-white border border-primary/20 p-4 group hover:border hover:border-primary/40 rounded-xl space-y-5 gap-4'>
						<span className='material-symbols-outlined group-hover:text-primary'>devices</span>
						<h3 className="font-headline-md text-headline-md text-on-background mb-3">Cross-Platform
							Solutions</h3>
						<p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-2xl ">Efficient development pipelines utilizing React Native and Flutter to deliver near-native experiences across multiple platforms from a single codebase.</p>
						<div className="mt-auto flex flex-wrap gap-2">
							<span
								className="font-caption text-caption font-semibold bg-surface-container text-on-surface px-3 py-1.5 rounded-full border border-outline-variant/20 group-hover:bg-primary/60 group-hover:text-white">React Native</span>
							<span
								className="font-caption text-caption font-semibold bg-surface-container text-on-surface px-3 py-1.5 rounded-full border border-outline-variant/20 group-hover:bg-primary/60 group-hover:text-white">Flutter</span>
						</div>
					</div>
					<div className='w-full h-full bg-white border-primary/20 p-6 group border  hover:border-primary/60 rounded-xl space-y-5'>
						<span className='material-symbols-outlined group-hover:text-primary'>corporate_fare</span>
						<h3 className='font-semibold text-xl'>Enterprise Mobility</h3>
						<p className='text-on-surface-variant'>Secure, scalable, and resilient mobile architectures designed to integrate with complex backend systems and manage high volumes of transactional data.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Structural
