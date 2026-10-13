import React from 'react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import SectionLabel from './SectionLabel';
import { ABOUT_GALLERY, DISTANCE_M, RATING, REVIEW_COUNT, UNIVERSITY } from '@/lib/site';

const STATS = [
	{ value: REVIEW_COUNT, suffix: '+', label: 'Google reviews' },
	{ value: RATING, decimals: 1, suffix: ' / 5', label: 'Average rating' },
	{ value: DISTANCE_M, suffix: ' m', label: `to ${UNIVERSITY}` },
	{ raw: '24×7', label: 'Access & support' },
];

export default function About({ variant }) {
	const v = variant;
	const [headBefore, headAccent, headAfter] = v.aboutHeading;

	return (
		<section id="about" className="scroll-mt-20 overflow-hidden py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal>
					<SectionLabel number="01" title="About" />
				</Reveal>

				<div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<Reveal delay={0.05}>
						<h2 className="max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
							{headBefore}{' '}
							<span className="italic text-accent">{headAccent}</span>{' '}
							{headAfter}
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="max-w-md leading-relaxed text-muted-foreground">
							{v.aboutBody1}
						</p>
					</Reveal>
				</div>
			</div>

			{/* Horizontal photo marquee — same animation as the food menu */}
			<div className="relative mt-14">
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" aria-hidden="true" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" aria-hidden="true" />
				<div
					className="marquee-track flex w-max gap-5 px-5 hover:[animation-play-state:paused] md:px-8"
					style={{ animationDuration: '70s' }}
				>
					{[...ABOUT_GALLERY, ...ABOUT_GALLERY].map((img, i) => (
						<img
							key={`${img.alt}-${i}`}
							src={img.src}
							alt={i < ABOUT_GALLERY.length ? img.alt : ''}
							aria-hidden={i < ABOUT_GALLERY.length ? undefined : true}
							className="aspect-[4/3] w-[280px] shrink-0 rounded-2xl object-cover md:w-[360px]"
						/>
					))}
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal delay={0.1}>
					<div className="mt-16 grid grid-cols-2 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
						{STATS.map((stat) => (
							<div key={stat.label}>
								<div className="font-display text-4xl font-light md:text-5xl">
									{stat.raw ? (
										stat.raw
									) : (
										<CountUp
											value={stat.value}
											decimals={stat.decimals || 0}
											suffix={stat.suffix}
										/>
									)}
								</div>
								<p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
