import React from 'react'
import MobileHero from "@/app/services/mobile-app/ios-android/MobileHero";
import Structural from "@/app/services/mobile-app/ios-android/Structural";
import Portfolio from "@/app/services/mobile-app/ios-android/Portfolio";

const Page = () => {
	return (
		<main className='text-black'>
			<MobileHero/>
			<Structural />
			<Portfolio />
		</main>
	)
}
export default Page
