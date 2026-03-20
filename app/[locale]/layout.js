import { Montserrat } from "next/font/google";
import "./globals.css";
import 'toastify-js/src/toastify.css';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer.";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AOSInit } from "@/aos"
import Head from "next/head";


const montse = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "AlphaBelle Wellness",
	description:
		"We have designed a space where regenerative medicine and high-end aesthetics converge to empower the best version of our patients.",
	icons: {
		icon: ["/favicon.ico"], // Ruta a tu favicon
	},
};

export default async function LocaleLayout({ children, params }) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={params.locale}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				
				
			</Head>
			<AOSInit />
			<body className="max-w-max min-w-min mx-auto">
				<NextIntlClientProvider messages={messages}>
					<Header />
					<div className="max-w-max m-auto overflow-hidden w-full">
						{children}
					</div>
					<Footer />
				</NextIntlClientProvider>
				
			</body>
		</html>
	);
}
