import React from 'react'
import Header from "@/components/Header";
import Hero from "@/app/Hero";
import OurExpertise from "@/app/pages/our-expertise";
import OurApproach from "@/app/pages/our-approach";
import FeaturedProjects from "@/app/pages/FeaturedProjects";
import WhyDigitall from "@/app/pages/why-digitall";
import Testimonial from "@/app/pages/Testimonial";
import Contact from "@/app/pages/Contact";

const Page = () => {
	return (
		<main>
			<Hero />
			<OurExpertise />
			<OurApproach />
			<FeaturedProjects />
			<WhyDigitall />
			<Testimonial />
			<Contact />
		</main>
	)
}
export default Page
