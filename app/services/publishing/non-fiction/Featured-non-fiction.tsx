import React from 'react'
import Link from "next/link";
import Image from "next/image";

const FEATURED_CARD = [
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Ym_xY3y9W4WoaePIr7WnbSHJxR_6xls7qbiFdlwCDeRz7XXVp9_BSg4MRTJiyoBwsUFKA32Bx1KMLK5WeivVKWh9g2ksjepre5uAgo-XnitFsHRXnmtLbJJksIDlRcatWeinp9--yLDAh7UOMG86a6T-2RcIc91-kH0o2UwP_RnwiIEeejqiBmcJBuaTrHdOyiux_jM5kUGiHumOszIuy1UsoeSr-tHi6a4L7FpIIVlOtK6IveAuTQ", title: "Global Market Analysis", sub: "Economics / Data Visualization"},
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpgwXkPm4YOjf0_1_AxfusLWBLyoJAnNEwUz7SEILxrxACT739xQOE-KZ9hnOlFhysKp_eXJh5V8F8a_w4B5SAwZWIoqWDa0kmuzyHrVGo9ruc6dVB50EwURWwLmrjbwfTvC21pHlxUO0fkbBkxyYEUmNVP1o_i0A0uJ2furIUsXkJDxZtugzAcsEWeZiH3q42zfKXTUNVUPozi9wq1anKUYvu_o-Pal6Ye57LyIG-CbmRO3CMwVlnhg", title: "Medical Research Review", sub: "Academic / Technical Formatting"},
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfWUl49Hgeb69eXo-lqBw8wWB63FO77xyrnWtnKgWUUueHEhzkcTIQossyvPoHNgwmHaGn2a7KT-esB4c5PZSpLXXTUEz4Oiszq5TVI6nmlOQejDsYPWkAWbJLC7MsWphWg9GAchGHjMnBjjzMuT-gPaOwO4EUBnUfU1Q8fG0yybMyDZO2dpS5jNEfkmgUdUIXUFRpfH1sBapUAjV4pCLSQR1UdzC069IgRHUO3SQPFPN-wc5EuhBxbg", title: "Architectural Case Studies", sub: "Design / Grid Architecture"},
]

const FeaturedNonFiction = () => {
	return (
		<section className='bg-white mt-24'>
			<div className='px-12'>
				<div className='flex flex-row justify-between '>
					<h3 className='font-serif font-semibold text-2xl mt-16'>Featured Non-Fiction</h3>
					<span className='flex flex-row items-center justify-center gap-2 group  text-sm mt-16'>
					<Link href='/portfolio' className='group-hover:text-secondary'>View Full Portfolio</Link>
					<span className='material-symbols-outlined text-[8px] group-hover:translate-x-1 transition-transform duration-300 hover:text-secondary'>arrow_forward</span>
				</span>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mt-8'>
					{FEATURED_CARD.map((card, idx) => (
						<div key={idx} className='flex flex-col items-start  justify-between mb-12'>
							<div className='group w-full h-full relative overflow-hidden'>
								<img src={card.img} alt={card.title} className='object-cover w-full h-82 group-hover:scale-105 transition-transform duration-300 ease-in'/>
							</div>
							<p className='font-semibold mt-2 group-hover:text-sky-700'>{card.title}</p>
							<p className='text-[10px] group-hover:text-sky-700'>{card.sub}</p>
						</div>
					))}
				</div>
			</div>

		</section>
	)
}
export default FeaturedNonFiction
