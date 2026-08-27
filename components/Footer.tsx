import React from 'react'
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='h-auto w-full border-t border-gray-400/50 bg-surface-container px-8 mt-24'>
			<div className='grid grid-cols-2 md:grid-cols-4 mt-24 gap-4'>
				<div className='mb-16'>
					<div className=' rounded-full w-10 h-10 bg-black'>
						<img src='/digitally-logo.png' className='object-contain'/>
					</div>
					<h1 className='text-2xl font-bold text-on-primary-fixed-variant'>DigitAll <span className='font-light'>World</span></h1>
					<p className='mt-6 text-gray-500 text-sm'>
						<span>&copy; 2022 Signs DigitAll Word. <br />Precision in Execution, vision in strategy. </span>
					</p>
				</div>
				<div className='space-y-2 flex flex-col justify-start text-sm text-gray-500'>
					<h2 className='uppercase font-semibold text-black '>Services</h2>
					<Link href='/book-design' className='hover:text-on-secondary-container'>Book Design</Link>
					<Link href='/websit-design' className='hover:text-on-secondary-container'>Website Design</Link>
					<Link href='/mobile-design' className='hover:text-on-secondary-container'>Mobile Design</Link>
					<Link href='/graphics-design' className='hover:text-on-secondary-container'>Graphics Design</Link>
				</div>
				<div className='space-y-2 flex flex-col justify-start text-sm text-gray-500'>
					<h2 className='uppercase font-semibold text-black '>Company</h2>
					<Link href='/career' className='hover:text-on-secondary-container'>Careers</Link>
					<Link href='/contact' className='hover:text-on-secondary-container'>Contact Us</Link>
				</div>

				<div className='space-y-2 flex flex-col justify-start text-sm text-gray-500'>
					<h2 className='uppercase font-semibold text-black '>Legal</h2>
					<Link href='/privacy' className='hover:text-on-secondary-container'>Privacy Policy</Link>
					<Link href='/terms' className='hover:text-on-secondary-container'>Terms of Service</Link>
				</div>
			</div>
		</footer>
	)
}
export default Footer
