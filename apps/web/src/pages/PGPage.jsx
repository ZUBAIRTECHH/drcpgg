import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import About from '@/components/site/About';
import RoomsSection from '@/components/site/RoomsSection';
import Food from '@/components/site/Food';
import Amenities from '@/components/site/Amenities';
import Reviews from '@/components/site/Reviews';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';
import WhatsAppFloat from '@/components/site/WhatsAppFloat';
import { PG_NAME, UNIVERSITY, VARIANTS } from '@/lib/site';

export default function PGPage({ variantKey }) {
	const v = VARIANTS[variantKey];

	return (
		<>
			<Helmet>
				<title>{PG_NAME} {v.label} — Rooms, Pricing & Amenities near {UNIVERSITY}, Bangalore</title>
				<meta
					name="description"
					content={`${PG_NAME} ${v.label}: hotel-grade rooms, home-style meals, high-speed Wi-Fi and 24×7 access ${'350'} m from ${UNIVERSITY}, Bangalore. View room types and per-bed pricing.`}
				/>
			</Helmet>

			<Header variant={v} />
			<main>
				<Hero variant={v} />
				<About variant={v} />
				<RoomsSection variant={v} />
				<Food variant={v} />
				<Amenities variant={v} />
				<Reviews variant={v} />
				<Contact variant={v} />
			</main>
			<Footer variant={v} />
			<WhatsAppFloat />
		</>
	);
}
