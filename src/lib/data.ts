import type { Product, ShowcaseProject } from "@/types";

export const PRODUCTS: readonly Product[] = [
  {
    id: "spc-urban-oak",
    name: "Urban Oak SPC",
    category: "SPC",
    description:
      "A 100% waterproof stone polymer composite plank with a realistic oak grain — perfect for Hong Kong kitchens and bathrooms.",
    features: ["100% waterproof", "Click-lock install", "Pet & scratch resistant"],
    priceFromHkd: 68,
    image:
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=1200&q=70",
    badge: "Best Seller",
  },
  {
    id: "spc-harbour-grey",
    name: "Harbour Grey SPC",
    category: "SPC",
    description:
      "Cool-toned grey SPC plank engineered for humid climates with a dense stone core for silent footfall.",
    features: ["Acoustic underlay", "Low VOC", "20-year residential warranty"],
    priceFromHkd: 72,
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "wood-peak-walnut",
    name: "Peak Walnut Engineered",
    category: "Wood",
    description:
      "Engineered walnut with a 4mm top layer — refinishable, dimensionally stable, and finished in natural oil.",
    features: ["Real wood veneer", "Natural oil finish", "Refinishable"],
    priceFromHkd: 188,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
    badge: "Designer Pick",
  },
  {
    id: "wood-victoria-oak",
    name: "Victoria Oak Herringbone",
    category: "Wood",
    description:
      "Classic herringbone engineered oak planks for a timeless, architectural statement floor.",
    features: ["Herringbone pattern", "Brushed & smoked", "European oak"],
    priceFromHkd: 228,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "composite-terrace-teak",
    name: "Terrace Teak WPC",
    category: "Composite",
    description:
      "Wood-plastic composite decking designed for Hong Kong balconies — UV-stable and slip-resistant.",
    features: ["Outdoor rated", "UV stable", "Slip resistant"],
    priceFromHkd: 98,
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "composite-skyline-ash",
    name: "Skyline Ash Composite",
    category: "Composite",
    description:
      "Capped composite plank with a co-extruded shell for superior fade and stain resistance year-round.",
    features: ["Capped shell", "25-year fade warranty", "Low maintenance"],
    priceFromHkd: 118,
    image:
      "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "spc-pearl-marble",
    name: "Pearl Marble SPC",
    category: "SPC",
    description:
      "Stone-look SPC tile with a soft pearl vein — ideal for boutique retail and hospitality interiors.",
    features: ["Stone-look visual", "Commercial grade", "Micro-bevelled edge"],
    priceFromHkd: 84,
    image:
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "wood-causeway-ash",
    name: "Causeway Ash Plank",
    category: "Wood",
    description:
      "Wide-plank engineered ash with a smoked finish — warm, modern, and ready for underfloor heating.",
    features: ["Underfloor heating compatible", "Wide plank", "Smoked finish"],
    priceFromHkd: 168,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=70",
  },
];

export const SHOWCASE_PROJECTS: readonly ShowcaseProject[] = [
  {
    id: "mid-levels-flat",
    title: "Mid-Levels Apartment Refresh",
    location: "Mid-Levels, Hong Kong Island",
    summary:
      "Replaced dated tile with Peak Walnut engineered planks across 780 sqft, completed in four days.",
    beforeImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70",
    afterImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=70",
    category: "Wood",
  },
  {
    id: "kowloon-cafe",
    title: "Kowloon Speciality Café",
    location: "Sham Shui Po, Kowloon",
    summary:
      "Pearl Marble SPC tiles withstand heavy foot traffic while keeping the boutique brand palette on point.",
    beforeImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70",
    afterImage:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=70",
    category: "SPC",
  },
  {
    id: "clearwater-bay-terrace",
    title: "Clearwater Bay Rooftop Terrace",
    location: "Clearwater Bay, New Territories",
    summary:
      "Terrace Teak WPC decking transformed a sun-beaten rooftop into a usable outdoor lounge.",
    beforeImage:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=70",
    afterImage:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=70",
    category: "Composite",
  },
];
