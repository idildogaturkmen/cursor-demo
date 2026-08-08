---
name: visual-brief
description: Produce a short visual brief before changing Orbit Board UI. Use when redesigning, restyling, or adding visual polish to the board, Focus strip, or task cards.
---

# Visual brief

Before editing Orbit Board styles or layout, write a brief (in chat is fine) and follow it.

## Brief template

1. **Brand signal** — `Orbit Board` stays hero-level; no headline should overpower the name.
2. **Atmosphere** — layered background (gradient / soft radial washes), not a flat single color.
3. **Type** — keep Fraunces (display) + DM Sans (body). Do not fall back to Inter, Roboto, Arial, or system-only stacks.
4. **Palette** — forest orbit green `#0F6E56`, paper `#F3F6F2`, ember accent `#C45C26`. Avoid purple-on-white themes, cream+terracotta defaults, and glow-heavy dark mode.
5. **Composition** — one job per section. Focus strip ranks work; columns hold tasks. No stat strips, pill clusters, or promo badges in the first viewport.
6. **Cards** — task cards exist because they are the interaction surface (move between columns). Do not wrap the hero/header in extra cards.
7. **Motion** — keep 2–3 quiet entrances (rise/fade). No noisy loops.

## Workflow

1. State the brief in 5–8 bullets.
2. Implement only what the brief calls for.
3. Verify at desktop and a narrow mobile width.
4. If the user asks for a redesign, prefer `/visual-brief` then edit `src/App.css` / components — do not invent a second design system mid-pass.
