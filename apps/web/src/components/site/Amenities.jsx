import React from 'react';
import {
	BookOpen,
	Droplets,
	ShieldCheck,
	Sparkles,
	UtensilsCrossed,
	WashingMachine,
	Wifi,
	Zap,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from './SectionLabel';

const AMENITIES = [
	{
		icon: Wifi,
		title: 'High-speed Wi-Fi',
		text: 'Fibre internet in every room, fast enough for lectures, calls, and late-night submissions.',
	},
	{
		icon: UtensilsCrossed,
		title: 'Home-style meals',
		text: 'Fresh breakfast, lunch, and dinner cooked in-house — rotating South and North Indian menus.',
	},
	{
		icon: Sparkles,
		title: 'Daily housekeeping',
		text: 'Rooms and common areas cleaned every day, with fresh linen every week.',
	},
	{
		icon: Droplets,
		title: '24×7 hot water',
		text: 'Geysers in every bathroom, so early classes and late study nights are never cold ones.',
	},
	{
		icon: WashingMachine,
		title: 'Laundry service',
		text: 'In-house washing and ironing, twice a week, folded and returned to your room.',
	},
	{
		icon: Zap,
		title: 'Full power backup',
		text: 'Generators keep the lights, fans, and Wi-Fi running through every outage.',
	},
	{
		icon: BookOpen,
		title: 'Quiet study lounge',
		text: 'A dedicated, well-lit reading room that stays silent and open all night during exams.',
	},
	{
		icon: ShieldCheck,
		title: 'CCTV & secure entry',
		text: 'Monitored common areas and controlled access at every entrance, around the clock.',
	},
];

export default function Amenities({ variant }) {
	return (
		<section id="amenities" className="scroll-mt-20 py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal>
					<SectionLabel number={variant.amenitiesNumber} title="Amenities" />
				</Reveal>

				<div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<Reveal delay={0.05}>
						<h2 className="max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
							Everything included,{' '}
							<span className="italic text-accent">in both wings</span>
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="max-w-md leading-relaxed text-muted-foreground">
							One monthly rent covers it all — no surprise charges, no
							shared-cost arguments at the end of the month.
						</p>
					</Reveal>
				</div>

				<div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
					{AMENITIES.map((amenity, i) => (
						<Reveal key={amenity.title} delay={0.05 * (i % 4)}>
							<div className="border-t border-border pt-6">
								<amenity.icon
									className="h-6 w-6 text-accent"
									strokeWidth={1.6}
								/>
								<h3 className="mt-4 font-display text-lg font-medium">
									{amenity.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{amenity.text}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
