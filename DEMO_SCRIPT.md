# Orbit Board — Cursor demo script

A ~10–12 minute campus walkthrough. Repo: a Vite + React + TypeScript side-project board with a planted `priorityScore` bug and a failing vitest.

## Setup (once, before the room fills)

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # expect FAIL — planted bug
```

Open the project in Cursor. Leave `DEMO_SCRIPT.md` handy in a second editor group or on paper.

---

## Beat 1 — Code structure (~90s)

**Show:** file tree.

Talking points:

- This is a real side-project shape, not a toy counter.
- **`src/components/`** — React UI (`Board`, `Column`, `TaskCard`, `FocusStrip`, `Header`).
- **`src/lib/`** — domain logic (`priorityScore`, `board`, `seed`, `types`). Scoring is not buried in JSX.
- Ask Cursor: *“Where is task priority calculated?”* → lands in `src/lib/priorityScore.ts`.

> Say: Cursor searches the codebase. You stay in the editor instead of grepping for ten minutes.

---

## Beat 2 — Browser side tab on localhost:5173 (~90s)

**Show:** Simple Browser / Cursor browser pane beside the code.

```bash
npm run dev
```

Open `http://localhost:5173` in the **side** browser tab so the board and the agent share the screen.

Talking points:

- Focus strip + four columns render from seed data.
- Point at **Fix login redirect loop** — overdue, high impact — and note its score looks wrong next to polish work (foreshadow the bug).
- Move a card with the column select to prove the UI is live.

> Say: keep the app open beside the agent. When we change code, HMR updates the board in place.

---

## Beat 3 — Skills: visual-brief (~2 min)

**Show:** `.cursor/skills/visual-brief/SKILL.md`, then invoke it.

Prompt ideas:

- `/visual-brief` then: *“Tighten the Focus strip hierarchy without turning this into a dashboard.”*
- Or: *“Using the visual-brief skill, propose a brief then adjust spacing on the Focus strip.”*

Talking points:

- Project skills live in `.cursor/skills/` and travel with the repo.
- `visual-brief` forces a short design brief (brand, type, palette, motion) before CSS thrash.
- Mention `ship-check` exists for the end of a change (`/ship-check`).

> Say: skills are reusable playbooks. Campus clubs can commit their own event or design skills the same way.

---

## Beat 4 — Plan / Debug / multitask modes (~4 min)

### Plan Mode

Switch to **Plan**. Prompt:

> The Focus strip should always show overdue high-impact work first. Inspect `priorityScore` and the failing tests, then propose a fix plan — don’t implement yet.

Review the plan with the audience. Edit the plan if needed.

### Debug Mode

Switch to **Debug** (or Agent with the failing test as the goal):

```bash
npm test
```

Prompt:

> `npm test` fails. Find the bug in `priorityScore`, fix it, and make the tests pass.

Reveal the planted bug: urgency is **subtracted** instead of **added** in `src/lib/priorityScore.ts`.

### Multitask

Optional parallel asks while tests run or the fix applies:

- *“Draft a one-line PR title for this fix.”*
- *“Add a short comment above the formula explaining the intended scoring.”*

> Say: Plan for approach, Debug when something is red, Agent to execute. Multitask keeps small side threads moving without losing the main fix.

---

## Beat 5 — Cloud Agents while you sleep (~2 min)

**Show:** cursor.com/agents (or the Cloud Agents entry point in the product).

Prompt to launch (do not need to wait for finish live):

> After the priorityScore fix lands on main, open a cloud agent to add keyboard shortcuts for moving the selected task between columns, with a vitest or component-level check. Open a PR when done.

Talking points:

- Cloud Agents get their own VM, branch, and PR.
- You can close the laptop — review the PR in the morning.
- Good campus use: overnight cleanup, test fills, doc passes on club repos.

> Say: local agent for the live bug hunt; cloud agent for the work that should keep going after the meetup ends.

---

## Optional close — ship-check (~60s)

```text
/ship-check
```

Or: *“Run the ship-check skill.”*

Expect tests green, build clean, and a clear note that the planted bug is fixed (if you fixed it on stage).

---

## Reset between takes

| Symptom | Fix |
|---------|-----|
| Tests already green | Revert `priorityScore` to `impact * 10 - boost` (see comment in file) |
| Board state moved around | Refresh the browser tab |
| Dev server died | `npm run dev` again |
| Want a clean tree | `git checkout -- src/lib/priorityScore.ts` |

## Audience takeaways

1. Clear `components/` vs `lib/` makes agents (and humans) faster.
2. Side-by-side browser keeps UI truth next to the diff.
3. Skills encode how *your* team designs and ships.
4. Plan → Debug → ship is a repeatable loop.
5. Cloud Agents extend that loop past the laptop.
