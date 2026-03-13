import AboutSection from "./About/AboutSection";
import TestimonialsSection from "./Testimonials/TestimonialsSection";


const BackgroundWrapper = () => {
	return (
		<div
			className="relative w-full"
			style={{
				backgroundImage: "url('/image/city.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}
		>
			{/* Overlay */}
			{/* <div className="absolute inset-0 bg-[#f2f0e9]/60 z-0" /> */}

			<div className="relative z-10">
				<AboutSection />
				<TestimonialsSection />
			</div>
		</div>
	);
};

export default BackgroundWrapper;