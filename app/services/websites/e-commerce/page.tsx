import React from 'react'
import Hero from "@/app/services/websites/e-commerce/Hero";
import CoreCapabilities from "@/app/services/websites/e-commerce/CoreCapabilities";
import DesignMethodology from "@/app/services/websites/e-commerce/Design-Methodology";
import FeaturedProjects from "@/app/services/websites/e-commerce/FeaturedProjects";
import StartProject from "@/app/services/websites/e-commerce/StartProject";

const Page = () => {
	return (
		<main className='text-black'>
			<Hero />
			<DesignMethodology />
			<CoreCapabilities />
			<FeaturedProjects />
			<StartProject />
		</main>
	)
}
export default Page
