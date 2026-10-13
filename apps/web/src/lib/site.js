import gallery01Img from '@/assets/gallery-01.jpeg';
import gallery02Img from '@/assets/gallery-02.jpeg';
import gallery03Img from '@/assets/gallery-03.jpeg';
import gallery04Img from '@/assets/gallery-04.jpeg';
import gallery05Img from '@/assets/gallery-05.jpeg';
import gallery06Img from '@/assets/gallery-06.jpeg';
import gallery07Img from '@/assets/gallery-07.jpeg';
import gallery08Img from '@/assets/gallery-08.jpeg';
import gallery09Img from '@/assets/gallery-09.jpeg';
import gallery10Img from '@/assets/gallery-10.jpeg';
import gallery11Img from '@/assets/gallery-11.jpeg';
import girlsHeroImg from '@/assets/girls-hero.jpeg';
import boysHeroImg from '@/assets/boys-hero.jpeg';
import boysSingleImg from '@/assets/boys-single.jpeg';
import boysTwinImg from '@/assets/boys-twin.jpeg';
import boysTripleImg from '@/assets/boys-triple.jpeg';
import girlsSingleImg from '@/assets/girls-single.jpeg';
import girlsTwinImg from '@/assets/girls-twin.jpeg';
import girlsTripleImg from '@/assets/girls-triple.jpeg';

export const PG_NAME = 'DRC PG';
export const UNIVERSITY = 'Presidency University';
export const DISTANCE_M = 350;
export const RATING = 4.7;
export const REVIEW_COUNT = 115;

export const PHONE_DISPLAY = '+91 93430 45538';
export const PHONE_TEL = 'tel:+919343045538';

export const waLink = (message) =>
	`https://wa.me/919343045538?text=${encodeURIComponent(message)}`;

export const IMAGES = {
	hero: 'https://horizons-cdn.hostinger.com/02fac03b-9240-4bed-b535-4c8746116587/chatgpt-image-sep-3-2026-09_10_25-pm-5b5AR.png',
	boysHero: boysHeroImg,
	girlsHero: girlsHeroImg,
	boysSingle: boysSingleImg,
	boysTwin: boysTwinImg,
	boysTriple: boysTripleImg,
	girlsSingle: girlsSingleImg,
	girlsTwin: girlsTwinImg,
	girlsTriple: girlsTripleImg,
	meals: 'https://images.hostinger.com/6818ac10-806c-40c8-b957-b3a1a3dbdaaf.png',
	study: 'https://images.hostinger.com/53d03ad4-f442-4d7b-819d-11b6059cc795.png',
};

export const ABOUT_GALLERY = [
	{ src: gallery01Img, alt: 'Building with covered parking' },
	{ src: gallery02Img, alt: 'Building and paved parking yard' },
	{ src: gallery03Img, alt: 'Covered parking and seating area' },
	{ src: gallery04Img, alt: 'Dining hall' },
	{ src: gallery05Img, alt: 'Biometric entry gate' },
	{ src: gallery06Img, alt: 'Corridor' },
	{ src: gallery07Img, alt: 'Laundry area with washing machines' },
	{ src: gallery08Img, alt: 'Terrace with solar water heaters' },
	{ src: gallery09Img, alt: 'Aerial view of the building' },
	{ src: gallery10Img, alt: 'View from the terrace' },
	{ src: gallery11Img, alt: 'Building at night' },
];

export const BOYS_ROOMS = [
	{
		name: 'Single Room',
		tag: '1 bed',
		price: 16000,
		image: IMAGES.boysSingle,
		imageAlt: 'Single occupancy room at DRC PG Boys wing',
		description:
			'Your own quiet corner — a private, fully furnished room for students who like their space.',
		details: [
			'1 bed per room — complete privacy',
			'Breakfast, lunch & dinner included',
			'High-speed Wi-Fi + daily housekeeping',
			'Attached bathroom with 24×7 hot water',
		],
	},
	{
		name: 'Twin Sharing',
		tag: '2 beds',
		price: 9500,
		image: IMAGES.boysTwin,
		imageAlt: 'Twin sharing room at DRC PG Boys wing',
		description:
			'Two beds, two study desks, one easygoing roommate — our most popular pick for boys.',
		details: [
			'2 beds per room with individual lockers',
			'Breakfast, lunch & dinner included',
			'High-speed Wi-Fi + daily housekeeping',
			'Attached bathroom with 24×7 hot water',
		],
	},
	{
		name: 'Triple Sharing',
		tag: '3 beds',
		price: 7500,
		image: IMAGES.boysTriple,
		imageAlt: 'Triple sharing room at DRC PG Boys wing',
		description:
			'The budget-friendly classic — a bright, airy room shared with two batchmates.',
		details: [
			'3 beds per room with individual lockers',
			'Breakfast, lunch & dinner included',
			'High-speed Wi-Fi + daily housekeeping',
			'Shared bathroom with 24×7 hot water',
		],
	},
];

export const GIRLS_ROOMS = [
	{
		name: 'Single Room',
		tag: '1 bed',
		price: 18000,
		image: IMAGES.girlsSingle,
		imageAlt: 'Single occupancy room at DRC PG Girls wing',
		description:
			'A calm, private room in the girls-only wing — soft light, your own desk, your own pace.',
		details: [
			'1 bed per room — complete privacy',
			'Breakfast, lunch & dinner included',
			'High-speed Wi-Fi + daily housekeeping',
			'Attached bathroom with 24×7 hot water',
		],
	},
	{
		name: 'Twin Sharing',
		tag: '2 beds',
		price: 10000,
		image: IMAGES.girlsTwin,
		imageAlt: 'Twin sharing room at DRC PG Girls wing',
		description:
			'Share with one roommate in a bright, thoughtfully furnished room made for long study nights.',
		details: [
			'2 beds per room with individual lockers',
			'Breakfast, lunch & dinner included',
			'High-speed Wi-Fi + daily housekeeping',
			'Attached bathroom with 24×7 hot water',
		],
	},
	{
		name: 'Triple Sharing',
		tag: '3 beds',
		price: 8000,
		image: IMAGES.girlsTriple,
		imageAlt: 'Triple sharing room at DRC PG Girls wing',
		description:
			'Our most affordable option in the girls wing — friendly, spacious, and never cramped.',
		details: [
			'3 beds per room with individual lockers',
			'Breakfast, lunch & dinner included',
			'High-speed Wi-Fi + daily housekeeping',
			'Shared bathroom with 24×7 hot water',
		],
	},
];

export const REVIEWS = [
	{
		gender: 'boys',
		quote:
			'Clean rooms, fast Wi-Fi, and the study lounge saved me during finals. It feels more like a small hotel than any PG I have seen.',
		name: 'Rahul M.',
		detail: 'B.Tech, 3rd year · Boys PG',
	},
	{
		gender: 'boys',
		quote:
			'The mess food is honestly good — hot meals on time, every day. Roommates were matched well and the warden is chill but firm on rules.',
		name: 'Karthik V.',
		detail: 'BCA, 2nd year · Boys PG',
	},
	{
		gender: 'boys',
		quote:
			'As a parent sending my son out of state for the first time, the 24×7 desk and CCTV gave me peace of mind. Worth every rupee.',
		name: 'Mr. Suresh N.',
		detail: 'Parent of a resident · Boys PG',
	},
	{
		gender: 'girls',
		quote:
			'The food is genuinely like home — hot breakfast before my 8 AM class, every single day. My parents stopped worrying after their first visit.',
		name: 'Ananya S.',
		detail: 'BBA, Christ University · Girls PG',
	},
	{
		gender: 'girls',
		quote:
			'The girls wing feels safe and well looked after. The warden knows everyone by name and the study lounge is my favourite spot on campus.',
		name: 'Priya D.',
		detail: 'Psychology, 2nd year · Girls PG',
	},
	{
		gender: 'girls',
		quote:
			'As a parent, the warden, biometric entry, and curfew policy were what convinced us. Two years in, we could not be happier with the choice.',
		name: 'Mrs. Kavitha R.',
		detail: 'Parent of a resident · Girls PG',
	},
];

export const VARIANTS = {
	boys: {
		key: 'boys',
		label: 'Boys PG',
		path: '/boys',
		otherKey: 'girls',
		otherLabel: 'Girls PG',
		otherPath: '/girls',
		heroImage: IMAGES.boysHero,
		heroPosition: 'center 72%',
		heroKicker: 'Boys wing · Boutique student living · Bangalore',
		heroHeadline: 'DRC PG Boys —',
		heroHeadlineAccent: 'Feel Like Home',
		heroSub: `${DISTANCE_M} m from ${UNIVERSITY}. Hotel-grade rooms, home-style meals, and a community that looks out for each other — with the doors open 24×7.`,
		aboutHeading: ['A boys wing run the way a', 'good home', 'is run.'],
		aboutBody1: `Most PGs hand you a bed and a key. We built ${PG_NAME} around the things students actually miss — rooms that are cleaned like a hotel's, hot water that never runs out, quiet corners to study in, and food that tastes like it came from your own kitchen. Small, cared-for, and five minutes from campus.`,
		aboutBody2: 'The boys wing has its own rooms, pricing, and house rules — a space that feels genuinely yours, with a warden and support staff on-site round the clock.',
		roomsNumber: '02',
		roomsSectionName: 'Boys PG',
		roomsTitle: 'Boys PG — Rooms & Pricing',
		roomsIntro:
			'Three room types in the boys wing, each fully furnished and ventilated, with a locker and study desk for every bed. Prices are per bed, per month — meals included.',
		rooms: BOYS_ROOMS,
		safety: null,
		foodNumber: '03',
		amenitiesNumber: '04',
		reviewsNumber: '05',
		contactNumber: '06',
		waRoom: (roomName) =>
			`Hi! I'd like to reserve a ${roomName} bed in the Boys PG at ${PG_NAME}. Is it available?`,
		waVisit: `Hi! I'd like to schedule a visit to the Boys PG at ${PG_NAME}. When is a good time?`,
	},
	girls: {
		key: 'girls',
		label: 'Girls PG',
		path: '/girls',
		otherKey: 'boys',
		otherLabel: 'Boys PG',
		otherPath: '/boys',
		heroImage: IMAGES.girlsHero,
		heroPosition: 'center 60%',
		heroKicker: 'Girls wing · Boutique student living · Bangalore',
		heroHeadline: 'DRC PG Girls —',
		heroHeadlineAccent: 'Feel Like Home',
		heroSub: `${DISTANCE_M} m from ${UNIVERSITY}. A secure, girls-only wing with hotel-grade rooms, home-style meals, and safety designed with parents in mind.`,
		aboutHeading: ['A girls wing run the way a', 'good home', 'is run.'],
		aboutBody1: `Most PGs hand you a bed and a key. We built ${PG_NAME} around the things students actually miss — rooms that are cleaned like a hotel's, hot water that never runs out, quiet corners to study in, and food that tastes like it came from your own kitchen. Small, cared-for, and five minutes from campus.`,
		aboutBody2: 'The girls-only wing has its own rooms, pricing, and house rules — plus a resident female warden, biometric entry, and a curfew policy, so the space feels genuinely safe and yours.',
		roomsNumber: '02',
		roomsSectionName: 'Girls PG',
		roomsTitle: 'Girls PG — Rooms & Pricing',
		roomsIntro:
			'A separate, secure girls-only wing with the same hotel-grade rooms and home-style meals — plus safety measures designed with parents in mind.',
		rooms: GIRLS_ROOMS,
		safety: [
			{ title: 'Female warden on-site', text: 'A resident warden and all-women support staff are present in the girls wing at all hours.' },
			{ title: 'Biometric + CCTV entry', text: 'Fingerprint access at the wing entrance, with CCTV covering every common area and doorway.' },
			{ title: 'Visitor & curfew policy', text: 'Visitors received in the lounge only, until 8 PM. Wing gates close at 9:30 PM, with late-entry passes for exams and internships.' },
		],
		foodNumber: '03',
		amenitiesNumber: '04',
		reviewsNumber: '05',
		contactNumber: '06',
		waRoom: (roomName) =>
			`Hi! I'd like to reserve a ${roomName} bed in the Girls PG at ${PG_NAME}. Is it available?`,
		waVisit: `Hi! I'd like to schedule a visit to the Girls PG at ${PG_NAME}. When is a good time?`,
	},
};
