"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Heart,
  Users,
  Compass,
  Star,
  MapPin,
  Briefcase,
  DollarSign,
  Target,
  CheckCircle,
  Quote,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

// Complete archetype data with full content
const archetypeData = {
  "modern-adventurer": {
    name: "The Modern Adventurer",
    essence: "Lives by motion, not by maps. Pursues aliveness over success.",
    image: "/modern-adventurer.png",
    color: "from-amber-400 to-orange-500",
    keywords: ["Explorer", "Freedom Seeker", "Experience Collector"],
    category: "Movement",
    content: {
      coreEssence:
        "The Modern Adventurer is not defined by how many countries they've visited, but by how deeply they're willing to engage with the unknown. They live by motion, not by maps. Their greatest teacher is experience itself — not secondhand knowledge, not fixed identities, but the act of being in it. They don't chase success in the traditional sense. They pursue aliveness. For the Adventurer, the outer journey is a mirror for the inner one. They let life shape them, undo them, re-form them. The question \"Where to next?\" is about growth.",

      lifestyle: {
        description:
          "The Adventurer chooses possibility over predictability. They prioritize freedom of time, movement, and self-expression. Their lives are designed to allow for constant evolution — and they feel most at home when they're learning, adapting, or starting fresh.",
        values: [
          "Curiosity over routine",
          "Experience over accumulation",
          "Flexibility over rigidity",
          "Inner truth over external validation",
          "Presence over performance",
        ],
        note: "They often resist structure not out of laziness, but because their lives unfold more through intuition than planning. They're not afraid to begin again, live with less, or choose the road less explained.",
      },

      dayInLife: [
        "Wake up in a guesthouse in a new city, sun streaming through open windows",
        "Journal or meditate while drinking local coffee, tuning into the inner landscape before choosing what's next",
        "A few hours of focused freelance work, coaching calls, or writing sessions from a co-working space or terrace",
        "An afternoon exploring — walking through neighborhoods, talking to strangers, sketching in a journal, visiting a market or hiking a nearby trail",
        "Dinner with new friends from different countries, exchanging stories and life philosophies",
        "Nighttime reflections, possibly under the stars, wondering where life will take them next — and trusting they'll know when it's time",
      ],

      workPaths: [
        "Travel writer, documentary filmmaker, or photojournalist",
        "Retreat guide, nature therapist, or outdoor educator",
        "Remote strategist, UX researcher, brand storyteller",
        "Cultural consultant, permaculture intern, digital course creator",
        "Language teacher, online facilitator, freelance creative",
      ],

      money: {
        description:
          "Money, for the Adventurer, is not about control — it's about choice. They tend to have a cyclical relationship with finances, often earning in bursts and spending in alignment with inspiration. Financial planning may feel limiting, but they're learning that structure can support spontaneity. They trust that money flows when they are aligned — and they've often experienced this in real-time.",
        wealth: [
          "Freedom of movement",
          "Diversity of experience",
          "Time flexibility",
          "Inner richness",
          "Resourcefulness",
        ],
        motto: "They value possibility above all. To the Adventurer, a modest budget + a bold idea = enough to begin.",
      },

      relationships: {
        description:
          "The Modern Adventurer loves deeply — but not possessively. They seek connection that honors expansion, not attachment. They are often drawn to intense, transformative relationships that mirror their own growth journey. For love to thrive, it must breathe.",
        needs: [
          "Space to be themselves without compromise",
          "Shared values around growth, freedom, and exploration",
          "Emotional depth without control",
          "A partner (or friendship circle) who supports their inner and outer adventures",
        ],
        note: "They may have periods of solo travel or long-distance relationships, and sometimes choose chosen family over traditional romantic models. For them, love is not about staying still — it's about staying true.",
      },

      challenges: [
        "Struggle with consistency and long-term stability",
        "Experience loneliness or lack of rootedness",
        "Avoid hard conversations by moving on",
        "Romanticize beginnings but resist endings",
        "Confuse novelty with progress",
      ],

      growth:
        "Their edge is learning that stillness doesn't equal stagnation — and commitment doesn't equal confinement. They grow when they find inner anchors strong enough to hold them, no matter where they are.",

      signs: [
        "You've changed paths, cities, or countries more than once — and felt more you each time",
        "You've built a life around freedom and self-direction",
        "You crave variety and resist predictability",
        "You learn by going — not by being told",
        'You\'ve had people say, "I wish I could live like you"',
        "You've left something comfortable behind because it no longer felt true",
        "You think in chapters, not timelines",
      ],

      mantras: [
        "My path is made by walking.",
        "I don't need to know what's next — I just need to stay true.",
        "Presence is the adventure.",
        "Home lives inside me.",
        "I trust the road will rise to meet me.",
      ],
    },
  },

  localist: {
    name: "The Localist",
    essence: "Roots deep, builds community from the ground up",
    image: "/localist.png",
    color: "from-green-400 to-emerald-500",
    keywords: ["Community Builder", "Place-Based", "Roots"],
    category: "Community",
    content: {
      coreEssence:
        "The Localist is the keeper of place. While others search far and wide for meaning, the Localist sinks in. They find depth through presence, belonging through contribution, and fulfillment through roots. They live in tune with the rhythms of their environment — the seasons, the land, the people — and see community not as a concept, but as a living, breathing organism they are a part of. Their life is a daily act of devotion to where they are. Their wisdom doesn't come from how far they've traveled, but how fully they've arrived. The Localist reminds us that meaning doesn't require movement. It requires relationship.",

      lifestyle: {
        description:
          "Localists live slowly and intentionally. Their choices ripple through their community, and they are deeply aware of the impact they have — on others, on ecosystems, on the fabric of daily life. They don't chase trends or seek global recognition. Their fulfillment comes from creating something tangible, relational, and meaningful in the here and now.",
        values: [
          "Interdependence over independence",
          "Sustainability over scalability",
          "Craftsmanship over convenience",
          "Place-based knowledge over abstract theory",
          "Contribution over performance",
        ],
        note: "Their lives are built around continuity, care, and meaningful work. They often know their neighbors by name, shop from farmers they trust, and support systems that nourish collective wellbeing. They don't just live in a place — they live with it.",
      },

      dayInLife: [
        "Morning begins with ritual — opening a shop, harvesting herbs, baking bread, sweeping a shared courtyard",
        "Midday is for working hands-on: crafting, building, teaching, or organizing community resources",
        "They take breaks to talk to neighbors, check in with elders, or share food with coworkers",
        "Afternoon may include mentoring a younger artisan, hosting a community gathering, or restocking local goods",
        "Evening is slow and warm — cooking from scratch, reading, tending to a garden, or gathering with others to share news and laughter",
      ],

      workPaths: [
        "Artisan makers: potters, weavers, brewers, tailors, herbalists",
        "Land stewards: organic farmers, forest school teachers, seed keepers",
        "Community organizers: food co-op founders, mutual aid leaders, neighborhood caretakers",
        "Small business owners: bookshop curators, local grocers, craft café owners",
        "Cultural anchors: storytellers, wisdom holders, event hosts, place-based educators",
      ],

      money: {
        description:
          "Money, for the Localist, is relational. They think in terms of cycles, not accumulation. They see value not just in profit, but in reciprocity — what's given, what's shared, what circulates. For them, the economy is not abstract — it's made of real people and real exchanges.",
        priorities: [
          "Earning enough to sustain a simple, beautiful life",
          "Supporting local and ethical businesses over global chains",
          "Bartering, gifting, or sharing resources within their community",
          "Reinvesting earnings into projects that feed the collective good",
        ],
        motto:
          'Possibility, to the Localist, isn\'t about expansion — it\'s about deepening. It\'s not "what more can I get," but "how can I give more meaningfully right where I am?"',
      },

      relationships: {
        description:
          "Love is the thread that weaves everything together for the Localist. They value connection that is consistent, nurturing, and real. They aren't drawn to intensity or drama — they want relationships that feel safe, sacred, and sustaining.",
        brings: [
          "Loyalty and long-term presence",
          "Thoughtful care and acts of service",
          "Emotional honesty grounded in mutual trust",
          "Deep appreciation for shared routines and seasonal rituals",
          "A desire to build a life with someone, not just alongside them",
        ],
        note: "They often thrive in close-knit circles, extended families, or intentional communities. They may choose to stay close to home — not because they lack imagination, but because what's here already matters to them.",
      },

      challenges: [
        "Resist change or innovation",
        "Struggle with letting go of people or places",
        "Experience tension between tradition and evolution",
        "Feel isolated if their values aren't shared by the wider culture",
        "Burn out from overgiving without receiving equal support",
      ],

      growth:
        "Their growth comes in learning that adaptability can coexist with devotion — and that leaving, evolving, or shifting doesn't mean betrayal. Boundaries are essential to their longevity.",

      signs: [
        "You feel most grounded when you're in service to your community",
        "You value craftsmanship and local goods over mass-produced convenience",
        "You've chosen to stay when others left — and built something beautiful in doing so",
        "You believe that changing a small part of the world can ripple into the whole",
        "You know the name of your baker, your postman, or your neighbor's cat",
        "You'd rather co-create something slowly than rush toward a quick result",
      ],

      mantras: [
        "What I tend, grows.",
        "Meaning is made close to home.",
        "Slowness is not lack — it is depth.",
        "I don't need to be everywhere. I just need to be here.",
        "I belong to the land, and it belongs to me.",
      ],
    },
  },

  "boundaryless-creator": {
    name: "The Boundaryless Creator",
    essence: "Lives at the intersection of creativity and autonomy",
    image: "/boundaryless-creator.png",
    color: "from-purple-400 to-pink-500",
    keywords: ["Creative", "Innovative", "Autonomous"],
    category: "Creative",
    content: {
      coreEssence:
        "The Boundaryless Creator lives at the intersection of creativity and autonomy. They are shape-shifters of form, systems, and self—designing life on their own terms while producing meaningful, often digital work that travels as freely as they do. Untethered by office walls, job titles, or even fixed definitions of \"career,\" they move fluidly across time zones, disciplines, and ideas. Their creations are not just products—they are extensions of personal rhythm, curiosity, and inner freedom. This archetype is not defined by rebellion but by reinvention. They don't ask where they fit in. They build what doesn't yet exist.",

      lifestyle: {
        description:
          "Life for the Boundaryless Creator is built around creative sovereignty. They don't separate work from life—both are integrated into a larger pursuit of expression, impact, and flow. Their calendars tend to be nonlinear, filled with bursts of deep focus followed by intentional space. They need room to think, sketch, dream, and pivot. Their environments change often: a café one week, a forest cabin the next, a co-working hub the week after. It's not novelty they crave, but flexibility—the ability to shape time and space in service of what they're building.",
        values: [
          "Autonomy over oversight",
          "Process over perfection",
          "Innovation over imitation",
          "Mobility over permanence",
          "Integration over compartmentalization",
        ],
        note: "They're often early adopters of tools, tech, or trends that allow for creative independence. They design not just products, but their own operating system for life.",
      },

      dayInLife: [
        "Mornings begin when their energy is naturally high—sometimes at sunrise, sometimes late morning",
        "They might dive straight into a creative sprint: designing an interface, editing a video, outlining a course",
        "Midday might include a walk, a breathwork session, or tuning into inspiration through a podcast or playlist",
        "Afternoons are for shipping: sending out emails, uploading content, publishing to platforms",
        "Evenings are open-ended: responding to collaborators, updating code, or reflecting in solitude",
        "At any point in the day, they might pause, stretch, or shift locations entirely—their work isn't tied to one desk or one definition of productivity",
      ],

      workPaths: [
        "UX/UI designers or digital illustrators building intuitive interfaces",
        "Writers crafting newsletters, thought leadership, or poetic web content",
        "Brand strategists or content creators working across industries",
        "Online educators designing custom courses or learning ecosystems",
        "Freelance developers, code poets, or AI-integrated creators",
        "Creatives launching their own products, communities, or micro-businesses",
      ],

      money: {
        description:
          "The Boundaryless Creator doesn't chase money—they design for it. They value income that matches their values: flexible, fair, and aligned with their expression. Many have experimented with traditional employment and found it too restrictive. Instead, they build income streams that support mobility and meaning—client work, product sales, digital licensing, affiliate systems, or brand partnerships.",
        priorities: [
          "Creative sovereignty over salary",
          "Multiple income channels over a single paycheck",
          "Value-based pricing over hourly trade-offs",
          "Investment in tools, not just things",
        ],
        motto:
          'Possibility, to them, is spatial. The question isn\'t "How much can I earn?"—it\'s "What can I build with this freedom?" When their money supports their flow, their creativity expands tenfold.',
      },

      relationships: {
        description:
          "The Boundaryless Creator approaches relationships like they do most things: with intention, spaciousness, and depth. They aren't interested in roles or expectations—they want resonance. They may prefer partnerships that support fluidity over fixed routines. Connection must leave room for invention.",
        needs: [
          "Someone who honors their work as sacred",
          "Shared love for ideas, imagination, and nonlinear thinking",
          "Emotional intelligence paired with independence",
          "Communication that's both expansive and clear",
          "The freedom to come together without losing oneself",
        ],
        note: "Their partnerships often span geographies or blend digital and physical space. Whether in romance or friendship, they value mutual inspiration over obligation.",
      },

      challenges: [
        'Overwork because creation doesn\'t feel like "work"',
        "Struggle with self-structure or prioritization",
        "Drift into perfectionism or comparison loops",
        "Feel unseen in systems that value stability over innovation",
        "Avoid commitment out of fear of losing momentum",
      ],

      growth:
        "Their growth lies in learning how to contain their own brilliance—how to rest without guilt, collaborate without compromise, and commit to what truly matters, even when no one's watching.",

      signs: [
        "You've redesigned your schedule a dozen times to find what feels right",
        "You've taught yourself a new tool just to bring an idea to life",
        "You feel most creative when your time is your own",
        "You've launched something before it was perfect—just to get it moving",
        "You believe that freedom isn't a luxury—it's a baseline for good work",
        "You'd rather work alone for 6 hours in flow than spend 1 hour in a dull meeting",
        "You feel allergic to micromanagement and thrive on trust",
      ],

      mantras: [
        "I shape my time.",
        "Freedom is my medium.",
        "Work is art when I'm allowed to move.",
        "I don't fit the system—I design new ones.",
        "My ideas are homes I can live inside.",
      ],
    },
  },

  "new-storyteller": {
    name: "The New Storyteller",
    essence: "Weaves narratives that bridge worlds",
    image: "/new-storyteller.png",
    color: "from-blue-400 to-indigo-500",
    keywords: ["Stories", "Connection", "Bridge"],
    category: "Communication",
    content: {
      coreEssence:
        "The New Storyteller is a translator between worlds — weaving meaning from chaos, voice from silence, and shape from the unseen. They live to shift narratives — not just by sharing what's already known, but by uncovering the deeper truths buried beneath the noise. Storytelling, for them, is not entertainment or even expression — it's an act of liberation. They see through old paradigms and feel called to birth new ones through words, visuals, sound, and embodied experience. Whether they're behind a microphone or directing a scene, they are speaking not just to their audience — but to the future.",

      lifestyle: {
        description:
          "The New Storyteller often lives between spaces: observing, absorbing, interpreting. Their lifestyle is centered around creative reflection and meaning-making. They listen deeply — to what's said and what's missing. Their time is often split between solitude and sharing. They need silence to make sense of things, and space to transform raw experience into something others can hold.",
        values: [
          "Truth over trend",
          "Impact over performance",
          "Perspective over popularity",
          "Curiosity over certainty",
          "Integrity over image",
        ],
        note: "They don't tell stories to be heard. They tell stories so others feel seen. Their art is never just about them — it's about creating openings for those who have been left out of the narrative.",
      },

      dayInLife: [
        "Morning begins in stillness: journaling, reading, or simply noticing patterns, thoughts, or images that want to come through",
        "Mid-morning might involve voice recording, research, or revisiting a draft of a talk, script, or story",
        "Afternoons are for creative production — editing, outlining, storyboarding, or collaborating with a creative team",
        "Breaks are spent in nature, conversation, or reflection — often their best material comes while walking, cooking, or daydreaming",
        "Evenings might include a podcast interview, live storytelling circle, or deep work session when the rest of the world has quieted",
      ],

      workPaths: [
        "Podcasters and spoken word artists exploring nuance and truth",
        "Novelists or screenwriters constructing alternate realities that reflect real ones",
        "Documentary filmmakers capturing underrepresented voices",
        "Brand storytellers and creative strategists building messages that matter",
        "Cultural critics, essayists, or memoirists reclaiming narrative power",
        "Immersive experience designers blending performance, tech, and emotional arc",
      ],

      money: {
        description:
          'For the New Storyteller, money often feels like a paradox. They want to be paid well — not out of ego, but because their work holds real value. And yet, their subject matter or medium may not always be commercially "safe." They walk the line between art and income, constantly negotiating how to stay true while staying supported.',
        approach: [
          "A desire to be compensated fairly for emotional, intellectual, and energetic labor",
          "An aversion to selling out or watering down their voice",
          "Experimentation with models: crowdfunding, patronage, memberships, licensing",
          "A preference for long-term alignment over quick exposure",
        ],
        motto:
          "Possibility isn't about getting a platform — it's about using it with care. They're not driven by followers or fame, but by the quiet impact of someone saying, \"That changed me.\"",
      },

      relationships: {
        description:
          "The New Storyteller connects deeply — sometimes so deeply they forget where their story ends and someone else's begins. They are listeners by nature, and can hold space with immense compassion. But they also need room for solitude, imagination, and emotional digestion.",
        offers: [
          "Presence and depth",
          "An ability to name the unspeakable",
          "Emotional literacy and curiosity",
          "A desire to witness, not fix",
          "A creative partnership based in mutual reflection",
        ],
        note: "They seek relationships where they can be fully expressed — not just heard, but understood. Where inner worlds can be shared, not reduced.",
      },

      challenges: [
        "Carry the emotional load of others' stories",
        "Battle perfectionism or paralysis around sharing their work",
        "Burn out from the demands of vulnerability and exposure",
        "Feel invisible in a world that values surface over substance",
        "Question whether their voice truly matters",
      ],

      growth:
        "Their growth comes in trusting that their voice isn't here to save the world — just to illuminate it. They are not responsible for all truths, only their own.",

      signs: [
        "You've journaled or created stories since you were young — not for anyone, just because it had to come out",
        "You often see connections between things others overlook",
        "You've rewritten your own life story many times, and helped others do the same",
        "You're more interested in why things happen than what happened",
        "You can name the energy of a room, the subtext of a sentence, the wound behind a smile",
        "You feel called to speak the unspeakable — and to say it beautifully",
      ],

      mantras: [
        "My words make the invisible visible.",
        "I don't tell stories to be understood — I tell them to understand.",
        "My voice is enough.",
        "Every story I share opens a door for someone else.",
        "I am here to disrupt, remember, and reveal.",
      ],
    },
  },

  regenerator: {
    name: "The Regenerator",
    essence: "Heals what's broken, restores what's lost",
    image: "/regenerator-card.png",
    color: "from-teal-400 to-green-500",
    keywords: ["Healing", "Restoration", "Renewal"],
    category: "Healing",
    content: {
      coreEssence:
        "The Regenerator is a steward of renewal — someone who sees decay not as an end, but as the fertile ground for rebirth. They are deeply attuned to the cycles of nature, systems of care, and the invisible threads that hold ecosystems, bodies, and communities together. Where others see collapse or burnout, the Regenerator sees an opportunity to compost and create anew. They don't rush to fix — they observe, listen, and rebuild from the root. Their power lies in their patience, their integrity, and their unwavering belief that life — when given the right conditions — knows how to heal.",

      lifestyle: {
        description:
          "The Regenerator lives close to the ground, whether literally in nature or metaphorically in community. They move at the pace of life — tending, repairing, restoring. Their daily rhythm is often guided by seasons, somatic intelligence, and local presence rather than external deadlines or social expectations. They are not anti-progress — but they measure progress differently: by depth, not speed.",
        values: [
          "Wholeness over performance",
          "Long-term vitality over short-term success",
          "Interdependence over independence",
          "Ritual over routine",
          "Care over convenience",
        ],
        note: "They reject extractive models of living and working, choosing instead to create from a place of respect, relationship, and reciprocity.",
      },

      dayInLife: [
        "Mornings often begin with grounding practices: tending a garden, preparing herbal tea, or simply walking in silence",
        "Mid-mornings might be spent in therapeutic work, land restoration, or mentoring others through trauma-informed support",
        "Afternoons often include collaborative efforts: building regenerative business models, facilitating healing circles, or working on local initiatives",
        "Evenings are sacred: rest, reflection, shared meals, rituals of closure",
      ],

      workPaths: [
        "Land healers: permaculture designers, eco-restoration consultants, biodynamic farmers",
        "People healers: trauma-informed coaches, bodyworkers, wellness mentors, spiritual counselors",
        "System builders: regenerative entrepreneurs, circular economy innovators, sustainability educators",
        "Community anchors: local initiative leaders, intergenerational program creators, cultural renewal facilitators",
      ],

      money: {
        description:
          "The Regenerator doesn't see money as evil — but they do view it with caution. They understand that value systems have been distorted, and they're here to rebuild ones that honor life, not exploit it. For them, money must be rooted in relationship, integrity, and energetic alignment.",
        approach: [
          "Reluctance to participate in hustle or high-pressure economies",
          "Preference for mutual aid, fair exchange, value-based pricing, and regenerative revenue models",
          "Curiosity about new economic paradigms: gift economies, cooperative ownership, resource sharing",
          "A vision of money as energy — one that can be channeled consciously to support healing",
        ],
        motto: "They believe true wealth is measured in health, soil, trust, and legacy.",
      },

      relationships: {
        description:
          "In relationships, the Regenerator offers deep nourishment — emotional safety, space for healing, and the ability to hold complexity. But they also need clear boundaries, solitude, and non-reactive partners who understand that restoration takes time.",
        brings: [
          "Presence without urgency",
          "An ability to sense unspoken wounds and gently tend to them",
          "A longing for relationships that support healing on both sides",
          "A preference for partnerships that prioritize slowness, ritual, and honest reflection",
        ],
        note: "They're not interested in surface-level connection — they seek bonds that feel like home, that honor grief and joy, collapse and becoming.",
      },

      challenges: [
        "Burn out by trying to hold too much for too many",
        "Struggle to trust that rest is productive",
        "Get disillusioned when progress feels slow or invisible",
        "Become isolated if they don't find kindred spirits",
      ],

      growth:
        "Their growth comes in remembering they are not here to save the world — but to be in right relationship with it. Regeneration starts with the self.",

      signs: [
        "You feel more at ease barefoot than in shoes",
        "You've composted both food scraps and belief systems",
        "You often find yourself tending to people, spaces, or systems others overlook",
        "You instinctively slow down when everyone else speeds up",
        'You\'ve redesigned your lifestyle to match your values, even if it meant walking away from "success"',
        "You see healing as a form of activism",
      ],

      mantras: [
        "What is falling apart is making space for something wiser.",
        "I build systems that restore life, not extract from it.",
        "Care is not weakness — it's leadership.",
        "Regeneration is not a trend. It is nature's default.",
        "I begin where others end — in the compost, in the ashes, in the quiet.",
      ],
    },
  },

  "creative-collaborator": {
    name: "The Creative Collaborator",
    essence: "Builds magic through human connection",
    image: "/creative-collaborator-card.png",
    color: "from-rose-400 to-red-500",
    keywords: ["Collaboration", "Magic", "Connection"],
    category: "Community",
    content: {
      coreEssence:
        "The Creative Collaborator is the spark in the room who transforms a lone idea into a living experience through connection. They thrive in dynamic ecosystems — not as the loudest voice, but as the frequency that binds many parts into a harmonious whole. Collaboration is not a tactic for them; it's a way of life. They believe creativity expands when shared, and that innovation emerges not from isolation, but from resonance. They're the weavers, conveners, and cultural pollinators — the ones who know how to gather the right people, build trust, and activate collective genius.",

      lifestyle: {
        description:
          "The Creative Collaborator is rarely in one lane — and rarely alone. They're drawn to interdisciplinary spaces where projects evolve through dialogue, movement, and feedback. They often float between roles: facilitator, instigator, artist, strategist — depending on what's needed in the moment. Their home is likely a fluid mix of co-working space, kitchen table, and public plaza. They value rhythm over routine, and creativity over control.",
        values: [
          "Synergy over individualism",
          "Process over perfection",
          "Flow over fixed outcomes",
          "Contribution over competition",
          "Collective joy over personal gain",
        ],
        note: "They believe that the magic happens between people — and they know how to hold that space open long enough for it to emerge.",
      },

      dayInLife: [
        "The morning may begin in shared space: preparing breakfast with roommates, catching up with collaborators on a morning walk, or reviewing messages from global team chats",
        "Late mornings are for ideation: post-it notes, whiteboards, audio memos, or a voice-note brainstorm with a partner in another time zone",
        "Afternoons are filled with activation: designing events, planning creative sprints, facilitating group sessions, visiting project sites, or leading community rituals",
        "Evenings might involve hosting dinners, storytelling salons, or decompressing in the presence of trusted collaborators",
      ],

      workPaths: [
        "Cultural organizers: festival curators, event facilitators, dialogue hosts",
        "Innovation drivers: collaborative studio founders, cross-sector project managers, co-creation lab facilitators",
        "Space holders: co-living or co-working designers, intentional community leaders, retreat facilitators",
        "Creative producers: collective brand builders, participatory artists, community media makers",
      ],

      money: {
        description:
          "For the Creative Collaborator, money is best when it flows — between people, projects, and possibilities. They prefer shared funding models, income that's connected to purpose, and collaborations that generate mutual uplift. They're less concerned with earning for status, and more invested in resourcing collective visions.",
        approach: [
          "Openness to joint ventures, cooperatives, and shared ownership",
          "A tendency to trust in group-based abundance rather than personal hoarding",
          "Interest in creative exchanges, bartering, and revenue sharing models",
          "A belief that money is a tool for expansion — when rooted in values and trust",
        ],
        motto:
          "Their challenge is learning to value their own role in the collective, and not always place themselves last in compensation.",
      },

      relationships: {
        description:
          "Collaboration doesn't stop at work — it's how they do love, too. For the Creative Collaborator, relationships are creative partnerships: spaces to grow, experiment, and evolve together. They're not drawn to rigid roles or hierarchies. Instead, they value emotional maturity, mutual visioning, and the shared building of something meaningful.",
        brings: [
          "A high level of attunement to others' needs and ideas",
          "A hunger for shared projects or creative adventures",
          "Deep loyalty to those who co-create with integrity",
          "The ability to hold space for difference without losing connection",
        ],
        note: "They may need solitude to replenish, but their heart belongs in the web — woven with presence and play.",
      },

      challenges: [
        "Overcommit to too many projects",
        "Avoid solo creative expression out of fear of ego",
        "Struggle with unclear financial structures in community work",
        "Experience frustration when others lack follow-through",
      ],

      growth:
        "Their growth comes through grounding their own values, practicing discernment, and learning that not every idea is theirs to hold.",

      signs: [
        "You've launched at least three group projects — just because it felt exciting",
        "Your workspace looks like a blend between a studio and a think tank",
        "You feel most alive in a brainstorming session or shared ritual",
        "You know how to make something magical with whoever's in the room",
        "You've built a community from scratch — or dream of doing so",
        "You believe that creativity, when shared, becomes culture",
      ],

      mantras: [
        "Creation is a communal act.",
        "Shared success is the most sustainable kind.",
        "I trust the intelligence of the group — and my part in it.",
        "Every project is a conversation.",
        "When we make together, we remember who we are.",
      ],
    },
  },

  "conscious-technologist": {
    name: "The Conscious Technologist",
    essence: "Technology for human flourishing",
    image: "/conscious-technologist.png",
    color: "from-cyan-400 to-blue-500",
    keywords: ["Technology", "Consciousness", "Future"],
    category: "Innovation",
    content: {
      coreEssence:
        "The Conscious Technologist is not here to build faster tools — they're here to build better realities. They see technology as an extension of human consciousness, not a substitute for it. With clarity, ethics, and intention, they blend systems thinking with soul-awareness, bridging hard logic with emotional intelligence. They don't worship progress for its own sake. They ask: Does this serve life? Does it align with truth? Their genius lies in using code, platforms, and interfaces not to escape humanity — but to elevate it.",

      lifestyle: {
        description:
          "The Conscious Technologist lives at the intersection of curiosity and conscience. They're often deeply introspective yet intellectually agile, toggling between deep focus and wide-angle vision. Their days are woven with flow states, moments of philosophical questioning, and joyful experimentation.",
        values: [
          "Ethical innovation over blind advancement",
          "Human dignity over data dominance",
          "Transparency over manipulation",
          "Empathy over efficiency",
          "Wisdom over cleverness",
        ],
        note: "They are not anti-tech — they are pro-alignment. For them, technology should never strip away agency — it should restore it.",
      },

      dayInLife: [
        "Morning begins with grounding: movement, journaling, or meditation to tune their nervous system",
        "Then comes the deep work: building, testing, or improving a platform that supports education, emotional health, or conscious communication",
        "Midday might involve a check-in with co-creators, UX testing with real users, or tweaking language to ensure their app supports presence, not addiction",
        "Afternoons often involve writing: documenting insights, sharing thought leadership, or refining their ethics frameworks",
        "Evenings might hold open-source contributions, solo research dives, or soft integration time with music or analog play",
      ],

      workPaths: [
        "Creators of apps or platforms designed for wellbeing, learning, or connection",
        "Builders of ethical AI tools that promote equity, emotional intelligence, or creative empowerment",
        "UX or systems designers working within regenerative organizations",
        "Founders of educational platforms, tech-for-good collectives, or tools that enable self-awareness",
        "Writers or researchers creating bridges between science, consciousness, and innovation",
      ],

      money: {
        description:
          "The Conscious Technologist sees money as a system — one that, like tech, must be re-coded for the future. They're drawn to regenerative or transparent models of exchange and may be early adopters of value-aligned currencies or blockchain ecosystems that support collective integrity.",
        approach: [
          "Long-term sustainability, not short-term hype",
          "Business models that protect user wellbeing",
          "Equitable pricing and open access where possible",
          "Funding that allows experimentation without compromising ethics",
        ],
        motto: "They understand: Abundance grows when technology uplifts the whole, not just the few.",
      },

      relationships: {
        description:
          "Though they may appear introverted or highly self-directed, the Conscious Technologist brings deep devotion to those they trust. They don't seek flashy love or performative partnership — they value depth, alignment, and mental/emotional compatibility.",
        offers: [
          "Deep listening and presence",
          "Shared curiosity and growth",
          "A desire to build systems of support together",
          "Trust in complexity, rather than the need for control",
        ],
        note: "They might struggle with over-intellectualizing emotions, but when they love — it's intentional, grounded, and luminous.",
      },

      challenges: [
        "Tech fatigue or overstimulation",
        'Difficulty communicating the "why" of their work to a broader audience',
        "Over-functioning in solo creation without enough feedback",
        "Hesitancy to release work that feels imperfect",
      ],

      growth:
        "Their growth comes through embodiment, community reflection, and remembering that done is often better than perfect — when done with heart.",

      signs: [
        "You've built a tool to help others heal, connect, or awaken",
        "You've said \"no\" to projects that don't align ethically — even when the money was good",
        "You journal about algorithms or dream in metaphors for neural nets",
        "You believe technology should support sovereignty, not dependence",
        "You've written or spoken about digital wellness, ethical design, or the importance of soft tech",
        'You ask not just "What\'s possible?" — but "What\'s wise?"',
      ],

      mantras: [
        "Technology is only as conscious as its creator.",
        "I choose tools that amplify truth, not noise.",
        "Design is not neutral — and neither am I.",
        "A better world is a better code, lived daily.",
        "What I build now shapes what we become.",
      ],
    },
  },

  "slow-life-pioneer": {
    name: "The Slow-Life Pioneer",
    essence: "Depth over speed, presence over productivity",
    image: "/slow-life-pioneer.png",
    color: "from-stone-400 to-amber-500",
    keywords: ["Presence", "Depth", "Mindful"],
    category: "Wisdom",
    content: {
      coreEssence:
        "The Slow-Life Pioneer doesn't just reject hustle culture — they live in a completely different tempo. They are guardians of presence in a world addicted to speed. Where others rush toward results, they rest into rhythm. Their life is not a race but a seasonal unfolding — one guided by intuition, simplicity, connection, and care. Whether they live in a mountain town, coastal village, or quiet corner of a city, their pace is their protest — and their medicine.",

      lifestyle: {
        description:
          "The Slow-Life Pioneer lives by the pulse of the natural world. They structure their days around light, nourishment, and meaningful connection, not productivity hacks. Their home is a sanctuary, their schedule spacious, and their attention a form of devotion.",
        values: [
          "Presence over performance",
          "Depth over distraction",
          "Savoring over skimming",
          "Natural rhythms over artificial timelines",
          "Simplicity over stimulation",
        ],
        note: "They often opt out of traditional definitions of \"success\" — not because they can't play the game, but because they've seen through it. Their life is a daily practice of being here, now.",
      },

      dayInLife: [
        "Mornings are slow and embodied: rising without alarms, stretching in the sun, preparing tea or coffee with care",
        "Breakfast might be homemade, eaten outdoors, or shared with loved ones",
        "Mid-morning is for meaningful work — writing, creating, holding space, teaching — but always in flow, never force",
        "Afternoons may involve walks, tending to a garden, or connecting with others in a gentle pace",
        "Evenings are often sacred: candlelit dinners, music, journaling, or quiet rituals that prepare them for deep rest",
      ],

      workPaths: [
        "Slow-food chefs, herbalists, or tea artisans",
        "Mindfulness coaches or embodiment guides",
        "Yoga or somatic movement teachers",
        "Intentional living mentors, therapists, or nature-based facilitators",
        "Slow-travel or eco-tourism curators",
        "Writers, content creators, or podcasters sharing about seasonal life, natural cycles, and present-moment living",
      ],

      money: {
        description:
          "The Slow-Life Pioneer seeks right relationship with money — not accumulation, but sustainability. They don't want riches at the cost of rest. For them, wealth is space. Abundance is the freedom to live gently.",
        approach: [
          "Choose income streams that don't demand constant output",
          "Value local exchange, barter, and slow economies",
          "Offer high-integrity, low-volume services or products",
          "Prefer working fewer hours for deeper impact",
          "Make financial decisions based on intuition and alignment, not urgency",
        ],
        motto: "They know: money that honors their rhythm flows best.",
      },

      relationships: {
        description:
          "The Slow-Life Pioneer approaches love the way they approach everything else — with intention, presence, and patience. They're not interested in whirlwind romance or performance-based connection. They want something real. Something rooted.",
        brings: [
          "Attuned listening",
          "Emotional steadiness",
          "Acts of everyday care",
          "A preference for deep, slow-growing intimacy over instant chemistry",
        ],
        note: "Their partnerships often reflect their lifestyle — cozy, rhythmic, nourishing. Whether single or partnered, they treat love as a sacred space, not a transaction.",
      },

      challenges: [
        "Feeling unseen in a speed-driven culture",
        "Difficulty communicating value in business settings",
        "Potential financial instability if boundaries aren't clear",
        "Taking too much time to act when decisiveness is needed",
      ],

      growth:
        "Growth arises through learning to hold space for others' speed without losing their own — and sharing their lifestyle not as a correction, but as an invitation.",

      signs: [
        "You make decisions based on how they feel in your body, not just logic",
        "You've chosen to earn less in exchange for more freedom and peace",
        "You've redesigned your schedule around daylight, nature, or seasons",
        'You believe "enough" is a sacred word',
        'You\'ve been called "too slow" by others — and smiled inside',
        "You know that the quality of your attention is the quality of your life",
      ],

      mantras: [
        "I am not behind. I am in rhythm.",
        "Slowness is a form of wisdom.",
        "Rest is not a reward — it is a right.",
        "I move at the pace of life, not fear.",
        "The present moment is always enough.",
      ],
    },
  },

  "experiential-alchemist": {
    name: "The Experiential Alchemist",
    essence: "Transforms ordinary moments into magic",
    image: "/experiential-alchemist.png",
    color: "from-violet-400 to-purple-500",
    keywords: ["Transformation", "Experience", "Magic"],
    category: "Creation",
    content: {
      coreEssence:
        "The Experiential Alchemist is a master of emotion, sensation, and perception—someone who sees life not as a series of tasks, but as a canvas for transformation. They are artists of atmosphere and catalysts for connection. Their work is not confined to a screen or a desk, but often unfolds in rooms filled with movement, music, candles, or quiet reflection. What they create isn't just beautiful—it's meaningful. Whether designing a ritual, curating a retreat, or crafting an immersive event, the Experiential Alchemist brings intention, symbolism, and sensory awareness to every detail. Their gift is in creating containers—spaces where people can feel, release, remember, and awaken. They aren't just building events. They're facilitating experiences that recalibrate the soul.",

      lifestyle: {
        description:
          "This archetype thrives on presence, awe, and energetic depth. Their life is often woven with practices that connect the invisible with the visible: ceremony, embodied movement, sound healing, or deep listening. They value environments that feel alive—whether that's a temple in the jungle or a rooftop studio full of plants, music, and meaningful objects. Authenticity matters more than scale, and resonance matters more than aesthetics. They resist the artificial and strive to bring humanity back into spaces.",
        values: [
          "Transformation over transaction",
          "Depth over surface",
          "Resonance over reach",
          "Sacred over secular",
          "Embodied over intellectual",
        ],
        note: "For the Experiential Alchemist, the real gold is emotional transformation—those moments when someone softens, cracks open, or laughs with tears in their eyes. That's the currency they trade in.",
      },

      dayInLife: [
        "They wake slowly, often with rituals that help them tune into the unseen: lighting incense, pulling a card, journaling what dreams linger",
        "They may spend the morning sourcing sacred materials for an upcoming gathering or coordinating with musicians, healers, or visual artists for a multidimensional retreat",
        "Afternoons might be reserved for crafting invitations, storyboards, playlists, or altar designs",
        "In the evening, you'll often find them facilitating a workshop, guiding others into breath, silence, or ecstatic movement",
      ],

      workPaths: [
        "Immersive experience curator",
        "Transformational retreat designer",
        "Sacred space facilitator",
        "Ceremony & ritual guide",
        "Holistic event producer",
        "Emotional resonance coach",
        "Story-led scenographer",
      ],

      money: {
        description:
          'Money, to the Experiential Alchemist, is a form of energy—and like all energy, it must be moved, exchanged, and infused with meaning. They prefer to be paid in resonance rather than hierarchy. Traditional pricing models may feel restrictive or impersonal, so they often gravitate toward sliding scales, "pay with presence," or energetic reciprocity.',
        approach: [
          "Sliding scale pricing based on accessibility",
          "Value-based exchange over fixed rates",
          "Energetic reciprocity and gift economy models",
          "Investment in experiences over material accumulation",
        ],
        motto:
          "When aligned, money flows effortlessly, especially when they trust the value of their offerings. They flourish when money feels like a natural extension of the experience—not a barrier to it. Possibility, to them, is never abstract—it's an embodied state, awakened through sensation, art, and ritual.",
      },

      relationships: {
        description:
          "In love, they seek depth, vulnerability, and shared transformation. They're drawn to partners who are emotionally fluent, spiritually curious, and willing to dive into the unknown. Conventional paths don't appeal to them—they prefer connection that feels like ceremony, intimacy that feels like prayer.",
        brings: [
          "Atmosphere and intentional presence",
          "Touch and energetic attunement",
          "Ceremonial approach to intimacy",
          "Generous and intuitive care",
        ],
        note: "They express love through atmosphere, touch, intentional time, and energetic presence. In relationships, they are generous, intuitive, and attuned—but can also struggle with grounding if the partnership lacks shared intention or purpose.",
      },

      challenges: [
        "Difficulty translating their gifts into structured business models",
        "Over-giving in spaces without energetic balance",
        "Avoiding clarity or logistics in favor of feeling",
        "Vulnerability to burnout from holding emotional space for others",
        "Needing external environments to match inner worlds",
      ],

      growth:
        "Their growth often lies in learning how to structure the sacred—creating systems that support their fluidity without constraining it.",

      signs: [
        "You've hosted or attended an event that changed your life—and now you want to offer that for others",
        "You see ceremony and storytelling in everything",
        "You feel energized by the idea of crafting an atmosphere or journey",
        'You\'ve been called "too sensitive" or "too much" because you feel so much',
        "You often cry during beauty, connection, or transformation—your nervous system is attuned to the poetic",
      ],

      mantras: [
        "The space I create is the medicine.",
        "Transformation begins with presence.",
        "Feelings are the frequency of truth.",
        "I don't just organize events—I alchemize experience.",
      ],
    },
  },

  "explorer-inner-worlds": {
    name: "The Explorer of Inner Worlds",
    essence: "Maps the territories of consciousness",
    image: "/explorer-inner-worlds.png",
    color: "from-indigo-400 to-blue-500",
    keywords: ["Inner", "Consciousness", "Exploration"],
    category: "Wisdom",
    content: {
      coreEssence:
        "The Explorer of Inner Worlds is devoted to the unseen terrains within—the emotional landscapes, subconscious imprints, and layers of awareness that shape how we live, love, and create. For them, the most profound journeys are not found on maps but felt through breath, silence, and inner inquiry. They are bridge-builders between psychology and spirituality, between science and soul. Often deep listeners and reflective guides, they don't offer surface-level solutions—they offer mirrors. Their path is not to fix others, but to illuminate the pathways inward so people can come home to themselves. This archetype walks between dimensions of mind, emotion, and spirit—constantly transmuting their own experience into insight that serves the collective.",

      lifestyle: {
        description:
          "Their life revolves around depth and presence. While others may seek external validation, they seek internal coherence. They often live simply, but richly—prioritizing spaces that allow for quiet reflection, creative flow, and spiritual practice. Books, dreams, symbols, therapy sessions, voice notes, and journaling are part of their daily rhythm. They value emotional honesty, intuitive guidance, and the courage to face the unknown within.",
        values: [
          "Depth over surface",
          "Integration over accumulation",
          "Inner truth over external approval",
          "Process over outcome",
          "Wholeness over perfection",
        ],
        note: "Their time isn't managed by hustle or output—it's shaped by energy, mood, and meaningful inner prompts. They are guided by a deep commitment to integration: how to live as a whole human, not just a curated version of the self.",
      },

      dayInLife: [
        "They begin the day slowly, often still in conversation with their dreams. There may be a ritual: sitting in meditation, sipping tea in silence, pulling an oracle card, or writing down what the body is whispering",
        "Their work time is spacious—they might spend hours writing a chapter on emotional healing or preparing for a client session with sound and breath",
        "Afternoons may be filled with therapy clients, creative content, or teaching self-inquiry techniques online",
        "Evenings are sacred: long walks, somatic embodiment practices, or deep-dives into books on mysticism, depth psychology, or human design",
      ],

      workPaths: [
        "Transformational coach or inner work facilitator",
        "Intuitive mentor or conscious counselor",
        "Breathwork guide or somatic practitioner",
        "Emotional clarity teacher",
        "Conscious podcast host or video essayist",
        "Self-awareness content creator or workshop host",
        "Dreamwork and symbolism translator",
      ],

      money: {
        description:
          "Money for the Explorer of Inner Worlds is linked to integrity. They're highly attuned to whether something feels aligned—if the exchange doesn't feel reciprocal, it doesn't work for them. They're often drawn to nontraditional pricing models like value-based contributions, resonance-led pricing, or intuitive income generation.",
        approach: [
          "Value-based contributions over fixed pricing",
          "Resonance-led pricing models",
          "Intuitive income generation",
          "Integrity-based exchanges",
        ],
        motto:
          "They thrive when they trust their own worth and create containers that reflect the depth of their work. Possibility, to them, is not about achieving goals—it's about becoming more whole. The more they clear distortion from within, the more opportunities appear. Their economy is one of inner alignment first, external flow second.",
      },

      relationships: {
        description:
          "They seek relationships that feel like sanctuaries—where they can be fully seen, heard, and held in their emotional and spiritual complexity. They're drawn to partners who are emotionally available, spiritually curious, and committed to growth. Connection must be soul-deep and energetically honest—anything performative, rushed, or avoidant quickly becomes intolerable.",
        brings: [
          "Nurturing and intuitive presence",
          "Deep emotional and spiritual holding",
          "Sacred space for healing and reflection",
          "Commitment to mutual evolution",
        ],
        note: "In love, they are nurturing, intuitive, and present—but also need a lot of solitude to stay resourced. Relationships become sacred spaces for healing, reflection, and evolution—not just companionship.",
      },

      challenges: [
        "Getting stuck in inner processing loops without external action",
        "Over-identifying with pain or wounds as identity",
        "Struggling to translate depth into scalable offerings",
        "Feeling misunderstood by more surface-driven environments",
        "Holding others' emotional material without proper boundaries",
      ],

      growth:
        "Their growth often lies in trusting that the inner and outer are not in opposition—they can share their depth without being drained by it.",

      signs: [
        "You've always felt life more intensely than others—and needed time to process it",
        "You are deeply moved by dreams, synchronicities, or inner revelations",
        "You're often the one others turn to when they're navigating something hard",
        "You prefer asking questions to giving advice",
        "Your best ideas arrive when you're not trying to produce anything at all",
      ],

      mantras: [
        "My inner world is my compass.",
        "Wholeness is my measure of success.",
        "I meet the world through presence, not performance.",
        "Stillness is not a pause. It's a portal.",
      ],
    },
  },

  "hybrid-visionary": {
    name: "The Hybrid Visionary",
    essence: "Bridges old and new, creates hybrid solutions",
    image: "/hybrid-visionary.png",
    color: "from-emerald-400 to-teal-500",
    keywords: ["Vision", "Bridge", "Innovation"],
    category: "Innovation",
    content: {
      coreEssence:
        'The Hybrid Visionary is a pattern-breaker by nature. Their life cannot be summed up in a single title or linear career path. Instead, they build bridges across disciplines, weaving multiple passions, cultures, skills, and life experiences into something entirely their own. Their superpower is synthesis—they see connections where others see contradiction. They\'re not interested in fitting into predefined boxes; they\'re here to create entirely new constellations. Often labeled "too much" or "unfocused," they eventually learn that their multiplicity is not a flaw—it\'s their brilliance. They are the future embodied: fluid, integrated, and impossible to pin down.',

      lifestyle: {
        description:
          "Hybrid Visionaries live by curiosity, experimentation, and layered identity. They thrive in environments where no part of themselves needs to be left behind. Their lifestyle is often eclectic—a mix of city and countryside, digital and analog, mind and body, strategy and soul. They're always learning something new, whether it's a language, a tool, a philosophy, or a craft.",
        values: [
          "Integration over specialization",
          "Synthesis over separation",
          "Evolution over stagnation",
          "Multiplicity over singularity",
          "Connection over competition",
        ],
        note: "They value freedom, but not the kind that escapes responsibility—freedom to evolve, express, and engage across all dimensions of their being. They believe deeply in integration: of science and art, nature and technology, inner growth and outer impact. For them, life is an evolving masterpiece, not a fixed blueprint.",
      },

      dayInLife: [
        "No two days look the same—and that's exactly how they like it. One morning they might be teaching a virtual class on emotional intelligence, followed by editing a short film or helping a local NGO design an outreach strategy",
        "Midday might involve a hike to reset their energy, recording a podcast episode, or tending to their garden",
        "By afternoon, they could be in a client session or prototyping an idea for a circular economy project",
        "Their nights are often spent researching wildly different topics or sketching ideas for future collaborations",
      ],

      workPaths: [
        "Interdisciplinary artist or multimedia storyteller",
        "Cultural bridge-builder or community platform host",
        "Conscious brand strategist or systems thinker",
        "Creative technologist with a soul-centered lens",
        "Environmental educator and digital course creator",
        "Therapist who also writes novels or curates art exhibits",
        "Social entrepreneur with spiritual and ecological foundations",
      ],

      money: {
        description:
          "Money, for the Hybrid Visionary, is less about accumulation and more about creative fuel. They often struggle in traditional employment structures because they're built for multidimensional contribution—not single-track roles. Once they understand this, they design unique ecosystems of income that reflect their range: part-time consulting, passion-led products, seasonal retreats, digital offerings, creative commissions.",
        approach: [
          "Multiple income streams reflecting their range",
          "Part-time consulting and passion projects",
          "Seasonal offerings and creative commissions",
          "Platform building that honors all identities",
        ],
        motto:
          'They thrive when they stop chasing approval and instead build platforms that allow all their identities to co-exist. Possibility is their playground—they don\'t need clear roads, just fertile ground. Their biggest breakthroughs often come from following sparks of inspiration that others would deem "off-track."',
      },

      relationships: {
        description:
          "They need relationships that honor their evolving nature. Whether romantic or platonic, they crave depth, openness, and shared growth. They're not wired for codependency or overly fixed roles—flexibility and mutual inspiration are key.",
        brings: [
          "Passionate and multidimensional partnership",
          "Creativity, complexity, and vision",
          "Deep curiosity and presence",
          "Devotion to co-evolution",
        ],
        note: "In love, they show up as passionate, multidimensional partners who bring creativity, complexity, and vision. They may need more space than most—to follow their many threads—but when grounded, they make extraordinary companions: deeply curious, present, and devoted to co-evolution. Their inner world is constantly shifting, and they thrive with partners who embrace change as a natural expression of life.",
      },

      challenges: [
        "Feeling fragmented or overwhelmed by their own ideas",
        "Difficulty communicating their value in systems that reward specialization",
        "Struggling with self-trust when external paths don't fit",
        "Burnout from trying to be everything at once",
        "The temptation to quit too soon if something doesn't fit perfectly",
      ],

      growth:
        "Their growth lies in weaving consistency into their creativity—building systems that support their flux rather than flatten it. They flourish when they create their own frameworks instead of borrowing others'.",

      signs: [
        "You've always had more than one passion and resisted choosing just one",
        "Your resume makes no sense to a recruiter but total sense to you",
        "You're often the one people come to when they need cross-disciplinary insight",
        "You thrive at the edges—where fields, cultures, and roles intersect",
        "You've considered inventing a new job title more than once",
      ],

      mantras: [
        "My life is a living mosaic.",
        "Integration is my innovation.",
        "I am not scattered—I am multidimensional.",
        "I don't have to choose one path. I am the path.",
      ],
    },
  },

  "harmonic-human": {
    name: "The Harmonic Human",
    essence: "Lives in harmony with natural rhythms",
    image: "/harmonic-human-card.png",
    color: "from-amber-400 to-yellow-500",
    keywords: ["Harmony", "Natural", "Balance"],
    category: "Wisdom",
    content: {
      coreEssence:
        "The Harmonic Human moves through life as a living tuning fork—attuned not to trends or pressure, but to inner coherence. They don't chase outcomes or follow pre-made maps. Instead, they build life from the inside out, guided by intuition, embodied awareness, and the subtle intelligence of the present moment. For them, harmony isn't about perfection or passivity—it's about presence, self-responsibility, and the ability to create resonance in the midst of contrast. They are grounded and sensitive, not escapist. They choose alignment over ambition and let their life speak from within.",

      lifestyle: {
        description:
          "Living in tune with nature, energy, and emotional truth is non-negotiable. The Harmonic Human designs their days around what feels alive—not what looks successful. Their schedule is shaped by internal rhythm rather than external demands. They value rest as much as productivity, reflection as much as action. Stillness is not avoidance—it's strategy.",
        values: [
          "Alignment over ambition",
          "Inner rhythm over external demands",
          "Presence over performance",
          "Coherence over chaos",
          "Resonance over resistance",
        ],
        note: "Their choices are often unorthodox to others: walking away from draining structures, prioritizing subtle joy over status, or simplifying to protect their energy field. They aren't here to escape the world—they're here to re-enter it, differently.",
      },

      dayInLife: [
        "They wake naturally, no alarms, led by their body's own signal. The morning is spacious—herbal tea, barefoot movement, maybe journaling or intuitive voice notes",
        "Work follows, but not in the traditional sense. It could be holding a frequency session, co-creating a resonance-based offering, writing a piece that transmits energetic clarity, or designing tools for inner world awareness",
        "Meals are simple, nourishing, taken in silence or shared with care",
        "Afternoons might be for resting, walking, or tuning into the next pulse of creation",
      ],

      workPaths: [
        "Frequency coach or embodiment mentor",
        "Conscious systems designer or regenerative business founder",
        "Emotional alchemy facilitator or inner technology guide",
        "Creator of tools, courses, or frameworks for sovereign living",
        "Writer or speaker transmitting grounded multidimensional truths",
        "Builder of spaces (digital or physical) that support self-led evolution",
      ],

      money: {
        description:
          "Money is felt as energy. Not to be feared or idolized—but understood, cleared, and engaged with consciously. Harmonic Humans don't follow fixed models—they co-create their own value systems. They often shift from feast-or-famine patterns into stable flow once they realize money is not a reward for effort, but a mirror for alignment.",
        approach: [
          "Money as energy to be understood and cleared",
          "Co-creating their own value systems",
          "Shifting from feast-or-famine to stable flow",
          "Alignment-based financial decisions",
        ],
        motto:
          "Possibility expands as they do—not through force or strategy, but through clarity, inner safety, and consistent energetic congruence. Their wealth is measured in energy, not just income.",
      },

      relationships: {
        description:
          "They love with depth and discernment. Connection must be real—surface bonds drain them. In relationships, they seek resonance, not roles. They're not looking for someone to complete them but to co-create with. Emotional fluency, sovereignty, and self-awareness are vital.",
        brings: [
          "Depth and discernment in love",
          "Resonance over roles",
          "Co-creative partnership",
          "Old soul wisdom in relationships",
        ],
        note: 'They\'re often seen as "old souls" in partnership—able to hold both intimacy and space. When in disharmony, they may isolate, but their growth comes from staying open without collapsing. They build partnerships that feel safe, alive, and truthful.',
      },

      challenges: [
        "Discomfort with traditional systems and structures",
        "Tendency to withdraw when overstimulated or misaligned",
        "Difficulty expressing nonlinear gifts in a linear world",
        'Fear of being "too different" or misunderstood',
        "Learning to trust that inner alignment does translate to outer support",
      ],

      growth:
        "Their growth lies in expression—bringing their inner clarity into form, voice, and action in the world. Not shrinking their truth to be accepted, but letting their frequency reshape the room.",

      signs: [
        "You can feel truth in your body and are guided by energetic clarity",
        "You're sensitive to environments and easily impacted by external noise",
        "You need regular solitude and nature to feel whole",
        "You often sense things before you can explain them",
        "You don't trust anything that forces you to override your intuition",
      ],

      mantras: [
        "I lead from inner alignment.",
        "My energy creates my reality.",
        "Harmony is my home frequency.",
        "I shape life from within.",
      ],
    },
  },
}

interface ArchetypePageProps {
  params: {
    archetype: string
  }
}

export default function ArchetypePage({ params }: ArchetypePageProps) {
  const [currentArchetype, setCurrentArchetype] = useState(null)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  useEffect(() => {
    const data = archetypeData[params.archetype]
    if (data) {
      setCurrentArchetype(data)
    }
  }, [params.archetype])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  if (!currentArchetype) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <h1 className="text-2xl font-light text-white mb-4">Archetype not found</h1>
          <Link href="/archetype-explorer" className="text-purple-400 hover:text-purple-300">
            ← Back to Explorer
          </Link>
        </div>
      </div>
    )
  }

  const sections = [
    { id: "lifestyle", title: "Lifestyle & Values", icon: Heart },
    { id: "dayInLife", title: "A Day in the Life", icon: MapPin },
    { id: "work", title: "Work & Creative Paths", icon: Briefcase },
    { id: "money", title: "Money & Possibility", icon: DollarSign },
    { id: "relationships", title: "Relationships & Love", icon: Users },
    { id: "challenges", title: "Challenges & Growth", icon: Target },
    { id: "signs", title: "Signs You Might Be This", icon: CheckCircle },
    { id: "mantras", title: "Mantras & Anchors", icon: Quote },
  ]

  return (
    <div className="relative min-h-screen bg-gray-950" id="top">
      {/* Soft Background - matching main page */}
      <div className="fixed inset-0 z-[-1] bg-gray-950">
        {/* Purple/Pink orb - top left */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        {/* Blue/Cyan orb - top right */}
        <motion.div
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        {/* Orange/Yellow orb - middle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 opacity-15 blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Flowing Shapes */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-amber-300/20 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-pink-300/20 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-6">
          <Link
            href="/archetype-explorer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors backdrop-blur-sm bg-gray-900/40 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Archetypes
          </Link>
        </div>
      </div>

      {/* Hero Section with Full Portrait */}
      <section className="relative pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-light tracking-wide border border-purple-500/30 mb-6 inline-block">
                {currentArchetype.category}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight tracking-tight">
                {currentArchetype.name}
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed">
                {currentArchetype.essence}
              </p>

              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {currentArchetype.keywords.map((keyword, index) => (
                  <div
                    key={keyword}
                    className="flex items-center gap-2 bg-gray-900/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                  >
                    {index === 0 && <Compass className="h-4 w-4 text-purple-400" />}
                    {index === 1 && <Heart className="h-4 w-4 text-pink-400" />}
                    {index === 2 && <Star className="h-4 w-4 text-blue-400" />}
                    <span className="text-sm font-light text-gray-300 tracking-wide">{keyword}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Full Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-16"
            >
              <img
                src={currentArchetype.image || "/placeholder.svg"}
                alt={currentArchetype.name}
                className="w-full max-w-lg mx-auto h-auto object-contain rounded-3xl shadow-2xl border border-white/10"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${currentArchetype.color} opacity-10 rounded-3xl`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Essence Section */}
      <section className="py-16 bg-gray-900/40 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-white tracking-tight">Core Essence</h2>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-purple-500/10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {currentArchetype.content.coreEssence}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              const isExpanded = expandedSections.includes(section.id)

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full border border-purple-500/30">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-light text-white text-left tracking-tight">
                        {section.title}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 md:px-8 pb-6 md:pb-8"
                    >
                      {section.id === "lifestyle" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            {currentArchetype.content.lifestyle.description}
                          </p>
                          <div>
                            <h4 className="font-medium text-white mb-4 text-lg">They value:</h4>
                            <ul className="space-y-3">
                              {currentArchetype.content.lifestyle.values.map((value, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                                  <span className="text-gray-300 text-lg font-light">{value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                            <p className="text-purple-200 italic text-lg font-light">
                              {currentArchetype.content.lifestyle.note}
                            </p>
                          </div>
                        </div>
                      )}

                      {section.id === "dayInLife" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 mb-6 text-lg font-light">
                            A typical day in the life of a {currentArchetype.name}:
                          </p>
                          <ul className="space-y-4">
                            {currentArchetype.content.dayInLife.map((item, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <span className="bg-purple-500/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0 border border-purple-500/30">
                                  {i + 1}
                                </span>
                                <span className="text-gray-300 text-lg leading-relaxed font-light">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.id === "work" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            Common work and creative paths for {currentArchetype.name}s:
                          </p>
                          <div>
                            <h4 className="font-medium text-white mb-4 text-lg">Examples include:</h4>
                            <ul className="space-y-3">
                              {currentArchetype.content.workPaths.map((path, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Star className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                                  <span className="text-gray-300 text-lg font-light">{path}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === "money" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            {currentArchetype.content.money.description}
                          </p>
                          {currentArchetype.content.money.wealth && (
                            <div>
                              <h4 className="font-medium text-white mb-4 text-lg">Their wealth is measured in:</h4>
                              <ul className="space-y-3">
                                {currentArchetype.content.money.wealth.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg font-light">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {currentArchetype.content.money.priorities && (
                            <div>
                              <h4 className="font-medium text-white mb-4 text-lg">They may prioritize:</h4>
                              <ul className="space-y-3">
                                {currentArchetype.content.money.priorities.map((priority, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg font-light">{priority}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {currentArchetype.content.money.approach && (
                            <div>
                              <h4 className="font-medium text-white mb-4 text-lg">They approach money with:</h4>
                              <ul className="space-y-3">
                                {currentArchetype.content.money.approach.map((approach, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg font-light">{approach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                            <p className="text-purple-200 font-medium italic text-lg">
                              {currentArchetype.content.money.motto}
                            </p>
                          </div>
                        </div>
                      )}

                      {section.id === "relationships" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            {currentArchetype.content.relationships.description}
                          </p>
                          {currentArchetype.content.relationships.needs && (
                            <div>
                              <h4 className="font-medium text-white mb-4 text-lg">What they need in relationship:</h4>
                              <ul className="space-y-3">
                                {currentArchetype.content.relationships.needs.map((need, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <Heart className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg font-light">{need}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {currentArchetype.content.relationships.brings && (
                            <div>
                              <h4 className="font-medium text-white mb-4 text-lg">What they bring to love:</h4>
                              <ul className="space-y-3">
                                {currentArchetype.content.relationships.brings.map((bring, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <Heart className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg font-light">{bring}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {currentArchetype.content.relationships.offers && (
                            <div>
                              <h4 className="font-medium text-white mb-4 text-lg">In relationships, they offer:</h4>
                              <ul className="space-y-3">
                                {currentArchetype.content.relationships.offers.map((offer, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <Heart className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg font-light">{offer}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="bg-pink-500/10 rounded-2xl p-6 border border-pink-500/20">
                            <p className="text-pink-200 italic text-lg font-light">
                              {currentArchetype.content.relationships.note}
                            </p>
                          </div>
                        </div>
                      )}

                      {section.id === "challenges" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            The {currentArchetype.name} may face these challenges:
                          </p>
                          <ul className="space-y-3">
                            {currentArchetype.content.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300 text-lg font-light">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                            <h4 className="font-medium text-green-300 mb-3 text-lg">Growth Edge:</h4>
                            <p className="text-green-200 text-lg font-light">{currentArchetype.content.growth}</p>
                          </div>
                        </div>
                      )}

                      {section.id === "signs" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 mb-6 text-lg font-light">
                            You might be a {currentArchetype.name} if:
                          </p>
                          <ul className="space-y-4">
                            {currentArchetype.content.signs.map((sign, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <span className="bg-purple-500/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0 border border-purple-500/30">
                                  ✓
                                </span>
                                <span className="text-gray-300 text-lg leading-relaxed font-light">{sign}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.id === "mantras" && (
                        <div className="space-y-6">
                          <p className="text-gray-300 mb-6 text-lg font-light">
                            These mantras and anchors can guide {currentArchetype.name}s on their journey:
                          </p>
                          <div className="grid grid-cols-1 gap-4">
                            {currentArchetype.content.mantras.map((mantra, i) => (
                              <div
                                key={i}
                                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-white/10 shadow-lg"
                              >
                                <div className="flex items-start gap-4">
                                  <Quote className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                                  <p className="text-lg font-light text-gray-200 italic">{mantra}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/40 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl shadow-purple-500/10">
                <h2 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">
                  Ready to Connect With Others Like You?
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                  Join Creator Being to dive deeper into your archetype and connect with a community of people walking
                  similar paths.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/membership">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-light text-lg transition-all duration-300 shadow-lg shadow-purple-500/30 tracking-wide">
                      Join the Community
                    </button>
                  </Link>
                  <Link href="/archetype-explorer">
                    <button className="border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/40 px-10 py-4 rounded-full font-light text-lg transition-all duration-300 tracking-wide">
                      Explore Other Archetypes
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
