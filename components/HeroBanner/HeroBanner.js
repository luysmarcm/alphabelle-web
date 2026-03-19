import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroBanner = () => {
	const t = useTranslations("Banner");

	return (
		<section className="relative w-full bg-[#e9e3db] overflow-hidden">
			<div
				className="relative w-full h-[650px] md:h-[750px] flex items-center justify-center"
				style={{
					clipPath: "ellipse(120% 100% at 50% 0%)",
				}}
			>
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: 'url("/image/banner.png")',
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>

				{/* Overlay beige translúcido */}
				{/* <div className="absolute inset-0 bg-[#e9e3db]/70 z-10" /> */}

				{/* Contenido */}
				<div className="relative z-20 flex flex-col items-center text-center px-6 pt-24">
					{/* Logo */}
					<div className="mb-8">
						<Image
							src="/image/logo.png"
							alt="AlphaBelle Wellness"
							width={580}
							height={580}
							className="object-contain"
						/>
					</div>

					{/* Texto principal */}
					<p className="max-w-xl text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-8">
						{t("title")}
					</p>

					{/* Botón */}

					<Link href="#contact" passHref>
						<button className="mx-auto w-fit border-2 border-black px-10 py-3 rounded-2xl font-semibold hover:bg-black hover:text-white transition">
							{t("buttonc")}
						</button>
					</Link>
				</div>
			</div>

			{/* Texto inferior */}
			<div className="py-20 px-6 max-w-4xl mx-auto text-center">
				<p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
					{t("parrafo1")}
				</p>
			</div>

			{/* Círculo decorativo */}
			<div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 border border-gray-300 rounded-full opacity-40" />
		</section>
	);
};

export default HeroBanner;
