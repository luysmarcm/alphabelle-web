
import AboutSection from "@/components/About/AboutSection";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Banner from "@/components/Banner";
import ContactSection from "@/components/Contact/ContactSection";
import MapSection from "@/components/Contact/Mapsection";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ServicesSection from "@/components/Servicies/ServicesSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import { Contact } from "lucide-react";

export default function Home() {
	
	return (
		<main>
			<HeroBanner />
			{/* <Banner /> */}
			<ServicesSection/>
			<BackgroundWrapper/>
			<ContactSection/>
			<MapSection/>
		</main>
	);
}	
