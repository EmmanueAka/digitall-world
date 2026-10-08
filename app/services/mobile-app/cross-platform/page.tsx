import React from 'react'
import PlatformHero from "@/app/services/mobile-app/cross-platform/PlatformHero";
import PowerCodeBase from "@/app/services/mobile-app/cross-platform/PowerCodeBase";
import EnterpriseGrade from "@/app/services/mobile-app/cross-platform/EnterpriseGrade";

const Page = () => {
	return (
		<main className="text-black pt-28 pb-section-gap px-6 max-w-container-max mx-auto flex flex-col gap-section-gap">
			<PlatformHero />
			<PowerCodeBase />
			<EnterpriseGrade />
		</main>
	)
}
export default Page
