import React from 'react'

const NarrativeLayout = () => {
	return (
		<section className='mt-24 px-24 mb-24'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='mt-8'>
					<h2 className='font-serif font-semibold text-4xl'>Narrative Layout</h2>
					<p className='mt-4'>
						A compelling story requires a canvas that sustains attention. Our structural approach focuses on reading endurance through rigorous grid systems, optimal measure (line length), and leading. We employ character-based typography—selecting typefaces that subtly reflect the tone, era, or pacing of the narrative without distracting from the words themselves.
					</p>
					<ul className='flex flex-col text-[12px] font-black mt-4'>
						<li className='flex flex-row items-center text-on-primary-container gap-2'>
						<span className='material-symbols-outlined'>check</span> Stamina-optimized margins
						</li>
						<li className='flex flex-row items-center text-on-primary-container gap-2'>
							<span className='material-symbols-outlined'>check</span> Contextual typeface pairing
						</li>
						<li className='flex flex-row items-center text-on-primary-container gap-2'>
							<span className='material-symbols-outlined'>check</span> Orphan and widow eradication
						</li>
					</ul>
				</div>
				<div className='flex items-center justify-center'>
					<div className='relative overflow-hidden group'>
						<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt93XPt8H3qCoIBu6AD1uUN4iknhQXIbwFi-8mqeQG4x1l4DF13hibWeiPf9-RKZ7z6zExef94_5P2QOrH6z2gprJrBQpRyTudg2D1bydqfGvFmzjK4HhAGwqoMS4d7GKlJLOXfUQVln5e8BFN5X7iKbheiXm2lWIwAP7lec1kJ5B8JzB8zxvvbhzJspHhKyF7r3h5IeZOgvrcMtMLPPnPFtPbUiNKaLvhpwjykUk1zrENREwis04_CQ" alt="Open book" className='object-cover transition-transform duration-500 ease-in group-hover:scale-110 '/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default NarrativeLayout
