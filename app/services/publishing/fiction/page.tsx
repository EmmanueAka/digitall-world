import React from 'react'
import FictionHero from "@/app/services/publishing/fiction/FictionHero";
import NarrativeLayout from "@/app/services/publishing/fiction/Narrative-Layout";
import ConceptualCover from "@/app/services/publishing/fiction/ConceptualCover";
import Formatting from "@/app/services/publishing/fiction/Formatting";
import FeaturedPublication from "@/app/services/publishing/fiction/FeaturedPublication";
import ReadyArchitect from "@/app/services/publishing/fiction/ReadyArchitect";

const Page = () => {
	return (
		<main className=''>
			<FictionHero />
			<NarrativeLayout />
			<ConceptualCover />
			<Formatting />
			<FeaturedPublication />
			<ReadyArchitect />
		</main>
	)
}
export default Page
