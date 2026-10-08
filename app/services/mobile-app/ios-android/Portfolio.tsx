import React from 'react'

const PORTFOLIO_CARD = [
	{icon: "view_in_ar", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVHXjugCSLRyp3qSh9mRwuUghCFRjv-R8Z7RX1W_JIZsYIDE3hEIgZi_FrUH6ZlmYTHaz994TwL2tFKXUM5s_QDshLYX8wKrlRgETmG9G2zkZfC7mbJk_cS1vek65t7xChI2Z1mfRqGDyBOKZRecQxEPwfwApONteCKmYTapDUtsUa5PN4IsfOWuJVyEtG1PIKSSfcqmbVcRABtLH0u8HfiKk28PzfJv3prtNOnFfACw57stvz8FZXvQ", title: "ArchView", desc: "Augmented reality application for visualizing architectural models in real-world spaces with millimeter precision.", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNc41bw9hNri4qbnS3Z9zGmZDz_4PG9k51cro5fsg8uzqHcfsDOK9MOVknBmKxwfgU1ptEOaQcNno_NQPrwLTAAG3UjUkIdA0XCy4H56J2sUnkUu-fe0CPldDkKyeLYz38ZBg6HJSpC-r5t48Z7PAiHw5jPHv9ttR8ralUCHWeZ5GM_GhBWwx0Prfm9tIvPXIGv4C0R1lOHQqYTOeKAtU4XGcWWQZNU2aR5pEHM6urQovlo00E9QKj_w", img3: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9uMo1aUx_HpScSc23FBE5-K8GLt66ulrMMQ9l8Kjsh6oWabd-7bE-TgyGN5dpZzWjlz1CLQDU-ijguKO9Me7Cyxv62nWj2ZC7gNkwkuwkw50DJmniaJrSK5b5Fz-GlL9CKfxeIttqngDl6Z-NJQ2B9PuEcdaoP8_yX-YBamZQ7hazG3viUni6Vj_kFjWDgcPv6nRpgLvmVlkj2zI5SvUCbZtii7Aiol_QgZ9X1sbeIbY7kaXWFsDI6w" },
	{icon: "construction", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4QeFLLlF9Cdh9w5BfpTFDb7-8pP-Pl8gvj9fOFObT1U8zuyNL8yx4AeWnV2t5Kyy8FxklD48XeuwcVLQORzvh2MgUAs7hmPAL4GVSKbDFtkwjXPkyG2r5WSaoVFu8upRPAzx2oPB-ozqkffHtF8M8f98ylgHf8mY4OYs-3jkivLqwde5n1NrrswXUuwTb_jiPYOwdjm50UI1_gPBzXfUceQ8U0G7BakU7ZuecmLqBmY2T3KAm4h2FqQ", title: "BuildTrack", desc: "Comprehensive project management tool tailored for construction sites, enabling real-time progress tracking.", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgmVNJRXwFvnr1_RaSgzyt68R2Nc7F8h3KNIaypaosBCeSor0ucdb-CQvx5XgFC8uwPyLOSlCvrAnHCD2QbkClCgDlIjtMo-50RbEoQcR9WmGhOIe57DVGd7btJYz5j4OFA8RGauiFigDPqi7nDybKwiBekQqKmtcMHpibYK6q9VZEGXtJ5DlaBL4mjpzQcJC_HnOD0vkHC-5kMcvC6FyvryTXiPCfP-xiwsEOXODB6_a0n0ZRrMx5SA", img3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFfcJJGhMmQn2LO3SeGRjzx41CYP9V2fNx2YMKy-ft9lD3sc6WzOJvEkxCHzPOhnAYOmp1i5x5rMHLuqWWkLUlaTS7r1Uec865CpISy0W1W60aI2dGFMTeAbMtV_eh82gL95m-9EcNExPdkL6AY1EmLilGZqMv43wERFwRMsv96yEC5pmK82klNN4KLmbj8TmxJZKYynNMvn9XLLMQvz7v-m2ZuaqYnGpDd3sdKl16qv0E6fmAH1UCEg" },
	{icon: "library_books", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ5woVAVM1IzJiR9zdmKqX2qAGRjvKgOaQAsv9brcJQl_8ocBVMfpj73YfM48co7Dw36HPnbe2ASUhl6isKeD4Clqb1bjqcWYAbEywFbjnkOBpJZp0rmHoCNlMqGWXM8DJk_8lpwJ2godMFkZ83ytV68Zt3-78mS31UwCMErJ5fS2CBGMJsDXSOz2ibq7dAQ61nGecWr322Dr4AM5rLzGSb0naguCrrTJSfbCOd1mJl_a9lIsBbhlG0g", title: "DigitalLibrary", desc: "Our agency's proprietary content hub featuring design patterns, code snippets, and architectural guidelines.", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-SpCP68l9D5STw-s5JfJfM4xlsOe0p9_wgJOhnutLp4099vaCDmzD36iGWRuFQa5Qa6mebMnQPAu3mObXlQIOU6Z9jhEzlxqr-UIiBQyRoXOjakGXtT1tl_-bvqlLJgwCXoKWMo9HnB-EuFfrRCtEWczVN4WTW3QAwjZQtlY6XcA1s8hCpdjzWzSWxF4wY7TISaJlMb-gfRw4nmHGD4UrUgzXmN6yqcWtdjOFgvmhkNUvMC8gq4kyqA", img3: "https://lh3.googleusercontent.com/aida-public/AB6AXuApGH_4P6t7qH6MwIbTrq0ZYqiDediwOGhDgcSc-b-9EEUpI8K0isr76AstVwRhbHMLSofu6ZaMGaGIaWK-KUvRpgXeGlhebH5nQtuxrJN_8EE6yY7tKCJUEHIUMPJfbXSnNJIfraVteADqvVNJVH-LZlR_v4pujCxo2We9dl2CqM14A0L8PNVpzLwWnimsgPqMY9wDwarSHUInFHbvG1YTK3nZO6l0npA-5ZNZXq5xFP0JeWVQR4TdGg" }
]
const Portfolio = () => {
	return (
		<section className='mt-24 bg-white px-12 mx-auto'>
			<div className='flex items-center justify-center flex-col space-y-5'>
				<h3 className='uppercase text-xs tracking-widest text-center text-primary font-semibold mt-24'>Portfolio</h3>
				<p className='font-serif font-semibold text-4xl text-center'>Our Published App</p>
				<p className='max-w-lg text-center'>Experience our engineering firsthand. Download these applications designed and built by our team.</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8'>
				{PORTFOLIO_CARD.map((card, id) => (
					<div key={id} className='bg-surface-container-lowest border border-outline-variant/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col mb-12'>
						<div className='h-48 bg-surface-container overflow-hidden relative'>
							<img src={card.img} alt={card.title}/>
							<div className='absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent'></div>
							<div className='absolute bottom-4 left-6 w-16 h-16 bg-white rounded-2xl shadow-md p-2 flex items-center justify-center border border-outline-variant/10'>
								<span className='material-symbols-outlined text-primary text-4xl'>{card.icon}</span>
							</div>
						</div>
						<div className='p-6 flex flex-col flex-1'>
							<h3 className='font-headline-md text-headline-md text-on-background mb-2'>{card.title}</h3>
							<p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-1'>{card.desc}</p>
							<div className='flex flex-col sm:flex-row gap-3 mt-auto w-16 relative'>
								<img src={card.img2} alt={card.title} className='rounded-lg'/>
								<img src={card.img3} alt={card.title} className='rounded-lg'/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default Portfolio
