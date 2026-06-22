# Aditya Dumbre | Serene 3D Exhibition Portfolio

An interactive, immersive 3D virtual exhibition deck built using **Three.js**, **GSAP (GreenSock)**, and the **Web Audio API**, bundled with **Vite**.

---

## 🚀 Key Features

* **3D Virtual Exhibition Deck**: Explore Aditya's resume in a relaxing, warm sunset studio featuring floating fireflies and geometric sculptures.
* **Fluid Slide Navigation**: Seamlessly navigate through sections using the navigation header tabs, side-screen arrows, bottom indicator dots, or mouse/trackpad scrolling.
* **Interactive Section Features**:
  * **Education Deck**: A trivia decrypter quiz testing course details.
  * **Skills Deck**: An interactive 3D cube ring that reacts to hovering over technical tags.
  * **Projects Deck**: Verification buttons that simulate code compilation, ML model fitting, and speech streams.
  * **Certifications Deck**: A cryptographic certificate verification sweeper tool.
  * **Contact Deck**: A fully functional email transmission form that triggers gyro ring spins.
* **Soothing Audio Synthesizer**: Procedural, soft ambient major chords and gentle tap clicks built directly on the browser **Web Audio API** (requires zero file loading and is fully mutable).
* **Parallax Camera Effects**: Interactive mouse movements produce gentle parallax shifts in the 3D studio, adding depth to the visual experience.

---

## 🎮 Navigation Controls

* **Quick Tabs**: Use the navigation links in the header to jump to any sector.
* **Scroll Wheel / Trackpad**: Scroll up or down to slide between sections.
* **Side Buttons**: Click the left (`←`) or right (`→`) arrow buttons on the sides of the screen.
* **Indicator Dots**: Click on the dot indicators at the bottom right.
* **Touch Swipe**: Swipe left or right on mobile touchscreens.

---

## 🛠️ Tech Stack

* **3D Engine**: Three.js WebGL (Lighting, fog, particle fields, custom geometries)
* **Animations**: GSAP (Card slide transitions, 3D model scales/animations)
* **Sound Engine**: HTML5 Web Audio API (Live oscillator synthesizers)
* **Bundler & Dev Server**: Vite

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, SVGs)
├── src/
│   ├── main.js             # 3D WebGL engine, carousel logic, sound synth & interactive handlers
│   └── style.css           # Glassmorphism cards, layout styles, and animations
├── index.html              # Main HTML entry & UI card structure
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
Vite will compile the code and output the HTML, CSS, and JS assets to the `/dist` directory.
