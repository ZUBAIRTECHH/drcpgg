import React from 'react';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from './SectionLabel';
import {
	DISTANCE_M,
	PHONE_DISPLAY,
	PG_NAME,
	UNIVERSITY,
	waLink,
} from '@/lib/site';

export default function Contact({ variant }) {
	return (
		<section id="contact" className="scroll-mt-20 py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal>
					<SectionLabel number={variant.contactNumber} title="Visit Us" />
				</Reveal>

				<div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
					<Reveal delay={0.05}>
						<h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
							Come see your{' '}
							<span className="italic text-accent">new home</span> first.
						</h2>
						<p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
							We would rather show you around than convince you over text. Drop
							in any time — walk through the rooms, taste the food, and meet
							the students who already live here.
						</p>

						<div className="mt-9 flex flex-col gap-3 sm:flex-row">
							<a
								href={waLink(variant.waVisit)}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
							>
								<MessageCircle className="h-4 w-4" strokeWidth={1.8} />
								Schedule a Visit
							</a>
							<a
								href={waLink(`Hi! I'd like to know more about the ${variant.label} at ${PG_NAME}.`)}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-12 items-center justify-center gap-2 rounded-full border border-border px-8 text-sm font-semibold transition-colors hover:bg-secondary active:scale-[0.98]"
							>
								<Phone className="h-4 w-4" strokeWidth={1.8} />
								WhatsApp us
							</a>
						</div>
					</Reveal>

					<Reveal delay={0.15}>
						<div className="space-y-8 rounded-2xl border border-border bg-card p-8">
							<div className="flex items-start gap-4">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
									<MapPin className="h-5 w-5" strokeWidth={1.8} />
								</span>
								<div>
									<h3 className="text-sm font-semibold">Address</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{PG_NAME}, 2nd Cross, Hosur Road,
										<br />
										{DISTANCE_M} m from {UNIVERSITY} Main Gate,
										<br />
										Bangalore — 560029
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
									<Phone className="h-5 w-5" strokeWidth={1.8} />
								</span>
								<div>
									<h3 className="text-sm font-semibold">Call or WhatsApp</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{PHONE_DISPLAY} — admissions, visits, and anything else.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
									<Clock className="h-5 w-5" strokeWidth={1.8} />
								</span>
								<div>
									<h3 className="text-sm font-semibold">Open 24×7</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										Front desk staffed round the clock. Visits welcome between
										9 AM and 8 PM, every day.
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
