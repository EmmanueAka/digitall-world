import React from 'react'
import Image from "next/image";

const ECO_SYSTEM = [
	{icon: "web", title: "Web Applications", sub: "Custom functional platforms prioritizing intuitive UX architecture for complex user tasks.", tag: "COMPLEX LOGIC"},
	{icon: "article", title: "Blogs & CMS", sub: "Editorial-grade content management systems structured for massive content architectures."},
	{icon: "photo_library", title: "Digital Portfolios", sub: "Immersive, visually-driven showcases designed to highlight creative and technical case studies."},
]

const STRATEGIC_CARD = [
	{title: "Responsive Architecture", sub: "Fluid layouts that maintain structural integrity and aesthetic precision across every viewport, from ultra-wide monitors to compact mobile devices."},
	{title: "Accessibility Standards", sub: "Rigorous compliance with WCAG guidelines, ensuring inclusive digital experiences through precise color contrast, semantic HTML, and keyboard navigation."},
	{title: "Conversion-Centered", sub: "Strategic placement of visual hierarchy, micro-interactions, and clear calls-to-action designed specifically to guide user behavior and drive measurable outcomes."}
]

const CoreCapabilities = () => {
	return (
		<section className='px-12 mt-24'>
			<div className='border-b border-gray-300/40'>
				<h3 className='font-serif font-semibold text-4xl mb-4'>Core Capabilities</h3>
			</div>
			<div className=' grid grid-cols-1 md:grid-cols-3 gap-2 group'>
				<div className='border border-gray-400/20 bg-white p-4 col-span-2 relative w-full h-auto mt-8  '>
					<div className='flex items-start justify-between '>
						<div className='p-2 border border-gray-400/20 group-hover:text-shadow-on-primary-fixed-variant '>
							<span className='material-symbols-outlined text-[68px] text-secondary'>storefront</span>
						</div>
						<div className='uppercase bg-secondary/20 px-2 py-1.5 text-xs'>High Volume</div>
					</div>
					<div>
						<h3 className='text-secondary text-2xl font-semibold'>E-Commerce Ecosystems</h3>
						<p>Scalable, conversion-optimized storefronts designed for complex product catalogs and seamless transactional flows.</p>
					</div>
					<div className='h-48 w-full mt-2  overflow-hidden relative'>
						<Image src='https://lh3.googleusercontent.com/aida-public/AB6AXuCayIhT5KOF-vCjhc-wvTiNDOQpJLn1Bz1A_l6govbcQC-hH1X8e5-dmyQpKWLVI9fVEec6uH8FDy7zRX_UGvz1Y_OFA9mFGRBC-jLj8e4qR4L7qBPgtykzR3vGQzlx6ZKlKwpRx2wdeQb7h8KRU9dXlTdSjewuIVOoZK1CgTYp6A7GC4S4dhTNYDfeaTYXhvarzeM04ottUhAHVPldogxUn-nroTKnVDpuJa94yRVOZRnGHdaKL3QNiQ' alt='e-commerce site' fill className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300' />
					</div>
				</div>

				<div className='mt-8 flex flex-col items-start justify-center space-y-2 border border-gray-400/20 bg-white p-4 w-full h-auto'>
					<span className='material-symbols-outlined text-secondary'>domain</span>
					<h3 className='text-2xl font-semibold text-secondary'>Corporate Identity</h3>
					<p>Authoritative digital presences that communicate enterprise reliability and strategic vision.</p>
					<div className='w-full h-32 relative'>
						<Image src='https://lh3.googleusercontent.com/aida-public/AB6AXuDiNxb8NRpFWOD3opwO45hgbLCemsPIk_XaOyzuIVZMoCf5PzIOvHCCSGNP1tCgGOxq5c2QVcz0sveAcXSEE2rNZLq-fSnsy2InypzukKEOUbT1wSC3XFAUNWO0O6FgDyH-JAv0M6Ub1CuQ9gjoglF4we3_X4C5VzNknFByReJaRHwIpjzPbfg6UpbBzKOqPSoM-KcOGV0tmJqJGJ_zh79qvroTc6pn_0dJtAk7fejWAdv_qLWZYF7T5w' alt='Corporate Identity' fill className='object-cover ' />
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-2 group mt-2'>
				{ECO_SYSTEM.map((item, idx) => (
					<div key={idx} className='flex flex-col items-start border border-gray-400/40 p-2 bg-white justify-center space-y-3'>
						<div className='flex items-center justify-between w-full px-2 mt-4 text-secondary'>
							<span className='material-symbols-outlined'>{item.icon}</span> <p className='uppercase text-xs font-semibold p-2 bg-secondary/30'>{item.tag}</p>
						</div>
						<div className='px-2 space-y-2 mb-8'>
							<h3 className='text-xl font-bold'>{item.title}</h3>
							<p className='text-sm text-on-primary-fixed-variant'>{item.sub}</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full h-auto mt-12 flex items-center justify-center'>
				<div className='w-full bg-primary/10 flex flex-col p-8 items-start justify-between'>
					<h3 className='font-serif font-semibold text-3xl'>
						Strategic UX/UI Design
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-2 group mt-4'>
						{STRATEGIC_CARD.map((item, id ) => (
							<div key={id} className=''>
								<h3 className='text-secondary font-semibold text-xl'>{item.title}</h3>
								<p className='mt-2 text-'>{item.sub}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
export default CoreCapabilities
