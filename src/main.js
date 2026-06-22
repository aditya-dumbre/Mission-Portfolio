import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';

// ==========================================
// RESUME SECTOR DATA DEFINITIONS
// ==========================================
const SECTOR_LOGS = [
  "> Core identity matrix decrypted.",
  "> Academic logs synchronized.",
  "> Skill indexes mapped to visual canvas.",
  "> Projects compilation logs compiled.",
  "> Digital signatures verified successfully.",
  "> Extra-curricular logs synchronized.",
  "> Communication channels initialized."
];

// ==========================================
// AUDIO SYNTHESIZER (SOOTHING & MELLOW)
// ==========================================
class SereneSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.bgInterval = null;
    this.bgGain = null;
    this.activeOscillators = [];
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.startAmbientMusic();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.bgGain) {
      this.bgGain.gain.setValueAtTime(this.muted ? 0 : 0.05, this.ctx.currentTime);
    }
    return this.muted;
  }

  playChime() {
    // Soft, soothing major arpeggio chime (e.g., E Major 7)
    if (this.muted || !this.ctx) return;
    const notes = [659.25, 830.61, 987.77, 1318.51];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.05);
      
      gain.gain.setValueAtTime(0, this.ctx.currentTime + i * 0.05);
      gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + i * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.05 + 0.35);
      
      osc.start(this.ctx.currentTime + i * 0.05);
      osc.stop(this.ctx.currentTime + i * 0.05 + 0.35);
    });
  }

  playSelect() {
    // Soft tap bubble click
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, this.ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSweep() {
    // Soft background breeze sweep
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(400, this.ctx.currentTime + 0.4);
    
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }

  startAmbientMusic() {
    if (this.muted || !this.ctx) return;
    
    const playChord = () => {
      if (this.muted || !this.ctx) return;
      
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // C Major 7
        [349.23, 440.00, 523.25, 659.25], // F Major 7
        [293.66, 349.23, 440.00, 523.25], // D minor 7
        [329.63, 392.00, 493.88, 587.33]  // E minor 7
      ];
      
      const chord = chords[Math.floor(Math.random() * chords.length)];
      const duration = 8.0;
      
      this.bgGain = this.ctx.createGain();
      this.bgGain.connect(this.ctx.destination);
      this.bgGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.bgGain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 3.0);
      this.bgGain.gain.setValueAtTime(0.04, this.ctx.currentTime + duration - 3.0);
      this.bgGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
      
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        osc.connect(this.bgGain);
        osc.type = 'triangle'; // Mellow tone
        osc.frequency.value = freq;
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
        this.activeOscillators.push(osc);
      });
      
      this.bgInterval = setTimeout(() => {
        this.activeOscillators = [];
        playChord();
      }, (duration - 2.5) * 1000);
    };
    
    playChord();
  }
}

const synth = new SereneSynth();

// ==========================================
// CAROUSEL & EXHIBITION STATE
// ==========================================
let activeIndex = 0;
const totalCards = 7;
let isAnimating = false;
let scrollAccumulator = 0;
const scrollThreshold = 40; // Pixels for wheel/touchpad trigger
let xpScore = 0;

// ==========================================
// THREE.JS SCENE SETUP
// ==========================================
let scene, camera, renderer;
let fireflies;
let exhibitionGroup;
const models = [];
let modelContainer;

// ==========================================
// INIT SERENE EXHIBITION ENGINE
// ==========================================
function initEngine() {
  const canvas = document.getElementById('bg-canvas');
  
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfffbf5); // Cozy warm cream
  scene.fog = new THREE.FogExp2(0xffebd9, 0.005); // Sunset peach fog
  
  // Camera
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 10.5);
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  
  // Lights
  const ambientLight = new THREE.AmbientLight(0xfff4e6, 1.8);
  scene.add(ambientLight);
  
  const directionalLight1 = new THREE.DirectionalLight(0xffb88c, 1.6); // Warm orange sun
  directionalLight1.position.set(10, 8, 12);
  scene.add(directionalLight1);
  
  const directionalLight2 = new THREE.DirectionalLight(0xdbe9f6, 0.8); // Soothing cool sky fill
  directionalLight2.position.set(-10, -5, -5);
  scene.add(directionalLight2);

  // Group for layout translation
  exhibitionGroup = new THREE.Group();
  // Offset 3D meshes to the right on desktop, center on mobile
  updateGroupPosition();
  scene.add(exhibitionGroup);
  
  // Entities Setup
  createFireflies(); // Cozy floating golden fireflies
  createExhibitionModels(); // 6 Geometric sculptures
  
  window.addEventListener('resize', onWindowResize);
}

function updateGroupPosition() {
  if (window.innerWidth > 1024) {
    exhibitionGroup.position.set(2.4, 0, 0); // Translate right
  } else {
    exhibitionGroup.position.set(0, 1.2, -3); // Translate up & back
  }
}

// 1. FLOATING FIREFLIES
function createFireflies() {
  const count = 220;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i+1] = (Math.random() - 0.5) * 12;
    positions[i+2] = (Math.random() - 0.5) * 12;
    
    // Warm tones: citrine, gold, peach
    const seed = Math.random();
    if (seed < 0.4) {
      colors[i] = 0.9; colors[i+1] = 0.43; colors[i+2] = 0.32; // Terracotta/coral
    } else if (seed < 0.8) {
      colors[i] = 0.88; colors[i+1] = 0.67; colors[i+2] = 0.27; // Soft gold
    } else {
      colors[i] = 0.95; colors[i+1] = 0.9; colors[i+2] = 0.85;  // Cream warm white
    }
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 0.16,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    sizeAttenuation: true
  });
  
  fireflies = new THREE.Points(geometry, material);
  scene.add(fireflies);
}

// 2. SIX GEOMETRIC SCULPTURES
function createExhibitionModels() {
  modelContainer = new THREE.Group();
  exhibitionGroup.add(modelContainer);
  
  // Model Materials
  const ivoryMat = new THREE.MeshStandardMaterial({ color: 0xfefcf8, roughness: 0.7, metalness: 0.05 });
  const coralMat = new THREE.MeshStandardMaterial({ color: 0xe76f51, roughness: 0.4, metalness: 0.2 });
  const amberMat = new THREE.MeshStandardMaterial({ color: 0xe09f68, roughness: 0.5, metalness: 0.3 });
  const sageMat = new THREE.MeshStandardMaterial({ color: 0x8c9a70, roughness: 0.6, metalness: 0.1 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xe2ab46, roughness: 0.3, metalness: 0.6 });
  const tealMat = new THREE.MeshStandardMaterial({ color: 0x5fa8ad, roughness: 0.3, metalness: 0.4 });

  // --- MODEL 0: CORE HUB (Rotating Torus Knot Sculpture) ---
  const model0 = new THREE.Group();
  const main0 = new THREE.Mesh(new THREE.TorusKnotGeometry(1.6, 0.46, 64, 8, 3, 4), coralMat);
  model0.add(main0);
  
  // Floating orbital ring
  const ring0 = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.08, 8, 48), ivoryMat);
  ring0.rotateX(Math.PI / 2.5);
  model0.add(ring0);
  
  modelContainer.add(model0);
  models.push(model0);

  // --- MODEL 1: EDUCATION (Cylinder stacks & Orbiting Rings) ---
  const model1 = new THREE.Group();
  const stack1 = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 3.2, 5), ivoryMat);
  stack1.rotateX(Math.PI / 8);
  model1.add(stack1);
  
  const ring1a = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.08, 6, 32), goldMat);
  ring1a.rotateX(Math.PI / 3);
  const ring1b = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.06, 6, 32), tealMat);
  ring1b.rotateY(Math.PI / 4);
  model1.add(ring1a);
  model1.add(ring1b);
  
  modelContainer.add(model1);
  models.push(model1);

  // --- MODEL 2: SKILLS (Floating Cubes Ring) ---
  const model2 = new THREE.Group();
  const center2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 1), sageMat);
  model2.add(center2);
  
  const ringGroup2 = new THREE.Group();
  const skillCount = 10;
  for (let i = 0; i < skillCount; i++) {
    const cubeGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45);
    const mat = i % 3 === 0 ? coralMat : (i % 3 === 1 ? goldMat : ivoryMat);
    const cube = new THREE.Mesh(cubeGeo, mat);
    
    const angle = (i / skillCount) * Math.PI * 2;
    cube.position.set(Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5);
    cube.rotation.set(Math.random() * 2, Math.random() * 2, 0);
    ringGroup2.add(cube);
  }
  model2.add(ringGroup2);
  model2.userData = { ringGroup: ringGroup2 };
  
  modelContainer.add(model2);
  models.push(model2);

  // --- MODEL 3: PROJECTS (Terracotta obelisks) ---
  const model3 = new THREE.Group();
  const obeliskGeo = new THREE.BoxGeometry(0.7, 3.4, 0.7);
  
  const ob1 = new THREE.Mesh(obeliskGeo, coralMat);
  ob1.position.set(-1.0, 0, 0);
  const ob2 = new THREE.Mesh(obeliskGeo, amberMat);
  ob2.position.set(0, 0.4, -0.6);
  const ob3 = new THREE.Mesh(obeliskGeo, ivoryMat);
  ob3.position.set(1.0, -0.2, 0.4);
  
  model3.add(ob1);
  model3.add(ob2);
  model3.add(ob3);
  model3.userData = { obs: [ob1, ob2, ob3] };
  
  modelContainer.add(model3);
  models.push(model3);

  // --- MODEL 4: CERTIFICATIONS (Rotating Prism) ---
  const model4 = new THREE.Group();
  const prismGeo = new THREE.OctahedronGeometry(1.8, 0);
  const main4 = new THREE.Mesh(prismGeo, tealMat);
  model4.add(main4);
  
  const ring4 = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.08, 8, 48), ivoryMat);
  ring4.rotateY(Math.PI / 2);
  model4.add(ring4);
  
  modelContainer.add(model4);
  models.push(model4);

  // --- MODEL 5: EXTRA-CURRICULAR (Floating Helix Spiral & Research Core) ---
  const model5 = new THREE.Group();
  const spiralGroup = new THREE.Group();
  const spiralCount = 40;
  for (let i = 0; i < spiralCount; i++) {
    const t = i / spiralCount;
    const angle = t * Math.PI * 6; // 3 full turns
    const y = (t - 0.5) * 3; // spread vertically
    const radius = 1.3 - Math.abs(t - 0.5) * 0.4; // tapered spiral
    
    const nodeGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const nodeMat = i % 2 === 0 ? coralMat : sageMat;
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    node.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    spiralGroup.add(node);
  }
  model5.add(spiralGroup);
  
  // Center research crystal (for deepfake paper presentation)
  const core5 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7, 0), goldMat);
  model5.add(core5);
  model5.userData = { spiral: spiralGroup, core: core5 };
  
  modelContainer.add(model5);
  models.push(model5);

  // --- MODEL 6: CONTACT (Gyro Rings) ---
  const model6 = new THREE.Group();
  const core6 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), goldMat);
  model6.add(core6);
  
  const gyro1 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.12, 8, 48), amberMat);
  const gyro2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.08, 8, 48), coralMat);
  const gyro3 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.06, 8, 48), ivoryMat);
  
  model6.add(gyro1);
  model6.add(gyro2);
  model6.add(gyro3);
  model6.userData = { gyros: [gyro1, gyro2, gyro3] };
  
  modelContainer.add(model6);
  models.push(model6);

  // Initialize scale and position (only active index visible)
  models.forEach((model, index) => {
    if (index === activeIndex) {
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 0);
    } else {
      model.scale.set(0.001, 0.001, 0.001);
      model.position.set(0, -2, -1);
    }
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  updateGroupPosition();
}

// ==========================================
// CARD NAVIGATION CAROUSEL CONTROLLER
// ==========================================
function goToCard(index) {
  if (index === activeIndex || isAnimating || index < 0 || index >= totalCards) return;
  
  isAnimating = true;
  synth.playSelect();
  
  const oldIndex = activeIndex;
  activeIndex = index;
  
  // 1. Update HTML Cards
  const cards = document.querySelectorAll('.exhibition-card');
  cards[oldIndex].classList.remove('active');
  
  setTimeout(() => {
    cards[activeIndex].classList.add('active');
  }, 250);

  // 2. Update Header Tabs
  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index'));
    if (idx === activeIndex) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // 3. Update Dot Indicators
  document.querySelectorAll('.dot-indicator').forEach(dot => {
    const idx = parseInt(dot.getAttribute('data-index'));
    if (idx === activeIndex) dot.classList.add('active');
    else dot.classList.remove('active');
  });

  // 4. Update Footer Status
  const logEl = document.getElementById('status-log');
  if (logEl) {
    logEl.innerHTML = SECTOR_LOGS[activeIndex];
  }

  // 5. Animate 3D Model Transitions
  const oldModel = models[oldIndex];
  const newModel = models[activeIndex];
  
  // Old model retreats
  gsap.to(oldModel.scale, {
    x: 0.001, y: 0.001, z: 0.001,
    duration: 0.45,
    ease: 'power2.in',
    onComplete: () => {
      oldModel.position.set(0, -2, -1);
    }
  });
  
  gsap.to(oldModel.position, {
    y: -2, z: -1,
    duration: 0.45,
    ease: 'power2.in'
  });

  // New model arrives
  newModel.position.set(0, 2, -1); // arrive from top
  gsap.to(newModel.scale, {
    x: 1, y: 1, z: 1,
    duration: 0.7,
    delay: 0.25,
    ease: 'power2.out',
    onComplete: () => {
      isAnimating = false;
    }
  });
  
  gsap.to(newModel.position, {
    x: 0, y: 0, z: 0,
    duration: 0.7,
    delay: 0.25,
    ease: 'power2.out'
  });
}

function handleNext() {
  if (activeIndex < totalCards - 1) {
    goToCard(activeIndex + 1);
  } else {
    goToCard(0); // Loop back
  }
}

function handlePrev() {
  if (activeIndex > 0) {
    goToCard(activeIndex - 1);
  } else {
    goToCard(totalCards - 1); // Loop to end
  }
}

// ==========================================
// SCROLL / WHEEL INTERACTION (ACCESSIBILITY)
// ==========================================
function setupScrollEvent() {
  window.addEventListener('wheel', (e) => {
    // Check if scrolling inside a scrollable detail card panel
    const path = e.composedPath();
    const isScrollingScrollablePanel = path.some(el => el.classList && el.classList.contains('scrollable'));
    if (isScrollingScrollablePanel) return; // Allow normal scroll text

    e.preventDefault();
    
    scrollAccumulator += e.deltaY;
    
    if (Math.abs(scrollAccumulator) >= scrollThreshold) {
      if (scrollAccumulator > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      scrollAccumulator = 0;
    }
  }, { passive: false });

  // Swipe Gestures for Mobile Touchscreens
  let touchStartX = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  
  window.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  });
}

// ==========================================
// SKILLS INTERACTIVE SECTORS
// ==========================================
function setupSkillsHover() {
  document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.addEventListener('mouseenter', (e) => {
      const skillName = e.target.getAttribute('data-name');
      highlightSkillModelCube(skillName);
    });
    
    pill.addEventListener('mouseleave', () => {
      resetSkillModelCubes();
    });
  });
}

function highlightSkillModelCube(skillName) {
  const model2 = models[2];
  const cubes = model2.userData.ringGroup.children;
  
  cubes.forEach((cube, i) => {
    // Scale up the matched index cube in 3D carousel
    if (i === Math.abs(hashCode(skillName)) % cubes.length) {
      gsap.to(cube.scale, { x: 2.0, y: 2.0, z: 2.0, duration: 0.3 });
      cube.material.emissive.setHex(0xffffff);
      cube.material.emissiveIntensity = 0.2;
    } else {
      gsap.to(cube.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 0.3 });
      cube.material.opacity = 0.4;
      cube.material.transparent = true;
    }
  });
}

function resetSkillModelCubes() {
  const model2 = models[2];
  const cubes = model2.userData.ringGroup.children;
  
  cubes.forEach(cube => {
    gsap.to(cube.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
    cube.material.emissive.setHex(0x000000);
    cube.material.emissiveIntensity = 0;
    cube.material.opacity = 1.0;
    cube.material.transparent = false;
  });
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

// ==========================================
// RESUME INTERACTIVE UTILITIES (IN-CARD GAMES)
// ==========================================
function setupCardInteractiveActions() {
  // 1. Education Quiz
  const quizBox = document.getElementById('edu-quiz-box');
  const question = {
    q: "Which language uses SQLDelight for local Multiplatform database persistence?",
    opts: ["Java", "Kotlin", "Python", "Flask"],
    correct: 1
  };
  
  if (quizBox) {
    quizBox.innerHTML = `
      <div class="quiz-question" style="font-weight:700; margin-top:8px;">${question.q}</div>
      <div class="quiz-opts" style="display:flex; flex-direction:column; gap:8px;">
        ${question.opts.map((opt, i) => `<button class="quiz-opt-btn" data-idx="${i}">${opt}</button>`).join('')}
      </div>
      <div id="quiz-msg" style="margin-top:8px; font-weight:bold; font-size:11px; min-height:16px;"></div>
    `;
    
    quizBox.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        const msg = document.getElementById('quiz-msg');
        
        if (idx === question.correct) {
          btn.classList.add('correct');
          msg.innerHTML = '<span class="glow-green">CORRECT. DATA ARCHIVE UNLOCKED. +150 XP</span>';
          synth.playChime();
          addScore(150);
          
          // Animate the 3D education stack
          gsap.to(models[1].rotation, { y: Math.PI * 2, duration: 1.0, ease: 'power2.out' });
        } else {
          btn.classList.add('incorrect');
          msg.innerHTML = '<span class="glow-cyan">INCORRECT. RE-TUNING SYSTEM PARAMS.</span>';
          synth.playSelect();
        }
      });
    });
  }

  // 2. Project Builders
  document.getElementById('run-prushtha-btn').addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.innerHTML = 'Compiling Spring Boot + MinIO backend...';
    
    // Animate project obelisk in 3D
    const ob = models[3].userData.obs[0];
    gsap.to(ob.scale, { y: 1.5, duration: 0.6, yoyo: true, repeat: 1 });
    
    setTimeout(() => {
      e.target.innerHTML = 'COMPILE SUCCESSFUL. API LIVE. XP +100';
      synth.playChime();
      addScore(100);
    }, 1200);
  });

  document.getElementById('run-ml-btn').addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.innerHTML = 'Fitting Random Forest + SMOTE...';
    
    const ob = models[3].userData.obs[1];
    gsap.to(ob.rotation, { y: Math.PI, duration: 1.0 });
    
    setTimeout(() => {
      e.target.innerHTML = 'ACCURACY: 98%. FLASK API READY. XP +100';
      synth.playChime();
      addScore(100);
    }, 1400);
  });

  document.getElementById('run-speakx-btn').addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.innerHTML = 'Activating NLP speech streams...';
    
    const ob = models[3].userData.obs[2];
    gsap.to(ob.position, { y: 1.0, duration: 0.4, yoyo: true, repeat: 1 });
    
    setTimeout(() => {
      e.target.innerHTML = 'LOW-LATENCY CLIENT PIPELINES SECURED. XP +100';
      synth.playChime();
      addScore(100);
    }, 1200);
  });

  // 3. Credential Sweep Scanner
  document.getElementById('scan-certs-btn').addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.innerHTML = 'Validating cryptographic key signatures...';
    
    const prism = models[4];
    gsap.to(prism.rotation, { y: Math.PI * 4, duration: 2.0 });
    
    const status = document.getElementById('scan-certs-status');
    status.innerHTML = '> CONNECTING TO REGISTRY GATEWAY...';
    synth.playSweep();
    
    setTimeout(() => {
      status.innerHTML = '> IIT Bombay Python Certificate: VALID<br>> Deloitte Telemetry simulation: VALID<br>> Oracle Database structure: VALID';
      e.target.innerHTML = 'VERIFICATION INTEGRITY: SECURE. XP +200';
      synth.playChime();
      addScore(200);
    }, 1500);
  });

  // 4. Contact Signal Submission
  document.getElementById('contact-transmission-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.transmit-btn');
    btn.disabled = true;
    btn.innerHTML = 'BEAMING HARMONIC FREQUENCIES...';
    
    // Spin gyro rings rapidly
    const gyros = models[6].userData.gyros;
    gsap.to(gyros[0].rotation, { x: Math.PI * 6, duration: 1.5 });
    gsap.to(gyros[1].rotation, { y: Math.PI * 6, duration: 1.5 });
    gsap.to(gyros[2].rotation, { z: Math.PI * 6, duration: 1.5 });
    
    synth.playSweep();
    
    setTimeout(() => {
      btn.innerHTML = 'TRANSMISSION ANCHORED!';
      document.getElementById('transmission-status').innerHTML = `> Light signal dispatched successfully! Thank you, ${document.getElementById('c-name').value}. XP +300 logged.`;
      synth.playChime();
      addScore(300);
    }, 1500);
  });
}

function addScore(points) {
  xpScore += points;
  const statusLog = document.getElementById('status-log');
  if (statusLog) {
    statusLog.innerHTML = `> Action verified. XP score increased: +${points} XP (Total: ${xpScore} XP)`;
  }
}

// ==========================================
// MOUSE INTERACTIVE ROTATIONS (EXHIBIT VIEW)
// ==========================================
let targetRotationX = 0;
let targetRotationY = 0;
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) - 0.5;
  mouseY = (e.clientY / window.innerHeight) - 0.5;
});

// ==========================================
// MAIN LOOP & ANIMATIONS
// ==========================================
function animate() {
  requestAnimationFrame(animate);
  
  // 1. Slow drift floating fireflies
  if (fireflies) {
    const time = Date.now() * 0.0003;
    const positions = fireflies.geometry.attributes.position.array;
    const count = positions.length;
    for (let i = 0; i < count; i += 3) {
      positions[i+1] += Math.sin(time + i) * 0.005; // float Y
    }
    fireflies.geometry.attributes.position.needsUpdate = true;
  }
  
  // 2. Continuous rotation of models
  if (models[0]) models[0].rotation.y += 0.005;
  if (models[1]) {
    models[1].rotation.y += 0.004;
    models[1].children[1].rotation.x += 0.008; // Ring A
    models[1].children[2].rotation.y -= 0.006; // Ring B
  }
  if (models[2]) {
    models[2].rotation.y += 0.002;
    models[2].userData.ringGroup.rotation.y += 0.006;
  }
  if (models[3]) {
    models[3].rotation.y += 0.003;
  }
  if (models[4]) {
    models[4].rotation.x += 0.005;
    models[4].rotation.y += 0.005;
    models[4].children[1].rotation.x += 0.006; // Ring
  }
  if (models[5]) {
    models[5].userData.spiral.rotation.y += 0.01;
    models[5].userData.core.rotation.y -= 0.005;
  }
  if (models[6]) {
    const gyros = models[6].userData.gyros;
    gyros[0].rotation.x += 0.008;
    gyros[1].rotation.y += 0.006;
    gyros[2].rotation.z += 0.004;
  }
  
  // 3. Mild mouse pointer parallax rotation
  if (modelContainer) {
    targetRotationY = mouseX * 1.2;
    targetRotationX = mouseY * 0.8;
    modelContainer.rotation.y += (targetRotationY - modelContainer.rotation.y) * 0.06;
    modelContainer.rotation.x += (targetRotationX - modelContainer.rotation.x) * 0.06;
  }
  
  renderer.render(scene, camera);
}

// ==========================================
// INITIALIZATION AND LOAD SCREEN
// ==========================================
function setupControls() {
  // Arrow buttons
  document.getElementById('prev-arrow').addEventListener('click', handlePrev);
  document.getElementById('next-arrow').addEventListener('click', handleNext);
  
  // Header Tabs
  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'));
      goToCard(idx);
    });
  });

  // Bottom indicator dots
  document.querySelectorAll('.dot-indicator').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'));
      goToCard(idx);
    });
  });

  // Sound toggle button
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.addEventListener('click', () => {
    synth.init();
    const isMuted = synth.toggleMute();
    soundToggle.innerHTML = isMuted ? '🔇' : '🔊';
  });
  
  setupScrollEvent();
  setupSkillsHover();
  setupCardInteractiveActions();
}

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
      setTimeout(() => {
        loaderProgress.classList.add('hidden');
        onboarding.classList.remove('hidden');
      }, 300);
    }
    loadingPct.innerHTML = `${pct}%`;
    loadingBar.style.width = `${pct}%`;
  }, 50);
}

document.getElementById('start-game-btn').addEventListener('click', () => {
  synth.init();
  document.getElementById('loading-screen').classList.add('hidden');
  synth.playChime();
});

window.addEventListener('DOMContentLoaded', () => {
  initEngine();
  setupControls();
  simulateLoader();
  animate();
});
