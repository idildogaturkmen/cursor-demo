---
name: ship-check
description: Pre-ship checklist for Orbit Board. Use before committing, opening a PR, or declaring a demo segment done. Runs tests, build, and a quick sanity pass.
---

# Ship check

Run this before you call the work done.

## Commands

```bash
npm test
npm run build
npm run lint
```

## Checklist

1. **Tests** — `npm test` is green (or the failure is the intentional planted bug and the demo script says so).
2. **Build** — `npm run build` succeeds.
3. **Lint** — `npm run lint` is clean for touched files.
4. **Structure** — UI lives in `src/components/`, logic in `src/lib/`. Do not dump scoring into components.
5. **Demo honesty** — if you fixed the planted `priorityScore` bug, say so; if you left it for the live Debug segment, leave `DEMO_SCRIPT.md` accurate.
6. **Browser** — with `npm run dev`, open `http://localhost:5173` (Cursor browser side tab is ideal) and confirm Focus + columns render.

## Output

Reply with:

- Pass / fail for test, build, lint
- One-line note on the `priorityScore` bug state (still planted / fixed)
- Anything left unverified
