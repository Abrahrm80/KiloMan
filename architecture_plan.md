# Kilo Man - Technical Architecture Plan (v2.0)

## 1. Overview
**Game Title:** Kilo Man
**Genre:** 2D Platformer (Side-scrolling)
**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, HTML5 Canvas.
**Theme:** "Pretty, 3D-seeming" aesthetics with depth, gradients, and parallax.

## 2. Component Structure
We will utilize the existing `app/` directory structure but expand the internal logic of `GameCanvas`.

```
app/
├── page.tsx              # Main entry point
└── components/
    └── Game/
        ├── GameContainer.tsx # Manages high-level state (UI + Canvas)
        ├── GameCanvas.tsx    # Handles Game Loop, Physics, Camera, and Rendering
        ├── UIOverlay.tsx     # HUD, Jump Slider, Win/Loss screens
        ├── levelData.ts      # Expanded level data (World size, Entities, Monsters)
        └── types.ts          # Updated TypeScript interfaces
```

## 3. Core Systems

### 3.1 Camera System (Viewport)
The game world will now be larger than the canvas. We need a Camera system to track the player.
- **State:** `camera = { x: 0, y: 0 }`
- **Logic:**
  - Center camera on player: `targetX = player.x - (canvasWidth / 2)`
  - Smooth follow (optional) or direct lock.
  - **Clamping:** Ensure camera doesn't show out-of-bounds areas (0 to `levelWidth - canvasWidth`).
- **Rendering:** All entities are drawn at `entity.x - camera.x`.

### 3.2 Entity System & Monsters
We will introduce a more robust entity system to handle moving obstacles.
- **Types:** `Player`, `Platform`, `Hazard`, `Goal`, `Monster`.
- **Monster Behavior:**
  - Simple AI: Patrols between two points (`patrolStart`, `patrolEnd`).
  - Collision: If player touches monster -> Game Over.

### 3.3 Visuals & Rendering ("3D-Seeming")
To achieve a "pretty" look without external assets, we will use advanced Canvas drawing techniques.
- **Parallax Background:**
  - Multiple layers (Sky, Distant Mountains, Near Hills).
  - Move at different speeds relative to the camera (`camera.x * parallaxFactor`).
- **2.5D Platforms:**
  - Draw the "face" of the platform.
  - Draw a "top" surface with a lighter color to simulate depth/perspective.
  - Drop shadows.
- **Procedural Characters:**
  - **Player:** Humanoid shape composed of geometric primitives (Head, Torso, Limbs).
  - **Animation:** Simple leg oscillation based on movement.
  - **Monsters:** Distinct shape (e.g., Spiky, Red/Dark) to clearly indicate danger.

## 4. Data Structures (`types.ts` & `levelData.ts`)

### Updated Types
```typescript
export type EntityType = 'platform' | 'hazard' | 'goal' | 'start' | 'monster';

export interface LevelEntity {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: EntityType;
  // Visual properties
  color?: string;
  // Monster specific
  patrolRange?: number; // Distance to move back and forth
  speed?: number;
}

export interface GameConfig {
  // ... existing physics ...
  levelWidth: number; // Total width of the world
}
```

## 5. Implementation Plan

### Phase 1: Core Engine Upgrades
1.  **Camera Implementation:**
    -   Modify `draw` function to accept a camera offset.
    -   Update `update` loop to calculate camera position based on player.
2.  **Level Expansion:**
    -   Update `levelData.ts` to define a world ~3000px wide (approx 30s traversal).
    -   Add boundaries to physics to prevent falling off the "world" edges.

### Phase 2: Entity & Gameplay
3.  **Monster Logic:**
    -   Add `monsters` array to state refs.
    -   Update monster positions in game loop.
    -   Add collision check for Player vs Monster.

### Phase 3: Visual Overhaul
4.  **Parallax Background:**
    -   Create `drawBackground(ctx, cameraX)` function.
    -   Implement gradient sky and scrolling layers.
5.  **Platform Styling:**
    -   Replace `fillRect` with `drawPlatform(ctx, entity, cameraX)` helper.
    -   Add depth effects (top/side faces).
6.  **Character Art:**
    -   Replace square player with `drawHumanoid(ctx, x, y)` function.
    -   Add simple animation state (frame counter).

## 6. Physics Constants (Tuned)
- `GRAVITY`: 0.6
- `FRICTION`: 0.85
- `MOVE_SPEED`: 0.8 (Slower acceleration for weight)
- `MAX_SPEED`: 8.0
- `JUMP_FORCE`: -14