"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import TestimonialCard from "../Card/TestimonialCard";

const testimonials = [
	{
		id: 1,
		name: "MARIA GARCIA",
		service: "WEB DEV",
		text: "La mejor decisión para mi negocio este año.",
		stars: 5,
	},
	{
		id: 2,
		name: "JUAN PEREZ",
		service: "DISEÑO",
		text: "Muy profesionales y dedicados en cada detalle del proceso.",
		stars: 4,
	},
	{
		id: 3,
		name: "ANA LÓPEZ",
		service: "MARKETING",
		text: "Resultados visibles en menos de un mes de trabajo conjunto.",
		stars: 5,
	},
];

const TestimonialsSection = () => {
	const [index, setIndex] = useState(0);

	const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
	const prevStep = () =>
		setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

	return (
		<section className="relative py-32 px-6 text-center overflow-hidden min-h-[700px] flex flex-col justify-center">
			{/* Fondo */}
		
			<h2 className="text-5xl font-bold mb-20 italic">Comentarios</h2>

			{/* CONTENEDOR RELATIVO PRINCIPAL */}
			<div className="relative w-full max-w-6xl mx-auto h-[450px]">
				{/* BOTÓN IZQUIERDO - Posicionado absolutamente a la izquierda */}
				<button
					onClick={prevStep}
					className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 rounded-full hover:bg-white transition-all shadow-xl backdrop-blur-sm active:scale-95"
					aria-label="Anterior"
				>
					<ChevronLeft size={36} className="text-gray-800" />
				</button>

				{/* CONTENEDOR DE TARJETAS (Ocupa el centro) */}
				<div className="relative flex items-center justify-center w-full h-full overflow-visible">
					<AnimatePresence mode="popLayout">
						{[-1, 0, 1].map((offset) => {
							const itemIndex =
								(index + offset + testimonials.length) % testimonials.length;
							const data = testimonials[itemIndex];
							const isCenter = offset === 0;

							return (
								<motion.div
									key={`${data.id}-${offset}`}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{
										opacity: isCenter ? 1 : 0.4,
										scale: isCenter ? 1 : 0.75,
										x: offset * 380, // Distancia horizontal entre tarjetas
										zIndex: isCenter ? 30 : 10,
									}}
									transition={{ type: "spring", stiffness: 200, damping: 25 }}
									className="absolute"
									style={{ pointerEvents: isCenter ? "auto" : "none" }} // Evita clicks accidentales en laterales
								>
									<TestimonialCard {...data} isSide={!isCenter} />
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>

				{/* BOTÓN DERECHO - Posicionado absolutamente a la derecha */}
				<button
					onClick={nextStep}
					className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 rounded-full hover:bg-white transition-all shadow-xl backdrop-blur-sm active:scale-95"
					aria-label="Siguiente"
				>
					<ChevronRight size={36} className="text-gray-800" />
				</button>
			</div>
		</section>
	);
};

export default TestimonialsSection;
