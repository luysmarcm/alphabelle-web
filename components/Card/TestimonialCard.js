const TestimonialCard = ({
	name,
	service,
	text,
	stars = 5,
	isSide = false,
}) => {
	return (
		<div
			className={`bg-[#e5e1db]/95 backdrop-blur-md rounded-[3rem] p-8 md:p-12 flex flex-col justify-center items-center transition-all duration-500 select-none
        ${
					isSide
						? "w-[280px] h-[200px] cursor-pointer"
						: "w-[350px] md:w-[450px] h-[280px] md:h-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
				}
      `}
		>
			{/* Nombre y Servicio - Solo visible en el centro */}
			{!isSide && (
				<p className="text-xs md:text-sm mb-4 text-gray-600 font-bold tracking-[0.2em] uppercase">
					{name}
				</p>
			)}

			{/* Texto del Testimonio */}
			<p
				className={`text-gray-800 text-center leading-tight font-medium
          ${isSide ? "text-sm md:text-base opacity-40 line-clamp-2" : "text-xl md:text-xl"}
        `}
			>
				{isSide ? text : `“${text}”`}
			</p>

			{/* Estrellas - Solo visibles en el centro */}
			{!isSide && (
				<div className="mt-8 flex gap-1">
					{[...Array(5)].map((_, i) => (
						<span
							key={i}
							className={
								i < stars
									? "text-yellow-600 text-2xl"
									: "text-gray-300 text-2xl"
							}
						>
							★
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default TestimonialCard;
