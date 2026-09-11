export const site = {
  name: 'ALBAN TV',
  tagline: 'Just Level',
  youtube: 'https://www.youtube.com/@albantv2',
}

export const nav = [
  { id: 'watch', label: 'Watch', href: '#watch' },
  { id: 'programmes', label: 'Programmes', href: '#programmes' },
  { id: 'founder', label: 'Founder', href: '#founder' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const sectionIds = nav.map((item) => item.id)

export const hero = {
  eyebrow: 'FROM KAMPALA, UGANDA',
  title: ['Just', 'Level.'],
  lede: ['Practical ideas. Local stories.', 'Conversations worth joining.'],
  watchLabel: 'Watch the trailer',
  exploreLabel: "Explore what's coming",
  portrait: {
    src: '/images/alban.png',
    srcWebp: '/images/alban.webp',
    alt: 'Alban Byamugisha, founder of ALBAN TV',
    caption: 'ALBAN BYAMUGISHA',
    captionSub: 'CEO & Founder',
  },
}

export const strap = ['ALBAN TV', 'IDEAS', 'PEOPLE', 'CONVERSATION', 'JUST LEVEL']

export const watch = {
  eyebrow: 'WELCOME TO THE CHANNEL',
  title: 'This is ALBAN TV.',
  description: [
    'Meet the vision behind the channel.',
    '36 seconds. One introduction.',
  ],
  video: {
    src: '/videos/trailer.mp4',
    poster: '/images/trailer-poster.png',
    captions: '/videos/trailer.vtt',
    ariaLabel: 'ALBAN TV channel trailer',
  },
  note: 'Featuring Alban Byamugisha. Instrumental music with on-screen text.',
}

export const programmes = {
  eyebrow: 'IN DEVELOPMENT',
  title: 'Three ways to level up.',
  description: [
    'Our proposed programme lineup.',
    'Launch dates will be announced on our channels.',
  ],
  shows: [
    {
      number: '01',
      eyebrow: 'PRACTICAL LEARNING',
      title: ['Level Up', 'with Alban'],
      body: 'Take one idea and turn it into an action you can try. Clear examples, small steps and room to learn.',
      meta: ['Proposed: Tuesday · 19:00 EAT', '20 minutes'],
    },
    {
      number: '02',
      eyebrow: 'LOCAL STORIES',
      title: ['Kampala', 'Voices'],
      body: 'Meet the people behind the work, creativity and everyday stories of Kampala.',
      meta: ['Proposed: Thursday · 19:00 EAT', '25 minutes'],
    },
    {
      number: '03',
      eyebrow: 'THOUGHTFUL CONVERSATION',
      title: ['The Just Level', 'Conversation'],
      body: 'Explore beginnings, choices and lessons through a focused conversation with Alban.',
      meta: ['Proposed: Saturday · 19:00 EAT', '45 minutes'],
    },
  ],
}

export const founder = {
  eyebrow: 'MEET THE FOUNDER',
  title: ['A voice.', 'A starting point.'],
  name: 'Alban Byamugisha',
  role: 'CEO & Founder · ALBAN TV',
  paragraphs: [
    'Based in Kampala, Uganda, Alban is building ALBAN TV around practical learning, local stories and conversation. He leads the channel\u2019s presentation and the development of its first programmes.',
    'Follow along from the beginning, bring your questions and be part of the conversation.',
  ],
  cta: 'Join us on YouTube ↗',
}

export const contact = {
  eyebrow: "LET'S CONNECT",
  title: ['Your story could', 'start a conversation.'],
  intro: 'Programme enquiries, collaborations or a story to share:',
  email: 'alban.tv.2@gmail.com',
  phones: [
    { number: '0748 611 252', href: 'tel:+256748611252' },
    { number: '0765 858 515', href: 'tel:+256765858515' },
  ],
  location: 'Kampala, Uganda',
  socials: [
    { label: 'YouTube', handle: '@albantv2 ↗', href: 'https://www.youtube.com/@albantv2' },
    { label: 'TikTok', handle: '@albantv2 ↗', href: 'https://www.tiktok.com/@albantv2' },
    { label: 'Instagram', handle: '@albantv_2 ↗', href: 'https://www.instagram.com/albantv_2' },
    { label: 'X', handle: '@albantv_2 ↗', href: 'https://x.com/albantv_2' },
  ],
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitLabel: 'Send message',
    note: 'Opens in your email app — no account needed.',
  },
}

export const footer = {
  name: 'ALBAN TV — Just Level',
  location: 'Kampala, Uganda',
  backToTop: 'Back to top ↑',
}