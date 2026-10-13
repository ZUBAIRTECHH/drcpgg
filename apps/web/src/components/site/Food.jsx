import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from './SectionLabel';

// Weekly home-style mess menu — each day scrolls horizontally as a glass card.
const MENU = [
	{
		day: 'Monday',
		meals: [
			{ slot: 'Breakfast', item: 'Poori Sagu / Chole Bhature , Channa Masala And Pudina Rice' },
			{ slot: 'Lunch', item: 'Rice , Ridge Gourd Sambar , Rasam , Papad And ButterMilk' },
			{ slot: 'Dinner', item: 'Chapati , Veg Curry , Rice , Dal Samber & Curd' },
		],
	},
	{
		day: 'Tuesday',
		meals: [
			{ slot: 'Breakfast', item: 'Tomato Rice / VangiBath , Chutney And Menthya Rice' },
			{ slot: 'Lunch', item: 'Rice , Palak Sambar , Rasam , Papad & ButterMilk' },
			{ slot: 'Dinner', item: 'Chapati , Veg Dry Sabzi , Rice , Dal Sambar & Curd' },
		],
	},
	{
		day: 'Wednesday',
		meals: [
			{ slot: 'Breakfast', item: 'Dosa , Aloo , Chutney And Aiu Rice Bath' },
			{ slot: 'Lunch', item: 'Rice , Radish And DrumStick Sambar  , Rasam , Papad & ButterMilk' },
			{ slot: 'Dinner', item: 'Chicken Biryani , Veg Biryani , Gobimanchiri & Curd Raitha' },
		],
	},
	{
		day: 'Thursday',
		meals: [
			{ slot: 'Breakfast', item: 'Puliyogare / Chitranna , Chutney And Capsicum Bath' },
			{ slot: 'Lunch', item: 'Rice , Vegetable Sambar , Rasam , Papad & ButterMilk' },
			{ slot: 'Dinner', item: 'Chapati , Chenna / Rajma / Brinjal Curry , Rice , Dal Sambar & Curd' },
		],
	},
	{
		day: 'Friday',
		meals: [
			{ slot: 'Breakfast', item: 'Chow-Chow Bath , Chutney And Palak Rice' },
			{ slot: 'Lunch', item: 'Rice , Tomato Sambar , Rasam , Papad & ButterMilk' },
			{ slot: 'Dinner', item: 'Chapati , Egg And Mashrum Masala , Rice / Egg & Veg Fried Rice & Curd' },
		],
	},
	{
		day: 'Saturday',
		meals: [
			{ slot: 'Breakfast', item: 'Bisibele Bath , Boonndi Mixture' },
			{ slot: 'Lunch', item: 'Rice , Cow Peas Sambar , Rasam , Papad & ButterMilk' },
			{ slot: 'Dinner', item: 'Chapati , Tomato Curry , Rice , Dal Sambar & Curd' },
		],
	},
	{
		day: 'Sunday',
		meals: [
			{ slot: 'Breakfast', item: 'IDLY-VADA , SAMBAR , CHUTNEY' },
			{ slot: 'Lunch', item: 'Vegetable / Soya Bean Biryani , Curd' },
			{ slot: 'Dinner', item: 'Chapati, Chicken Masala , Paneer Masala , Jeera Rice , Curd' },
		],
	},
];

function MenuCard({ day, meals }) {
	return (
		<div className="relative w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-6 shadow-[0_8px_32px_rgba(31,38,23,0.08)] backdrop-blur-xl">
			<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50" aria-hidden="true" />
			<div className="relative">
				<div className="flex items-center gap-2">
					<UtensilsCrossed className="h-4 w-4 text-accent" strokeWidth={1.8} />
					<h3 className="font-display text-xl font-medium tracking-tight">{day}</h3>
				</div>
				<ul className="mt-5 flex flex-col gap-4">
					{meals.map((m) => (
						<li key={m.slot} className="border-t border-white/40 pt-3">
							<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
								{m.slot}
							</p>
							<p className="mt-1 text-sm leading-snug text-foreground/90">{m.item}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default function Food({ variant }) {
	// Duplicate the list so the marquee loops seamlessly.
	const loop = [...MENU, ...MENU];

	return (
		<section id="food" className="scroll-mt-20 overflow-hidden py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<Reveal>
					<SectionLabel number={variant.foodNumber} title="Food / Meals" />
				</Reveal>

				<div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<Reveal delay={0.05}>
						<h2 className="max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
							Home-style meals,{' '}
							<span className="italic text-accent">fresh every day</span>
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="max-w-md leading-relaxed text-muted-foreground">
							A rotating South &amp; North Indian menu, cooked in-house and
							served hot — breakfast, lunch, and dinner, seven days a week.
						</p>
					</Reveal>
				</div>
			</div>

			{/* Horizontal marquee — scrolls the weekly menu across the screen */}
			<div className="relative mt-14">
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" aria-hidden="true" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" aria-hidden="true" />
				<div className="marquee-track flex w-max gap-6 px-5 md:px-8">
					{loop.map((day, i) => (
						<MenuCard key={`${day.day}-${i}`} day={day.day} meals={day.meals} />
					))}
				</div>
			</div>
		</section>
	);
}
