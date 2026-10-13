import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PG_NAME, waLink } from '@/lib/site';

export default function WhatsAppFloat() {
	return (
		<a
			href={waLink(`Hi! I'd like to know more about ${PG_NAME}.`)}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Chat with ${PG_NAME} on WhatsApp`}
			className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.65)] transition-transform hover:-translate-y-1 active:scale-[0.96] md:bottom-7 md:right-7"
		>
			<MessageCircle className="h-7 w-7" strokeWidth={1.9} />
		</a>
	);
}
