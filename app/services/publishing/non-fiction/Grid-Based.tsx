import React from 'react'
import Image from "next/image";

const GridBased = () => {

	const graphicImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBvUvToLCxpUzk_3efveF19pue50DjIEvYl7hnKVJW3jGeMWsBdq7kBDv_BDfzTVx3nNL35Obw2rx4jgYLPc-HOTQ4Em1GzGiHKMEGcxGMtAHS0pDDFxlbf87ixP-Ze0xJWliGUK2OnWBR1hzkMLCFa16b11EG3f2dnONie2bynlaEwf4oMTWoCe48HFWd2zMN75ypL3pu28UkTNxmDm8KicHSrgRAlpOyxAf5ddVifkbZYyV60JP5HOg"
	return (
		<section className='px-12 mt-24h-[540px] '>
			<div className='h-24'></div>
			<div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<h2 className='text-4xl font-semibold font-serif'>Grid-Based Information Architecture</h2>
					<p className='text-sm mt-8'>Robust typographic grids form the foundation of our non-fiction layouts. We utilize complex, multi-column systems to establish clear hierarchies, allowing readers to navigate dense texts, footnotes, sidebars, and varied data with ease and comprehension.</p>
					<div className='space-y-4 mt-4'>
						<span className='flex items-center justify-start gap-1 font-semibold text-sm text-on-primary-fixed-variant'>
						<span className='material-symbols-outlined '>check</span>
						<span>Modular grid systems</span>
						</span>
						<span className='flex items-center justify-start gap-1 font-semibold text-sm text-on-primary-fixed-variant'>
						<span className='material-symbols-outlined '>check</span>
						<span>Strict typographic hierarchy</span>
						</span>
						<span className='flex items-center justify-start gap-1 font-semibold text-sm text-on-primary-fixed-variant'>
						<span className='material-symbols-outlined '>check</span>
						<span>Seamless marginalia integration</span>
						</span>
					</div>
				</div>
				<div className='w-full h-full'>
					<div className='relative w-full h-full group overflow-hidden'>
						<img src='https://lh3.googleusercontent.com/aida-public/AB6AXuCdztd1MwOo72ra9aq19rjcoPTQ1lhFp1x2xtOPx3DLj5sRgtIeIcG6eXSc00TxUJ4yd_FNjPK2POrg1ZHXU52wa4mlmFQzPRFXYYP80qnjDZRQkoNjz9SQni6UIPy4F41Mo_3fkC0J0QQDJpC0upVSnu841OaeFQWzBaOBqMwOYJF2rTNfYkTgcfs_ztXmhjvofz3r9cNq94qXwEHIHFg8arjv4EINp2ke_E18rycQoPzrxysR6J1P1Q' alt='image' className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'/>
					</div>
				</div>

			</div>
				<div className='mt-24 w-full h-[540px] grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-t border-on-secondary-container/40'>
					<div>
						<div className='relative w-full h-full group overflow-hidden'>
							<Image src={graphicImage} alt='Dashboard showing different maps' fill className='object-contain w-full h-full group-hover:scale-105 transition-transform duration-300' />
						</div>
					</div>
					<div className='flex items-start justify-center px-6 flex-col space-y-5'>
						<h3 className='text-4xl font-serif font-semibold max-w-lg '>Data Visualization & Indexing</h3>
						<p>Transforming raw data into clear, compelling visual narratives. We design bespoke infographics, charts, and tables that integrate seamlessly with the text. Coupled with intelligent, meticulously structured indexing, we ensure information is not just presented, but easily accessible.</p>
						<div className='flex items-center gap-3'>
							<div className='uppercase text-xs font-semibold px-2 py-1.5 bg-on-secondary-fixed-variant/20'>infographics</div>
							<div className='uppercase text-xs font-semibold px-2 py-1.5 bg-on-secondary-fixed-variant/20'>Smart Indexes</div>
						</div>
					</div>
				</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
						<div className='space-y-5'>
							<h3 className='text-4xl font-semibold font-serif'>Technical & Academic Formatting</h3>
							<p>Expertise in rigorous academic standards and enterprise reporting. We handle complex requirements including MathML integration, intricate citation styles (APA, Chicago, MLA), and automated cross-referencing, delivering impeccable, publication-ready files for specialized audiences.</p>
						</div>
						<div className='flex flex-row items-center justify-center gap-2'>
							<div className='bg-on-surface-variant/10 flex flex-col border border-on-secondary-container/20 items-center justify-center w-48 h-48 text-center'>
								<span className='material-symbols-outlined text-[48px] text-primary'>functions</span>
								<span className='font-bold mt-4'>MathMl Support</span>
								<span className='text-[8px]'>Complex Equations</span>
							</div>
							<div className='bg-on-surface-variant/10 flex flex-col border border-on-secondary-container/20 items-center justify-center w-48 h-48 text-center'>
								<span className='material-symbols-outlined text-[62px] text-primary'>format_quote</span>
								<span className='font-bold mt-4'>Citation Rigor</span>
								<span className='text-[8px]'>APA, MLA, Chicago</span>
							</div>
						</div>
					</div>
		</section>
	)
}
export default GridBased
