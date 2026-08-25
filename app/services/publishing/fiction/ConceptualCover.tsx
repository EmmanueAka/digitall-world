import React from 'react'
import Image from "next/image";


const ConceptualCover = () => {
	return (
		<section className='px-24'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='flex items-center justify-center px-8 group'>
					<div className='group border bg-white border-gray-300/40 rounded-lg p-2 overflow-hidden'>
						<img loading="lazy" src='https://lh3.googleusercontent.com/aida-public/AB6AXuD5EqTNAjm0aIjKhCTdaNSKwvjusdnQ6LhAJoJ0qRcoFYyoDVcUuG2N5zHR-ddqyko-1E_MaIk_yDB6YML5u3BMcNJzjq-a8hTe6Gv_D2x1gwdH9XaUii9JzMboxMaija_NpvvkzkC7iW8t5ybWjhJCiwSY86ajY6Jbehg71D18BkOgmfJ872xnhtPQ4XqXJS_xaPA4gSyzIrwrBI-o18ogLsuy_QpVksAC-Wkqj_RAMbX9mOxtKH-MmA' alt='Book back cover design sample' className='object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg'/>
					</div>
				</div>

				<div className='flex items-center justify-start'>
					<div className='max-w-lg px-8'>
						<h3 className='font-black font-serif text-3xl'>Conceptual Cover <br/> Illustration</h3>
						<p className='text-sm mt-4'>The exterior must be a precise distillation of the interior. We eschew generic imagery in favor of bespoke, conceptual illustrations that capture the narrative essence. Our designs function as visual anchors—striking, memorable, and strategically aligned with the target readership while maintaining our signature modern, structural aesthetic.</p>
						<div className='flex flex-row gap-2'>
							<div className='px-4 py-2 uppercase font-bold bg-on-secondary-container/10 border border-on-secondary-container/20 text-sm mt-6'>Custom Art</div>
							<div className='px-4 py-2 uppercase font-bold bg-secondary/10 border border-on-secondary-container/20 text-sm mt-6'>Visual Metaphor</div>

						</div>
					</div>
				</div>
			</div>
			<div className='mt-16 border-b border-gray-300 w-full'/>
		</section>
	)
}
export default ConceptualCover
