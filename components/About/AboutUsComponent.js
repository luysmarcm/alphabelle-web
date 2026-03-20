import React from "react";
import Image from "next/image";

const AboutUsComponent = ({ t }) => {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden flex flex-col items-center">

            {/* Decoración Circular Izquierda */}
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

            {/* Contenedor de Título e Imagen Principal */}
            <div className="relative w-full max-w-5xl px-6 flex flex-col gap-8 items-center md:block md:h-[450px]">
                <div className="w-full text-center md:absolute md:right-10 md:top-0 md:flex md:flex-col md:items-end md:max-w-md md:text-right md:w-auto">
                    <h3 className="text-4xl font-black italic text-negro uppercase tracking-tighter">
                        {t("heading")}
                    </h3>
                    <p className="mt-4 text-gray-600 font-light leading-relaxed">
                        {t("text")}
                        <br/>
                        {t("text1")}
                        <br/>
                        {t("text2")}
                    </p>
                </div>

                <div className="w-64 h-80 bg-[#f2f0e9] rounded-[2rem] shadow-sm overflow-hidden flex items-center justify-center md:absolute md:left-10 md:top-10">
                    <div className="text-gray-400 italic text-sm">Imagen Principal</div>
                </div>
            </div>

          <div className="w-full max-w-4xl px-6 flex flex-col items-center gap-20 md:gap-32 mt-16">
    
    {/* Tarjeta MISIÓN (Arriba - Desplazada a la derecha) */}
    <div className="w-full  md:translate-x-12 lg:translate-x-20"> 
        <div className="relative bg-[#f2f0e9] p-10 rounded-[2rem] shadow-sm">
            {/* Icono Misión - Esquina superior derecha */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#333] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <Image
                    src="/image/icons/icono misión.png"
                    alt="Misión"
                    width={40}
                    height={40}
                    className="object-contain invert"
                />
            </div>
            <div className="text-center"> 
                <h4 className="font-bold italic text-2xl mb-4 uppercase tracking-tight">{t("mision")}</h4>
                <p className="text-base text-gray-700 font-light leading-relaxed">
                    {t("textM")}
                    <br/>
                    {t("textM1")}
                </p>
            </div>
        </div>
    </div>

    {/* Tarjeta VISIÓN (Abajo - Desplazada a la izquierda) */}
    <div className="w-full  md:-translate-x-12 lg:-translate-x-20">
        <div className="relative bg-[#f2f0e9] p-10 rounded-[2rem] shadow-sm">
            {/* Icono Visión - Esquina superior izquierda */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#333] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <Image
                    src="/image/icons/icono visión.png"
                    alt="Visión"
                    width={40}
                    height={40}
                    className="object-contain invert"
                />
            </div>
            <div className="text-center">
                <h4 className="font-bold italic text-2xl mb-4 uppercase tracking-tight">{t("vision")}</h4>
                <p className="text-base text-gray-700 font-light leading-relaxed">
                    {t("textV")}<br/>
                    {t("textV1")}
                </p>
            </div>
        </div>
    </div>
</div>
            
        </section>
    );
};

export default AboutUsComponent;