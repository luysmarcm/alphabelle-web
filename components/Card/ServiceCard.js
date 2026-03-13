import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
	title,
	description,
	icon,
	centered = false,
	onClick, t
}) => {
	return (
		<div
			className={`bg-[#dcd6cc] rounded-3xl p-8 flex flex-col justify-between min-h-[280px] transition duration-300 hover:shadow-lg cursor-pointer ${
				centered ? "md:col-start-2" : ""
			}`}
			onClick={onClick}
		>
			{/* Icon container */}
			<div className="w-16 h-16 bg-[#7c7468] rounded-full flex items-center justify-center mb-6 relative">
				<Image
					src={icon}
					alt={title}
					width={60}
					height={60}
					className="object-contain"
				/>
			</div>

			{/* Content */}
			<div>
				<h3 className="font-semibold text-lg mb-3 leading-snug">{title}</h3>
				<p className="text-sm text-gray-600 mb-6">{description}</p>
			</div>

			{/* CTA */}
			<button
				className="flex items-center gap-2 font-semibold text-sm"
				onClick={(e) => {
					e.stopPropagation();
					onClick();
				}}
			>
				{t("buttons1")}
				<ArrowRight size={16} />
			</button>
		</div>
	);
};

export default ServiceCard;
