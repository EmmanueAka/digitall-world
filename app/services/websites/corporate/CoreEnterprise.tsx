import React from 'react'
import {ENTERPRISE_CARD} from "@/lib/constants";



const CoreEnterprise = () => {
	return (
		// 1. Cleaned parent section tracking fluid flex bounds safely
		<section className='w-full bg-white text-black font-sans'>
			{/* 2. FIXED: Changed h-[450px] to min-h-[450px] and mt-24 to pt-24 padding */}
			<div className='bg-white px-6 md:px-12 w-full min-h-[450px] pt-24 pb-16 max-w-7xl mx-auto'>

				{/* Header styling */}
				<h3 className='text-2xl font-black uppercase tracking-tight mb-8'>
					Core Enterprise Solution
				</h3>

				{/* 3. Added layout gap spacing sizes to grid matrices loops */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{ENTERPRISE_CARD.map((item, idx) => (
						<div
							key={idx}
							className='flex flex-col p-6 bg-[#e6eff8]/40 border border-[#6c757d]/10 rounded-2xl transition-all duration-300 hover:shadow-sm space-y-5'
						>
							{/* Icon Render Block */}
								<span className="material-symbols-outlined text-xl text-secondary">{item.icon}</span>
								<span className="font-black tracking-tight text-black text-lg max-w-8/12">{item.title}</span>

							{/* Description paragraph text */}
							<p className='text-sm leading-relaxed text-[#445d80] font-medium'>
								{item.des}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CoreEnterprise
