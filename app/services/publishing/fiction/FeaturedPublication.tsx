import React from 'react'
import Link from "next/link";

const FEATURED_CARD = [
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLBHMJ1XUYmF4PKB0uFf36-DMbXTPA80yQYDZrMskTdaoJSWO9WCS832DcRP7rjBc6DP5qa0peun4Q9CR9yun5XE3Fk4eFBceA0lfghnMAPirMet_5u5CJgGEFBkckQk1jgFeqYMwjocZg6LAVy2p56OAriI8KkU41iwQcBzhPph1WDK1-Vz0xLh0Y3xKWkOHzHsfC5RKsi4Ghv6jI-bBtBpl-zIB7kIL2ZKd_wYuOuo1d31EWubuVEg", title: "The Silent Architect", sub: "Thriller / Print & Digital"},
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDCNt59WWMkVXpI9YF07vqaTAppNbPLVNBme3Z3FgSU8GZmi86AgqTEHrAaHYz7tPabFhsktY95mKLbLInPK3mZEMdjzMLWJSM1FGOAhUPH4nGEw5KbylVhv7OOYksY0aMKmBS-F8Q9XBb5eK5buUwhGc23ZIAZ2L6dex_CsMeirWAatnPrc_pD2Ql4o_QIGkMfDNdXFfeO9N91WW3ULRLDAy0AmGNaDVAjHXz6wjUb6MpW8ZOaXpPkg", title: "Echoes in Code", sub: "Sci-Fi / EPUB Optimization"},
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg27aLulNpO66Y-2oGdOaXMhXP9G87wU1RkGiXhPTaO8ggT43NTxKN5j42lINIWlgAspLudhEVnR6jwi9tvvdRNt6pjgbKawIXwv8TLph8-NWkyT6tREp4c59NddduSSyAl3znB_mSNQwRAvIrhZCM5F3sB8N_QdDfM3j5G_btEZYqxK79knNYgx6XEppc3l_DgZ5V1dWE6reL2--1XIi7dvPcjCe7BGC97hnHz20b6-yfIC4AjnHuQQ", title: "Structural Integrity", sub: "Literary Fiction / Cover Design"},
]
const FeaturedPublication = () => {
	return (
		<section className='px-24 mt-24'>
			<div className='flex flex-row justify-between'>
				<h3 className='font-bold text-2xl'>Featured Publication</h3>
				<span className='flex flex-row items-center justify-center gap-2 group  text-sm'>
					<Link href='/portfolio' className='group-hover:text-secondary'>View Full Portfolio</Link>
					<span className='material-symbols-outlined text-[8px] group-hover:translate-x-1 transition-transform duration-300 hover:text-on-secondary-fixed-variant'>arrow_forward</span>
				</span>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mt-8'>
				{FEATURED_CARD.map((card, idx) => (
					<div key={idx} className='flex flex-col items-start  justify-between'>
						<div className='group relative overflow-hidden'>
							<img src={card.img} className='object-cover w-[300px] h-82 group-hover:scale-105 transition-transform duration-300 ease-in'/>
						</div>
						<p className='font-semibold mt-2 group-hover:text-sky-700'>{card.title}</p>
						<p className='text-[10px] group-hover:text-sky-700'>{card.sub}</p>
					</div>
				))}
			</div>
		</section>
	)
}
export default FeaturedPublication
