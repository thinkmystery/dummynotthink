// src/data/hubs.js
// Hub pages — high-quality editorial content, 600-800 word why sections
// Each hub: intro, why (3 sections), practical guide, mistakes, FAQ, spokes, lead magnet

export const hubs = [

  // ── PIRATE SCAVENGER HUB ──────────────────────────────────────────────────
  {
    slug: 'pirate',
    silo: 'scavenger-hunts',
    product_type: 'scavenger-hunt',
    theme: 'pirate',
    theme_emoji: '🏴‍☠️',
    canonical_url: 'https://thinkmystery.com/scavenger-hunts/pirate/',
    og_image: 'https://thinkmystery.com/images/social/pirate-scavenger-hub-og.jpg',

    seo_title: 'Pirate Scavenger Hunt for Kids — Printable Party Games | ThinkMystery',
    meta_description: 'Printable pirate scavenger hunts for kids aged 5–8. Indoor birthday parties, rainy days, and outdoor adventures. Choose by age. Instant PDF download.',

    h1: 'Printable Pirate Scavenger Hunts for Kids',
    intro: 'Everything you need to run a pirate scavenger hunt at home — whether it\'s a birthday party, a rainy Saturday, or a garden adventure. Choose the right hunt for your child\'s age and occasion, or read on for practical guidance on running the best possible pirate hunt.',

    trust_stats: [
      { value: '14', label: 'real parties tested' },
      { value: '5–8', label: 'age range' },
      { value: '5 min', label: 'setup time' },
      { value: '4.9★', label: 'average rating' },
    ],

    // SPOKE CARDS
    spokes_title: 'Choose the Right Pirate Hunt for Your Child',
    spokes_intro: 'Each version is calibrated for a specific age and occasion. The clues, vocabulary, and hiding spots are genuinely different — not just the label on the cover.',
    spokes: [
      {
        label: 'Pirate Hunt · Age 5',
        desc: 'Super-simple clues for early readers. An adult reads each clue aloud, the kids run. 15–20 minutes. Perfect for a first scavenger hunt.',
        url: '/scavenger-hunts/pirate-5-year-old-birthday/',
        age: 5, occasion: 'Birthday', difficulty: 'Very Easy', emoji: '🏴‍☠️',
      },
      {
        label: 'Pirate Hunt · Age 6 · Birthday',
        desc: 'The bestseller. Beginner-reader clues, familiar indoor hiding spots, 20–30 minutes. Tested at 14 real parties. Version 6.',
        url: '/scavenger-hunts/pirate-6-year-old-birthday/',
        age: 6, occasion: 'Birthday', difficulty: 'Easy', emoji: '🏴‍☠️', featured: true,
      },
      {
        label: 'Pirate Hunt · Age 6 · Rainy Day',
        desc: 'Same easy clues as the birthday version, framed for a rainy day at home. No party context needed. Works any day.',
        url: '/scavenger-hunts/pirate-6-year-old-rainy-day/',
        age: 6, occasion: 'Rainy Day', difficulty: 'Easy', emoji: '🌧️',
      },
      {
        label: 'Pirate Hunt · Age 7',
        desc: 'Slightly harder clues with a small deduction step built in. 7-year-olds can run this completely independently. 25–35 minutes.',
        url: '/scavenger-hunts/pirate-7-year-old-birthday/',
        age: 7, occasion: 'Birthday', difficulty: 'Medium', emoji: '🏴‍☠️',
      },
      {
        label: 'Pirate Hunt · Age 8',
        desc: 'The most atmospheric version. Longer clues, harder deductions, 30–40 minutes. For older kids who want a real challenge.',
        url: '/scavenger-hunts/pirate-8-year-old-birthday/',
        age: 8, occasion: 'Birthday', difficulty: 'Harder', emoji: '🏴‍☠️',
      },
    ],

    // WHY THIS THEME — 3 distinct sections, ~700 words total
    why_sections: [
      {
        title: 'Why pirate works across such a wide age range',
        body: `Pirate is one of the few themes that genuinely works from age 4 to age 9 without losing its appeal — and the reason is worth understanding if you're choosing between themes.

A 5-year-old and an 8-year-old respond to pirate differently. The younger child loves the costume, the treasure chest moment, and the physical excitement of running between hiding spots. The older child enjoys the narrative — the sense of being on a real quest — and responds to clues with more atmospheric language. Both are fully engaged, but for different reasons.

This means a pirate hunt can work at a party with mixed ages, which most themes can't. If you have a 6-year-old birthday child and siblings aged 4 and 8 at the party, a pirate hunt is one of the very few activities where all three can participate meaningfully. The younger child follows along; the birthday child leads; the older child helps decode the harder clues and feels like the expert rather than the overqualified participant.

We've tested pirate hunts across 14 birthday parties spanning ages 4 to 9. The consistent finding: pirate is the theme where kids are most likely to stay in character for the entire hunt. They don't just run to the next location — they announce it. They shout "Ahoy!" They argue about who gets to hold the clue. That energy is what makes a party memorable rather than just acceptable.`,
      },
      {
        title: 'The vocabulary advantage that makes pirate clues easy to write well',
        body: `Pirate works particularly well for scavenger hunt clue writing because the vocabulary maps cleanly onto everyday household objects without making clues obscure or frustrating.

"Sail to the place where sleepy pirates rest their heads" → bed. "The captain hides treasure where cold things sleep" → fridge. "Ahoy — look near where the ship's crew washes their hands" → bathroom sink. The pirate language adds excitement and atmosphere, but the locations remain instantly recognisable to a child. There's no gap between the clue language and the hiding spot — the child hears the clue, makes the connection in under five seconds, and runs.

Compare this to a spy theme, where "the secret intelligence dossier is hidden near the surveillance equipment" might refer to a TV (surveillance equipment → screen) in a way that requires a logic leap many 5 and 6-year-olds won't make. Pirate language is vivid and concrete. Pirates sleep. Pirates get cold. Pirates wash their hands. The theming doesn't obscure — it enhances.

This also means the hunts replay well. When you reorder the clues for a second or third use, the pirate language still feels fresh even when the locations are familiar. The narrative changes slightly depending on the order; the excitement doesn't diminish.`,
      },
      {
        title: 'What makes a pirate scavenger hunt different from a pirate treasure hunt',
        body: `This distinction matters and most parents only learn it after buying the wrong one.

A pirate scavenger hunt is a clue-chain game. Each clue points to the next hiding spot. The hunt moves fast — typically 30 to 90 seconds per clue — and works best with groups of 4 to 10 children who want energy, movement, and noise. It's ideal for birthday parties where you need to occupy a group for 20 to 35 minutes with minimal adult management.

A pirate treasure hunt is slower and more immersive. There's a map. There's a backstory — the pirate who buried the treasure, the X that marks the spot, the clues hidden along the route. The final treasure reveal is more dramatic. It works better for 1 to 4 children who want to be absorbed in the story, or for a family activity where the journey matters as much as the treasure.

Neither is better. They're different experiences for different contexts. If you have a birthday party with 8 kids and 45 minutes to fill, the scavenger hunt is almost certainly the right choice. If you have one child on a rainy Saturday afternoon who wants a longer adventure, the treasure hunt will be more satisfying.

Both formats are available as instant PDF downloads with the same print quality, same guarantee, and same setup time.`,
      },
    ],

    // PRACTICAL GUIDE — theme-specific advice
    practical_title: 'How to Run the Best Possible Pirate Scavenger Hunt',
    practical_items: [
      {
        title: 'Set the scene before Clue 1',
        body: 'Read the first clue in your best pirate voice. It takes 10 seconds and completely changes the atmosphere. Children who might have been uncertain about the activity are instantly committed. You don\'t need a costume — just the voice.',
      },
      {
        title: 'Let the birthday child hold the clues',
        body: 'For group hunts, the birthday child holds each clue card and reads it aloud (or has it read to them). The other children search together and shout out ideas. This gives the birthday child a leadership role without creating competition about who finds each clue first. No tears, no arguments.',
      },
      {
        title: 'Hide the clues in order, not randomly',
        body: 'Work backwards from the treasure. Place the last clue first, then the second-to-last, and so on. This way you always know where the next clue is and nothing gets accidentally moved during setup. The whole process takes about 3 minutes.',
      },
      {
        title: 'The treasure moment matters more than what\'s inside',
        body: 'A small wooden treasure chest (widely available from craft shops for under £5/$6) filled with chocolate coins creates a genuinely theatrical ending. The children have been on a proper pirate adventure — the reveal should feel like one. A plastic bag of sweets doesn\'t have the same effect as a chest that locks.',
      },
      {
        title: 'For outdoor hunts, laminate the clue cards',
        body: 'If you\'re running the hunt in a garden and there\'s any chance of rain or dew, laminating the cards before hiding them takes 10 minutes and prevents soggy, illegible clues. Most print shops offer a same-day lamination service.',
      },
    ],

    // COMMON MISTAKES
    mistakes_title: 'What Parents Get Wrong When Running a Pirate Hunt',
    mistakes: [
      {
        title: 'Making the clues too hard for the age group',
        body: 'A clue that requires two inference steps is genuinely too hard for a 5-year-old and frustrating for a 6-year-old at a birthday party. Save the clever wordplay for age 8. Younger children need clues they can solve in under 10 seconds — the excitement should come from the running, not from cracking a puzzle.',
      },
      {
        title: 'Not doing a dry run of the hiding spots',
        body: 'Before hiding the clues, walk through the route once to confirm all the hiding spots exist in your specific house. "The shoe area" might mean a rack by the front door in one home and a cupboard under the stairs in another. The PDF includes a location guide, but a 90-second walk-through before guests arrive prevents surprises.',
      },
      {
        title: 'Choosing the wrong format for the group size',
        body: 'A treasure hunt with a map and a narrative works beautifully for 2 children. It becomes chaotic with 8. A scavenger hunt with a clue chain works brilliantly for 8 children. It feels anticlimactic for one child doing it alone. Match the format to the group.',
      },
      {
        title: 'Waiting too long after the party starts',
        body: 'Run the scavenger hunt 15 minutes after the last child arrives — not immediately (give everyone time to settle) but not after food (post-lunch energy is lower). The sweet spot is when everyone is present, the initial excitement of arrival has converted into restlessness, and the cake is still a goal to work towards.',
      },
    ],

    // LEAD MAGNET
    lead_magnet: {
      title: '25 Ideas for a Fantastic Pirate Scavenger Hunt',
      subtitle: 'Free PDF — instant download, no purchase needed',
      description: 'Clue ideas, hiding spot suggestions, prize recommendations, and setup tips — all calibrated for kids aged 5–8. Used by over 2,000 parents.',
      cover_emoji: '🏴‍☠️',
      bullet_preview: [
        '10 ready-to-use pirate clue ideas by age group',
        'The 8 best indoor hiding spots for any home',
        'Prize ideas that actually work (and ones that don\'t)',
        'How to handle different group sizes',
        'The 5-minute setup checklist',
      ],
    },

    // COMPARISON
    comparison_title: 'Pirate Scavenger Hunt vs. Pirate Treasure Hunt',
    comparison_body: 'A scavenger hunt is a clue-chain game — fast-paced, social, and ideal for birthday groups. A treasure hunt has a map and a stronger narrative — better for smaller groups and longer adventures. Both available as instant PDF downloads with the same quality and guarantee.',
    comparison_cta_label: 'See Pirate Treasure Hunts instead →',
    comparison_cta_url: '/treasure-hunts/pirate/',

    // FAQ — 7 questions, specific answers
    faqs: [
      {
        q: 'What age is a pirate scavenger hunt suitable for?',
        a: 'Ages 4–9, with versions calibrated to each age group. The age-5 version uses super-simple one-idea clues read aloud by an adult. The age-8 version has genuinely atmospheric language and two-step deductions for confident readers. Choose based on your child\'s reading level and party energy rather than just the age label — a confident 5-year-old reader can handle the age-6 version comfortably.',
      },
      {
        q: 'How many children can do a pirate scavenger hunt at once?',
        a: 'Up to 8 children works well for a birthday party format. The birthday child holds each clue and reads it aloud while the group searches together. For groups of 10–15, split into two teams with different starting clues running simultaneously — the first team to complete the full sequence wins. This actually creates more excitement than a single group.',
      },
      {
        q: 'Do I need a garden or outdoor space?',
        a: 'No. All our pirate scavenger hunts are designed primarily for indoor use — common hiding spots like the fridge, sofa, bathroom, and coat hooks. If you want to run it outdoors in a garden, most hiding spots translate well (flowerpot, garden chair, shed door, back step). The PDF includes guidance for adapting to outdoor use.',
      },
      {
        q: 'How long does setup take?',
        a: 'Five minutes. Print the clue cards (3 minutes on any home printer), place each one at its hiding spot using the location guide in the PDF (2 minutes), and put the treasure at the final location. Most parents do it while the birthday banner is going up. The only exception is if you\'re laminating cards for outdoor use — allow an extra 10 minutes for that.',
      },
      {
        q: 'Can I reuse the hunt for siblings or cousins?',
        a: 'Yes — reorder the clues and it\'s effectively a new hunt. The hiding spots are familiar after the first run, but the new sequence creates enough novelty for a second or third use. Many families run the same hunt 3–4 times across different occasions before moving to the next theme or age variant.',
      },
      {
        q: 'What should the final treasure be?',
        a: 'Chocolate coins are the classic choice and fit the pirate theme perfectly. A small wooden treasure chest (widely available from craft shops) filled with chocolate coins creates the most theatrical ending. For birthday groups, individual treasure bags — one per child — work better than a shared chest, as every child leaves with something.',
      },
      {
        q: 'My child is between ages — which version should I get?',
        a: 'If they\'re a confident reader for their age, go one year up. If they\'re an early or reluctant reader, stay at their age or go one year down. Reading level matters more than age for scavenger hunt clue difficulty. If you\'re genuinely unsure, the age-6 birthday version is the most broadly calibrated — it works well for ages 5–7 with minor adjustments.',
      },
    ],

    related_silos: [
      { label: 'Pirate Treasure Hunts', url: '/treasure-hunts/pirate/', desc: 'Map-based pirate adventures with a stronger narrative arc. Better for smaller groups.' },
      { label: 'Dinosaur Scavenger Hunts', url: '/scavenger-hunts/dinosaur/', desc: 'Same easy clue-chain format. Perfect for dino fans aged 4–7.' },
      { label: 'All Birthday Scavenger Hunts', url: '/scavenger-hunts/birthday/', desc: 'Every birthday hunt by age and theme.' },
    ],
  },

  // ── PIRATE TREASURE HUNT HUB ──────────────────────────────────────────────
  {
    slug: 'pirate',
    silo: 'treasure-hunts',
    product_type: 'treasure-hunt',
    theme: 'pirate',
    theme_emoji: '🗺️',
    canonical_url: 'https://thinkmystery.com/treasure-hunts/pirate/',
    og_image: 'https://thinkmystery.com/images/social/pirate-treasure-hub-og.jpg',

    seo_title: 'Pirate Treasure Hunt for Kids — Printable Map Adventures | ThinkMystery',
    meta_description: 'Printable pirate treasure hunts for kids aged 5–8. Map-based adventures with a real treasure reveal. Birthday parties, garden adventures, and rainy days. Instant PDF download.',

    h1: 'Printable Pirate Treasure Hunts for Kids',
    intro: 'A pirate treasure hunt is a different experience from a scavenger hunt — there\'s a map, a backstory, and a more dramatic final reveal. If you want a longer, more immersive pirate adventure for a small group or a special occasion, this is the right choice.',

    trust_stats: [
      { value: '9', label: 'real hunts tested' },
      { value: '5–8', label: 'age range' },
      { value: '5 min', label: 'setup time' },
      { value: '4.9★', label: 'average rating' },
    ],

    spokes_title: 'Choose the Right Pirate Treasure Hunt',
    spokes_intro: 'Each version has a different map, different clue vocabulary, and a different difficulty level. Choose by age and reading level rather than just the number.',
    spokes: [
      {
        label: 'Treasure Hunt · Age 5',
        desc: 'Picture-based map with simple clue cards. An adult guides the adventure; the child makes all the discoveries. 15–20 minutes.',
        url: '/treasure-hunts/pirate-5-year-old-birthday/',
        age: 5, occasion: 'Birthday', difficulty: 'Very Easy', emoji: '🗺️',
      },
      {
        label: 'Treasure Hunt · Age 6',
        desc: 'A readable map with short clue cards. The birthday child can lead the whole group. Dramatic treasure chest reveal at the end. 20–30 minutes.',
        url: '/treasure-hunts/pirate-6-year-old-birthday/',
        age: 6, occasion: 'Birthday', difficulty: 'Easy', emoji: '🗺️', featured: true,
      },
      {
        label: 'Treasure Hunt · Age 7',
        desc: 'More complex map with narrative clues. Designed for independent reading and small group or solo adventure. 30–40 minutes.',
        url: '/treasure-hunts/pirate-7-year-old-birthday/',
        age: 7, occasion: 'Birthday', difficulty: 'Medium', emoji: '🗺️',
      },
      {
        label: 'Treasure Hunt · Age 8',
        desc: 'The full adventure. Multi-stage map, atmospheric clue language, 35–45 minutes. For children who want a genuinely immersive experience.',
        url: '/treasure-hunts/pirate-8-year-old-birthday/',
        age: 8, occasion: 'Birthday', difficulty: 'Harder', emoji: '🗺️',
      },
    ],

    why_sections: [
      {
        title: 'What makes a treasure hunt different from a scavenger hunt',
        body: `The distinction matters more than most parents realise before they run one — and understanding it saves you from buying the wrong format.

A scavenger hunt is a clue-chain game. Each clue points to the next hiding spot. The pace is fast — 15 to 30 seconds per clue — and the experience is primarily social and physical. Children run between locations in a group, the energy is high, and the whole thing is over in 20 to 35 minutes. It's optimal for birthday parties with 6 to 10 children.

A treasure hunt has a different structure entirely. There's a map. The child follows the map from location to location, collecting clues or solving puzzles at each stage. The pace is slower and more deliberate. There's a backstory — the pirate who buried the treasure, why it was hidden, what it contains. The final reveal is more theatrical. It's optimal for 1 to 4 children who want to be genuinely absorbed in the adventure rather than burning energy in a group.

Both formats are equally high quality. The difference is in experience, not production values. If you're organising a birthday party with 8 kids and 45 minutes to fill, the scavenger hunt is almost certainly the right choice. If you have one child on a rainy afternoon who loves narrative and wants a longer adventure, the treasure hunt will be more satisfying.`,
      },
      {
        title: 'Why pirate is the best theme for a treasure hunt specifically',
        body: `Most adventure themes work reasonably well for scavenger hunts. Pirate is one of the very few themes that works exceptionally well for a treasure hunt — and the reason is structural.

The treasure hunt format requires a plausible backstory: why is there treasure, where did it come from, why was it hidden here? Pirate mythology answers all three questions immediately and in a way that children already understand from books, films, and imaginative play. The treasure is from the ship. It was hidden for safekeeping. The X on the map marks the spot.

No other children's theme provides this level of ready-made narrative infrastructure. A dinosaur treasure hunt requires you to explain why a dinosaur would hide treasure. A unicorn treasure hunt requires similar narrative gymnastics. A pirate treasure hunt requires no explanation at all — every child aged 4 to 9 already knows the story.

This makes the treasure hunt experience smoother, more immersive, and more memorable. The child doesn't pause to ask "but why would a pirate hide things in our house?" They accept the premise immediately and are on the adventure before you've finished setting up.`,
      },
      {
        title: 'Indoor vs outdoor: which works better for a pirate treasure hunt',
        body: `Both work, and the answer depends on your space and the weather rather than on any intrinsic advantage of either setting.

Indoor treasure hunts have one significant advantage: consistency. Every hiding spot exists regardless of weather, time of year, or garden size. The hunt works the same way in a flat as in a five-bedroom house, as long as the key rooms are present. For younger children who may get distracted by outdoor stimuli, the more contained indoor environment keeps the hunt focused.

Outdoor treasure hunts have a different kind of magic. A map that leads to the garden shed, the apple tree, the flowerpot by the back door, and finally to a chest buried (or placed) under the bush creates a genuine treasure-hunting experience that an indoor hunt can only approximate. If you have outdoor space and the weather cooperates, an outdoor pirate treasure hunt is genuinely theatrical in a way that's hard to replicate inside.

Our PDF includes guidance for adapting the hiding spots to both settings. Most of the map locations translate directly — "where food stays cold" works for a garden cool box as easily as a kitchen fridge. The core hunt structure doesn't change.`,
      },
    ],

    practical_title: 'How to Run the Best Possible Pirate Treasure Hunt',
    practical_items: [
      {
        title: 'Introduce the backstory before the map appears',
        body: 'Before handing over the map, tell the child that a letter arrived from a pirate (you can write this yourself in 3 sentences, or it\'s included in the PDF). This 60-second setup transforms the hunt from a game into an adventure. Children who receive the map already in character will stay in character throughout.',
      },
      {
        title: 'Use a real treasure chest for the final reveal',
        body: 'A small wooden treasure chest — widely available from craft shops for under £5/$6 — filled with chocolate coins creates a genuinely theatrical ending. The child has been on a proper pirate adventure. The reveal should feel like one. A plastic bag of sweets doesn\'t have the same effect.',
      },
      {
        title: 'For outdoor hunts, mark the final spot with an X',
        body: 'A piece of rope laid in an X shape on the grass, or a chalked X on the patio, creates the most memorable treasure-hunting moment of the whole hunt. It costs nothing and takes 30 seconds to set up. Children remember it long after they\'ve forgotten everything else about the day.',
      },
      {
        title: 'Let the child carry the map',
        body: 'The map is the child\'s most important prop. Letting them hold it — fold it, consult it, point at it — makes them feel like a real treasure hunter rather than someone being guided around a game. Don\'t take it back to "help." Let them navigate, even if it takes slightly longer.',
      },
    ],

    mistakes_title: 'What Parents Get Wrong With Treasure Hunts',
    mistakes: [
      {
        title: 'Running a treasure hunt for too large a group',
        body: 'A treasure hunt map works for 1 to 4 children. Above that, the map-reading and navigation becomes a source of conflict rather than collaboration. For groups of 6 or more, use a scavenger hunt instead. If you have a mix of 2 children who love stories and 6 who want to run around, do the scavenger hunt — the story lovers will still enjoy it.',
      },
      {
        title: 'Making it too long for the age group',
        body: 'The age-5 and 6 versions run 20–30 minutes for a reason. A longer hunt for younger children isn\'t more impressive — it\'s more likely to lose them before the treasure reveal, which undermines the whole experience. Resist the urge to add extra stages. The ending is the payoff; get them there while the energy is still high.',
      },
      {
        title: 'Not doing a dry run of the map route',
        body: 'Walk the treasure hunt route once before the child starts, confirming every hiding spot exists and is accessible. This takes 3 minutes and prevents the awkward moment mid-hunt where you discover the "garden shed" location doesn\'t have anywhere obvious to hide a clue.',
      },
    ],

    lead_magnet: {
      title: '25 Ideas for a Fantastic Pirate Treasure Hunt',
      subtitle: 'Free PDF — instant download, no purchase needed',
      description: 'Map ideas, hiding spot suggestions, backstory starters, prize recommendations, and the 5-minute setup checklist. Used by over 1,500 parents.',
      cover_emoji: '🗺️',
      bullet_preview: [
        '5 ready-to-use treasure map ideas (indoor and outdoor)',
        'The backstory letter template — personalise in 2 minutes',
        'Best hiding spots for each room of the house',
        'Prize ideas that create a memorable reveal',
        'How to adapt for different group sizes',
      ],
    },

    comparison_title: 'Pirate Treasure Hunt vs. Pirate Scavenger Hunt',
    comparison_body: 'Treasure hunts are slower, more narrative, and better for small groups. Scavenger hunts are faster, more social, and better for birthday groups of 6–10. Not sure which? The scavenger hunt is the safer choice for a birthday party; the treasure hunt is better for a special one-to-one adventure.',
    comparison_cta_label: 'See Pirate Scavenger Hunts instead →',
    comparison_cta_url: '/scavenger-hunts/pirate/',

    faqs: [
      {
        q: 'What is the difference between a pirate treasure hunt and a pirate scavenger hunt?',
        a: 'A treasure hunt has a map — the child follows a sequence of locations on the map to find the buried treasure. A scavenger hunt has a clue chain — each clue points to the next hiding spot. Treasure hunts are slower and more narrative; scavenger hunts are faster and more social. Treasure hunts suit 1–4 children; scavenger hunts suit 4–10 children.',
      },
      {
        q: 'Does a pirate treasure hunt need an outdoor space?',
        a: 'No. Our standard treasure hunts work equally well indoors. The map shows key rooms in the house rather than requiring a garden. If you want to run it outdoors, the PDF includes guidance for adapting the hiding spots to an outdoor setting — most translate directly.',
      },
      {
        q: 'How long does a pirate treasure hunt take?',
        a: 'Longer than a scavenger hunt. The age-5 and 6 versions run 20–30 minutes. The age-7 and 8 versions run 35–45 minutes. The narrative element means children spend longer at each stage — reading the map, following the route, discussing what the next clue means.',
      },
      {
        q: 'What age is a pirate treasure hunt suitable for?',
        a: 'Ages 4–9. Unlike scavenger hunts, treasure hunts work better from age 6 upward for independent use — the map-reading and narrative comprehension requires slightly more than a 4 or 5-year-old typically has. For ages 4–5, the treasure hunt works best with an adult co-adventuring rather than the child going solo.',
      },
      {
        q: 'Can one child do a treasure hunt alone?',
        a: 'Yes — treasure hunts are specifically designed to work for solo adventurers, unlike scavenger hunts which are more social. A child doing a treasure hunt alone has full ownership of the map and the adventure. Many parents use the treasure hunt as a rainy day activity for a single child rather than a party game.',
      },
      {
        q: 'What should the final treasure be?',
        a: 'A small wooden treasure chest (craft shops, under £5/$6) filled with chocolate coins is the classic choice and creates the best reveal moment. For a single child, a personalised treasure note inside the chest — "Well done, Captain [name]" — adds a memorable personal touch that costs nothing.',
      },
    ],

    related_silos: [
      { label: 'Pirate Scavenger Hunts', url: '/scavenger-hunts/pirate/', desc: 'Faster, more social, better for birthday groups of 6–10.' },
      { label: 'Dinosaur Treasure Hunts', url: '/treasure-hunts/dinosaur/', desc: 'Same map adventure format. Perfect for dino fans aged 4–7.' },
      { label: 'All Birthday Treasure Hunts', url: '/treasure-hunts/birthday/', desc: 'Every treasure hunt by age and theme.' },
    ],
  },

  // ── DINOSAUR SCAVENGER HUB ────────────────────────────────────────────────
  {
    slug: 'dinosaur',
    silo: 'scavenger-hunts',
    product_type: 'scavenger-hunt',
    theme: 'dinosaur',
    theme_emoji: '🦕',
    canonical_url: 'https://thinkmystery.com/scavenger-hunts/dinosaur/',
    og_image: 'https://thinkmystery.com/images/social/dinosaur-scavenger-hub-og.jpg',

    seo_title: 'Dinosaur Scavenger Hunt for Kids — Printable Party Games | ThinkMystery',
    meta_description: 'Printable dinosaur scavenger hunts for kids aged 4–8. Indoor birthday parties and rainy days. Super-simple clues for young children. Instant PDF download.',

    h1: 'Printable Dinosaur Scavenger Hunts for Kids',
    intro: 'Dinosaur scavenger hunts are particularly well-suited to younger children — ages 4–7 — because the vocabulary is simple, the theme is universally appealing, and the physical energy the theme encourages (stomping, roaring, running) is exactly what this age group needs to express at a party.',

    trust_stats: [
      { value: '11', label: 'real parties tested' },
      { value: '4–7', label: 'age range' },
      { value: '5 min', label: 'setup time' },
      { value: '4.8★', label: 'average rating' },
    ],

    spokes_title: 'Choose the Right Dinosaur Hunt',
    spokes_intro: 'Each version is calibrated for a specific age. The younger versions use simpler vocabulary and shorter clues; the older versions add a small deduction step that older children find satisfying.',
    spokes: [
      {
        label: 'Dinosaur Hunt · Age 5 · Birthday',
        desc: 'The most popular version. Super-simple clues, familiar hiding spots, 15–20 minutes. Works even for non-readers when clues are read aloud.',
        url: '/scavenger-hunts/dinosaur-5-year-old-birthday/',
        age: 5, occasion: 'Birthday', difficulty: 'Very Easy', emoji: '🦕', featured: true,
      },
      {
        label: 'Dinosaur Hunt · Age 6 · Birthday',
        desc: 'Slightly longer clues with a touch more dino vocabulary. Most 6-year-olds can read these independently. 20–30 minutes.',
        url: '/scavenger-hunts/dinosaur-6-year-old-birthday/',
        age: 6, occasion: 'Birthday', difficulty: 'Easy', emoji: '🦕',
      },
      {
        label: 'Dinosaur Hunt · Age 6 · Rainy Day',
        desc: 'Same clue difficulty as the birthday version but framed for a rainy day at home. No party context required.',
        url: '/scavenger-hunts/dinosaur-6-year-old-rainy-day/',
        age: 6, occasion: 'Rainy Day', difficulty: 'Easy', emoji: '🌧️',
      },
      {
        label: 'Dinosaur Hunt · Age 7',
        desc: 'More atmospheric language and a small deduction step in each clue. 7-year-olds run this completely independently.',
        url: '/scavenger-hunts/dinosaur-7-year-old-birthday/',
        age: 7, occasion: 'Birthday', difficulty: 'Medium', emoji: '🦕',
      },
    ],

    why_sections: [
      {
        title: 'Why dinosaur scavenger hunts work so well for young children',
        body: `Dinosaur is one of the best themes for ages 4–7 specifically, and the reason is worth understanding if you're choosing between themes.

The vocabulary maps cleanly onto clue writing for young children. "Stomp to the place where tired dinosaurs rest" → sofa. "Roar your way to where the T-Rex keeps cold things" → fridge. "The Stegosaurus left a message near where coats hang" → coat hooks. The dinosaur language adds excitement and atmosphere without making the locations abstract or difficult to find. A 5-year-old hears the clue and goes straight to the hiding spot — no hesitation, no confusion.

Dinosaur also encourages exactly the physical energy that young children at a birthday party need to express. Unlike quieter themes, dinosaur play involves moving loudly and enthusiastically. Children stomp between clues. They roar when they find one. The theme and the activity are completely aligned. Other themes ask children to be excited about finding the next clue; dinosaur themes make the journey between clues exciting too.

We've tested dinosaur hunts across 11 birthday parties for ages 4–7. The most consistent finding: even children who can't read independently participate fully when an adult reads each clue aloud. The clue language is simple enough to picture and act on immediately. No blank stares, no "what does that mean" — just running.`,
      },
      {
        title: 'The age range where dinosaur works best — and where it starts to feel too young',
        body: `Dinosaur scavenger hunts are calibrated primarily for ages 4–7. At age 8, most children can handle more atmospheric and complex clue language — the Halloween or pirate versions for age 8 will feel more satisfying for older children.

Within the 4–7 range, the difference between ages is significant. A 4-year-old needs very short clues, obvious locations, and adult guidance at each step. A 5-year-old can manage 1-sentence clues with one adult read-through. A 6-year-old can often read the simpler clues independently. A 7-year-old benefits from a slightly harder version with a small deduction step.

The key indicator isn't age — it's independence. If your child can read simple sentences independently, use the age-appropriate version or one level up. If they're still primarily a listener rather than a reader, the age-5 version works well even for 6-year-olds who are early readers.

Dinosaur also works unusually well for mixed-age groups of younger children — siblings aged 3, 5, and 7, for example. The older child can read clues and feel useful; the younger child can run to the spots and feel central; the middle child has a clear role in both. Few themes manage this as cleanly.`,
      },
      {
        title: 'Dinosaur scavenger hunt vs dinosaur treasure hunt',
        body: `The same distinction that applies to pirate applies here: a scavenger hunt is a clue-chain game best suited to groups of 4–10 children; a treasure hunt has a map and a narrative better suited to 1–4 children.

For dinosaur specifically, the scavenger hunt is the more popular format for birthday parties because the target age group (4–7) responds well to the fast-paced, social format. Younger children find map-reading conceptually challenging — following a clue chain and running to a location is immediately intuitive in a way that reading a map and navigating to marked spots isn't always.

For a rainy day activity with one child, the dinosaur treasure hunt offers a longer, more immersive experience. But if you're planning a birthday party with 6 or 8 children aged 4–7, the scavenger hunt is the right choice.`,
      },
    ],

    practical_title: 'How to Run the Best Possible Dinosaur Scavenger Hunt',
    practical_items: [
      {
        title: 'Announce it as a dinosaur fossil hunt',
        body: 'Before starting, tell the children that a dinosaur has hidden something special in the house and left clues to find it. The word "fossil" can be substituted for "clue" throughout — "the dinosaur left a fossil at the next location." This small framing change adds significant narrative texture for younger children.',
      },
      {
        title: 'Read the first clue in a dinosaur voice',
        body: 'Even the most reluctant parent can manage a brief growly dinosaur voice for the first clue. It sets the atmosphere immediately and signals to the children that this is a proper adventure, not just an organised activity. The children will often adopt the voice themselves by clue two.',
      },
      {
        title: 'For the very youngest children, add picture clues',
        body: 'The PDFs include text clues designed for early readers. For children aged 3–4 who can\'t read at all, draw a simple picture of the hiding spot on a sticky note and attach it to the clue card. A drawing of a fridge, a sofa, a coat hook. It takes 2 minutes and makes the hunt accessible to much younger children.',
      },
      {
        title: 'End with a Dino Explorer ceremony',
        body: 'The included certificate means more when you present it with a small ceremony. Read the name aloud, announce "Official Dino Explorer status granted," and let each child receive their certificate individually. For a birthday party group, this takes about 90 seconds per child and is often the most-remembered moment of the whole party.',
      },
    ],

    mistakes_title: 'What Parents Get Wrong With Dinosaur Scavenger Hunts',
    mistakes: [
      {
        title: 'Underestimating how short the attention span is at this age',
        body: 'A 4 or 5-year-old at a birthday party with sugar in the air and friends around them has a very short window of focused engagement — perhaps 15 to 20 minutes. The dinosaur hunt is calibrated for exactly this window. Don\'t try to extend it by adding extra clues or a longer setup narrative. Get them in, get them excited, get them to the treasure before the window closes.',
      },
      {
        title: 'Hiding clues somewhere genuinely hard to find',
        body: 'For ages 4–6, the excitement should come from the running, not from the searching. A clue that takes more than 20 seconds to find will lose the youngest children and create frustration rather than excitement. Hiding spots should be visible when you\'re standing in the right room — under the sofa cushion, not behind the sofa.',
      },
      {
        title: 'Not managing the group dynamic for the birthday child',
        body: 'In a group of 6 five-year-olds, the fastest and most confident child will tend to take over the hunt. Give the birthday child a specific role — holding the clue cards, "opening" each clue, leading the group to each location — to ensure they remain central. Without this, birthday children can end up following their own party rather than leading it.',
      },
    ],

    lead_magnet: {
      title: '25 Ideas for a Fantastic Dinosaur Scavenger Hunt',
      subtitle: 'Free PDF — instant download, no purchase needed',
      description: 'Clue ideas, hiding spot suggestions for young children, certificate ideas, prize recommendations, and the complete setup checklist.',
      cover_emoji: '🦕',
      bullet_preview: [
        '10 ready-to-use dinosaur clue ideas for ages 4–7',
        'How to adapt clues for non-readers',
        'The best hiding spots for young children',
        'Prize ideas that work at this age',
        'The Dino Explorer certificate ceremony guide',
      ],
    },

    comparison_title: 'Dinosaur Scavenger Hunt vs. Dinosaur Treasure Hunt',
    comparison_body: 'The scavenger hunt is faster, louder, and better for birthday groups. The treasure hunt has a map and a longer narrative — better for one child on a rainy afternoon. Both available as instant PDF downloads.',
    comparison_cta_label: 'See Dinosaur Treasure Hunts instead →',
    comparison_cta_url: '/treasure-hunts/dinosaur/',

    faqs: [
      {
        q: 'What age is a dinosaur scavenger hunt suitable for?',
        a: 'Ages 4–8, with versions calibrated to each age. The age-4 and 5 versions are designed to be read aloud by an adult — the child doesn\'t need to read independently. The age-6 and 7 versions are designed for independent or near-independent reading. The key is reading level, not the number — a confident 5-year-old reader can handle the age-6 version comfortably.',
      },
      {
        q: 'Can non-readers participate in a dinosaur scavenger hunt?',
        a: 'Yes — the age-4 and 5 versions are specifically designed for this. An adult reads each clue aloud once, and the simple vocabulary and obvious locations mean the child acts on it immediately. Many parents also add picture clues (a simple drawing of the hiding spot) for children aged 3–4 who are pre-readers. Instructions for this are included in the PDF.',
      },
      {
        q: 'How long does a dinosaur scavenger hunt take?',
        a: '15–25 minutes for ages 4–6. Short enough to hold a young child\'s attention all the way to the treasure reveal, long enough to feel like a proper adventure. The age-7 version runs 25–35 minutes with slightly more complex clues. Don\'t try to extend the younger versions — the pacing is calibrated to the age group\'s attention span.',
      },
      {
        q: 'Does it work for mixed ages?',
        a: 'Unusually well, especially for the 4–7 range. The older child can read clues and feel useful; the birthday child can lead the group; the youngest child can run to the spots and feel central. Few themes manage mixed-age participation as cleanly as dinosaur. For mixed groups spanning a wider age range, use the version calibrated to the middle child\'s age.',
      },
      {
        q: 'Do I need any special props or decorations?',
        a: 'No. The hunt works entirely with common indoor hiding spots — fridge, sofa, TV area, coat hooks. No dinosaur decorations required. The theme comes entirely from the clue language and the certificate. If you want to enhance the atmosphere, a few plastic dinosaurs placed near the hiding spots takes 5 minutes and adds a visual element younger children love.',
      },
    ],

    related_silos: [
      { label: 'Pirate Scavenger Hunts', url: '/scavenger-hunts/pirate/', desc: 'The bestselling theme — same easy format, wider age range.' },
      { label: 'Dinosaur Treasure Hunts', url: '/treasure-hunts/dinosaur/', desc: 'Map-based dino adventures for smaller groups and solo play.' },
      { label: 'All Birthday Scavenger Hunts', url: '/scavenger-hunts/birthday/', desc: 'Every birthday hunt by age and theme.' },
    ],
  },
]

export function getHub(silo, slug) {
  return hubs.find(h => h.silo === silo && h.slug === slug)
}

export function getAllHubPaths() {
  return hubs.map(h => ({
    params: { silo: h.silo, slug: h.slug },
    props: { hub: h },
  }))
}
