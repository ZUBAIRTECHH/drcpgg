import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PG_NAME, UNIVERSITY, waLink } from '@/lib/site';

export default function Footer({ variant }) {
	return (
		<footer className="border-t border-border bg-secondary/40 py-12">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between md:px-8">
				<div>
					<p className="font-display text-xl font-medium">{PG_NAME}</p>
					<p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
						Boutique student PG near {UNIVERSITY}, Bangalore. Hotel-grade
						rooms, home-style meals.
					</p>
				</div>

				<nav className="flex flex-col gap-2 text-sm text-muted-foreground">
					<a href="#about" className="transition-colors hover:text-foreground">About</a>
					<a href="#rooms" className="transition-colors hover:text-foreground">{variant.label}</a>
					<a href="#amenities" className="transition-colors hover:text-foreground">Amenities</a>
					<Link to={variant.otherPath} className="transition-colors hover:text-foreground">
						{variant.otherLabel}
					</Link>
				</nav>

				<div className="text-sm text-muted-foreground">
					<a
						href={waLink(`Hi! I'd like to know more about the ${variant.label} at ${PG_NAME}.`)}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-accent"
					>
						<Phone className="h-4 w-4" strokeWidth={1.8} />
						WhatsApp us
					</a>
					<p className="mt-2">Hosur Road, Bangalore — 560029</p>
				</div>
			</div>

			<div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 md:px-8">
				<p className="text-xs text-muted-foreground">
					© {new Date().getFullYear()} {PG_NAME}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
