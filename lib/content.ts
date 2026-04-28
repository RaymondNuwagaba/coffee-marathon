export const races = [
  {
    distance: '5 KM',
    label: 'Fun Run',
    color: 'bg-[var(--color-seedling)]',
    textColor: 'text-[var(--color-forest-dark)]',
    price: 'UGX XX,XXX',
    desc: 'Perfect for first-timers and families.',
    pinnketKey: 'register5k' as const,
    terrain: 'Flat, family-friendly route through the coffee park grounds.',
    cutOff: 'Placeholder — to be confirmed',
    included: ['Race bib', 'Finisher medal', 'Refreshments'],
    startTime: 'Placeholder — to be confirmed',
  },
  {
    distance: '10 KM',
    label: 'Community',
    color: 'bg-[var(--color-forest)]/20',
    textColor: 'text-[var(--color-forest-dark)]',
    price: 'UGX XX,XXX',
    desc: 'Test your pace through the coffee farms.',
    pinnketKey: 'register10k' as const,
    terrain: 'Rolling hills and scenic coffee-farm trails.',
    cutOff: 'Placeholder — to be confirmed',
    included: ['Race bib', 'Finisher medal', 'T-shirt', 'Refreshments'],
    startTime: 'Placeholder — to be confirmed',
  },
  {
    distance: '21 KM',
    label: 'Half Marathon',
    color: 'bg-[var(--color-forest)]',
    textColor: 'text-[var(--color-cream)]',
    price: 'UGX XX,XXX',
    desc: 'A serious challenge with stunning views.',
    pinnketKey: 'register21k' as const,
    terrain: 'Mixed terrain — farms, hills, and highland paths.',
    cutOff: 'Placeholder — to be confirmed',
    included: ['Race bib', 'Finisher medal', 'Race kit', 'Refreshments', 'Baggage storage'],
    startTime: 'Placeholder — to be confirmed',
  },
  {
    distance: '42 KM',
    label: 'Full Marathon',
    color: 'bg-[var(--color-espresso)]',
    textColor: 'text-[var(--color-cream)]',
    price: 'UGX XX,XXX',
    desc: "The ultimate test across Uganda's highlands.",
    pinnketKey: 'register42k' as const,
    terrain: 'Challenging highland route — elevation and farm trails.',
    cutOff: 'Placeholder — to be confirmed',
    included: ['Race bib', 'Finisher medal', 'Race kit', 'Refreshments', 'Baggage storage', 'Post-race meal'],
    startTime: 'Placeholder — to be confirmed',
  },
]

export const stats = [
  { number: '2,000+', label: 'Runners' },
  { number: '10+', label: 'Countries' },
  { number: '5+', label: 'Years of impact' },
  { number: '4', label: 'Race categories' },
]

export const testimonials = [
  {
    quote: 'I discovered my talent in Primary Four and won 50,000 shillings — the first money I ever earned through running. Today I run not only for myself but for other girls like me. Through the Ntungamo Marathon I won 1.5 million shillings. That opportunity changed my life.',
    name: 'Chelangat Ariziki',
    category: '21 KM, 2025',
  },
  {
    quote: 'We traveled with a team of 50 athletes, the majority being women, and we performed very well, winning several awards. It was the first time for many of us to visit Ntungamo, and the experience changed our mindset after seeing the level of development there.',
    name: 'Christine Muga',
    category: 'CEO, Mount Elgon Women in Specialty Coffee',
  },
  {
    quote: 'Running became purpose-driven — each step symbolising solidarity with the communities whose stories inspired the event. We were not just competing for personal bests; we were running for livelihoods, for equity, and for impact.',
    name: 'Coffee Marathon Runner',
    category: '10 KM, 2025',
  },
]

export const faqs = [
  {
    q: 'What is included in the registration fee?',
    a: 'Placeholder — to be confirmed by client.',
  },
  {
    q: 'Where do I collect my race bib?',
    a: 'Placeholder — to be confirmed by client.',
  },
  {
    q: 'What are the cut-off times?',
    a: 'Placeholder — to be confirmed by client.',
  },
  {
    q: 'Can I transfer my registration to another person?',
    a: 'Placeholder — to be confirmed by client.',
  },
  {
    q: 'Is the 42 KM course certified?',
    a: 'Placeholder — to be confirmed by client.',
  },
]

export const timeline = [
  { year: '2021', event: 'First Coffee Marathon — [X] runners' },
  { year: '2022', event: 'Placeholder' },
  { year: '2023', event: 'Placeholder' },
  { year: '2024', event: 'Placeholder' },
  { year: '2025', event: 'Placeholder' },
  { year: '2026', event: 'The biggest yet — 3 October, Africa Coffee Park' },
]

export const attractions = [
  {
    name: 'Nile White-Water Rafting',
    description: 'Experience world-class white-water rafting on the Nile at Bujagali Falls, just hours from Ntungamo. Grade 5 rapids make this one of the best rafting destinations in Africa.',
    tips: 'Best season: June–August. All equipment provided. Suitable for beginners and experienced rafters.',
    slug: 'sana-gorilla-rafting',
    localImage: '/images/attraction-nile-rafting.jpg',
  },
  {
    name: 'Kitagata Hot Springs',
    description: 'Natural geothermal springs with healing mineral waters, set in lush Ugandan countryside. Locals and visitors alike soak in the warm therapeutic waters believed to cure various ailments.',
    tips: 'Open daily. Entry fee applies. Located 45 min from Ntungamo town. Best visited in the morning.',
    slug: 'kitagata-hot-springs',
    localImage: '/images/attraction-kitagata-hot-springs.jpg',
  },
  {
    name: 'Kisiizi Falls',
    description: 'A dramatic waterfall cascading into a deep gorge, home to a historic mission hospital and one of Uganda\'s most beautiful natural landmarks. The falls plunge over 30 metres into a forested canyon.',
    tips: 'Guided tours available. 30-minute drive from Ntungamo. Entry fee supports the local hospital.',
    slug: 'kisiizi-falls',
    localImage: '/images/attraction-kisiizi-falls.jpg',
  },
  {
    name: 'Lake Nyabihoko',
    description: 'A serene lake surrounded by rolling green hills and terraced farmland — one of the most photogenic landscapes in southwestern Uganda. Perfect for sunrise walks and birdwatching.',
    tips: 'Best visited at dawn. Bring walking shoes and a camera. No entry fee.',
    slug: 'lake-nyabihogo',
    localImage: '/images/attraction-lake-nyabihoko.jpg',
  },
  {
    name: 'Karegyeya Rock',
    description: 'A striking balancing granite rock perched above the Ntungamo hillside, with panoramic views over the town and surrounding highlands. A local landmark with cultural significance.',
    tips: 'Easy walk from town. Great picnic spot. 20 minutes from the town centre. Go at sunset for the best light.',
    slug: 'karegyeya-rock',
    localImage: '/images/attraction-karegyeya-rock.jpg',
  },
]

export const sponsorTiers = [
  {
    name: 'Platinum Partner',
    price: 'USD 100,000',
    color: 'bg-[var(--color-latte)]',
    textColor: 'text-[var(--color-espresso)]',
    perks: [
      'Title naming rights across all event materials',
      'VIP tent & hospitality at finish line',
      'Full social media campaign partnership',
      '20 complimentary race entries',
      'Keynote speaking opportunity',
      'Logo on race kits, banners & bibs',
      'Dedicated press coverage',
    ],
  },
  {
    name: 'Gold Partner',
    price: 'USD 75,000',
    color: 'bg-[var(--color-espresso)]',
    textColor: 'text-[var(--color-cream)]',
    perks: [
      'Logo on website, bibs & key materials',
      '10 complimentary race entries',
      'Social media campaign mentions',
      'Exhibition booth at event',
      'Logo on finish line arch',
    ],
  },
  {
    name: 'Silver Partner',
    price: 'USD 30,000',
    color: 'bg-[var(--color-forest)]',
    textColor: 'text-[var(--color-cream)]',
    perks: [
      'Logo on website & event signage',
      '5 complimentary race entries',
      'Social media shout-outs',
      'Brand presence at venue',
    ],
  },
  {
    name: 'Bronze Partner',
    price: 'USD 10,000',
    color: 'bg-[var(--color-seedling)]',
    textColor: 'text-[var(--color-espresso)]',
    perks: [
      'Logo on official website',
      '2 complimentary race entries',
      'Social media mention',
    ],
  },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Races', href: '/races' },
  { label: 'Shop', href: '/shop' },
  { label: 'Activities', href: '/activities' },
  { label: 'Attractions', href: '/attractions' },
  { label: 'Contact', href: '/contact' },
]
