import InfoBlock from "./InfoBlock";
import { useTranslations } from "next-intl";

const AboutSection = () => {
	const t = useTranslations("AboutUsHome");
	
	return (
		<section className=" py-24 px-6">
			{/* Cambiamos a 3 columnas para manejar proporciones de 1/3 y 2/3 */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
				{/* Imagen hombre (Ocupa 1 columna) */}
				<InfoBlock image="/image/1.png" />
				{/* Texto 1 (Ocupa 2 columnas) */}
				<div className="md:col-span-2">
					<InfoBlock>
						<p className="text-xl leading-relaxed">{t("text1")}</p>
					</InfoBlock>
				</div>
				{/* Texto 2 (Ocupa 2 columnas) */}
				<div className="md:col-span-2">
					<InfoBlock>
						<p className="text-xl leading-relaxed max-w-md">{t("text2")}</p>
					</InfoBlock>
				</div>
				{/* Imagen mujer (Ocupa 1 columna) */}
				<InfoBlock image="/image/2.png" />
			</div>
		</section>
	);
};

export default AboutSection;
