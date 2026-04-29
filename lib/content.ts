export const races = [
  {
    distance: '5 KM',
    label: 'Fun Run',
    color: 'bg-[var(--color-amber-light)]',
    textColor: 'text-[var(--color-text-dark)]',
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
    color: 'bg-[var(--color-amber)]/20',
    textColor: 'text-[var(--color-text-dark)]',
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
    color: 'bg-[var(--color-orange)]',
    textColor: 'text-white',
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
    color: 'bg-[var(--color-text-dark)]',
    textColor: 'text-[var(--color-amber-light)]',
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
    category: '21 KM Runner',
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
  { year: '2021', event: 'First Coffee Marathon — the movement begins' },
  { year: '2022', event: 'Growing the community across East Africa' },
  { year: '2023', event: 'Expanding impact — new categories and partners' },
  { year: '2024', event: 'International runners join from 10+ countries' },
  { year: '2025', event: 'Diamond Platnumz headlines the concert — record turnout' },
  { year: '2026', event: 'Tyrese Gibson joins — biggest edition yet, 3 October, Africa Coffee Park' },
]

export const attractions = [
  {
    name: 'Nile White-Water Rafting',
    description: 'Experience world-class white-water rafting on the Nile at Bujagali Falls. Grade 5 rapids make this one of the best rafting destinations in Africa.',
    tips: 'Best season: June–August. All equipment provided. Suitable for beginners and experienced rafters.',
    slug: 'nile-rafting',
    localImage: '/images/attraction-nile-rafting.jpg',
  },
  {
    name: 'Kitagata Hot Springs',
    description: 'Natural geothermal springs with healing mineral waters, set in lush Ugandan countryside. Locals and visitors soak in the warm therapeutic waters believed to cure various ailments.',
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
    description: 'A serene lake surrounded by rolling green hills and terraced farmland — one of the most photogenic landscapes in southwestern Uganda. The marathon route passes through this area, aligning with the event\'s theme of uplifting rural coffee women.',
    tips: 'Best visited at dawn. Bring walking shoes and a camera. No entry fee.',
    slug: 'lake-nyabihoko',
    localImage: '/images/attraction-lake-nyabihoko.jpg',
  },
  {
    name: 'Karegyeya Rock',
    description: 'A striking balancing granite rock perched above the Ntungamo hillside, with panoramic views over the town and surrounding highlands. A local landmark with cultural significance.',
    tips: 'Easy walk from town. Great picnic spot. 20 minutes from the town centre. Go at sunset for the best light.',
    slug: 'karegyeya-rock',
    localImage: '/images/attraction-karegyeya-rock.jpg',
  },
  {
    name: 'Mutumo Island Resort on Lake Nyabihoko',
    description: 'A stunning island resort on the shores of Lake Nyabihoko, offering a serene escape surrounded by Uganda\'s southwestern highlands. The perfect way to extend your Coffee Marathon weekend experience.',
    tips: 'Book in advance. Accessible by boat from the lake shore. Combines perfectly with the marathon weekend.',
    slug: 'mutumo-island-resort',
    localImage: '/images/attraction-lake-nyabihoko.jpg',
  },
]

export const sponsorTiers = [
  {
    name: 'Platinum Partner',
    price: 'USD 100,000',
    color: 'bg-[var(--color-amber-light)]',
    textColor: 'text-[var(--color-text-dark)]',
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
    color: 'bg-[var(--color-amber)]',
    textColor: 'text-white',
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
    color: 'bg-[var(--color-orange)]',
    textColor: 'text-white',
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
    color: 'bg-[var(--color-bg-warm)]',
    textColor: 'text-[var(--color-text-dark)]',
    perks: [
      'Logo on official website',
      '2 complimentary race entries',
      'Social media mention',
    ],
  },
]

// Source: WhatsApp Image — Activities document
export const eventActivities = [
  {
    icon: '🏃',
    name: 'The Coffee Marathon',
    description: 'A themed run that brings together coffee lovers, athletes, and communities to celebrate coffee culture and healthy living. It raises awareness about the coffee industry while promoting unity and an active lifestyle.',
  },
  {
    icon: '☕',
    name: 'Inspire Africa Barista Championships',
    description: 'A competitive platform showcasing the skills and creativity of baristas from across the region. It promotes excellence, innovation, and professionalism in coffee preparation.',
  },
  {
    icon: '🏛️',
    name: 'Coffee Exhibitions',
    description: 'A dynamic showcase of coffee products, technologies, and innovations from across the value chain. It provides a platform for businesses to market, connect, and explore new opportunities.',
  },
  {
    icon: '🎵',
    name: 'The Coffee Concert',
    description: 'A vibrant entertainment event blending music, culture, and coffee experiences. It attracts diverse audiences while celebrating African creativity and lifestyle.',
  },
  {
    icon: '📚',
    name: 'Coffee Workshops',
    description: 'Interactive learning sessions focused on coffee production, processing, and business development. They equip participants with practical skills and industry knowledge.',
  },
  {
    icon: '🫗',
    name: 'Coffee Cupping',
    description: 'A guided tasting experience used to evaluate coffee quality, flavor, and aroma profiles. It helps participants appreciate the diversity and standards of specialty coffee.',
  },
  {
    icon: '🔥',
    name: 'The Roasters Parade',
    description: 'A showcase of coffee roasters demonstrating techniques, equipment, and roasting styles. It highlights craftsmanship and innovation in transforming beans into premium products.',
  },
  {
    icon: '🌱',
    name: 'Farm Expeditions — Adopt a Tree',
    description: 'Immersive visits to coffee farms where participants engage with farmers and adopt coffee trees. This fosters direct connection, sustainability, and long-term support for growers.',
  },
  {
    icon: '🏆',
    name: 'Africa Coffee Awards',
    description: 'A prestigious platform that recognises and celebrates excellence, innovation, and leadership across Africa\'s coffee value chain. It honours outstanding farmers, brands, and industry players.',
  },
  {
    icon: '🎨',
    name: 'Coffee Artistry',
    description: 'A creative expression of coffee through latte art, design, and visual storytelling. It celebrates talent while enhancing the aesthetic and experiential value of coffee.',
  },
  {
    icon: '🎙️',
    name: 'Festival Podcast',
    description: 'A media platform capturing conversations, insights, and stories from industry leaders and participants. It extends the festival\'s reach and shares knowledge with a wider audience.',
  },
  {
    icon: '🌍',
    name: 'High-Level Coffee Summit',
    description: 'A strategic forum that convenes policymakers, industry leaders, and investors to shape the future of Africa\'s coffee sector. It focuses on policy dialogue, investment opportunities, and collaborative solutions.',
  },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Races', href: '/races' },
  { label: 'Shop', href: '/shop' },
  { label: 'Beyond the Marathon', href: '/activities' },
  { label: 'Attractions', href: '/attractions' },
  { label: 'Contact', href: '/contact' },
]
