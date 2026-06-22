# Aditya Dumbre | Gamified 3D Space Portfolio

An interactive, gamified 3D flight-simulator portfolio website built using **Three.js**, **GSAP (GreenSock)**, and the **Web Audio API**, bundled with **Vite**. 

---

## 🚀 Key Features

* **3D Space Flight Simulator**: Manually fly a starship through a stellar nebula to explore the resume stations.
* **Autopilot Hyper-Jump Mode**: Click on any section (Core Hub, Education, Skills, Projects, Certifications, Contact) in the HUD header to warp directly to that sector.
* **Interactive Station Dashboards**: Glassmorphic dashboard slides open on docking, showing resume information on the left and interactive mini-games/utilities on the right:
  * **Education Station**: Multi-choice trivia quiz.
  * **Skills Outpost**: Flight target-shooting game (shoot orbiting skill crystals to decrypt technologies).
  * **Projects Nexus**: Multi-stage code compilation and ML model training simulators.
  * **Certifications Beacon**: Quantum verification tool scanning digital certificates.
  * **Communications Relay**: Interactive contact form simulating a wormhole signal transmission.
* **Retro Audio Synthesizer**: Procedural game audio (lasers, explosions, level-up chimes) and ambient synth soundtrack built entirely on the **Web Audio API** (requires zero file loading).
* **Radar Indicator**: Real-time relative sector tracking showing direction and range of stations relative to the spaceship.

---

## 🎮 Keyboard & Flight Controls

* **W / S (or Up / Down Arrows)**: Pitch Up / Down (Throttle Forward / Reverse)
* **A / D (or Left / Right Arrows)**: Roll Left / Right (Steer Ship)
* **Mouse Pointer**: Steer ship nose and direct targeting crosshairs
* **SPACEBAR / Left Mouse Click**: Fire lasers (destroys space crystals for points and decrypts skill cubes)
* **SHIFT**: Engages engine boosters (Hyperdrive Speed)
* **E**: Dock at a targeted station (when distance < 20m)
* **Q / ESC**: Undock and return to flight mode

---

## 🛠️ Tech Stack

* **3D Engine**: Three.js WebGL (Lighting, fog, particle fields, custom geometries)
* **Animations**: GSAP (Autopilot warp motion paths, UI panel slides)
* **Sound Engine**: HTML5 Web Audio API (Live oscillator synthesizers)
* **Bundler & Dev Server**: Vite

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, SVGs)
├── src/
│   ├── assets/             # Raw image and icon assets
│   ├── main.js             # 3D WebGL engine, flight physics, collision, audio synth & game states
│   └── style.css           # Glassmorphism sheets, neon styling, keyframe radar spin animations
├── index.html              # Main HTML entry & HUD overlay structure
├── package.json            # Scripts and dependencies (three, gsap, vite)
└── README.md               # Documentation
```

---

## 💻 Local Setup & Commands

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 3. Build Production Bundle
```bash
npm run build
```
Vite will compile the code and outputs HTML, CSS, and JS assets to the `/dist` directory.
