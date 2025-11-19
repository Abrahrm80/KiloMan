import { LevelEntity } from './types';

// Helper to generate IDs
const id = () => Math.random().toString(36).substr(2, 9);

export const LEVEL_1: LevelEntity[] = [
  // --- STARTING AREA (0 - 1000) ---
  // Ground
  { id: id(), x: 0, y: 550, w: 1000, h: 50, type: 'platform' },
  
  // Starting Platform
  { id: id(), x: 50, y: 450, w: 100, h: 20, type: 'platform' },
  
  // Intro Steps
  { id: id(), x: 200, y: 400, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 350, y: 350, w: 100, h: 20, type: 'platform' },
  
  // First Hazard
  { id: id(), x: 500, y: 530, w: 200, h: 20, type: 'hazard' },
  
  // Basic Jump
  { id: id(), x: 500, y: 300, w: 80, h: 20, type: 'platform' },
  { id: id(), x: 700, y: 350, w: 100, h: 20, type: 'platform' },

  // First Monster
  { id: id(), x: 850, y: 500, w: 40, h: 40, type: 'monster', patrolStart: 800, patrolEnd: 950, speed: 2 },

  // --- SECTION 2: THE CLIMB (1000 - 2500) ---
  // Base for climb
  { id: id(), x: 1000, y: 500, w: 200, h: 20, type: 'platform' },
  
  // Vertical Platforms
  { id: id(), x: 1250, y: 400, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 1150, y: 300, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 1350, y: 200, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 1550, y: 150, w: 100, h: 20, type: 'platform' }, // High point
  
  // Descent with hazards
  { id: id(), x: 1700, y: 250, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 1850, y: 350, w: 100, h: 20, type: 'platform' },
  
  // Long platform with fast monster
  { id: id(), x: 2000, y: 450, w: 500, h: 20, type: 'platform' },
  { id: id(), x: 2200, y: 410, w: 40, h: 40, type: 'monster', patrolStart: 2000, patrolEnd: 2500, speed: 4 },

  // --- SECTION 3: THE GAP (2500 - 4000) ---
  // The Big Pit
  { id: id(), x: 2600, y: 580, w: 1400, h: 20, type: 'hazard' }, 
  
  // Precision Jumps
  { id: id(), x: 2600, y: 400, w: 60, h: 20, type: 'platform' },
  { id: id(), x: 2800, y: 350, w: 60, h: 20, type: 'platform' },
  { id: id(), x: 3000, y: 300, w: 60, h: 20, type: 'platform' },
  { id: id(), x: 3200, y: 350, w: 60, h: 20, type: 'platform' },
  { id: id(), x: 3400, y: 400, w: 60, h: 20, type: 'platform' },
  
  // Moving target feel (static platforms but spaced)
  { id: id(), x: 3600, y: 300, w: 60, h: 20, type: 'platform' },
  { id: id(), x: 3800, y: 250, w: 60, h: 20, type: 'platform' },

  // --- SECTION 4: MONSTER ALLEY (4000 - 5500) ---
  // Ground returns
  { id: id(), x: 4000, y: 500, w: 1500, h: 50, type: 'platform' },
  
  // Multiple monsters on ground
  { id: id(), x: 4200, y: 460, w: 40, h: 40, type: 'monster', patrolStart: 4100, patrolEnd: 4400, speed: 3 },
  { id: id(), x: 4600, y: 460, w: 40, h: 40, type: 'monster', patrolStart: 4500, patrolEnd: 4800, speed: 3 },
  { id: id(), x: 5000, y: 460, w: 40, h: 40, type: 'monster', patrolStart: 4900, patrolEnd: 5200, speed: 5 },
  
  // Overhead platforms to skip monsters (optional path)
  { id: id(), x: 4100, y: 350, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 4300, y: 250, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 4500, y: 250, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 4700, y: 250, w: 100, h: 20, type: 'platform' },
  
  // --- SECTION 5: FINAL STRETCH (5500 - 7000) ---
  // Stairs up
  { id: id(), x: 5600, y: 450, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 5750, y: 400, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 5900, y: 350, w: 100, h: 20, type: 'platform' },
  
  // Final Guard
  { id: id(), x: 6100, y: 350, w: 300, h: 20, type: 'platform' },
  { id: id(), x: 6200, y: 310, w: 40, h: 40, type: 'monster', patrolStart: 6100, patrolEnd: 6400, speed: 6 },
  
  // Victory Jump
  { id: id(), x: 6500, y: 450, w: 100, h: 20, type: 'platform' },
  { id: id(), x: 6700, y: 500, w: 300, h: 50, type: 'platform' },

  // Goal
  { id: id(), x: 6850, y: 450, w: 50, h: 50, type: 'goal' },
  
  // Start Position Marker
  { id: id(), x: 50, y: 350, w: 0, h: 0, type: 'start' }
];