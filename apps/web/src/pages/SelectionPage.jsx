import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
	DISTANCE_M,
	IMAGES,
	PG_NAME,
	RATING,
	REVIEW_COUNT,
	UNIVERSITY,
} from '@/lib/site';

const OPTIONS = [
	{
		key: 'boys',
		label: 'Boys PG',
		to: '/boys',
		icon: Users,
		note: 'Hotel-grade rooms · home-style meals · 24×7 access',
	},
	{
		key: 'girls',
		label: 'Girls PG',
		to: '/girls',
		icon: ShieldCheck,
		note: 'Secure girls-only wing · female warden · biometric entry',
	},
];

export default function SelectionPage() {
	return (
		<>
			<Helmet>
				<title>{PG_NAME} — Boys & Girls PG near {UNIVERSITY}, Bangalore</title>
				<meta
					name="description"
					content={`${PG_NAME} is a boutique student PG ${DISTANCE_M} m from ${UNIVERSITY}, Bangalore. Choose the Boys PG or Girls PG wing to view rooms, pricing and amenities.`}
				/>
			</Helmet>

			<section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background">
				{/* Single full-bleed image */}
				<div className="absolute inset-0">
					<img
						src={IMAGES.hero}
						alt={`${PG_NAME} building exterior near ${UNIVERSITY}, Bangalore`}
						className="h-full w-full object-cover"
					/>
					{/* Cinematic gradient for legibility */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" />
					<div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/30" />
				</div>

				{/* Content overlay */}
				<div className="relative z-10 flex min-h-[100dvh] flex-col">
					{/* Top brand bar */}
					<motion.header
						initial={{ opacity: 0, y: -12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut' }}
						className="flex items-center justify-between px-5 py-6 md:px-10"
					>
						<Link to="/" className="font-display text-2xl font-light tracking-tight text-white">
							{PG_NAME}
						</Link>
						<span className="hidden text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:block">
							Boutique student living · Bangalore
						</span>
					</motion.header>

					{/* Main content */}
					<div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-10 md:px-10">
						<motion.div
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className="max-w-2xl"
						>
							<h1 className="font-display text-5xl font-light leading-[1.04] text-white drop-shadow-sm md:text-7xl">
								<span style={{ fontFamily: 'Fraunces, sans-serif' }}>{PG_NAME}</span> —{' '}
								<span className="italic text-[hsl(40_85%_72%)]">Feel Like Home</span>
							</h1>
							<p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
								{DISTANCE_M} m from {UNIVERSITY}. Separate Boys & Girls wings,
								hotel-grade rooms, and home-style meals. Choose a wing to begin.
							</p>

							<div className="mt-5 flex items-center gap-3 text-white">
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
							</div>
						</motion.div>

						{/* Two wing buttons — subtle glassmorphism, focus-grabbing but blended */}
						<div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5">
							{OPTIONS.map((opt, i) => {
								const Icon = opt.icon;
								return (
									<motion.div
										key={opt.key}
										initial={{ opacity: 0, y: 22 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.25 + 0.12 * i, ease: 'easeOut' }}
									>
										<Link
											to={opt.to}
											className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-6 text-left backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/40 hover:bg-white/15 active:translate-y-0 md:p-7"
											style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.18), 0 12px 30px -12px rgba(0,0,0,0.45)' }}
										>
											{/* subtle accent glow on hover */}
											<span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[hsl(40_85%_60%)]/0 blur-2xl transition-all duration-500 group-hover:bg-[hsl(40_85%_60%)]/25" />

											<div className="relative flex items-center gap-3">
												<span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white">
													<Icon className="h-5 w-5" strokeWidth={1.8} />
												</span>
												<div>
													<span className="block text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/65">
														Select wing
													</span>
													<h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl">
														{opt.label}
													</h2>
												</div>
											</div>

											<p className="relative mt-5 text-sm leading-relaxed text-white/80">
												{opt.note}
											</p>

											<span className="relative mt-5 flex items-center gap-2 text-sm font-semibold text-white">
												<span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-white">
													View rooms & pricing
												</span>
												<ArrowRight
													className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
													strokeWidth={1.8}
												/>
											</span>
										</Link>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* Footer line */}
					<motion.footer
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="px-5 py-6 text-center text-xs text-white/55 md:px-10"
					>
						© {new Date().getFullYear()} {PG_NAME} · {UNIVERSITY}, Bangalore
					</motion.footer>
				</div>
			</section>
		</>
	);
}
