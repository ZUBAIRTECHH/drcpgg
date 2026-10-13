import React from 'react';
import { BedDouble, BedSingle, Check, Clock, Fingerprint, MessageCircle, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from './SectionLabel';
import { waLink } from '@/lib/site';

const SAFETY_ICONS = [ShieldCheck, Fingerprint, Clock];

function BedIcon({ className }) {
	return <BedDouble className={className} strokeWidth={1.4} />;
}

function RoomCard({ room, delay, waMessage }) {
	const bedCount = parseInt(room.tag, 10) || 1;

	return (
		<Reveal delay={delay}>
			<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-8px_hsl(24_16%_15%/0.12)]">
				<img
					src={room.image}
					alt={room.imageAlt}
					className="aspect-[4/3] w-full object-cover"
					loading="lazy"
				/>
				<div className="flex flex-1 flex-col p-6">
					<div className="flex items-baseline justify-between gap-3">
						<h3 className="flex items-center gap-2 font-display text-2xl font-medium">
							{bedCount === 1 ? (
								<BedSingle className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
							) : (
								<BedDouble className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
							)}
							{room.name}
						</h3>
						<p className="whitespace-nowrap font-display text-xl text-accent">
							₹{room.price.toLocaleString('en-IN')}
							<span className="text-sm text-muted-foreground">/mo</span>
						</p>
					</div>

					<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
						{room.description}
					</p>

					<ul className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm">
						{room.details.map((detail) => (
							<li key={detail} className="flex items-start gap-2.5">
								<Check
									className="mt-0.5 h-4 w-4 shrink-0 text-accent"
									strokeWidth={2}
								/>
								<span>{detail}</span>
							</li>
						))}
					</ul>

					<a
						href={waLink(waMessage)}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
					>
						<MessageCircle className="h-4 w-4" strokeWidth={1.8} />
						Reserve a Bed
					</a>
				</div>
			</article>
		</Reveal>
	);
}

export default function RoomsSection({ variant }) {
	const v = variant;

	return (
		<section id="rooms" className="scroll-mt-20 bg-secondary/50 py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal>
					<SectionLabel number={v.roomsNumber} title={v.roomsSectionName} />
				</Reveal>

				<div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<Reveal delay={0.05}>
						<h2 className="max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
							{v.roomsTitle}
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="max-w-md leading-relaxed text-muted-foreground">
							{v.roomsIntro}
						</p>
					</Reveal>
				</div>

				<div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{v.rooms.map((room, i) => (
						<RoomCard
							key={room.name}
							room={room}
							delay={0.08 * i}
							waMessage={v.waRoom(room.name)}
						/>
					))}
				</div>

				{v.safety && (
					<Reveal delay={0.1}>
						<div className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
							{v.safety.map((item, i) => {
								const Icon = SAFETY_ICONS[i] || ShieldCheck;
								return (
									<div key={item.title} className="flex items-start gap-4">
										<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
											<Icon className="h-5 w-5" strokeWidth={1.8} />
										</span>
										<div>
											<h3 className="text-sm font-semibold">{item.title}</h3>
											<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
												{item.text}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</Reveal>
				)}

				<Reveal delay={0.05}>
					<p className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
						<BedDouble className="h-4 w-4 text-accent" strokeWidth={1.8} />
						All rooms are fully furnished, well ventilated, and include a locker
						and study desk per bed.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
