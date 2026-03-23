"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl"; // Importación necesaria
import TestimonialCard from "../Card/TestimonialCard";

const TestimonialsSection = () => {
    const t = useTranslations("Testimonial");
    const [index, setIndex] = useState(0);

    // Definimos las llaves de los testimonios que existen en tu JSON
    const testimonialKeys = ["persona1", "persona2", "persona3", "persona4"];

    // Construimos el array dinámicamente basado en las traducciones
    const testimonials = testimonialKeys.map((key, i) => ({
        id: i + 1,
        name: t(`${key}.nombre`),
        profession: t(`${key}.profesion`),
        text: t(`${key}.mensaje`),
        stars: 5, // Puedes ajustar esto si lo agregas al JSON después
    }));

    const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevStep = () =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="relative py-32 px-6 text-center overflow-hidden min-h-[700px] flex flex-col justify-center">
            {/* Título traducido */}
            <h2 className="text-5xl font-bold mb-20 italic">{t("title")}</h2>

            <div className="relative w-full max-w-6xl mx-auto h-[450px]">
                {/* BOTÓN IZQUIERDO */}
                <button
                    onClick={prevStep}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 rounded-full hover:bg-white transition-all shadow-xl backdrop-blur-sm active:scale-95"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-gray-800" />
                </button>

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
                                        x: offset * 380,
                                        zIndex: isCenter ? 30 : 10,
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className="absolute"
                                    style={{ pointerEvents: isCenter ? "auto" : "none" }}
                                >
                                    {/* Pasamos los datos traducidos a la Card */}
                                    <TestimonialCard 
                                        name={data.name} 
                                        text={data.text} 
                                        stars={data.stars}
                                        profession={data.profession} 
                                        isSide={!isCenter} 
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* BOTÓN DERECHO */}
                <button
                    onClick={nextStep}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 rounded-full hover:bg-white transition-all shadow-xl backdrop-blur-sm active:scale-95"
                    aria-label="Siguiente"
                >
                    <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-gray-800" />
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;