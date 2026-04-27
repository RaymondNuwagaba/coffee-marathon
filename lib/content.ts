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
  { number: '5+', label: 'Years running' },
  { number: '10+', label: 'Countries represented' },
  { number: '2,000+', label: 'Runners' },
  { number: '4', label: 'Race categories' },
]

export const testimonials = [
  {
    quote: 'Placeholder quote — to be replaced with real runner testimonial.',
    name: 'Runner Name',
    category: '21 KM, 2025',
  },
  {
    quote: 'Placeholder quote — to be replaced with real runner testimonial.',
    name: 'Runner Name',
    category: '42 KM, 2025',
  },
  {
    quote: 'Placeholder quote — to be replaced with real runner testimonial.',
    name: 'Runner Name',
    category: '10 KM, 2024',
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
    name: 'Sana Gorilla Rafting',
    description: 'Experience world-class white-water rafting on the Nile, just hours from Ntungamo.',
    tips: 'Best season: June–August. All equipment provided. Suitable for beginners.',
    slug: 'sana-gorilla-rafting',
  },
  {
    name: 'Kitagata Hot Springs',
    description: 'Natural geothermal springs with healing mineral waters, set in lush Ugandan countryside.',
    tips: 'Open daily. Entry fee applies. Located 45 min from Ntungamo town.',
    slug: 'kitagata-hot-springs',
  },
  {
    name: 'Kisiizi Falls',
    description: 'A dramatic waterfall cascading into a deep gorge, home to a historic mission hospital.',
    tips: 'Guided tours available. 30-minute drive from Ntungamo.',
    slug: 'kisiizi-falls',
  },
  {
    name: 'Lake Nyabihogo',
    description: 'A serene crater lake surrounded by terraced hills — perfect for sunrise walks.',
    tips: 'Best visited at dawn. Bring walking shoes and a camera.',
    slug: 'lake-nyabihogo',
  },
  {
    name: 'Karegyeya Rock',
    description: 'A striking granite outcrop with panoramic views over Ntungamo and the surrounding highlands.',
    tips: 'Easy hike. Great picnic spot. 20 minutes from the town centre.',
    slug: 'karegyeya-rock',
  },
]

export const sponsorTiers = [
  {
    name: 'Title Sponsor',
    color: 'bg-[var(--color-latte)]',
    textColor: 'text-[var(--color-espresso)]',
    perks: [
      'Logo on all materials',
      'VIP tent at finish line',
      'Social media campaign',
      '20 complimentary entries',
      'Speaking opportunity',
    ],
  },
  {
    name: 'Gold Sponsor',
    color: 'bg-[var(--color-espresso)]',
    textColor: 'text-[var(--color-cream)]',
    perks: [
      'Logo on website and bibs',
      '10 complimentary entries',
      'Social media mention',
      'Booth at event',
    ],
  },
  {
    name: 'Silver Sponsor',
    color: 'bg-[var(--color-forest)]',
    textColor: 'text-[var(--color-cream)]',
    perks: [
      'Logo on website',
      '5 complimentary entries',
      'Social media mention',
    ],
  },
  {
    name: 'Bronze Sponsor',
    color: 'bg-[var(--color-seedling)]',
    textColor: 'text-[var(--color-espresso)]',
    perks: ['Logo on website', '2 complimentary entries'],
  },
]

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Races', href: '/races' },
  { label: 'Shop', href: '/shop' },
  { label: 'Activities', href: '/activities' },
  { label: 'Attractions', href: '/attractions' },
  { label: 'Contact', href: '/contact' },
]
