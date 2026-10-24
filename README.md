# PlanetEdu — Solar System Cinematic Hero & Planetary Intelligence Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![WebGL](https://img.shields.io/badge/WebGL-Hardware%20Accelerated-darkred.svg)](https://www.khronos.org/webgl/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%208-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC.svg)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Unit%20Tests-Node.js%20Test%20Runner-brightgreen.svg)](https://nodejs.org/api/test.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**PlanetEdu** is a high-performance, GPU-accelerated educational web experience featuring a full-viewport cinematic hero horizon. It delivers custom WebGL GLSL shaders, authentic Keplerian orbital mechanics, procedural atmospheric dynamics for terrestrial, gas, and ice giants, and an interactive NASA/JPL-grade planetary intelligence terminal.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
  - [1. Real-Time WebGL Atmospheric & Ring Shaders](#1-real-time-webgl-atmospheric--ring-shaders)
  - [2. Procedural & High-Fidelity Planetary Texturing](#2-procedural--high-fidelity-planetary-texturing)
  - [3. Orbital Trajectory Telemetry HUD](#3-orbital-trajectory-telemetry-hud)
  - [4. Planetary Intelligence Dossier Modal ("GET STARTED")](#4-planetary-intelligence-dossier-modal-get-started)
  - [5. Developer Information Modal](#5-developer-information-modal)
- [Planetary Motion & Scientific Mechanics](#planetary-motion--scientific-mechanics)
- [Architecture & File Structure](#architecture--file-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
  - [Running Unit Tests & Linting](#running-unit-tests--linting)
- [Hosting & Deployment Guide](#hosting--deployment-guide)
  - [Option A: Hosting on Vercel](#option-a-hosting-on-vercel-recommended--free--instant)
  - [Option B: Hosting on Render](#option-b-hosting-on-render-free-static-site)
- [Testing & Quality Assurance](#testing--quality-assurance)
- [Developer & Credits](#developer--credits)
- [License](#license)

---

## Overview

Traditional web hero sections often rely on static stock photography or pre-rendered videos that look rigid and disconnect users from the real physics of our solar system. **PlanetEdu** bridges astronomical science and modern frontend graphics engineering by rendering all 8 solar system planets via an interactive WebGL canvas paired with procedural textures and physical shader raymarching.

Users can traverse the entire Solar System in canonical distance order—from sun-scorched Mercury to distant, supersonic Neptune—observing axial tilts, differential wind shear, multi-band atmospheric circulation, and comprehensive spacecraft exploration intelligence.

---

## Key Features

### 1. Real-Time WebGL Atmospheric & Ring Shaders
The custom vertex and fragment shaders (`VS_SOURCE` and `FS_SOURCE`) run at 60 FPS directly on the GPU:
- **Atmospheric Limb Scattering**: Multi-layered Fresnel rim lighting and Rayleigh scattering matched to each planet's chemical atmosphere (e.g., golden haze for Saturn, vibrant cyan for Uranus, electric cobalt/sapphire for Neptune).
- **Saturn 3D Tilted Ring System**:
  - Exact 26.7° Cassini-calibrated tilt calculation in 3D ray space.
  - Multi-zone ring anatomy: C Ring (faint crepe ring), dense B Ring, dark Cassini Division gap, and A Ring with the Encke division.
  - Keplerian particle motion shimmer: inner ring particles orbit faster than outer particles.
  - Dynamic ring shadows cast onto the planet disc, and planet shadow cast onto the back of the rings.
  - Central reading vignette clearance ensuring 100% typography contrast for hero text.
- **Uranus Sideways Rotation**:
  - Simulates Uranus's iconic 97.77° axial tilt by rotating the sphere normal vector coordinates by ~78.5° in the viewport plane.
  - Retrograde rotation with differential atmospheric zonal wave shear.
- **Neptune Supersonic Wind Shear**:
  - Recreates the fastest winds in the Solar System (>2,100 km/h) using multi-frequency counter-flowing wave shear.
  - Great Dark Spot (GDS-89) anticyclonic vortex and companion bright white "Scooter" cirrus plume.
- **Jupiter Great Red Spot**:
  - Anticyclonic oval storm vortex with differential equatorial vs. temperate belt shearing velocities.

### 2. Procedural & High-Fidelity Planetary Texturing
- High-resolution procedural canvas builders (`buildTextureCanvas`) generate rich surface features for planets on the fly:
  - **Mercury**: Thousands of crater basins, micro-craters, and soft ejecta rays.
  - **Uranus**: 55+ high-altitude methane cirrus streamer ribbons, convective storm plumes with trailing vortex wakes, and JWST-calibrated polar hoods/collars.
  - **Neptune**: 70+ supersonic methane cirrus streaks with 3D drop shadows cast onto lower deck clouds.
  - **Saturn**: Delicate ammonia/methane cloud belts with micro-turbulence mottling.
- Full texture fallback and HTML5 video looping integration for select cinematic terrestrial captures.

### 3. Orbital Trajectory Telemetry HUD
- Prominently positioned in the top navigation bar with a live pulsing indicator dot.
- Displays real-time astronomical trajectory data computed for each planet:
  - **Distance from Sun (AU)**
  - **Mean Orbital Velocity (km/s)**
  - **Orbital Period (Days / Earth Years)**
  - **Orbital Inclination (Degrees relative to the ecliptic)**
- Zero visual collision with title typography or side navigation buttons.

### 4. Planetary Intelligence Dossier Modal ("GET STARTED")
Clicking the central **GET STARTED** button opens a high-precision cosmic terminal:
- **Celestial Header & Dynamic Planetary Theming**:
  - High-resolution 3D planet globe preview centered inside a counter-rotating dashed orbital ring.
  - Dynamic Palette Theming: Modal border, atmospheric glows, and accent elements dynamically inherit each planet's atmospheric color palette (`--dossier-accent`, `--dossier-glow`, and `--dossier-border`).
  - Metadata tags: Planetary class (e.g., `TERRESTRIAL PLANET`, `GAS GIANT`, `ICE GIANT`), orbital position tag (e.g., `1ST PLANET FROM SUN`), diameter, and orbital telemetry subhead.
- **In-Modal Navigation & Quick Switcher**:
  - Previous and Next buttons with dynamic labels showing adjacent planets in canonical solar distance order.
  - 8 interactive orbital progress nodes allowing immediate switching to any planet directly within the modal.
  - Bi-directional sync: switching planets inside the modal automatically updates the background WebGL 3D simulation, top telemetry HUD, and hero text.
- **3 Segmented Functional Tabs**:
  1. **Telemetry & Overview**:
     - Authoritative scientific overview prose.
     - 6-metric telemetry grid with tabular numerals: Distance from Sun, Orbital Period, Solar Day Length, Mean Temperature, Confirmed Moons, and Surface Gravity.
     - **Solar System Orbital Radius Spectrum**: Interactive mini-map showing the Sun (Sol) and orbital radius positions across the solar system (Inner Terrestrials, Asteroid Belt, Gas & Ice Giants, Kuiper Belt) with the active planet highlighted.
  2. **Atmosphere & Interior**:
     - Visual multi-color atmospheric composition progress bar.
     - Scientific gas breakdown badges with formatted chemical formulas (`O₂`, `N₂`, `CO₂`, `CH₄`, `NH₃`, `H₂O`) and percentages.
     - Surface pressure telemetry (e.g., `< 10⁻¹⁴ bar` exosphere to `92 bar` crushing supercritical greenhouse atmospheres).
     - Geological and core interior architecture analysis.
  3. **Missions & Intelligence**:
     - Spacecraft exploration milestones (Mariner, MESSENGER, BepiColombo, Venera, Apollo, Curiosity, Perseverance, Juno, Cassini, Voyager 2, etc.).
     - Hairline-bordered planetary intelligence fact cards with staggered cascading reveals.

### 5. Developer Information Modal
Clicking the `(i)` button in the top-right of the navigation bar opens the Developer Info profile:
- **Header Profile**:
  - Monogram avatar badge with a counter-rotating dashed orbital ring and active status dot.
  - Creative Architect title badge and developer name: **Karan S Suvarna**.
  - **Top-Right Close Button**: Positioned cleanly in the top-right corner via full-width flexbox layout.
- **Craftsmanship Statement**: Statement on synthesizing astrophysics with real-time procedural WebGL GLSL shaders.
- **Interactive Action Cards**:
  - **GitHub & Source Code**: Direct link to profile ([github.com/karanks6](https://github.com/karanks6)) and repository ([github.com/karanks6/PlanetEdu](https://github.com/karanks6/PlanetEdu)).
  - **Direct Inquiries**: Email link and 1-click clipboard copy button with feedback toast.
- **System Architecture & Capabilities**: Technical tags highlighting WebGL & GLSL Shaders, Keplerian Orbital Telemetry, Procedural Atmospheres, Saturn 3D Tilted Rings, TypeScript & ESM, and Responsive Canvas Compositing.

---

## Planetary Motion & Scientific Mechanics

The application adheres strictly to the canonical solar sequence and Keplerian laws of planetary motion:

```
[Sun] ──> Mercury (0.39 AU) ──> Venus (0.72 AU) ──> Earth (1.00 AU) ──> Mars (1.52 AU)
      ──> Jupiter (5.20 AU) ──> Saturn (9.58 AU) ──> Uranus (19.20 AU) ──> Neptune (30.07 AU)
```

| Planet | Type | Semi-Major Axis (AU) | Orbital Velocity (km/s) | Orbital Period | Axial Tilt |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mercury** | Terrestrial | 0.39 AU | 47.36 km/s | 88 Earth Days | 0.03° |
| **Venus** | Terrestrial | 0.72 AU | 35.02 km/s | 225 Earth Days | 177.36° (Retrograde) |
| **Earth** | Terrestrial | 1.00 AU | 29.78 km/s | 365.25 Days | 23.44° |
| **Mars** | Terrestrial | 1.52 AU | 24.07 km/s | 687 Earth Days | 25.19° |
| **Jupiter** | Gas Giant | 5.20 AU | 13.07 km/s | 11.86 Earth Yrs | 3.13° |
| **Saturn** | Gas Giant | 9.58 AU | 9.68 km/s | 29.45 Earth Yrs | 26.73° |
| **Uranus** | Ice Giant | 19.20 AU | 6.80 km/s | 84.0 Earth Yrs | 97.77° (Sideways) |
| **Neptune** | Ice Giant | 30.07 AU | 5.43 km/s | 164.8 Earth Yrs | 28.32° |

*Notice Kepler's Third Law in action: orbital velocity strictly decreases as distance from the Sun increases ($v \propto 1 / \sqrt{r}$).*

---

## Architecture & File Structure

```
├── .env.example              # Environment variables template
├── index.html                # Main application entry point, WebGL canvas, shaders, UI & modals
├── metadata.json             # AI Studio applet configuration and capabilities
├── package.json              # Project dependencies, scripts, and engine specifications
├── tsconfig.json             # TypeScript compiler options
├── vite.config.ts            # Vite build configuration
├── src/
│   ├── planet-logic.ts       # Pure astronomical logic: planet registry, orbital physics & slot math
│   ├── planet-logic.test.ts  # Comprehensive Node.js unit test suite (8 passing tests)
│   ├── App.tsx               # Auxiliary React component mounting point
│   ├── main.tsx              # React DOM entry
│   └── index.css             # Tailwind CSS global styles
├── vercel.json               # Pre-configured deployment settings for Vercel
├── render.yaml               # Pre-configured deployment blueprint for Render
└── README.md                 # Comprehensive project documentation
```

---

## Getting Started

### Prerequisites
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher

### Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/karanks6/PlanetEdu.git
cd PlanetEdu
npm install
```

### Development Server
Start the local development server on port 3000:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Building for Production
Create an optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

### Running Unit Tests & Linting
Execute the test suite powered by the native Node.js test runner:
```bash
npm test
```
Run static TypeScript type checks:
```bash
npm run lint
```

---

## Hosting & Deployment Guide

This project is pre-configured with `vercel.json` and `render.yaml` for zero-configuration, 1-click deployment on both **Vercel** and **Render**.

### Option A: Hosting on Vercel (Recommended — Free & Instant)

Vercel provides edge CDN delivery, automatic SSL, and instant continuous deployment on every Git push.

#### Method 1: Via GitHub (Recommended)
1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete PlanetEdu cosmic platform"
   git branch -M main
   git remote add origin https://github.com/karanks6/PlanetEdu.git
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** → **"Project"**.
   - Locate your repository from the list and click **"Import"**.
3. **Build & Output Settings**:
   - **Framework Preset**: `Vite` *(auto-detected)*.
   - **Root Directory**: `./` *(default)*.
   - **Build Command**: `npm run build` *(pre-configured in `vercel.json`)*.
   - **Output Directory**: `dist` *(pre-configured in `vercel.json`)*.
4. **Deploy**:
   - Click **"Deploy"**.
   - In ~20 seconds, your website will be live on a production URL: `https://<your-project>.vercel.app`.

#### Method 2: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
# When prompted, accept defaults.
# To deploy directly to production:
vercel --prod
```

---

### Option B: Hosting on Render (Free Static Site)

Render offers free static site hosting with built-in SSL and continuous deployment from GitHub.

#### Method 1: Using the Included Blueprint (`render.yaml`)
1. Push your code to your GitHub repository.
2. Go to the [Render Dashboard](https://dashboard.render.com).
3. Click the **"New +"** button in the top right and select **"Blueprint"**.
4. Connect your GitHub repository.
5. Render detects `render.yaml` and sets up:
   - **Type**: `Static Site`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./dist`
   - **SPA Routing Rewrite**: `/*` → `/index.html`
6. Click **"Apply"** to deploy.

#### Method 2: Manual Dashboard Setup
1. In the [Render Dashboard](https://dashboard.render.com), click **"New +"** → **"Static Site"**.
2. Connect your GitHub repository.
3. Fill in the fields:
   - **Name**: `planet-edu`
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Under **"Advanced"** → **"Redirects/Rewrites"**, add:
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
5. Click **"Create Static Site"**.

---

## Testing & Quality Assurance

The codebase includes automated unit tests covering all pure logic and astronomical calculations in `src/planet-logic.test.ts`:

- **Canonical Order**: Asserts that all 8 planets follow the exact solar distance order.
- **Orbital Reversibility**: Verifies that rotating left or right through all 8 planets loops indefinitely with zero indexing defects.
- **Telemetry Validity**: Ensures non-zero positive semi-major axis, orbital period, and valid Keplerian velocity ordering ($v_{Mercury} > v_{Earth} > v_{Neptune}$).
- **Data Completeness**: Validates that all planetary stats, fact entries, atmospheric breakdowns, and HTTPS asset URLs are intact.

---

## Developer & Credits

- **Developer**: Karan S Suvarna
- **Email**: [suvarnakaran77@gmail.com](mailto:suvarnakaran77@gmail.com)
- **GitHub**: [@karanks6](https://github.com/karanks6)
- **Repository**: [github.com/karanks6/PlanetEdu](https://github.com/karanks6/PlanetEdu)

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software for educational, personal, or commercial applications.
