// Complete data structure matching Orway (https://www.orway.in)
// Preserving all authentic craft details, artists, corporate gifting, testimonials, and pages
// With curated high-resolution artisan imagery

export const ORWAY_INFO = {
  name: "Orway",
  logoText: "ORWAY",
  tagline: "Luxury • Heritage • Handcrafted India",
  description: "Handcrafted by Indian artisans. Curated by Orway. Premium Kalamkari, Tholu Bommalata, and authentic Indian crafts.",
  email: "orwayindia@gmail.com",
  phone: "+91 75589 59714",
  instagram: "https://www.instagram.com/orway.in/",
  year: "2026"
};

export const HERO_BANNERS = [
  {
    id: "banner-1",
    title: "Tholu Bommalata Collection",
    subtitle: "Mythological Shadow Leather Art",
    description: "Perforated leather lamps and intricate hangings illuminated with vibrant vegetable dyes.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2400&q=90",
    link_url: "/shop",
    badge: "Featured Collection"
  },
  {
    id: "banner-2",
    title: "Parampara",
    subtitle: "Generations of Living Heritage",
    description: "Preserving sacred Indian crafts through ethical partnerships with generational masters.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=2400&q=90",
    link_url: "/master-pavilion",
    badge: "Heritage Archive"
  },
  {
    id: "banner-3",
    title: "Custom-Made Leather Lamps",
    subtitle: "Contemporary Ambient Illumination",
    description: "Ancient translucency adapted for refined architectural sanctuaries and luxury interiors.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2400&q=90",
    link_url: "/shop",
    badge: "Design Collection"
  },
  {
    id: "banner-4",
    title: "Tholu Bommalata Leather Puppets",
    subtitle: "Epic Storytelling from Andhra Pradesh",
    description: "Hand-tooled goat parchment puppets articulated for traditional shadow theatre and gallery walls.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=2400&q=90",
    link_url: "/puppets",
    badge: "Living Traditions"
  }
];

export const EXPLORE_VERTICALS = [
  {
    id: "contemporary-craft",
    title: "Contemporary Craft",
    label: "Design",
    description: "Ancient artistry meets modern design for the contemporary home.",
    image: "/verticals/floor-lamp.webp",
    path: "/shop",
    imgX: -50,
    imgY: -10,
    imgW: 1080,
    imgH: 1120
  },
  {
    id: "masters-dome",
    title: "Masters Dome",
    label: "Heritage",
    description: "Museum-grade artworks by India's most celebrated heritage artisans.",
    image: "/verticals/wall-art.webp",
    path: "/master-pavilion",
    imgX: 0,
    imgY: 0,
    imgW: 991,
    imgH: 1065
  },
  {
    id: "corporate-events",
    title: "Corporate & Events",
    label: "Business",
    description: "Bespoke heritage-crafted gifting solutions for brands.",
    image: "/verticals/gift-box.webp",
    path: "/corporate-gifting",
    imgX: -40,
    imgY: 2,
    imgW: 1070,
    imgH: 1080
  },
  {
    id: "experiential-gifting",
    title: "Experiential Gifting",
    label: "Experience",
    description: "Live artisan performances paired with luxury handcrafted gifts.",
    image: "/verticals/puppets.webp",
    path: "/experiences",
    imgX: -20,
    imgY: -10,
    imgW: 1030,
    imgH: 1080
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: "tholu-lamp-conical",
    slug: "tholu-bommalata-conical-floor-lamp",
    name: "Handcrafted Tholu Bommalata Floor Lamp",
    craft: "Tholu Bommalata",
    category: "Lamps",
    vertical: "shop",
    price: 18500,
    priceFormatted: "₹18,500",
    description: "Perforated leather floor lamp with mythological peacocks and lotus medallions. Hand-painted with translucent vegetable dyes on treated parchment that casts intricate shadow patterns on walls.",
    material: "Treated Goat Parchment, Natural Earth Pigments, Teakwood Base",
    dimensions: "120 cm Height × 35 cm Diameter",
    origin: "Nimmalakunda, Andhra Pradesh",
    artist: "K. Ramana",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: "kalamkari-tree-life",
    slug: "srikalahasti-kalamkari-tree-of-life",
    name: "Tree of Life Srikalahasti Kalamkari Tapestry",
    craft: "Kalamkari",
    category: "Wall Art",
    vertical: "master_pavilion",
    price: 36000,
    priceFormatted: "₹36,000",
    description: "Rendered completely with bamboo reed pens (kalam) and natural mineral pigments on handspun cotton processed in myrobalan and buffalo milk. Depicts the celestial Kalpavriksha tree harboring endangered birds.",
    material: "Handspun Desi Cotton, Bamboo Reed Kalam, Mineral Inks",
    dimensions: "180 cm × 120 cm",
    origin: "Srikalahasti, Andhra Pradesh",
    artist: "J. Niranjan",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: "tholu-shadow-puppet-ravana",
    slug: "articulated-shadow-puppet-dashanana",
    name: "Articulated Shadow Puppet — Dashanana",
    craft: "Tholu Bommalata",
    category: "Puppets",
    vertical: "shop",
    price: 14200,
    priceFormatted: "₹14,200",
    description: "Museum-grade ceremonial shadow puppet with multiple articulated limb joints and fine micro-punch perforations that create glowing halos when backlight passes through.",
    material: "Parchment Leather, Bamboo Splints, Natural Dyes",
    dimensions: "110 cm × 60 cm",
    origin: "Nimmalakunda, Andhra Pradesh",
    artist: "K. Ramana",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: "kalamkari-tussar-dupatta",
    slug: "hand-painted-kalamkari-tussar-dupatta",
    name: "Lotus Symphony Hand-Painted Tussar Dupatta",
    craft: "Kalamkari & Handloom",
    category: "Dupattas",
    vertical: "shop",
    price: 12800,
    priceFormatted: "₹12,800",
    description: "Pure Bhagalpur wild Tussar silk drape hand-drawn by master kalam artisans. Floral borders and pallu tell verses from ancient classical literature.",
    material: "100% Pure Tussar Silk, Natural Indigo and Madder Dyes",
    dimensions: "250 cm × 90 cm",
    origin: "Srikalahasti, Andhra Pradesh",
    artist: "J. Niranjan",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: "mehraab-zari-clutch",
    slug: "mehraab-gilded-zari-minaudiere",
    name: "Mehraab Gilded Zari Minaudière",
    craft: "Zari Craft",
    category: "Accessories",
    vertical: "shop",
    price: 8400,
    priceFormatted: "₹8,400",
    description: "Architectural clutch with royal Mughal arched jaali couched with antique copper and silver wire on midnight navy velvet.",
    material: "Forest Velvet, Gilt Metallic Wire, Brass Frame",
    dimensions: "20 cm × 12 cm × 5 cm",
    origin: "Bhopal, Madhya Pradesh",
    artist: "Begum Naseem",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: "bell-metal-urn",
    slug: "lost-wax-bronze-ritual-urn",
    name: "Lost-Wax Bell Metal Sculptural Urn",
    craft: "Bell Metal",
    category: "Decor",
    vertical: "master_pavilion",
    price: 24500,
    priceFormatted: "₹24,500",
    description: "Solid bronze and brass vessel cast in the ancient Harappan cire-perdue technique with unburnished dark olive patina and acoustic resonance.",
    material: "Bell Metal Bronze Alloy",
    dimensions: "32 cm Height × 22 cm Diameter (3.4 kg)",
    origin: "Tikamgarh, Bundelkhand",
    artist: "Ram Swaroop Soni",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
    ]
  }
];

export const FEATURED_ARTISTS = [
  {
    id: "k-ramana",
    name: "K. Ramana",
    slug: "k-ramana",
    craft: "Tholu Bommalata Leather Art",
    craft_origin: "Nimmalakunda, Andhra Pradesh",
    generational_legacy: "4th Generation Master",
    bio: "Practicing the rare art of leather shadow puppetry and perforated lamps since childhood, Ramana leads a community of twenty artisans preserving epic storytelling.",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "j-niranjan",
    name: "J. Niranjan",
    slug: "j-niranjan",
    craft: "Srikalahasti Freehand Kalamkari",
    craft_origin: "Srikalahasti, Andhra Pradesh",
    generational_legacy: "National Awardee • 35 Years",
    bio: "Niranjan exclusively works with hand-whittled bamboo pens and vegetable dyes extracted from myrobalan nuts, madder roots, and alum, depicting mythological epics.",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "begum-naseem",
    name: "Begum Naseem",
    slug: "begum-naseem",
    craft: "Bhopali Zardozi & Batua",
    craft_origin: "Bhopal, Madhya Pradesh",
    generational_legacy: "Master Practitioner • 38 Years",
    bio: "Guardian of the 8-compartment Batua architecture and delicate gold tilla wire couching passed down from the court of the Begums of Bhopal.",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "ram-swaroop-soni",
    name: "Ram Swaroop Soni",
    slug: "ram-swaroop-soni",
    craft: "Lost-Wax Bell Metal Metallurgy",
    craft_origin: "Tikamgarh, Bundelkhand",
    generational_legacy: "Family Atelier • 44 Years",
    bio: "Sculpting using indigenous beeswax models encased in riverbank alluvial clay, casting one-of-a-kind acoustic bronze vessels with dark patina.",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
  }
];

export const MASTERS_DOME_PRODUCTS = [
  {
    id: "md-1",
    slug: "kalpavriksha-sacred-tapestry",
    name: "Kalpavriksha Sacred Kalamkari Tapestry",
    artist: "J. Niranjan",
    price: 78000,
    priceFormatted: "₹78,000",
    description: "Museum-grade monumental canvas rendered over 7 months of painstaking freehand pen work. Features physical NFC authentication seal and archival provenance dossier.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "md-2",
    slug: "tholu-monumental-peacock-screen",
    name: "Monumental Tholu Bommalata 3-Panel Screen",
    artist: "K. Ramana",
    price: 95000,
    priceFormatted: "₹95,000",
    description: "Floor-to-ceiling folding screen with translucent etched parchment backed by warm LED channels, casting celestial plumage across luxury living spaces.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "md-3",
    slug: "bronze-cire-perdue-celestial-vessel",
    name: "Bundelkhand Celestial Bell Metal Vessel",
    artist: "Ram Swaroop Soni",
    price: 64000,
    priceFormatted: "₹64,000",
    description: "One-of-a-kind acoustic sculpture with concentric tribal rings and organic oxidation, collected by premier design institutions.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    client_name: "Priya Mehta",
    client_title: "Head of Brand Partnerships",
    company_name: "Tata Group",
    testimonial_text: "Orway didn't just deliver a gift — they delivered an experience. From the first call to the final unboxing, every detail was curated with intention and care."
  },
  {
    id: "2",
    client_name: "Arjun Kapoor",
    client_title: "Director of Events",
    company_name: "Infosys",
    testimonial_text: "We wanted something that went beyond the ordinary for our leadership summit. Orway brought a live Kalamkari workshop and gifted each guest a handcrafted piece. The response was overwhelming."
  },
  {
    id: "3",
    client_name: "Sneha Raghavan",
    client_title: "Art Collector",
    company_name: "Mumbai",
    testimonial_text: "What struck me most was the story behind every piece. Orway makes you feel connected to the artisan, the craft, and the tradition. It's not just a purchase — it's a relationship."
  },
  {
    id: "4",
    client_name: "Vikram Desai",
    client_title: "CEO",
    company_name: "Desai & Partners",
    testimonial_text: "The level of personalisation was extraordinary. Each gift carried a handwritten note from the artisan who made it. Our clients were genuinely moved."
  }
];

export const CORPORATE_GIFTS = [
  {
    id: "cg-1",
    title: "Executive Kalamkari Desk Folio",
    category: "Leadership Gifting",
    minQuantity: "Min. 25 units",
    leadTime: "14-21 Days",
    description: "Hand-painted organic cotton folder with customized brass monogram and artisan certificate.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cg-2",
    title: "Artisan Tholu Lamp Luminary Box",
    category: "VIP & Festive",
    minQuantity: "Min. 15 units",
    leadTime: "21 Days",
    description: "Tabletop illuminated cylinder lamp housed in handcrafted pine wood box with personalized message.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cg-3",
    title: "Heritage Bell Metal Paperweight & Tray Set",
    category: "Signature Desk Objects",
    minQuantity: "Min. 30 units",
    leadTime: "18 Days",
    description: "Solid bell metal bronze sculpted with ancient geometric seal and velvet-lined presentation case.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
  }
];
