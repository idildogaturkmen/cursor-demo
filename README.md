# Orbit Board

Vite + React + TypeScript project board used for Cursor campus demos.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # intentionally fails until priorityScore is fixed
npm run build
```

## Layout

```text
src/
  components/     # Board, Column, TaskCard, FocusStrip, Header
  lib/            # types, seed data, board helpers, priorityScore (+ tests)
.cursor/skills/
  visual-brief/   # design brief before UI changes
  ship-check/     # pre-ship test/build checklist
DEMO_SCRIPT.md    # live walkthrough beats
```

## Planted bug

`src/lib/priorityScore.ts` subtracts the urgency boost instead of adding it, so overdue work ranks too low. `src/lib/priorityScore.test.ts` fails until that line is fixed. Leave it broken before a live Debug Mode segment — see `DEMO_SCRIPT.md`.
