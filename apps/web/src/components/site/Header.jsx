import React, { useState } from 'react';
import { ArrowLeftRight, Menu, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PG_NAME, waLink } from '@/lib/site';

const NAV = [
	{ label: 'About', href: '#about' },
	{ label: 'Rooms', href: '#rooms' },
	{ label: 'Food', href: '#food' },
	{ label: 'Amenities', href: '#amenities' },
	{ label: 'Reviews', href: '#reviews' },
	{ label: 'Contact', href: '#contact' },
];

export default function Header({ variant }) {
	const [open, setOpen] = useState(false);
	const v = variant;
	const whatsappHref = waLink(`Hi! I'd like to know more about the ${v.label} at ${PG_NAME}.`);

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-background/55 shadow-[0_8px_32px_rgba(31,38,23,0.08)] backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
				<Link to="/" className="flex items-baseline gap-2">
					<span className="font-display text-xl font-medium tracking-tight">{PG_NAME}</span>
					<span className="hidden text-[11px] uppercase tracking-[0.2em] text-accent sm:inline">{v.label}</span>
				</Link>

				<nav className="hidden items-center gap-7 lg:flex">
					{NAV.map((item) => (
						<a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<div className="hidden items-center rounded-full border border-border bg-secondary/60 p-1 sm:flex">
						<Link to="/boys" className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${v.key === 'boys' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Boys</Link>
						<Link to="/girls" className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${v.key === 'girls' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Girls</Link>
					</div>

					<a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform active:scale-[0.98] md:flex">
						<MessageCircle className="h-4 w-4" strokeWidth={1.8} />
						WhatsApp us
					</a>

					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button className="flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden" aria-label="Open menu">
								<Menu className="h-5 w-5" strokeWidth={1.8} />
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="bg-background">
							<nav className="mt-10 flex flex-col gap-6">
								{NAV.map((item) => (
									<a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-2xl font-medium">{item.label}</a>
								))}
								<Link to={v.otherPath} onClick={() => setOpen(false)} className="mt-2 flex items-center gap-2 text-sm font-medium text-accent">
									<ArrowLeftRight className="h-4 w-4" strokeWidth={1.8} />
									Switch to {v.otherLabel}
								</Link>
								<a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-sm font-medium text-accent">
									<MessageCircle className="h-4 w-4" strokeWidth={1.8} />
									WhatsApp us
								</a>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
