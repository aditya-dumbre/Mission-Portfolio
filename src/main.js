import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';

// ==========================================
// RESUME DATA AND SECTOR DEFINITIONS
// ==========================================
const STATIONS_DATA = {
  home: {
    id: 'core',
    name: 'CORE NEBULA',
    sector: '[SECTOR 00]',
    color: 0x00f0ff,
    coords: { x: 0, y: 0, z: 0 },
    details: `
      <div class="resume-section">
        <h2 class="glow-cyan">ADITYA ROHIDAS DUMBRE</h2>
        <div class="monotext glow-magenta" style="font-size:12px;">adityad.9051@gmail.com | Mumbai, Maharashtra</div>
        <div class="skills-grid-view">
          <a href="https://linkedin.com/in/adityad15" target="_blank" class="skill-tag learned" style="text-decoration:none;">LinkedIn 🔗</a>
          <a href="https://github.com/aditya-dumbre" target="_blank" class="skill-tag learned" style="text-decoration:none;">GitHub 🔗</a>
        </div>
        <div class="resume-block">
          <div class="resume-title">Mission Overview</div>
          <div class="resume-desc">
            Computer Engineering student and developer passionate about building scalable backend architectures, distributed enterprise applications, and AI/ML integrations. Experienced in Java, Kotlin, Python, and SQL, with a track record of implementing robust, containerized/synchronized services.
          </div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Interests</div>
          <div class="resume-desc">
            Distributed Systems, Scalable Enterprise Software, AI/ML Integration, Open Source Contribution, Game Dev.
          </div>
        </div>
      </div>
    `
  },
  education: {
    id: 'education',
    name: 'EDUCATION STATION',
    sector: '[SECTOR 01]',
    color: 0xffd700,
    coords: { x: -80, y: 15, z: -100 },
    details: `
      <div class="resume-section">
        <div class="resume-block">
          <div class="resume-title">Bachelor of Engineering, Computer Engineering</div>
          <div class="resume-subtitle">Savitribai Phule Pune University | TSSM's BSCOER, Narhe, Pune</div>
          <div class="resume-date">2022 – 2025</div>
          <div class="resume-desc">CGPA Equivalent: 73.2%</div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Diploma in Computer Engineering</div>
          <div class="resume-subtitle">MSBTE | Narhe, Pune</div>
          <div class="resume-date">2019 – 2022</div>
          <div class="resume-desc">Academic Score: 89.89%</div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Certifications Academic</div>
          <ul class="resume-list">
            <li>Python 3.4.3 Training – IIT Bombay (Spoken Tutorial Project)</li>
            <li>Data Analytics Job Simulation – Deloitte (via Forage)</li>
            <li>Oracle SQL Certification – Great Learning</li>
          </ul>
        </div>
      </div>
    `
  },
  skills: {
    id: 'skills',
    name: 'SKILLS OUTPOST',
    sector: '[SECTOR 02]',
    color: 0x8a2be2,
    coords: { x: 100, y: -10, z: -70 },
    details: `
      <div class="resume-section">
        <div class="resume-block">
          <div class="resume-title">Programming Languages</div>
          <div class="skills-grid-view" id="skills-lang">
            <span class="skill-tag" data-skill="Java">Java</span>
            <span class="skill-tag" data-skill="Python">Python</span>
            <span class="skill-tag" data-skill="SQL">SQL</span>
            <span class="skill-tag" data-skill="Kotlin">Kotlin</span>
          </div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Frameworks & Libraries</div>
          <div class="skills-grid-view" id="skills-frameworks">
            <span class="skill-tag" data-skill="Flask">Flask</span>
            <span class="skill-tag" data-skill="TensorFlow">TensorFlow</span>
            <span class="skill-tag" data-skill="Keras">Keras</span>
            <span class="skill-tag" data-skill="scikit-learn">scikit-learn</span>
            <span class="skill-tag" data-skill="Pandas">Pandas</span>
            <span class="skill-tag" data-skill="NumPy">NumPy</span>
            <span class="skill-tag" data-skill="Spring Boot">Spring Boot</span>
          </div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Databases & Tools</div>
          <div class="skills-grid-view" id="skills-tools">
            <span class="skill-tag" data-skill="PostgreSQL">PostgreSQL</span>
            <span class="skill-tag" data-skill="MySQL">MySQL</span>
            <span class="skill-tag" data-skill="Git">Git</span>
            <span class="skill-tag" data-skill="GitHub">GitHub</span>
            <span class="skill-tag" data-skill="Android Studio">Android Studio</span>
            <span class="skill-tag" data-skill="MinIO">MinIO</span>
          </div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Core Concepts</div>
          <div class="skills-grid-view" id="skills-concepts">
            <span class="skill-tag" data-skill="Machine Learning">Machine Learning</span>
            <span class="skill-tag" data-skill="Deep Learning">Deep Learning</span>
            <span class="skill-tag" data-skill="REST APIs">REST APIs</span>
            <span class="skill-tag" data-skill="Agile/Scrum">Agile/Scrum</span>
            <span class="skill-tag" data-skill="Unit Testing">Unit Testing</span>
            <span class="skill-tag" data-skill="Code Reviews">Code Reviews</span>
          </div>
        </div>
      </div>
    `
  },
  projects: {
    id: 'projects',
    name: 'PROJECTS NEXUS',
    sector: '[SECTOR 03]',
    color: 0xff4500,
    coords: { x: -60, y: 20, z: 90 },
    details: `
      <div class="resume-section">
        <div class="resume-block">
          <div class="resume-title">Prushtha – Synchronized Book Reading App</div>
          <div class="resume-subtitle">Kotlin, Spring Boot, PostgreSQL, MinIO, KMP (3 Months)</div>
          <div class="resume-desc">
            • Architected a cross-platform Kotlin Multiplatform (KMP) app with Android and Desktop targets using Compose Multiplatform UI and SQLDelight local persistence.<br>
            • Built a Spring Boot backend with PostgreSQL for user and book management, and MinIO for distributed file storage handling multi-user synchronization at scale.<br>
            • Defined full Software Requirements Specification (SRS) and delivered a 27-file production-ready codebase, coordinating frontend, backend, and storage layers.<br>
            • Practiced agile iteration: tracked scope, decomposed requirements into milestones, and performed systematic debugging across the full stack.
          </div>
          <div class="monotext glow-cyan" style="font-size:11px; margin-top:8px;">GitHub: <a href="https://github.com/aditya-dumbre/Prushtha" target="_blank" style="color:var(--color-cyan);">github.com/aditya-dumbre/Prushtha</a></div>
        </div>
        <hr style="border-color: rgba(255,255,255,0.05); margin: 10px 0;">
        <div class="resume-block">
          <div class="resume-title">Machinery Failure Analysis Using ML</div>
          <div class="resume-subtitle">Python, scikit-learn, Flask, SMOTE (1 Month)</div>
          <div class="resume-desc">
            • Built a predictive maintenance system on the AI4I 2020 dataset to classify industrial equipment failures before occurrence, reducing unplanned downtime.<br>
            • Applied Random Forest classifier with SMOTE oversampling to handle severe class imbalance; achieved high precision on failure modes (TWF, HDF, PWF, OSF, RNF).<br>
            • Developed a scalable Flask web interface with dual flows: model training pipeline and live sensor-data prediction endpoint.<br>
            • Wrote modular, testable Python code with clear separation of data preprocessing, model training, and serving layers.
          </div>
          <div class="monotext glow-cyan" style="font-size:11px; margin-top:8px;">GitHub: <a href="https://github.com/aditya-dumbre/machinery-failure-analysis-using-ml" target="_blank" style="color:var(--color-cyan);">github.com/aditya-dumbre/machinery-failure-analysis-using-ml</a></div>
        </div>
        <hr style="border-color: rgba(255,255,255,0.05); margin: 10px 0;">
        <div class="resume-block">
          <div class="resume-title">SpeakX Pro</div>
          <div class="resume-subtitle">Python, NLP, REST API, SQL (In Progress)</div>
          <div class="resume-desc">
            • Engineered a backend service integrating NLP pipelines for speech-to-text and language processing, handling structured data storage via SQL.<br>
            • Designed RESTful API endpoints for scalable multi-client support, emphasizing reliability and low-latency response under concurrent load.<br>
            • Implemented modular service architecture enabling independent deployment and testing of core components.
          </div>
          <div class="monotext glow-cyan" style="font-size:11px; margin-top:8px;">GitHub: <a href="https://github.com/aditya-dumbre/SpeakX-Pro-main" target="_blank" style="color:var(--color-cyan);">github.com/aditya-dumbre/SpeakX-Pro-main</a></div>
        </div>
      </div>
    `
  },
  certifications: {
    id: 'certifications',
    name: 'CERTIFICATIONS BEACON',
    sector: '[SECTOR 04]',
    color: 0x00ffff,
    coords: { x: 90, y: 10, z: 80 },
    details: `
      <div class="resume-section">
        <div class="resume-block">
          <div class="resume-title">IIT Bombay Certification</div>
          <div class="resume-subtitle">Python 3.4.3 Training</div>
          <div class="resume-desc">
            Completed Python training under the Spoken Tutorial Project, IIT Bombay. Acquired knowledge of core programming principles, functional modules, and computational libraries.
          </div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Deloitte Data Analytics</div>
          <div class="resume-subtitle">Job Simulation Certificate</div>
          <div class="resume-desc">
            Simulated real-world consultant projects under Deloitte's Data Analytics division, focusing on telemetry analysis, dashboard builds, database structuring, and report drafting.
          </div>
        </div>
        <div class="resume-block">
          <div class="resume-title">Oracle SQL Certification</div>
          <div class="resume-subtitle">Great Learning Academy</div>
          <div class="resume-desc">
            Acquired advanced SQL skills, mastering complex queries, indexing optimizations, multi-table joins, subqueries, and transaction management inside Oracle DBMS.
          </div>
        </div>
      </div>
    `
  },
  contact: {
    id: 'contact',
    name: 'COMMUNICATIONS RELAY',
    sector: '[SECTOR 05]',
    color: 0x39ff14,
    coords: { x: 0, y: -20, z: -140 },
    details: `
      <div class="resume-section">
        <div class="resume-block">
          <div class="resume-title">Direct Signal Frequencies</div>
          <div class="resume-desc">
            Feel free to transmit a message through this relay. Aditya will receive your communication directly.
          </div>
          <ul class="resume-list" style="margin-top:10px;">
            <li><strong>Email:</strong> adityad.9051@gmail.com</li>
            <li><strong>Location:</strong> Mumbai, Maharashtra, India</li>
            <li><strong>Languages:</strong> English (Professional), Marathi (Native), Hindi (Fluent)</li>
          </ul>
        </div>
        <div class="resume-block">
          <div class="resume-title">Professional Links</div>
          <div class="skills-grid-view" style="margin-top:10px;">
            <a href="https://linkedin.com/in/adityad15" target="_blank" class="skill-tag learned" style="text-decoration:none; display:inline-block;">LinkedIn Portal 🌐</a>
            <a href="https://github.com/aditya-dumbre" target="_blank" class="skill-tag learned" style="text-decoration:none; display:inline-block;">GitHub Crypt 🌐</a>
          </div>
        </div>
      </div>
    `
  }
};

// ==========================================
// AUDIO SYNTHESIZER (Web Audio API)
// ==========================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.bgNode = null;
    this.bgGain = null;
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.startAmbientMusic();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.bgGain) {
      this.bgGain.gain.setValueAtTime(this.muted ? 0 : 0.15, this.ctx.currentTime);
    }
    return this.muted;
  }

  playLaser() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playExplosion() {
    if (this.muted || !this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseNode = this.ctx.createBufferSource();
    noiseNode.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 400;
    
    const gain = this.ctx.createGain();
    
    noiseNode.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    
    noiseNode.start();
    noiseNode.stop(this.ctx.currentTime + 0.4);
  }

  playChime() {
    if (this.muted || !this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major Arpeggio
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
      
      gain.gain.setValueAtTime(0, this.ctx.currentTime + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.35);
      
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.35);
    });
  }

  playDock() {
    if (this.muted || !this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc1.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + 0.5);
    
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc2.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.5);
    
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
    
    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.5);
    osc2.stop(this.ctx.currentTime + 0.5);
  }

  playWarp() {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(50, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2500, this.ctx.currentTime + 1.2);
    
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 1.2);
  }

  startAmbientMusic() {
    if (this.muted || !this.ctx) return;
    
    // Synth-pad Ambient engine
    const playChord = () => {
      if (this.muted || !this.ctx) return;
      
      const freqs = [
        [130.81, 196.00, 261.63, 329.63], // C Maj 7 (low)
        [146.83, 220.00, 293.66, 349.23], // D min 7
        [164.81, 246.94, 329.63, 392.00], // E min 7
        [174.61, 261.63, 349.23, 440.00]  // F Maj 7
      ];
      
      const chord = freqs[Math.floor(Math.random() * freqs.length)];
      const duration = 6.0;
      
      this.bgGain = this.ctx.createGain();
      this.bgGain.connect(this.ctx.destination);
      this.bgGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.bgGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 2.0);
      this.bgGain.gain.setValueAtTime(0.12, this.ctx.currentTime + duration - 2.0);
      this.bgGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
      
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        osc.connect(this.bgGain);
        osc.type = 'triangle';
        osc.frequency.value = freq;
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      });
      
      setTimeout(() => playChord(), (duration - 1.5) * 1000);
    };
    
    playChord();
  }
}

const synth = new SoundSynth();

// ==========================================
// GLOBAL GAME STATE VARIABLES
// ==========================================
let score = 0;
let level = 1;
let crystalsDestroyed = 0;
let skillsDiscoveredCount = 0;
const skillsLearned = new Set();
const visitedStations = new Set();
let currentDockedStation = null;
let isAutopilotActive = false;
let controlsModalOpen = false;

// Achievements map
const achievements = {
  explorer: { name: 'Space Explorer', unlocked: false, domId: 'ach-explorer' },
  scholar: { name: 'Agile Scholar', unlocked: false, domId: 'ach-scholar' },
  expert: { name: 'Skill Collector', unlocked: false, domId: 'ach-expert' },
  creator: { name: 'Project Lead', unlocked: false, domId: 'ach-creator' },
  recruiter: { name: 'Certified Recruiter', unlocked: false, domId: 'ach-recruiter' }
};

// ==========================================
// THREE.JS SETUP & ENGINE
// ==========================================
let scene, camera, renderer;
let starField, gridPlane, ambientLight, directionalLight;
let playerShip;
let stations = {};
let lasers = [];
let spaceCrystals = [];
let skillFloatingCrystals = [];
const keyboard = {};

// Flight Physics parameters
let shipVelocity = new THREE.Vector3();
let shipDirection = new THREE.Vector3(0, 0, -1);
let currentSpeed = 0;
const ACCEL = 0.025;
const DECEL = 0.015;
const MAX_SPEED = 0.8;
const MAX_BOOST_SPEED = 1.8;
let yawSpeed = 0;
let pitchSpeed = 0;
const ROTATION_SPEED = 0.035;

// HUD Elements caches
const shieldBarEl = document.getElementById('shield-bar');
const shieldTxtEl = document.getElementById('shield-txt');
const thrustBarEl = document.getElementById('thrust-bar');
const thrustTxtEl = document.getElementById('thrust-txt');
const velocityTxtEl = document.getElementById('velocity-txt');
const scoreTxtEl = document.getElementById('score-txt');
const levelTxtEl = document.getElementById('level-txt');
const crystalsTxtEl = document.getElementById('crystals-txt');
const radarDotsEl = document.getElementById('radar-dots');
const targetLockEl = document.getElementById('target-lock');
const lockNameEl = document.getElementById('lock-name');
const lockDistEl = document.getElementById('lock-dist');
const lockActionEl = document.getElementById('lock-action');

// ==========================================
// INITIALIZE 3D CANVAS & ENVIRONMENT
// ==========================================
function initEngine() {
  const container = document.getElementById('app');
  const canvas = document.getElementById('bg-canvas');
  
  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020208, 0.002);
  
  // Camera
  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 15);
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  
  // Lights
  ambientLight = new THREE.AmbientLight(0x0f0f2a, 1.5);
  scene.add(ambientLight);
  
  directionalLight = new THREE.DirectionalLight(0x00f0ff, 1.8);
  directionalLight.position.set(20, 50, 20);
  scene.add(directionalLight);
  
  // Point lights on core nebula
  const coreLight = new THREE.PointLight(0x00f0ff, 3, 100);
  coreLight.position.set(0, 0, 0);
  scene.add(coreLight);

  // Background Systems
  createStarfield();
  createNeonSectorGrid();
  
  // Player Craft
  createPlayerShip();
  
  // Sector Stations
  createSectorStations();
  
  // Floating Asteroids / Crystals
  spawnSpaceCrystals();
  
  // Resize Listener
  window.addEventListener('resize', onWindowResize);
}

// 1. STARFIELD PARTICLES
function createStarfield() {
  const starCount = 1200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  
  for (let i = 0; i < starCount * 3; i += 3) {
    // Random space coordinates within spheres
    const r = 250 + Math.random() * 200;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    
    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i+2] = r * Math.cos(phi);
    
    // Cyberpunk Star Colors (cyan, magenta, yellow, white)
    const colorSeed = Math.random();
    if (colorSeed < 0.3) {
      colors[i] = 0.0; colors[i+1] = 0.94; colors[i+2] = 1.0; // Cyan
    } else if (colorSeed < 0.6) {
      colors[i] = 1.0; colors[i+1] = 0.0; colors[i+2] = 0.5; // Magenta
    } else if (colorSeed < 0.8) {
      colors[i] = 1.0; colors[i+1] = 0.84; colors[i+2] = 0.0; // Gold
    } else {
      colors[i] = 0.9; colors[i+1] = 0.9; colors[i+2] = 1.0; // Soft white
    }
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  starField = new THREE.Points(geometry, material);
  scene.add(starField);
}

// 2. SECTOR NEON BOUNDARY GRID
function createNeonSectorGrid() {
  const gridHelper = new THREE.GridHelper(600, 60, 0xff007f, 0x1f1f3a);
  gridHelper.position.y = -40;
  gridHelper.material.opacity = 0.35;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);
  gridPlane = gridHelper;
}

// 3. SHIP GEOMETRY CREATION
function createPlayerShip() {
  playerShip = new THREE.Group();
  
  // Central cockpit - metallic dark look
  const fuselageGeo = new THREE.ConeGeometry(0.8, 4, 8);
  fuselageGeo.rotateX(Math.PI / 2); // Align forward along Z axis
  const fuselageMat = new THREE.MeshStandardMaterial({
    color: 0x0a0f1d,
    roughness: 0.2,
    metalness: 0.9
  });
  const fuselage = new THREE.Mesh(fuselageGeo, fuselageMat);
  playerShip.add(fuselage);
  
  // Left and Right Swept-back Wings
  const wingMat = new THREE.MeshStandardMaterial({
    color: 0x1a2238,
    roughness: 0.3,
    metalness: 0.8
  });
  
  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0);
  wingShape.lineTo(2.0, -1.5);
  wingShape.lineTo(0.5, -2.0);
  wingShape.lineTo(0, -0.5);
  
  const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 };
  
  // Right Wing
  const wingRGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
  wingRGeo.rotateX(Math.PI / 2);
  wingRGeo.translate(0, 0, 0.5);
  const wingR = new THREE.Mesh(wingRGeo, wingMat);
  playerShip.add(wingR);
  
  // Left Wing
  const wingLGeo = wingRGeo.clone();
  wingLGeo.scale(-1, 1, 1);
  const wingL = new THREE.Mesh(wingLGeo, wingMat);
  playerShip.add(wingL);
  
  // Engine Boosters (Cylinders)
  const engineGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.8, 8);
  engineGeo.rotateX(Math.PI / 2);
  const engineMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 });
  const engineL = new THREE.Mesh(engineGeo, engineMat);
  engineL.position.set(-0.4, 0, 1.8);
  const engineR = engineL.clone();
  engineR.position.x = 0.4;
  playerShip.add(engineL);
  playerShip.add(engineR);
  
  // Glowing engine exhausts (glowing spheres)
  const fireGeo = new THREE.SphereGeometry(0.2, 8, 8);
  const fireMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
  const exhaustL = new THREE.Mesh(fireGeo, fireMat);
  exhaustL.position.set(-0.4, 0, 2.3);
  const exhaustR = exhaustL.clone();
  exhaustR.position.x = 0.4;
  
  playerShip.add(exhaustL);
  playerShip.add(exhaustR);
  
  // Save engine lights on ship for throttle animations
  playerShip.userData = {
    exhausts: [exhaustL, exhaustR],
    shield: 100,
    maxShield: 100
  };
  
  playerShip.position.set(0, 0, 40);
  scene.add(playerShip);
}

// 4. PROCEDURAL SECTOR PLANETS/STATIONS
function createSectorStations() {
  Object.keys(STATIONS_DATA).forEach(key => {
    const data = STATIONS_DATA[key];
    const stationGroup = new THREE.Group();
    stationGroup.position.set(data.coords.x, data.coords.y, data.coords.z);
    
    let mainMesh;
    
    if (key === 'home') {
      // Core Nebula (Sun): Glowing crystalline sphere
      const geometry = new THREE.IcosahedronGeometry(8, 2);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: true
      });
      mainMesh = new THREE.Mesh(geometry, material);
      stationGroup.add(mainMesh);
      
      // Floating outer shields/shards
      const orbitGroup = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const shardGeo = new THREE.OctahedronGeometry(1.2, 0);
        const shardMat = new THREE.MeshStandardMaterial({ color: 0xff007f, emissive: 0xff007f, emissiveIntensity: 0.4 });
        const shard = new THREE.Mesh(shardGeo, shardMat);
        
        const angle = (i / 5) * Math.PI * 2;
        shard.position.set(Math.cos(angle) * 14, 0, Math.sin(angle) * 14);
        orbitGroup.add(shard);
      }
      stationGroup.add(orbitGroup);
      stationGroup.userData = { orbitRing: orbitGroup };
      
    } else if (key === 'education') {
      // Education Station: Concentric rotating rings
      const geometry = new THREE.SphereGeometry(4, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.4,
        metalness: 0.8,
        wireframe: false
      });
      mainMesh = new THREE.Mesh(geometry, material);
      stationGroup.add(mainMesh);
      
      const ringGeo1 = new THREE.TorusGeometry(7, 0.2, 8, 48);
      const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.7 });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotateX(Math.PI / 2);
      stationGroup.add(ring1);
      
      const ringGeo2 = new THREE.TorusGeometry(9, 0.15, 8, 48);
      const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.5 });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotateY(Math.PI / 4);
      stationGroup.add(ring2);
      
      stationGroup.userData = { rings: [ring1, ring2] };
      
    } else if (key === 'skills') {
      // Skills Outpost: A floating central torus-knot (reactor core)
      const geometry = new THREE.TorusKnotGeometry(3, 0.8, 64, 8, 2, 3);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x3d0c75,
        emissiveIntensity: 0.3
      });
      mainMesh = new THREE.Mesh(geometry, material);
      stationGroup.add(mainMesh);
      
      // Floating smaller crystals for skills
      const skillOrbitGroup = new THREE.Group();
      const skillCategories = ['Java', 'Python', 'SQL', 'Kotlin', 'Flask', 'TensorFlow', 'Spring Boot', 'PostgreSQL', 'Git', 'Machine Learning'];
      
      skillCategories.forEach((skillName, index) => {
        const skillGeo = new THREE.OctahedronGeometry(1.0, 0);
        const skillMat = new THREE.MeshStandardMaterial({
          color: 0x8a2be2,
          emissive: 0x4b0082,
          roughness: 0.2,
          metalness: 0.8
        });
        const skillMesh = new THREE.Mesh(skillGeo, skillMat);
        
        const angle = (index / skillCategories.length) * Math.PI * 2;
        const radius = 12 + Math.random() * 3;
        skillMesh.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 5, Math.sin(angle) * radius);
        
        // Custom identifier
        skillMesh.userData = {
          isSkillCrystal: true,
          skillName: skillName,
          index: index,
          active: false
        };
        
        skillOrbitGroup.add(skillMesh);
        skillFloatingCrystals.push(skillMesh); // Keep reference for laser collisions
      });
      
      stationGroup.add(skillOrbitGroup);
      stationGroup.userData = { orbitRing: skillOrbitGroup };
      
    } else if (key === 'projects') {
      // Projects Nexus: Three glowing obelisks surrounding a rotating code-sphere
      const centerGeo = new THREE.SphereGeometry(3, 16, 16);
      const centerMat = new THREE.MeshBasicMaterial({ color: 0xff4500, wireframe: true });
      mainMesh = new THREE.Mesh(centerGeo, centerMat);
      stationGroup.add(mainMesh);
      
      // Add the 3 obelisks
      const obeliskGeo = new THREE.CylinderGeometry(0.8, 1.2, 10, 4);
      const obeliskMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.9, flatShading: true });
      
      for (let i = 0; i < 3; i++) {
        const obGroup = new THREE.Group();
        const mesh = new THREE.Mesh(obeliskGeo, obeliskMat);
        obGroup.add(mesh);
        
        // Emissive glass stripe
        const stripeGeo = new THREE.BoxGeometry(0.1, 8, 1.3);
        const stripeMat = new THREE.MeshBasicMaterial({ color: 0xff4500 });
        const stripe = new THREE.Mesh(stripeGeo, stripeMat);
        stripe.position.set(0.65, 0, 0);
        obGroup.add(stripe);
        
        const angle = (i / 3) * Math.PI * 2;
        obGroup.position.set(Math.cos(angle) * 10, 0, Math.sin(angle) * 10);
        obGroup.rotateY(-angle);
        stationGroup.add(obGroup);
      }
      
    } else if (key === 'certifications') {
      // Certifications Satellite: Solar arrays and a rotating receiver dish
      const coreGeo = new THREE.CylinderGeometry(1.5, 1.5, 5, 8);
      const coreMat = new THREE.MeshStandardMaterial({ color: 0x222233, metalness: 0.9 });
      mainMesh = new THREE.Mesh(coreGeo, coreMat);
      mainMesh.rotateX(Math.PI / 2);
      stationGroup.add(mainMesh);
      
      // Solar Panels
      const panelGeo = new THREE.BoxGeometry(4, 0.1, 1.5);
      const panelMat = new THREE.MeshStandardMaterial({ color: 0x00a0a0, emissive: 0x003333, roughness: 0.1 });
      const panelL = new THREE.Mesh(panelGeo, panelMat);
      panelL.position.set(-3.5, 0, 0);
      const panelR = panelL.clone();
      panelR.position.x = 3.5;
      stationGroup.add(panelL);
      stationGroup.add(panelR);
      
      // Radar dish
      const dishGeo = new THREE.ConeGeometry(2, 1, 16, 1, true);
      dishGeo.rotateX(-Math.PI / 2);
      const dishMat = new THREE.MeshStandardMaterial({ color: 0x444455, metalness: 0.8, side: THREE.DoubleSide });
      const dish = new THREE.Mesh(dishGeo, dishMat);
      dish.position.set(0, 2.5, 0);
      stationGroup.add(dish);
      
      stationGroup.userData = { dish: dish };
      
    } else if (key === 'contact') {
      // Contact Wormhole: Rotating ring with dynamic distortion (torus)
      const geometry = new THREE.TorusGeometry(6, 1.0, 16, 64);
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.2,
        metalness: 0.9,
        emissive: 0x0f550f,
        emissiveIntensity: 0.4
      });
      mainMesh = new THREE.Mesh(geometry, material);
      stationGroup.add(mainMesh);
      
      // Inner glowing core plane (wormhole event horizon)
      const horizonGeo = new THREE.DodecahedronGeometry(4.8, 1);
      const horizonMat = new THREE.MeshBasicMaterial({
        color: 0x11ff11,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });
      const horizon = new THREE.Mesh(horizonGeo, horizonMat);
      stationGroup.add(horizon);
      stationGroup.userData = { ring: mainMesh, horizon: horizon };
    }
    
    // Add point light inside each station
    const light = new THREE.PointLight(data.color, 2, 40);
    stationGroup.add(light);
    
    // Colliders and meta setup
    stationGroup.userData.stationKey = key;
    stationGroup.userData.stationName = data.name;
    stationGroup.userData.radius = key === 'home' ? 12 : 8;
    
    scene.add(stationGroup);
    stations[key] = stationGroup;
  });
}

// 5. SPACE DEBRIS / CRYSTALS TO SHOOT
function spawnSpaceCrystals() {
  const crystalCount = 35;
  const geometry = new THREE.OctahedronGeometry(1.5, 0);
  
  for (let i = 0; i < crystalCount; i++) {
    // Colors of crystals
    const colorSeed = Math.random();
    let color = 0x00f0ff; // Cyan
    if (colorSeed > 0.6) color = 0xff00ff; // Magenta
    else if (colorSeed > 0.3) color = 0xffd700; // Gold
    
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.2,
      metalness: 0.8,
      emissive: color,
      emissiveIntensity: 0.2
    });
    
    const crystal = new THREE.Mesh(geometry, material);
    
    // Place randomly in sectors but away from center
    let x, y, z;
    do {
      x = (Math.random() - 0.5) * 320;
      y = (Math.random() - 0.5) * 40;
      z = (Math.random() - 0.5) * 320;
    } while (Math.sqrt(x*x + y*y + z*z) < 25); // Don't spawn close to spawn point
    
    crystal.position.set(x, y, z);
    
    // Random spin speeds
    crystal.userData = {
      spinX: (Math.random() - 0.5) * 0.02,
      spinY: (Math.random() - 0.5) * 0.02,
      radius: 1.5
    };
    
    scene.add(crystal);
    spaceCrystals.push(crystal);
  }
}

// Window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ==========================================
// CONTROLS & LISTENERS
// ==========================================
function setupControls() {
  // Keyboard Down
  window.addEventListener('keydown', (e) => {
    keyboard[e.key.toLowerCase()] = true;
    keyboard[e.code] = true;
    
    // Trigger Docking when range is close
    if (e.key.toLowerCase() === 'e') {
      attemptDocking();
    }
    
    // Undocking shortcut
    if ((e.key.toLowerCase() === 'q' || e.key === 'Escape') && currentDockedStation) {
      undockStation();
    }
  });
  
  // Keyboard Up
  window.addEventListener('keyup', (e) => {
    keyboard[e.key.toLowerCase()] = false;
    keyboard[e.code] = false;
  });
  
  // Laser Fire on Click
  window.addEventListener('click', (e) => {
    // Only shoot if NOT clicking on HUD buttons or dialog overlay
    if (e.target.tagName !== 'BUTTON' && !currentDockedStation && !isAutopilotActive && !controlsModalOpen) {
      fireLaser();
    }
  });

  // Autopilot Buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetStation = e.target.getAttribute('data-station');
      initiateAutopilot(targetStation);
    });
  });

  // Sound Toggle Button
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.addEventListener('click', () => {
    synth.init(); // Init context on first click
    const isMuted = synth.toggleMute();
    soundToggle.innerHTML = isMuted ? '🔇' : '🔊';
  });

  // Help buttons
  document.getElementById('help-btn').addEventListener('click', () => {
    openHelpModal();
  });
  document.getElementById('help-close-btn').addEventListener('click', () => {
    closeHelpModal();
  });
  document.getElementById('help-ok-btn').addEventListener('click', () => {
    closeHelpModal();
  });

  // Close Dashboard
  document.getElementById('dash-close-btn').addEventListener('click', () => {
    undockStation();
  });
  document.getElementById('dash-action-btn').addEventListener('click', () => {
    undockStation();
  });
}

function openHelpModal() {
  controlsModalOpen = true;
  document.getElementById('help-modal').classList.remove('hidden');
}
function closeHelpModal() {
  controlsModalOpen = false;
  document.getElementById('help-modal').classList.add('hidden');
}

// ==========================================
// LASER WEAPON SYSTEM
// ==========================================
function fireLaser() {
  if (currentDockedStation || isAutopilotActive) return;
  
  synth.playLaser();
  
  // Create laser mesh
  const laserGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 4);
  laserGeo.rotateX(Math.PI / 2); // Align forward
  const laserMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const laserMesh = new THREE.Mesh(laserGeo, laserMat);
  
  // Position laser slightly forward of ship exhausts
  const forwardDir = new THREE.Vector3(0, 0, -1).applyQuaternion(playerShip.quaternion);
  laserMesh.position.copy(playerShip.position).addScaledVector(forwardDir, 2);
  laserMesh.quaternion.copy(playerShip.quaternion);
  
  laserMesh.userData = {
    velocity: forwardDir.multiplyScalar(2.8), // Laser flight speed
    life: 80 // Frames to live before auto-cleanup
  };
  
  scene.add(laserMesh);
  lasers.push(laserMesh);
  
  // Animate exhaust lights slightly (engine flare)
  playerShip.userData.exhausts.forEach(ex => {
    ex.scale.set(2, 2, 2.5);
    setTimeout(() => ex.scale.set(1, 1, 1), 100);
  });
}

// ==========================================
// DOCKING MECHANICS
// ==========================================
function checkDockRange() {
  if (isAutopilotActive || currentDockedStation) {
    targetLockEl.classList.remove('active');
    return;
  }
  
  let closestStation = null;
  let minDistance = Infinity;
  
  Object.keys(stations).forEach(key => {
    const station = stations[key];
    const dist = playerShip.position.distanceTo(station.position);
    
    if (dist < minDistance) {
      minDistance = dist;
      closestStation = station;
    }
  });
  
  const rangeToDock = 30; // Maximum distance to display docking trigger
  
  if (closestStation && minDistance < rangeToDock) {
    targetLockEl.classList.add('active');
    
    const key = closestStation.userData.stationKey;
    const name = closestStation.userData.stationName;
    
    lockNameEl.innerHTML = `TARGET: ${name}`;
    lockDistEl.innerHTML = `RANGE: ${minDistance.toFixed(2)}m`;
    
    if (minDistance < 20) {
      lockActionEl.style.display = 'block';
      lockActionEl.innerHTML = 'PRESS [E] OR CLICK TO DOCK';
      lockActionEl.classList.add('pulse-text');
    } else {
      lockActionEl.style.display = 'block';
      lockActionEl.innerHTML = 'MOVE CLOSER TO DOCK';
      lockActionEl.classList.remove('pulse-text');
    }
  } else {
    targetLockEl.classList.remove('active');
  }
}

function attemptDocking() {
  if (currentDockedStation || isAutopilotActive) return;
  
  // Find nearest station
  let closestStation = null;
  let minDistance = Infinity;
  
  Object.keys(stations).forEach(key => {
    const station = stations[key];
    const dist = playerShip.position.distanceTo(station.position);
    if (dist < minDistance) {
      minDistance = dist;
      closestStation = station;
    }
  });
  
  if (closestStation && minDistance < 20) {
    dockStation(closestStation.userData.stationKey);
  }
}

function dockStation(stationKey) {
  currentDockedStation = stationKey;
  isAutopilotActive = false;
  currentSpeed = 0;
  
  synth.playDock();
  
  // Update achievements
  visitedStations.add(stationKey);
  if (visitedStations.size >= 5 && !achievements.explorer.unlocked) {
    unlockAchievement('explorer');
  }
  
  // Highlight top button
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.getAttribute('data-station') === stationKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Trigger GSAP transition to lock camera facing station
  const station = stations[stationKey];
  
  // Smoothly position ship and camera relative to station
  const offset = new THREE.Vector3(0, 4, 18);
  const targetShipPos = station.position.clone().add(offset);
  
  gsap.to(playerShip.position, {
    x: targetShipPos.x,
    y: targetShipPos.y,
    z: targetShipPos.z,
    duration: 1.5,
    ease: 'power2.out',
    onUpdate: () => {
      // Look at station
      playerShip.lookAt(station.position);
    },
    onComplete: () => {
      // Open dashboard UI
      openDashboardUI(stationKey);
    }
  });
  
  gsap.to(camera.position, {
    x: targetShipPos.x,
    y: targetShipPos.y + 3,
    z: targetShipPos.z + 10,
    duration: 1.5,
    ease: 'power2.out'
  });
}

function undockStation() {
  if (!currentDockedStation) return;
  
  // Slide out UI
  document.getElementById('dock-dashboard').classList.add('hidden');
  
  // Backup ship slightly
  const backingOffset = new THREE.Vector3(0, 2, 8).applyQuaternion(playerShip.quaternion);
  gsap.to(playerShip.position, {
    x: playerShip.position.x + backingOffset.x,
    y: playerShip.position.y + backingOffset.y,
    z: playerShip.position.z + backingOffset.z,
    duration: 1.0,
    ease: 'power1.out',
    onComplete: () => {
      currentDockedStation = null;
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    }
  });
}

// ==========================================
// AUTOPILOT / WARP SYSTEM
// ==========================================
function initiateAutopilot(stationKey) {
  if (isAutopilotActive) return;
  
  synth.init(); // Initialize context
  
  if (currentDockedStation) {
    document.getElementById('dock-dashboard').classList.add('hidden');
    currentDockedStation = null;
  }
  
  isAutopilotActive = true;
  
  // Play warp sound & flash lines
  synth.playWarp();
  
  // Create high-speed warp effect
  createWarpFieldLines();
  
  const station = stations[stationKey];
  const offset = new THREE.Vector3(0, 3, 20); // Arrival offset
  const targetPos = station.position.clone().add(offset);
  
  // Timeline for cinematic zoom
  const tl = gsap.timeline({
    onComplete: () => {
      dockStation(stationKey);
    }
  });
  
  // Face towards target
  const lookTarget = station.position.clone();
  
  tl.to(playerShip.position, {
    x: targetPos.x,
    y: targetPos.y,
    z: targetPos.z,
    duration: 2.2,
    ease: 'power3.inOut',
    onUpdate: () => {
      playerShip.lookAt(lookTarget);
    }
  });
}

// Warp Speed Particles
function createWarpFieldLines() {
  const lineCount = 60;
  const linesGroup = new THREE.Group();
  
  for (let i = 0; i < lineCount; i++) {
    const points = [];
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(0, 0, -40)); // Long trails
    
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.8
    });
    
    const line = new THREE.Line(lineGeo, lineMat);
    
    // Distribute around ship path
    const r = 10 + Math.random() * 15;
    const angle = Math.random() * Math.PI * 2;
    line.position.set(
      playerShip.position.x + r * Math.cos(angle),
      playerShip.position.y + (Math.random() - 0.5) * 15,
      playerShip.position.z + (Math.random() - 0.5) * 80
    );
    
    linesGroup.add(line);
  }
  
  scene.add(linesGroup);
  
  // Fade out warp lines after warp completes
  gsap.to(linesGroup.position, {
    z: 200,
    duration: 1.8,
    ease: 'power2.in',
    onComplete: () => {
      scene.remove(linesGroup);
    }
  });
}

// ==========================================
// RADAR MECHANICS (HUD RADAR DISPLAY)
// ==========================================
function updateRadar() {
  if (!radarDotsEl) return;
  
  // Clear previous dots
  radarDotsEl.innerHTML = '';
  
  const radarRadius = 75; // px (half of 150px)
  const maxRadarDist = 200; // max distance that maps to edge of radar
  
  // Draw player heading indicator (fixed at center, but we can rotate a visual arrow)
  // Let's get ship yaw angle
  const shipRotation = playerShip.rotation.y;
  
  Object.keys(stations).forEach(key => {
    if (key === 'home') return; // Hide center on mini radar
    
    const station = stations[key];
    const dx = station.position.x - playerShip.position.x;
    const dz = station.position.z - playerShip.position.z;
    
    // Rotate relative coordinates based on ship heading so radar aligns with flight path
    const rx = dx * Math.cos(shipRotation) - dz * Math.sin(shipRotation);
    const ry = dx * Math.sin(shipRotation) + dz * Math.cos(shipRotation);
    
    const dist = Math.sqrt(rx*rx + ry*ry);
    
    if (dist < maxRadarDist) {
      // Map to circle
      const scale = dist / maxRadarDist;
      const angle = Math.atan2(ry, rx);
      
      const px = Math.cos(angle) * scale * radarRadius + radarRadius;
      const py = Math.sin(angle) * scale * radarRadius + radarRadius;
      
      // Inject blip
      const blip = document.createElement('div');
      blip.className = `radar-dot ${getStationColorClass(key)}`;
      blip.style.left = `${px}px`;
      blip.style.top = `${py}px`;
      
      radarDotsEl.appendChild(blip);
    }
  });
}

function getStationColorClass(key) {
  if (key === 'education') return 'yellow';
  if (key === 'skills') return 'violet';
  if (key === 'projects') return 'orange';
  if (key === 'certifications') return 'cyan';
  if (key === 'contact') return 'green';
  return 'cyan';
}

// ==========================================
// DASHBOARD INTERACTIVE GAMES
// ==========================================
function openDashboardUI(stationKey) {
  const stationData = STATIONS_DATA[stationKey];
  
  document.getElementById('dash-sector-id').innerHTML = stationData.sector;
  document.getElementById('dash-title').innerHTML = stationData.name;
  document.getElementById('dash-content-target').innerHTML = stationData.details;
  
  // Render mini-game console on right side
  renderMiniGameConsole(stationKey);
  
  // Slide open dashboard
  document.getElementById('dock-dashboard').classList.remove('hidden');
}

function renderMiniGameConsole(stationKey) {
  const container = document.getElementById('dash-game-target');
  container.innerHTML = '';
  
  const box = document.createElement('div');
  box.className = 'console-game-box';
  
  if (stationKey === 'home') {
    box.innerHTML = `
      <div class="game-instructions">
        <h3>FLIGHT RECORDER MANUAL</h3>
        <p style="margin-top:8px;">You are piloting the Starship Aditya V1.0. Complete the sector objectives to log recruiter authorization parameters.</p>
        <p style="margin-top:8px; color:var(--color-gold);">Objectives Completed: <span id="objs-count">0</span> / 5</p>
      </div>
      <button class="glow-btn" id="core-start-btn">RUN DIAGNOSTICS</button>
    `;
    container.appendChild(box);
    
    // Core diagnostics simulation
    box.querySelector('#core-start-btn').addEventListener('click', (e) => {
      e.target.innerHTML = 'ANALYZING ENGINE MATRICES...';
      synth.playChime();
      setTimeout(() => {
        e.target.innerHTML = 'DIAGNOSTICS CLEAN. SCORE +100';
        addScore(100);
      }, 1200);
    });
    
    const countEl = box.querySelector('#objs-count');
    let completed = 0;
    if (visitedStations.size > 0) completed = visitedStations.size;
    countEl.innerHTML = completed.toString();
    
  } else if (stationKey === 'education') {
    // Trivia MCQ Quiz
    let currentQuizIndex = 0;
    const questions = [
      { q: "Which language uses SQLDelight for local Multiplatform database persistence?", a: ["Java", "Kotlin", "Python", "Flask"], c: 1 },
      { q: "Which classifier is SMOTE typically paired with to fix high class imbalance in Aditya's failure analysis project?", a: ["Random Forest", "Linear Regression", "K-Means Clustering", "Naive Bayes"], c: 0 },
      { q: "Which framework was used to serve live sensor predictions in the predictive maintenance project?", a: ["Spring Boot", "Flask", "React", "Keras"], c: 1 }
    ];
    
    const renderQuestion = () => {
      const qData = questions[currentQuizIndex];
      box.innerHTML = `
        <div class="game-instructions">
          <h3>SECTOR TRIVIA RECON</h3>
          <p>Decrypt the data encryption layers by answering Aditya's academic skill checks.</p>
        </div>
        <div class="quiz-question">${currentQuizIndex + 1}. ${qData.q}</div>
        <div class="quiz-options">
          ${qData.a.map((opt, i) => `<button class="quiz-opt-btn" data-idx="${i}">${opt}</button>`).join('')}
        </div>
        <div style="margin-top: 10px; font-size:10px; color:var(--color-magenta);" id="quiz-status"></div>
      `;
      
      box.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const selectedIdx = parseInt(e.target.getAttribute('data-idx'));
          const correctIdx = qData.c;
          
          if (selectedIdx === correctIdx) {
            e.target.classList.add('correct');
            synth.playChime();
            addScore(100);
            box.querySelector('#quiz-status').innerHTML = 'CORRECT FREQUENCY LOGGED! +100 Score';
            
            setTimeout(() => {
              currentQuizIndex++;
              if (currentQuizIndex < questions.length) {
                renderQuestion();
              } else {
                box.innerHTML = `
                  <div class="game-instructions" style="text-align:center;">
                    <span style="font-size:32px;">🎓</span>
                    <h3 class="glow-green" style="margin-top:10px;">ENCRYPTION DECRYPTED!</h3>
                    <p style="margin-top:8px;">Academic trivia logs parsed successfully. Sector authorized.</p>
                  </div>
                `;
                unlockAchievement('scholar');
              }
            }, 1000);
          } else {
            e.target.classList.add('incorrect');
            synth.playExplosion();
            box.querySelector('#quiz-status').innerHTML = 'FREQUENCY DEVIATION DETECTED. TRY AGAIN!';
          }
        });
      });
    };
    
    renderQuestion();
    container.appendChild(box);
    
  } else if (stationKey === 'skills') {
    // Skills unlock instructions
    box.innerHTML = `
      <div class="game-instructions">
        <h3>SKILLS DECODER MODULE</h3>
        <p>This station holds Aditya's technical skill database. Return to flight mode and <strong>shoot the orbiting purple cubes</strong> with your lasers to decrypt each technical skill!</p>
        <p style="margin-top:10px; color:var(--color-magenta);">Orbiting cubes represent languages, frameworks, and databases.</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:6px;">
        <div style="font-size:10px;">DECODING PROGRESS:</div>
        <div class="bar-container" style="width:100%; margin:0;"><div id="skills-game-bar" class="bar glow-cyan" style="width: 0%"></div></div>
        <div style="font-size:9px; text-align:right;" id="skills-game-txt">0 / 10 Cubes Decoded</div>
      </div>
    `;
    container.appendChild(box);
    
    // Highlight currently learned skills inside the details view!
    updateSkillsUIProgress();
    
  } else if (stationKey === 'projects') {
    // Projects milestone games
    box.innerHTML = `
      <div class="game-instructions">
        <h3>ENGINEERING COMPILE TERMINAL</h3>
        <p>Conduct code deployments for Aditya's primary repositories to evaluate architecture throughput.</p>
      </div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <button class="glow-btn" id="proj-game-1">DEPLOY PRUSHTHA Backend</button>
        <button class="glow-btn" id="proj-game-2">RUN PREDICTIVE FAILURE PIPELINE</button>
        <button class="glow-btn" id="proj-game-3">COMPILE SPEAKX NLP SERVICE</button>
      </div>
    `;
    container.appendChild(box);
    
    // Prushtha Deployment Simulation
    box.querySelector('#proj-game-1').addEventListener('click', (e) => {
      e.target.disabled = true;
      e.target.innerHTML = 'SYNCING Spring Boot + MinIO storage...';
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        e.target.innerHTML = `SYNCING SERVER CLUSTER [${progress}%]`;
        if (progress >= 100) {
          clearInterval(interval);
          e.target.innerHTML = 'PRUSHTHA COMPILED & SYNCED. SCORE +100';
          synth.playChime();
          addScore(100);
          checkProjectsAchievement();
        }
      }, 300);
    });

    // Machinery Failure simulation
    box.querySelector('#proj-game-2').addEventListener('click', (e) => {
      e.target.disabled = true;
      e.target.innerHTML = 'SMOTE Oversampling active...';
      setTimeout(() => {
        e.target.innerHTML = 'TRAINING Random Forest...';
        setTimeout(() => {
          e.target.innerHTML = 'F1-SCORE: 0.98. DEPLOYED FLASK WEB APP. SCORE +100';
          synth.playChime();
          addScore(100);
          checkProjectsAchievement();
        }, 800);
      }, 600);
    });

    // SpeakX Pro simulation
    box.querySelector('#proj-game-3').addEventListener('click', (e) => {
      e.target.disabled = true;
      e.target.innerHTML = 'PARSING Speech-to-Text NLP Pipeline...';
      setTimeout(() => {
        e.target.innerHTML = 'REST API RESPONSE: 45ms (LOW LATENCY). SCORE +100';
        synth.playChime();
        addScore(100);
        checkProjectsAchievement();
      }, 1000);
    });
    
  } else if (stationKey === 'certifications') {
    // Certifications scanner
    box.innerHTML = `
      <div class="game-instructions">
        <h3>CREDENTIAL INTEGRITY DECRYPTOR</h3>
        <p>Verify external signatures for licenses hosted on IIT Bombay, Deloitte, and Great Learning servers.</p>
      </div>
      <div style="font-family:var(--font-code); font-size:10px; color:var(--color-green); margin-bottom:15px;" id="cert-log">
        > SYSTEM STANDBY
      </div>
      <button class="glow-btn glow-magenta" id="cert-scan-btn">SCAN QUANTUM SIGNATURES</button>
    `;
    container.appendChild(box);
    
    box.querySelector('#cert-scan-btn').addEventListener('click', (e) => {
      e.target.disabled = true;
      const log = box.querySelector('#cert-log');
      log.innerHTML = '> VERIFYING IIT BOMBAY Python Cert...';
      synth.playLaser();
      
      setTimeout(() => {
        log.innerHTML += '<br>> SIGNATURE: VALID';
        log.innerHTML += '<br>> VERIFYING Deloitte Data Analytics...';
        synth.playLaser();
        
        setTimeout(() => {
          log.innerHTML += '<br>> SIGNATURE: VALID';
          log.innerHTML += '<br>> VERIFYING Oracle SQL...';
          synth.playLaser();
          
          setTimeout(() => {
            log.innerHTML += '<br>> SIGNATURE: VALID';
            log.innerHTML += '<br>> CREDENTIALS INTEGRITY SECURED. SCORE +150';
            synth.playChime();
            addScore(150);
            e.target.innerHTML = 'VERIFIED';
          }, 600);
        }, 600);
      }, 600);
    });
    
  } else if (stationKey === 'contact') {
    // Contact Form submission
    box.innerHTML = `
      <form class="contact-form" id="sim-contact-form" onsubmit="return false;">
        <div class="form-group">
          <label>RECRUITER DOCKING ID (NAME)</label>
          <input type="text" class="form-input" id="c-name" required placeholder="Captain Kirk">
        </div>
        <div class="form-group">
          <label>SIGNAL RESPONSE CHANNEL (EMAIL)</label>
          <input type="email" class="form-input" id="c-email" required placeholder="kirk@starfleet.com">
        </div>
        <div class="form-group">
          <label>ENCRYPTED COMM-LINK MESSAGE</label>
          <textarea class="form-input form-textarea" id="c-msg" required placeholder="We want to recruit you!"></textarea>
        </div>
        <button type="submit" class="glow-btn" style="margin-top: 5px;">TRANSMIT QUANTUM SIGNAL</button>
      </form>
    `;
    container.appendChild(box);
    
    box.querySelector('#sim-contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = e.target.querySelector('button');
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'ENCRYPTING & UPLOADING TO ORBIT...';
      
      // Animate wormhole core fast
      const wormhole = stations['contact'].userData.horizon;
      gsap.to(wormhole.scale, { x: 3.5, y: 3.5, z: 3.5, duration: 1.0, yoyo: true, repeat: 1 });
      
      synth.playWarp();
      
      setTimeout(() => {
        submitBtn.innerHTML = 'TRANSMISSION COMPLETE!';
        addScore(300);
        unlockAchievement('recruiter');
        
        // Output log
        const logs = document.querySelector('.system-logs');
        logs.innerHTML = `<span class="monotext glow-green">> Communication beamed: Name: "${document.getElementById('c-name').value}", Email: "${document.getElementById('c-email').value}". Logged score +300.</span>`;
      }, 1500);
    });
  }
}

// Check skills learned progress and update game UI
function updateSkillsUIProgress() {
  // Check DOM tags
  const skillsCount = skillsLearned.size;
  const totalSkills = 10;
  
  const bar = document.getElementById('skills-game-bar');
  const txt = document.getElementById('skills-game-txt');
  
  if (bar) bar.style.width = `${(skillsCount / totalSkills) * 100}%`;
  if (txt) txt.innerHTML = `${skillsCount} / ${totalSkills} Skills Decoded`;
  
  // Highlight tags in left panel details
  document.querySelectorAll('.skills-grid-view .skill-tag').forEach(tag => {
    const name = tag.getAttribute('data-skill');
    if (skillsLearned.has(name)) {
      tag.classList.add('learned');
    }
  });
  
  if (skillsCount >= 5 && !achievements.expert.unlocked) {
    unlockAchievement('expert');
  }
}

// Track projects deploying
let projectsDeployed = 0;
function checkProjectsAchievement() {
  projectsDeployed++;
  if (projectsDeployed >= 3 && !achievements.creator.unlocked) {
    unlockAchievement('creator');
  }
}

// Add Score helper
function addScore(points) {
  score += points;
  if (scoreTxtEl) scoreTxtEl.innerHTML = score.toString().padStart(4, '0');
  
  // Check Level up
  const newLevel = Math.min(5, Math.floor(score / 500) + 1);
  if (newLevel > level) {
    level = newLevel;
    synth.playChime();
    if (levelTxtEl) levelTxtEl.innerHTML = `OFFICER LEVEL ${level}`;
  }
  
  if (score >= 1000 && !achievements.recruiter.unlocked) {
    unlockAchievement('recruiter');
  }
}

// Unlock Achievement Helper
function unlockAchievement(key) {
  if (achievements[key].unlocked) return;
  achievements[key].unlocked = true;
  
  // Update achievements list UI
  const item = document.getElementById(achievements[key].domId);
  if (item) {
    item.classList.remove('locked');
    item.classList.add('unlocked');
  }
  
  // Trigger top popup banner
  const popup = document.getElementById('achievement-popup');
  document.getElementById('ach-popup-name').innerHTML = achievements[key].name;
  popup.classList.remove('hidden');
  
  synth.playChime();
  addScore(250); // Massive bonus
  
  setTimeout(() => {
    popup.classList.add('hidden');
  }, 4000);
}

// ==========================================
// COLLISION DETECTION & UPDATE LOOP
// ==========================================
function updatePhysics() {
  if (currentDockedStation || isAutopilotActive) return;
  
  // Flight controls mapping
  const targetSpeed = keyboard['shift'] ? MAX_BOOST_SPEED : MAX_SPEED;
  
  // Forward / Backward
  if (keyboard['w'] || keyboard['arrowup']) {
    currentSpeed = Math.min(targetSpeed, currentSpeed + ACCEL);
  } else if (keyboard['s'] || keyboard['arrowdown']) {
    currentSpeed = Math.max(-MAX_SPEED * 0.5, currentSpeed - ACCEL);
  } else {
    // Decelerate naturally
    if (currentSpeed > 0) currentSpeed = Math.max(0, currentSpeed - DECEL);
    else if (currentSpeed < 0) currentSpeed = Math.min(0, currentSpeed + DECEL);
  }
  
  // Yaw / Rotation (A / D or Left / Right arrows)
  if (keyboard['a'] || keyboard['arrowleft']) {
    yawSpeed = ROTATION_SPEED;
    // Roll wing tilt left
    playerShip.rotation.z = Math.min(0.5, playerShip.rotation.z + 0.05);
  } else if (keyboard['d'] || keyboard['arrowright']) {
    yawSpeed = -ROTATION_SPEED;
    // Roll wing tilt right
    playerShip.rotation.z = Math.max(-0.5, playerShip.rotation.z - 0.05);
  } else {
    yawSpeed = 0;
    // Return wing to flat
    playerShip.rotation.z *= 0.85;
  }
  
  // Apply rotation yaw
  playerShip.rotation.y += yawSpeed;
  
  // Apply movement along ship's local forward vector
  shipDirection.set(0, 0, -1).applyQuaternion(playerShip.quaternion);
  shipVelocity.copy(shipDirection).multiplyScalar(currentSpeed);
  playerShip.position.add(shipVelocity);
  
  // Constraints (box borders of sector space)
  const limit = 220;
  playerShip.position.x = THREE.MathUtils.clamp(playerShip.position.x, -limit, limit);
  playerShip.position.y = THREE.MathUtils.clamp(playerShip.position.y, -35, 35);
  playerShip.position.z = THREE.MathUtils.clamp(playerShip.position.z, -limit, limit);
  
  // Update HUD
  const thrustPct = Math.round((currentSpeed / MAX_BOOST_SPEED) * 100);
  if (thrustBarEl) thrustBarEl.style.width = `${thrustPct}%`;
  if (thrustTxtEl) thrustTxtEl.innerHTML = `${thrustPct}%`;
  
  const velocityKms = Math.round(currentSpeed * 40);
  if (velocityTxtEl) velocityTxtEl.innerHTML = `${velocityKms} km/s`;
  
  // Third-person camera follow
  const camOffset = new THREE.Vector3(0, 3, 10).applyQuaternion(playerShip.quaternion);
  const targetCamPos = playerShip.position.clone().add(camOffset);
  camera.position.lerp(targetCamPos, 0.08);
  
  // Look slightly in front of ship
  const lookTarget = playerShip.position.clone().addScaledVector(shipDirection, 8);
  camera.lookAt(lookTarget);
}

// Update loops for lasers, crystals, particles
function updateEntities() {
  // 1. Lasers flight & cleanup
  for (let i = lasers.length - 1; i >= 0; i--) {
    const laser = lasers[i];
    laser.position.add(laser.userData.velocity);
    laser.userData.life--;
    
    let laserDestroyed = false;
    
    // Check collision with space crystals
    for (let j = spaceCrystals.length - 1; j >= 0; j--) {
      const crystal = spaceCrystals[j];
      const dist = laser.position.distanceTo(crystal.position);
      
      if (dist < crystal.userData.radius + 1.2) {
        // Laser Hit space crystal!
        synth.playExplosion();
        createExplosionParticles(crystal.position, crystal.material.color);
        
        scene.remove(crystal);
        spaceCrystals.splice(j, 1);
        
        crystalsDestroyed++;
        if (crystalsTxtEl) crystalsTxtEl.innerHTML = crystalsDestroyed.toString();
        addScore(50);
        
        laserDestroyed = true;
        break;
      }
    }
    
    // Check collision with Skills Outpost orbiting crystals
    if (!laserDestroyed) {
      for (let j = 0; j < skillFloatingCrystals.length; j++) {
        const skillCrystal = skillFloatingCrystals[j];
        if (skillCrystal.userData.active) continue;
        
        const dist = laser.position.distanceTo(skillCrystal.position);
        if (dist < 2.0) {
          // Laser hit skill crystal!
          synth.playChime();
          createExplosionParticles(skillCrystal.position, new THREE.Color(0x00ffff));
          
          skillCrystal.userData.active = true;
          skillCrystal.material.color.setHex(0x00f0ff);
          skillCrystal.material.emissive.setHex(0x00f0ff);
          skillCrystal.scale.set(1.5, 1.5, 1.5);
          
          // Learn skill
          const skillName = skillCrystal.userData.skillName;
          skillsLearned.add(skillName);
          
          // Update details page view
          updateSkillsUIProgress();
          
          laserDestroyed = true;
          
          // Floating HTML Log
          const logs = document.querySelector('.system-logs');
          if (logs) logs.innerHTML = `<span class="monotext glow-cyan">> Skill unlocked: "${skillName}"</span>`;
          
          break;
        }
      }
    }
    
    // Cleanup old/dead lasers
    if (laserDestroyed || laser.userData.life <= 0) {
      scene.remove(laser);
      lasers.splice(i, 1);
    }
  }
  
  // 2. Rotate stations and sub-elements
  Object.keys(stations).forEach(key => {
    const station = stations[key];
    
    if (key === 'home') {
      station.rotation.y += 0.003;
      station.userData.orbitRing.rotation.y -= 0.006;
    } else if (key === 'education') {
      station.rotation.y += 0.005;
      station.userData.rings[0].rotation.x += 0.01;
      station.userData.rings[1].rotation.y -= 0.01;
    } else if (key === 'skills') {
      station.rotation.z += 0.005;
      station.userData.orbitRing.rotation.y += 0.008;
      
      // Orbit crystals rotate around their local center
      station.userData.orbitRing.children.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.015;
      });
    } else if (key === 'projects') {
      station.rotation.y -= 0.004;
    } else if (key === 'certifications') {
      station.userData.dish.rotation.z += 0.004;
    } else if (key === 'contact') {
      station.userData.ring.rotation.z += 0.01;
      station.userData.horizon.rotation.y -= 0.015;
    }
  });
  
  // 3. Spin space crystals
  spaceCrystals.forEach(crystal => {
    crystal.rotation.x += crystal.userData.spinX;
    crystal.rotation.y += crystal.userData.spinY;
  });
  
  // 4. Check player collisions with space crystals (hazard)
  for (let i = spaceCrystals.length - 1; i >= 0; i--) {
    const crystal = spaceCrystals[i];
    const dist = playerShip.position.distanceTo(crystal.position);
    
    if (dist < crystal.userData.radius + 1.8) {
      // Ship collided with crystal!
      synth.playExplosion();
      createExplosionParticles(crystal.position, crystal.material.color);
      
      scene.remove(crystal);
      spaceCrystals.splice(i, 1);
      
      // Drop shields
      playerShip.userData.shield = Math.max(0, playerShip.userData.shield - 20);
      updateShieldUI();
    }
  }
}

// Particle explosion
function createExplosionParticles(position, color) {
  const pCount = 20;
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const velocities = [];
  
  for (let i = 0; i < pCount; i++) {
    positions.push(position.x, position.y, position.z);
    velocities.push(
      (Math.random() - 0.5) * 1.5,
      (Math.random() - 0.5) * 1.5,
      (Math.random() - 0.5) * 1.5
    );
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    color: color,
    size: 0.8,
    transparent: true,
    opacity: 1.0,
    blending: THREE.AdditiveBlending
  });
  
  const points = new THREE.Points(geometry, material);
  scene.add(points);
  
  // Animate particle dispersion
  const pPos = points.geometry.attributes.position.array;
  let frames = 45;
  
  const anim = () => {
    if (frames <= 0) {
      scene.remove(points);
      return;
    }
    
    for (let i = 0; i < pCount; i++) {
      pPos[i*3] += velocities[i*3];
      pPos[i*3+1] += velocities[i*3+1];
      pPos[i*3+2] += velocities[i*3+2];
    }
    points.geometry.attributes.position.needsUpdate = true;
    points.material.opacity = frames / 45;
    frames--;
    requestAnimationFrame(anim);
  };
  
  anim();
}

function updateShieldUI() {
  const shield = playerShip.userData.shield;
  if (shieldBarEl) shieldBarEl.style.width = `${shield}%`;
  if (shieldTxtEl) shieldTxtEl.innerHTML = `${shield}%`;
  
  if (shield <= 0) {
    // Shield critical reboot sequence
    shieldBarEl.classList.add('glow-magenta');
    shieldBarEl.classList.remove('glow-cyan');
    
    // Flash warning
    const logs = document.querySelector('.system-logs');
    if (logs) logs.innerHTML = '<span class="monotext glow-magenta">> ERROR: Shield depletion. Restarting shields...</span>';
    
    setTimeout(() => {
      playerShip.userData.shield = 100;
      updateShieldUI();
      shieldBarEl.classList.remove('glow-magenta');
      shieldBarEl.classList.add('glow-cyan');
      if (logs) logs.innerHTML = '<span class="monotext glow-green">> Shields fully recharged. Systems operational.</span>';
    }, 4000);
  }
}

// ==========================================
// CORE ANIMATE LOOP
// ==========================================
function animate() {
  requestAnimationFrame(animate);
  
  updatePhysics();
  updateEntities();
  updateRadar();
  checkDockRange();
  
  renderer.render(scene, camera);
}

// ==========================================
// LOADING & ONBOARDING FLOW
// ==========================================
function simulateLoader() {
  const loadingPct = document.getElementById('loading-pct');
  const loadingBar = document.getElementById('loading-bar');
  const onboarding = document.getElementById('onboarding-controls');
  const loaderProgress = document.querySelector('.loading-progress-box');
  
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.floor(Math.random() * 8) + 4;
    if (pct >= 100) {
      pct = 100;
      clearInterval(interval);
      
      // Unlock start panel
      setTimeout(() => {
        loaderProgress.classList.add('hidden');
        onboarding.classList.remove('hidden');
      }, 500);
    }
    loadingPct.innerHTML = `${pct}%`;
    loadingBar.style.width = `${pct}%`;
  }, 100);
}

// Start Game Handler
document.getElementById('start-game-btn').addEventListener('click', () => {
  synth.init(); // Initialize synthesizers on user click
  document.getElementById('loading-screen').classList.add('hidden');
  
  // Play enter sound
  synth.playChime();
});

// ==========================================
// ENTRY POINT
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initEngine();
  setupControls();
  simulateLoader();
  animate();
});
