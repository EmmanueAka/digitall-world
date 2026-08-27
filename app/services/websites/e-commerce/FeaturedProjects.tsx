import React from 'react'
import Image from "next/image";

const FEATURED_CARDS = [
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5FjKD3m316J8CYN-_5Nu6xKb9bTMEP0V7Hv6cQIQHkLoMPvTDkJjWnL9kqqixQ4Cu99zegLmyAcRsxVv7A-tsuMmJqPMMNa5mpFiAYf-D1lMbGQ47Kq3q8BXVJlUycUvGmQ-_zii20C7f-Yd913py37Ny1ZFrU19UrKQJh3SNTVsN6QIsOHurUHTtLZY05mFI4j6PE0j4uLX8n8CURmS9kiBup-HqfC-9OF4B4gWETCdSwZ2YRNgxdg", title: "Apex Financial Group", desc: "Enterprise data visualization platform and secure client portal."},
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGqVq7NPiPPe--bXki72imM2sKYGKDz4RHO7TT4vn-nJo24m5zpu65Rl9WdvVDfJLLg9t2AFNnyVWh_2KQc7E7e35AhAbUMC9AMRt0TqBH75X2qtHmVC5J7bTaDUTlV5wu8aph7weaPpI2FHuoSIaCuD3-PQtAvUIHh36Fe4CrfzBaCzj7OGMMucov86m0kZ25l5RIGpLf8q9aA36KPnXwda709shm1L-1whAE07MmSVTwOci74JUxDA", title: "Global News Network", desc: "High-volume editorial CMS handling 10M+ monthly readers."},
	{img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_5nGcjLdl0mQlxstkvQJhuJXZEVDHESmphjQyqvE11nQSGf4Yk4Ui0JiDM_40ohHRkNgo13vLaqpaee0crSEjn4cGjSjLq_Jy9AIFnF31Km6lV9qa9N4nb1m6uaDkYJwrx4qg3gQVeS0jGdfegAGBq1LhrxEkRQS0dmipwC0U3KLNyizmUvn_srJByGkVly-_pGTS07m_of-qe9JpWAto40c4irsPGp5UC4D9iSBYw7x8pAztu3HICA", title: "Lumina Studio", desc: "Immersive, WebGL-powered digital portfolio for a creative agency."},
]

const FeaturedProjects = () => {
	return (
		<section className='mt-24 px-12 mb-16'>
			<div className='font-semibold text-3xl'>
				Featured Web Projects
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4'>
				{FEATURED_CARDS.map((item, id) => (
					<div key={id} className='flex flex-col items-start justify-start group'>
						<div className='relative overflow-hidden w-full h-[200px]'>
							<Image src={item.img} alt={item.title} fill className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'/>
						</div>
						<div>
							<h3 className='font-semibold mt-2 text-xl'>{item.title}</h3>
							<p className='text-lg text-gray-600'>{item.desc}</p>
						</div>
					</div>
				))}
			</div>

		</section>
	)
}
export default FeaturedProjects
