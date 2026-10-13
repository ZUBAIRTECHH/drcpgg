import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';
import {
	DISTANCE_M,
	PG_NAME,
	RATING,
	REVIEW_COUNT,
	UNIVERSITY,
	waLink,
} from '@/lib/site';

const MARQUEE_ITEMS = [
	'Hotel-grade rooms',
	'Home-style meals',
	`${DISTANCE_M} m from ${UNIVERSITY}`,
	'Open 24×7',
	'High-speed Wi-Fi',
	'Separate Boys & Girls wings',
];

export default function Hero({ variant }) {
	const v = variant;

	return (
		<section id="top" className="relative flex min-h-[100dvh] flex-col">
			<div className="absolute inset-0">
				<img
					src={v.heroImage}
					alt={`${PG_NAME} ${v.label} near ${UNIVERSITY}, Bangalore`}
					className="h-full w-full object-cover"
					style={{ objectPosition: v.heroPosition }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/30" />
			</div>

			<div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-32 md:px-8">
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="text-xs font-medium uppercase tracking-[0.3em] text-white/70"
				>
					{v.heroKicker}
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
					className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.05] text-white md:text-7xl"
				>
					{v.heroHeadline}{' '}
					<span className="italic text-[hsl(35_60%_80%)]">{v.heroHeadlineAccent}</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
					className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
				>
					{v.heroSub}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
					className="mt-6 flex items-center gap-3 text-white"
				>
					<span className="flex items-center gap-1" aria-label={`${RATING} out of 5 stars`}>
						{Array.from({ length: 5 }).map((_, i) => (
							<Star
								key={i}
								className={`h-4 w-4 ${
									i < Math.round(RATING)
										? 'fill-[hsl(40_85%_60%)] text-[hsl(40_85%_60%)]'
										: 'text-white/40'
								}`}
							/>
						))}
					</span>
					<span className="text-sm font-medium">{RATING}</span>
					<span className="text-sm text-white/70">
						· {REVIEW_COUNT} Google reviews
					</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
					className="mt-9 flex flex-col gap-3 sm:flex-row"
				>
					<a
						href="#rooms"
						className="flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-primary transition-transform hover:-translate-y-px active:scale-[0.98]"
					>
						View Rooms
					</a>
					<a
						href={waLink(`Hi! I'd like to know more about the ${v.label} at ${PG_NAME}.`)}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 active:scale-[0.98]"
					>
						<MessageCircle className="h-4 w-4" strokeWidth={1.8} />
						Chat on WhatsApp
					</a>
				</motion.div>
			</div>

			<div className="relative border-t border-white/15 bg-black/30 py-4 backdrop-blur-sm">
				<div className="overflow-hidden">
					<div className="marquee-track flex w-max items-center gap-8 pr-8">
						{[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
							<span
								key={i}
								className="flex items-center gap-8 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-white/70"
							>
								{item}
								<span className="h-1 w-1 rounded-full bg-[hsl(40_85%_60%)]" aria-hidden="true" />
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
