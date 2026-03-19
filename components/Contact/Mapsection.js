const MapSection = () => {
	return (
		<div className="w-full h-[300px]">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.9121217957404!2d-95.85481552466686!3d29.751256375072614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86412380bea6029d%3A0x4db158171c1cc19d!2s2750%20FM%201463%20%23250%2C%20Katy%2C%20TX%2077494%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1773675973482!5m2!1ses!2sve"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
};

export default MapSection;

