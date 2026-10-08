import React from 'react'
import {BrandHero} from "@/app/services/branding/branding-logo/BrandHero";
import {DisplayCard} from "@/app/services/branding/branding-logo/DisplayCard";
import {EngineeredPresence} from "@/app/services/branding/branding-logo/EngineeredPresence";
import TotalAccess from "@/app/services/branding/branding-logo/TotalAccess";
import Approach from "@/app/services/branding/branding-logo/Approach";
import Architecture from "@/Architecture";

const Page = () => {
	return (
		<main>
			<BrandHero/>
			<DisplayCard />
			<EngineeredPresence />
			<Approach />
			<TotalAccess />
			<Architecture />
		</main>
	)
}
export default Page
