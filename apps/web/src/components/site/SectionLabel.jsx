import React from 'react';

export default function SectionLabel({ number, title, light = false }) {
	return (
		<div className="flex items-center gap-4">
			<span
				className={`font-display text-sm italic ${
					light ? 'text-accent-foreground/80' : 'text-accent'
				}`}
			>
				{number}
			</span>
			<span
				className={`h-px w-10 ${light ? 'bg-accent-foreground/40' : 'bg-accent/50'}`}
				aria-hidden="true"
			/>
			<span
				className={`text-xs font-medium uppercase tracking-[0.25em] ${
					light ? 'text-accent-foreground/80' : 'text-muted-foreground'
				}`}
			>
				{title}
			</span>
		</div>
	);
}
