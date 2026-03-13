"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ServiceCard from "../Card/ServiceCard";
import ServiceModal from "../Modal/ServiceModal";

export default function ServicesSection() {
	const t = useTranslations("Services");
	const [selectedIndex, setSelectedIndex] = useState(null);

	const services = [
		{ icon: "/image/icons/icono botox.png" },
		{ icon: "/image/icons/Icono rellenos dermicos.png" },
		{ icon: "/image/icons/icono PRN.png" },
		{ icon: "/image/icons/icono PRP.png" },
		{ icon: "/image/icons/Icono TRT.png" },
		{ icon: "/image/icons/Icono manejo de peso.png" },
		{ icon: "/image/icons/Icono dermape.png" },
	];

	return (
		<>
			<section className="relative bg-[#f3f3f3] py-24 px-6 overflow-hidden">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
					{t("title")}
				</h2>

				<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
					{services.map((service, index) => {
						const num = index + 1;
						return (
							<ServiceCard
								key={index}
								title={t(`s${num}`)}
								description={t(`descripcion${num}`)}
								icon={service.icon}
								centered={index === services.length - 1}
								onClick={() => setSelectedIndex(num)}
								t={t}
							/>
						);
					})}
				</div>

				{/* Decoración */}
				<div className="absolute top-0 right-0 w-[400px] h-[400px] border border-gray-300 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
				<div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-gray-300 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />
			</section>

			{selectedIndex !== null && (
				<ServiceModal
					serviceIndex={selectedIndex}
					onClose={() => setSelectedIndex(null)}
				/>
			)}
		</>
	);
}
