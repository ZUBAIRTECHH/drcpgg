import React from 'react';
import { Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from './SectionLabel';
import { RATING, REVIEW_COUNT, REVIEWS } from '@/lib/site';

export default function Reviews({ variant }) {
	const reviews = REVIEWS.filter((r) => r.gender === variant.key);

	return (
		<section id="reviews" className="scroll-mt-20 bg-primary py-24 text-primary-foreground md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal>
					<SectionLabel number={variant.reviewsNumber} title="Reviews" light />
				</Reveal>

				<div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<Reveal delay={0.05}>
						<h2 className="max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
							What residents{' '}
							<span className="italic text-[hsl(35_60%_75%)]">say about us</span>
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<div className="flex items-center gap-3">
							<span className="flex items-center gap-1">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star
										key={i}
										className={`h-4 w-4 ${
											i < Math.round(RATING)
												? 'fill-[hsl(40_85%_60%)] text-[hsl(40_85%_60%)]'
												: 'text-primary-foreground/30'
										}`}
									/>
								))}
							</span>
							<span className="text-sm text-primary-foreground/80">
								{RATING} average · {REVIEW_COUNT} Google reviews
							</span>
						</div>
					</Reveal>
				</div>

				<div className="mt-14 grid gap-10 md:grid-cols-3">
					{reviews.map((review, i) => (
						<Reveal key={review.name} delay={0.08 * i}>
							<figure className="flex h-full flex-col border-t border-primary-foreground/20 pt-6">
								<blockquote className="flex-1 font-display text-lg font-light leading-relaxed">
									“{review.quote}”
								</blockquote>
								<figcaption className="mt-6">
									<p className="text-sm font-semibold">{review.name}</p>
									<p className="mt-1 text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
										{review.detail}
									</p>
								</figcaption>
							</figure>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
