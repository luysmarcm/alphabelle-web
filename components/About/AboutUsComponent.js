import React from "react";
import Image from "next/image";

const AboutUsComponent = ({ t }) => {
	return (
		<section className="relative w-full py-20 bg-white overflow-hidden flex flex-col items-center">

			{/* Decoración Circular Izquierda — solo desktop */}
			<div className="hidden md:block absolute left-[-100px] top-20 w-[400px] h-[400px] border border-gray-200 rounded-full z-0 pointer-events-none" />

			{/* Header / Logo y Texto Superior */}
			<div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 mb-16">
				<div className="mb-8">
					<Image
						src="/image/logo.png"
						alt="AlphaBelle Wellness"
						width={280}
						height={280}
						className="object-contain"
					/>
				</div>
				<p className="text-gray-600 leading-relaxed font-light italic">
					{t("subTitle")}
				</p>
			</div>

			{/*
			  ── Layout Principal ──────────────────────────────────────────
			  MÓVIL:   flex column, flujo normal, sin altura fija
			  DESKTOP: posicionamiento absolute original, h-[600px]
			*/}
			<div className="
				relative w-full max-w-5xl px-6
				flex flex-col gap-8 items-center
				md:block md:h-[600px] md:gap-0
			">

				{/* Título + Texto (derecha en desktop) */}
				<div className="
					w-full text-center
					md:absolute md:right-10 md:top-0 md:flex md:flex-col md:items-end md:max-w-md md:text-right md:w-auto
				">
					<h3 className="text-4xl font-black italic text-negro uppercase tracking-tighter">
						{t("heading")}
					</h3>
					<p className="mt-4 text-gray-600 font-light leading-relaxed">
						{t("text")}
					</p>
				</div>

				{/* Tarjeta de Imagen Principal */}
				<div className="
					w-64 h-80 bg-[#f2f0e9] rounded-[2rem] shadow-sm overflow-hidden flex items-center justify-center
					md:absolute md:left-10 md:top-10
				">
					<div className="text-gray-400 italic text-sm">Imagen Principal</div>
				</div>

				{/* Tarjeta MISIÓN */}
				<div className="w-full max-w-md md:absolute md:right-0 md:bottom-24">
					<div className="relative bg-[#f2f0e9] p-8 rounded-2xl mt-8 md:mt-0">
						{/* Icono Flotante Misión — centrado en móvil, esquina en desktop */}
						<div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-top-6 md:-right-6 w-16 h-16 bg-[#333] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
							<Image
								src="/image/icons/icono misión.png"
								alt="Misión"
								width={35}
								height={35}
								className="object-contain invert"
							/>
						</div>
						<h4 className="text-center font-bold italic text-lg mb-2">Misión</h4>
						<p className="text-sm text-center text-gray-700 font-light">
							{t("mision_content") ?? "Brindar soluciones de bienestar con la más alta precisión médica."}
						</p>
					</div>
				</div>

				{/* Tarjeta VISIÓN */}
				<div className="w-full max-w-sm md:absolute md:left-0 md:bottom-0">
					<div className="relative bg-[#f2f0e9] p-6 rounded-2xl mt-6 md:mt-0">
						{/* Icono Flotante Visión — centrado en móvil, esquina en desktop */}
						<div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-top-6 md:-left-6 w-16 h-16 bg-[#333] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
							<Image
								src="/image/icons/icono visión.png"
								alt="Visión"
								width={35}
								height={35}
								className="object-contain invert"
							/>
						</div>
						<h4 className="text-center font-bold italic text-lg mb-2">Visión</h4>
						<p className="text-sm text-center text-gray-700 font-light">
							Ser referentes internacionales en medicina regenerativa.
						</p>
					</div>
				</div>

			</div>
		</section>
	);
};

export default AboutUsComponent;
