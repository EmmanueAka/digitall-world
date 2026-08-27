import React from 'react'
import WebHero from "@/app/services/websites/corporate/WebHero";
import CoreEnterprise from "@/app/services/websites/corporate/CoreEnterprise";
import DesignMethodology from "@/app/services/websites/corporate/DesignMethodology";

const Page = () => {
	return (
		<main>
			<WebHero/>
			<CoreEnterprise />
			<DesignMethodology />
		</main>
	)
}
export default Page
