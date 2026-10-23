export type PlanetId =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune';

export const ORDER: readonly PlanetId[] = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune'
] as const;

export interface PlanetFact {
  label: string;
  detail: string;
}

export interface PlanetData {
  id: PlanetId;
  name: string;
  type: string;
  lede: string;
  still: string;
  texture: string;
  clip?: string;
  cutout: string;
  atmoColor: string;
  atmoGlow: string;
  hasRings?: boolean;
  stats: {
    distance: string;
    orbitPeriod: string;
    dayLength: string;
    temperature: string;
    moons: string;
    gravity: string;
  };
  facts: PlanetFact[];
}

export const PLANETS: Record<PlanetId, PlanetData> = {
  mercury: {
    id: 'mercury',
    name: 'MERCURY',
    type: 'Terrestrial Planet',
    lede: "The smallest planet in our solar system and closest to the Sun. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg",
    texture: "https://upload.wikimedia.org/wikipedia/commons/9/92/Solarsystemscope_texture_2k_mercury.jpg",
    cutout: "https://upload.wikimedia.org/wikipedia/commons/b/b9/3D_Mercury.png",
    atmoColor: "rgba(180, 215, 240, 0.5)",
    atmoGlow: "rgba(140, 190, 230, 0.28)",
    stats: {
      distance: "57.9M km (0.39 AU)",
      orbitPeriod: "88 Earth Days",
      dayLength: "58.6 Earth Days",
      temperature: "-180°C to 430°C",
      moons: "0",
      gravity: "3.7 m/s² (0.38g)"
    },
    facts: [
      { label: "Extreme Temperatures", detail: "With almost no atmosphere to retain heat, surface temperatures swing by over 600°C between day and night." },
      { label: "Colossal Iron Core", detail: "Mercury boasts a gigantic metallic core occupying nearly 85% of its planetary radius." },
      { label: "Speediest Orbit", detail: "Zipping through space at 47 km/s (105,000 mph), it completes an entire orbit around the Sun in just 88 days." }
    ]
  },
  venus: {
    id: 'venus',
    name: 'VENUS',
    type: 'Terrestrial Planet',
    lede: "The hottest world in our solar system, wrapped in clouds of sulfuric acid. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png",
    texture: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png",
    clip: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_b211cd74-013b-4dd3-bfd0-64491d8696fa.mp4",
    cutout: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202012_640b239a-d08a-4200-adb2-741bbe129ac8.png",
    atmoColor: "rgba(240, 195, 120, 0.65)",
    atmoGlow: "rgba(220, 170, 80, 0.35)",
    stats: {
      distance: "108.2M km (0.72 AU)",
      orbitPeriod: "225 Earth Days",
      dayLength: "243 Earth Days",
      temperature: "465°C average",
      moons: "0",
      gravity: "8.87 m/s² (0.90g)"
    },
    facts: [
      { label: "Runaway Greenhouse", detail: "A dense carbon dioxide atmosphere generates crushing pressures 92 times greater than Earth's sea level." },
      { label: "Retrograde Spin", detail: "Venus rotates backward compared to most planets—the Sun rises in the west and sets in the east." },
      { label: "Vast Volcanoes", detail: "Covered by volcanic plains and home to thousands of lava channels and shield volcanoes." }
    ]
  },
  earth: {
    id: 'earth',
    name: 'EARTH',
    type: 'Terrestrial Planet',
    lede: "Learn more about the fascinating details that we call our home, Planet Earth. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png",
    texture: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png",
    clip: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_3ffb4889-c520-432d-8458-038009eb40df.mp4",
    cutout: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202005_3346cc4d-ec3b-44ab-825c-b18e49f5021a.png",
    atmoColor: "rgba(100, 195, 255, 0.7)",
    atmoGlow: "rgba(70, 160, 255, 0.4)",
    stats: {
      distance: "149.6M km (1.00 AU)",
      orbitPeriod: "365.25 Days",
      dayLength: "24 Hours",
      temperature: "-89°C to 58°C",
      moons: "1 (The Moon)",
      gravity: "9.81 m/s² (1.00g)"
    },
    facts: [
      { label: "Liquid Oceans", detail: "The only known world in the cosmos harboring stable oceans of liquid water across 71% of its crust." },
      { label: "Magnetic Shield", detail: "A churning dynamo core produces a magnetosphere deflecting destructive cosmic rays and solar winds." },
      { label: "Thriving Biosphere", detail: "Nurtures millions of interdependent species supported by dynamic active plate tectonics." }
    ]
  },
  mars: {
    id: 'mars',
    name: 'MARS',
    type: 'Terrestrial Planet',
    lede: "The rust-red desert world, home to the tallest volcano we know of. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png",
    texture: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png",
    clip: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_51eae59a-2459-4c84-907c-cc5edfe5fea7.mp4",
    cutout: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202018_3d559490-f613-4ed7-a3bb-3b7e9fc90fb8.png",
    atmoColor: "rgba(240, 120, 70, 0.65)",
    atmoGlow: "rgba(210, 80, 40, 0.35)",
    stats: {
      distance: "227.9M km (1.52 AU)",
      orbitPeriod: "687 Earth Days",
      dayLength: "24h 37m",
      temperature: "-125°C to 20°C",
      moons: "2 (Phobos & Deimos)",
      gravity: "3.71 m/s² (0.38g)"
    },
    facts: [
      { label: "Olympus Mons", detail: "A giant shield volcano rising 21.9 km into the thin Martian sky—almost three times Everest's elevation." },
      { label: "Valles Marineris", detail: "A colossal canyon system stretching over 4,000 km, gouging fractures up to 7 km deep across the planet." },
      { label: "Subsurface Ice", detail: "Enormous subterranean water ice sheets and polar caps preserve vital clues to ancient habitable water." }
    ]
  },
  jupiter: {
    id: 'jupiter',
    name: 'JUPITER',
    type: 'Gas Giant',
    lede: "The king of planets, containing twice the mass of all other planets combined. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hubble_Takes_Close-up_Portrait_of_Jupiter.png",
    texture: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    cutout: "https://upload.wikimedia.org/wikipedia/commons/e/ed/3D_Jupiter.png",
    atmoColor: "rgba(230, 190, 140, 0.6)",
    atmoGlow: "rgba(210, 160, 100, 0.35)",
    stats: {
      distance: "778.5M km (5.20 AU)",
      orbitPeriod: "11.86 Earth Years",
      dayLength: "9h 55m",
      temperature: "-110°C (cloud tops)",
      moons: "95 Confirmed",
      gravity: "24.79 m/s² (2.53g)"
    },
    facts: [
      { label: "Great Red Spot", detail: "An anticyclonic storm larger than planet Earth that has churned fiercely for over three centuries." },
      { label: "Gravitational Guardian", detail: "Its massive gravitational field captures and redirects rogue asteroids, guarding the inner solar system." },
      { label: "Ocean Worlds", detail: "Icy moons like Europa and Ganymede conceal deep global liquid oceans with potential for astrobiology." }
    ]
  },
  saturn: {
    id: 'saturn',
    name: 'SATURN',
    type: 'Gas Giant',
    lede: "Adorned with a dazzling system of icy rings, Saturn is an iconic jewel of our cosmos. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    texture: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Solarsystemscope_texture_2k_saturn.jpg",
    cutout: "https://upload.wikimedia.org/wikipedia/commons/c/c0/3D_Saturn.png",
    atmoColor: "rgba(235, 205, 150, 0.6)",
    atmoGlow: "rgba(215, 175, 110, 0.35)",
    hasRings: true,
    stats: {
      distance: "1.43B km (9.58 AU)",
      orbitPeriod: "29.45 Earth Years",
      dayLength: "10h 33m",
      temperature: "-140°C (cloud tops)",
      moons: "146 Confirmed",
      gravity: "10.44 m/s² (1.06g)"
    },
    facts: [
      { label: "Breathtaking Ring System", detail: "Rings span 282,000 km across yet average just 10 to 30 meters thick, made of pure sparkling water ice." },
      { label: "Less Dense Than Water", detail: "Saturn has the lowest bulk density of any planet; it would literally float if placed in an ocean large enough." },
      { label: "Titan's Hydrocarbon Seas", detail: "Its moon Titan is enveloped in a thick atmosphere with liquid methane rivers and lakes." }
    ]
  },
  uranus: {
    id: 'uranus',
    name: 'URANUS',
    type: 'Ice Giant',
    lede: "An enigmatic ice giant that rolls around the Sun on its side like a bowling ball. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    texture: "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
    cutout: "https://upload.wikimedia.org/wikipedia/commons/3/32/3D_Uranus.png",
    atmoColor: "rgba(130, 235, 245, 0.65)",
    atmoGlow: "rgba(90, 210, 230, 0.4)",
    stats: {
      distance: "2.87B km (19.2 AU)",
      orbitPeriod: "84 Earth Years",
      dayLength: "17h 14m",
      temperature: "-224°C coldest recorded",
      moons: "28 Confirmed",
      gravity: "8.69 m/s² (0.89g)"
    },
    facts: [
      { label: "Extreme Axial Tilt", detail: "Tilted at a radical 98° angle, causing 42 years of continuous polar summer sunlight followed by 42 years of winter darkness." },
      { label: "Superheated Icy Slush", detail: "Its deep mantle consists of high-pressure fluid water, ammonia, and methane often termed 'hot ice'." },
      { label: "Dark Thin Rings", detail: "Circled by 13 distinct concentric rings made of dark organic and boulder-sized silicate particles." }
    ]
  },
  neptune: {
    id: 'neptune',
    name: 'NEPTUNE',
    type: 'Ice Giant',
    lede: "A dark, cold supersonic world whipped by the fastest planetary winds ever measured. Course enrollment <br>starts today. Early Bird tickets typically last a week, don&rsquo;t miss out!",
    still: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    texture: "https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg",
    cutout: "https://upload.wikimedia.org/wikipedia/commons/d/da/3D_Neptune.png",
    atmoColor: "rgba(70, 140, 255, 0.7)",
    atmoGlow: "rgba(40, 110, 245, 0.45)",
    stats: {
      distance: "4.50B km (30.1 AU)",
      orbitPeriod: "164.8 Earth Years",
      dayLength: "16h 6m",
      temperature: "-214°C average",
      moons: "16 Confirmed",
      gravity: "11.15 m/s² (1.14g)"
    },
    facts: [
      { label: "Supersonic Winds", detail: "High-altitude storm winds scream through methane clouds at over 2,100 km/h (1,300 mph)." },
      { label: "Found by Math", detail: "The only planet pinpointed through Newtonian gravitational calculations before ever being viewed through a telescope." },
      { label: "Cryovolcanic Triton", detail: "Its retrograde moon Triton erupts in liquid nitrogen geysers that freeze into nitrogen frost miles high." }
    ]
  }
};

export function getSideSlots(featured: PlanetId): { left: PlanetId; right: PlanetId } {
  const index = ORDER.indexOf(featured);
  if (index === -1) {
    return { left: ORDER[ORDER.length - 1], right: ORDER[1] };
  }
  const leftIndex = (index - 1 + ORDER.length) % ORDER.length;
  const rightIndex = (index + 1) % ORDER.length;
  return {
    left: ORDER[leftIndex],
    right: ORDER[rightIndex]
  };
}

export function validateNextPlanet(next: string): PlanetId | null {
  if (ORDER.includes(next as PlanetId)) {
    return next as PlanetId;
  }
  return null;
}

export interface OrbitalTrajectory {
  planetId: PlanetId;
  name: string;
  semiMajorAxisAU: number;
  orbitalSpeedKmS: number;
  inclinationDeg: number;
  periodDays: number;
  themeColor: string;
  glowColor: string;
  telemetryLabel: string;
}

export const ORBITAL_TRAJECTORIES: Record<PlanetId, OrbitalTrajectory> = {
  mercury: {
    planetId: 'mercury',
    name: 'Mercury',
    semiMajorAxisAU: 0.387,
    orbitalSpeedKmS: 47.36,
    inclinationDeg: 7.0,
    periodDays: 87.97,
    themeColor: 'rgba(180, 215, 240, 0.45)',
    glowColor: 'rgba(210, 235, 255, 0.95)',
    telemetryLabel: 'MERCURY TRAJECTORY · 0.39 AU · 47.4 KM/S'
  },
  venus: {
    planetId: 'venus',
    name: 'Venus',
    semiMajorAxisAU: 0.723,
    orbitalSpeedKmS: 35.02,
    inclinationDeg: 3.39,
    periodDays: 224.7,
    themeColor: 'rgba(240, 200, 130, 0.45)',
    glowColor: 'rgba(255, 230, 175, 0.95)',
    telemetryLabel: 'VENUS TRAJECTORY · 0.72 AU · 35.0 KM/S'
  },
  earth: {
    planetId: 'earth',
    name: 'Earth',
    semiMajorAxisAU: 1.000,
    orbitalSpeedKmS: 29.78,
    inclinationDeg: 0.0,
    periodDays: 365.25,
    themeColor: 'rgba(121, 220, 232, 0.45)',
    glowColor: 'rgba(180, 245, 255, 0.95)',
    telemetryLabel: 'EARTH TRAJECTORY · 1.00 AU · 29.8 KM/S'
  },
  mars: {
    planetId: 'mars',
    name: 'Mars',
    semiMajorAxisAU: 1.524,
    orbitalSpeedKmS: 24.07,
    inclinationDeg: 1.85,
    periodDays: 686.98,
    themeColor: 'rgba(240, 140, 95, 0.45)',
    glowColor: 'rgba(255, 185, 145, 0.95)',
    telemetryLabel: 'MARS TRAJECTORY · 1.52 AU · 24.1 KM/S'
  },
  jupiter: {
    planetId: 'jupiter',
    name: 'Jupiter',
    semiMajorAxisAU: 5.204,
    orbitalSpeedKmS: 13.07,
    inclinationDeg: 1.30,
    periodDays: 4332.59,
    themeColor: 'rgba(235, 200, 140, 0.45)',
    glowColor: 'rgba(255, 230, 180, 0.95)',
    telemetryLabel: 'JUPITER TRAJECTORY · 5.20 AU · 13.1 KM/S'
  },
  saturn: {
    planetId: 'saturn',
    name: 'Saturn',
    semiMajorAxisAU: 9.582,
    orbitalSpeedKmS: 9.68,
    inclinationDeg: 2.49,
    periodDays: 10759.22,
    themeColor: 'rgba(240, 220, 165, 0.45)',
    glowColor: 'rgba(255, 240, 195, 0.95)',
    telemetryLabel: 'SATURN TRAJECTORY · 9.58 AU · 9.7 KM/S'
  },
  uranus: {
    planetId: 'uranus',
    name: 'Uranus',
    semiMajorAxisAU: 19.201,
    orbitalSpeedKmS: 6.80,
    inclinationDeg: 0.77,
    periodDays: 30685.4,
    themeColor: 'rgba(130, 235, 245, 0.45)',
    glowColor: 'rgba(190, 250, 255, 0.95)',
    telemetryLabel: 'URANUS TRAJECTORY · 19.2 AU · 6.8 KM/S'
  },
  neptune: {
    planetId: 'neptune',
    name: 'Neptune',
    semiMajorAxisAU: 30.070,
    orbitalSpeedKmS: 5.43,
    inclinationDeg: 1.77,
    periodDays: 60189.0,
    themeColor: 'rgba(90, 170, 255, 0.45)',
    glowColor: 'rgba(165, 215, 255, 0.95)',
    telemetryLabel: 'NEPTUNE TRAJECTORY · 30.1 AU · 5.4 KM/S'
  }
};

export function getOrbitalTrajectory(planet: PlanetId): OrbitalTrajectory {
  return ORBITAL_TRAJECTORIES[planet] || ORBITAL_TRAJECTORIES.earth;
}
