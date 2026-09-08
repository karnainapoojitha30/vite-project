// Central data source for every Upside Down entity. Add a matching image
// at /public/images/creatures/<image>.jpg (or .webp/.png) and it will be
// picked up automatically — until then, a themed placeholder is shown.
export const CREATURES = [
  {
    slug: 'demogorgon',
    name: 'The Demogorgon',
    tagline: 'The Hunter From Below',
    image: '/images/creatures/demogorgon.jpg',
    accent: '#ff4d4d',
    summary:
      'A towering, faceless predator that stalks its prey through the Upside Down before crossing into Hawkins.',
    details: [
      'Named by the boys after the Dungeons & Dragons monster it resembles, the Demogorgon is a solitary apex predator native to the Upside Down.',
      'Its head splits open into four petal-like flaps lined with teeth whenever it senses prey, and it hunts almost entirely by scent and vibration rather than sight.',
      'It can move between dimensions through tears in reality, and leaves the air around it thick with spores and a rotting, electrical smell.',
    ],
    stats: [
      { label: 'First Seen', value: 'Season 1' },
      { label: 'Habitat', value: 'The Upside Down' },
      { label: 'Threat Level', value: 'Extreme' },
    ],
  },
  {
    slug: 'demodogs',
    name: 'Demodogs',
    tagline: 'The Pack Hunters',
    image: '/images/creatures/demodogs.jpg',
    accent: '#ff8a4d',
    summary:
      'Smaller, faster, and far more numerous than a lone Demogorgon, Demodogs hunt in coordinated packs under a single will.',
    details: [
      'Demodogs begin life as small slug-like Pollywogs before rapidly molting into razor-clawed juvenile hunters.',
      'Unlike the original Demogorgon, they are entirely obedient to the Mind Flayer, moving and attacking as one hive-minded pack.',
      'Their growth is explosive — a single Pollywog can mature into a full-grown Demodog within days if left unchecked.',
    ],
    stats: [
      { label: 'First Seen', value: 'Season 2' },
      { label: 'Habitat', value: 'Tunnels beneath Hawkins' },
      { label: 'Threat Level', value: 'High (pack hunters)' },
    ],
  },
  {
    slug: 'mind-flayer',
    name: 'The Mind Flayer',
    tagline: 'The Shadow in the Sky',
    image: '/images/creatures/mind-flayer.jpg',
    accent: '#4d79ff',
    summary:
      'An immense, smoke-like hive intelligence that commands the creatures of the Upside Down and seeks to consume entire worlds.',
    details: [
      'The Mind Flayer takes the form of a colossal, spider-like cloud of shadow that towers over the Upside Down\u2019s skyline.',
      'It can possess human hosts, spreading a living infection through their bodies to slowly turn them into extensions of itself.',
      'Every creature that serves it — from Demodogs to possessed townsfolk — acts as part of one single, distributed mind.',
    ],
    stats: [
      { label: 'First Seen', value: 'Season 2' },
      { label: 'Habitat', value: 'The Upside Down sky' },
      { label: 'Threat Level', value: 'Catastrophic' },
    ],
  },
  {
    slug: 'vecna',
    name: 'Vecna',
    tagline: 'The Dark Architect',
    image: '/images/creatures/vecna.jpg',
    accent: '#7a1f1f',
    summary:
      'A once-human figure twisted by the Upside Down into a curse-casting predator who hunts victims through their darkest memories.',
    details: [
      'Vecna marks his victims with a curse that draws them into waking nightmares built from their own trauma and guilt.',
      'A grandfather clock\u2019s chime counts down the final minutes before a curse takes hold, giving Hawkins a literal deadline to save each victim.',
      'His real body lies dormant deep within the Upside Down\u2019s version of Creel House, tangled in living vines that connect him to the gates he opens.',
    ],
    stats: [
      { label: 'First Seen', value: 'Season 4' },
      { label: 'Habitat', value: 'Creel House, Upside Down' },
      { label: 'Threat Level', value: 'Catastrophic' },
    ],
  },
]

export const getCreatureBySlug = (slug) => CREATURES.find((c) => c.slug === slug)
