"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Footer() {
	const t = useTranslations("Footer");
	const localActive = useLocale();

	return (
		<footer className="w-full bg-[#f2f0e9] border-t border-[#e0dcd2] px-8 md:px-16 py-10">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
				{/* ── Columna 1: Logo ── */}
				<div className="flex flex-col items-center md:items-start gap-3">
					<Image
						src="/image/logo.png"
						alt="Logo"
						width={184}
						height={126}
						priority
					/>
				</div>

				{/* ── Columna 2: Info + CTA ── */}
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="text-xs tracking-[0.2em] uppercase text-[#888]">
						{t("title")}
					</p>
					<p className="text-sm text-[#333] leading-relaxed max-w-xs">
						<strong className="font-bold">{t("textBold")} </strong>
						{t("text")}
					</p>
					<button
						className="mt-1 bg-[#6b5e50] hover:bg-[#5a4e42] text-white text-sm font-semibold px-8 py-3 rounded-2xl transition-colors duration-200"
						type="submit"
					>
						<a href={`/${localActive}/#contact`}>{t("buttonc")}</a>
					</button>
				</div>

				{/* ── Columna 3: Contacto ── */}
				<div className="flex flex-col items-center gap-3">
					<p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-1">
						{t("text1")}
					</p>
					<ul className="flex flex-col gap-2">
						{[
							{
								icon: <MapPin size={14} />,
								label: "2750 FM 1463 Suite 250, Katy, TX 77494",
							},
							{
								icon: <Mail size={14} />,
								label: "info@alphabellewellness.com",
							},
							{ icon: <Phone size={14} />, label: "(346) 717-5550 / (321) 330-6424" },
							{ icon: <Instagram size={14} />, label: "alphabellewellness" , href: "https://www.instagram.com/alphabellewellness/"},
						].map(({ icon, label, href }) => (
							<li
								key={label}
								className="flex items-center gap-2 text-sm text-[#444] hover:text-[#1a1a1a] cursor-pointer transition-colors duration-150"
							>
								<span className="text-[#888]">{icon}</span>
								<a href={href} target="_blank" rel="noopener noreferrer">
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}