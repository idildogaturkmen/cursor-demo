# Fidelis — 15-minute Cursor demo (startup club)

You are showing **your real product** (Fidelis: an AI travel planner) and how Cursor helps you ship a feature on it. You are not building a toy board from scratch.

**Put this file in the Fidelis repo as `DEMO_SCRIPT.md`.** Prep files (Lisbon sample trip + homepage button) live in `fidelis-demo-prep/` — copy them into Fidelis on your laptop (this environment cannot push to that repo). See `fidelis-demo-prep/README.md`.

This file is your run of show. Paste the prompts in the gray boxes **as-is**. Say the lines in *italics* out loud.

Live site: [fidelisapp.netlify.app](https://fidelisapp.netlify.app)
This repo: vanilla `index.html` + Netlify functions. **Do not generate a new plan on stage** (that needs the Anthropic key). Use the Lisbon demo trip instead.

---

## Night before (10 minutes)

1. Open this repo in Cursor Desktop.
2. `git checkout main && git pull` then create a throwaway branch:
   ```bash
   git checkout -b demo/startup-club-$(date +%Y%m%d)
   ```
3. Serve the site locally (no Netlify needed for the sample trip):
   ```bash
   npx --yes serve . -p 5173
   ```
4. Open `http://localhost:5173` in Cursor’s **browser side tab** (Simple Browser / Agent browser). Click **Open the Lisbon demo trip →**. You should see the dark dossier, hotel card, and “Your days, mapped”.
5. Do a silent dry-run of Prompt 1 on this throwaway branch, then **throw the branch away**:
   ```bash
   git checkout main
   git branch -D demo/startup-club-$(date +%Y%m%d)
   git checkout -b demo/startup-club-live
   ```
   You want the live room to start from a **clean branch** with **no itinerary view yet**.

---

## Minute 0–2 · Cursor layout + picking models

Open Cursor with Fidelis. Chat panel on the right, file tree on the left, **browser side tab** on `localhost:5173`.

Point at the **model picker** (bottom of the agent chat — the model name).

*“You can swap models per chat. I use a stronger model when I am planning or starting from a blank repo, then a faster one when I already know the change.”*

| When | Model | Why you say this |
| --- | --- | --- |
| Plan / new project / “I don’t know the shape yet” | **Claude Fable 5** (or Fable 5.1) | Better at reading a messy codebase and proposing a small, correct plan. Costs more (Other Models pool). |
| Implement a change I already understand | **Grok 4.6** or **Grok 4.7** | Faster, cheaper, Cursor Models pool — good once the task is boxed. |
| Tiny copy/CSS tweak | **Cmd+K** (no big agent) | Inline edit. You stay in the file. |

For this live feature, switch to **Agent** mode (not Ask). Use **Fable 5** for Prompt 1 Step 1 if you want the “understand the repo” summary to land well, then you can switch to **Grok 4.6/4.7** before Step 2 if you want to show the swap. If that feels fussy on stage, stay on **one** model (Grok 4.7 is fine) and only *talk* about the swap.

Mode dropdown (same composer): **Agent** (does the work), **Plan** (writes a plan, no edits), **Ask** (read-only), **Debug** (when something is red).

---

## Minute 2 · Fresh branch + sample trip

In the terminal:

```bash
git checkout -b demo/startup-club-live
npx --yes serve . -p 5173
```

Click **Open the Lisbon demo trip →**.

*“This is Fidelis. Quiz in the front, trip dossier in the back. Days already exist as AM / PM / Eve on this page. Tonight we add a dedicated day-by-day itinerary view — a real feature, not a hello-world.”*

---

## Minute 2–11 · Prompt 1 · Agent (Itinerary Day View)

Stay in **Agent**. Paste this **entire** block as one message.

```text
I'm doing a live demo in front of students, so keep the change small, clean, and easy to follow. Target about 10 minutes of work.

Step 1: Understand the repo
Look around this codebase (Fidelis, a travel planner) and give me a short summary, 5 bullets max:
- framework and how routing / views work
- where trips and their data (dates, destinations, activities or stops) are defined or stored
- the main trip page (the dossier / result view)
- the styling approach (inline CSS, Tailwind, component library, etc.)
Do not change any code during this step.

Step 2: Add an "Itinerary Day View"
Add a day-by-day itinerary view for a single trip. This app is a vanilla JS SPA in index.html (show/hide sections) — match that. Do not add React or Next.js.
- New view/section, e.g. #view-itinerary, shown with the existing show() helper. Optional URL: ?view=itinerary (same spirit as ?t= for shared trips).
- Show one card per day of the trip, from start date to end date (use plan.startDate / plan.endDate or plan.days[].date on the Lisbon sample in demo/sample-trip.js), labeled like "Day 1 · Thu, Oct 16".
- Under each day, list that day's stops (morning / afternoon / evening from plan.days, or any time field if present), sorted by time if a time exists.
- Days with nothing planned show a friendly empty state such as "Nothing planned yet".
- Add a clear "View itinerary" button or link on the existing trip dossier (view-result) that opens this view.
- Reuse existing classes (.day, .hotel, .cta, .section-title, palette in :root). Match the current look.
- Real trips come from netlify/functions/plan.js + Supabase; the Lisbon sample is the mock. Note in a short comment where live `plan` data plugs in.
- Do not add new dependencies. Do not refactor unrelated code.

Step 3: Explain what you changed
When you're done, explain the change in plain language for an audience:
- a list of files created or modified, with one line each on why
- how the day grouping works
- how I can try it in the browser (exact URL or button)
Keep the explanation under 150 words.
```

While it runs:

- Click files in the diff so the room sees `index.html` vs `demo/sample-trip.js`.
- When Step 1 prints, *read two bullets out loud* (“single HTML file, views are show/hide — not React routes”).
- When it edits, keep the browser tab visible so HMR/refresh shows the new button.

Then click **View itinerary**. Confirm Day 3 is the empty day.

If it breaks: copy the error into Agent and say:

```text
Fix this with the smallest change. Do not refactor.
```

*“That usually lands better than a perfect run.”*

---

## Minute 11–12 · Prompt 2 · Cmd+K

Open the itinerary view in the editor. **Select** the heading (the `<h2>` Agent created) and the empty-state sentence.

Mac: **Cmd+K** · Windows/Linux: **Ctrl+K**

Paste:

```text
Rename the heading to "Your trip, day by day" and change the empty state to "Free day. Add something fun?" Keep the existing styles.
```

Accept the inline diff. Refresh the browser.

*“Agent is for multi-file features. Cmd+K is for the thing under your cursor — faster, cheaper, still in the file.”*

---

## Minute 12–14 · Prompt 3 · Skills

New Agent message:

```text
Create a small project skill for this repo so future agent work follows the same UI patterns.

- Save it at .cursor/skills/travel-planner-ui-conventions/SKILL.md
- Start the file with frontmatter that has a name (travel-planner-ui-conventions) and a one-line description of when to use it: any time we build or change UI in Fidelis.
- Base the content on what you actually see in this codebase, not generic advice. Cover in short bullets:
  - which classes or pieces to reuse for cards, buttons, and page layout (.shell, .dossier, .hotel, .day, .cta)
  - styling approach and spacing or color conventions in use (:root ink / sea / azure / sun / paper, Fraunces + Karla)
  - date display format (for example "Thu, Oct 16") and how trip dates are handled (plan.startDate, plan.days[].date)
  - empty-state tone: short, friendly, travel themed
  - where new pages and views go (new #view-* section + show('…') in index.html — not a new framework)
- Keep the whole skill under 40 lines.
Then show me the file and tell me in one sentence how I would use it next time.
```

*“Skills are playbooks you commit. Next time I type /travel-planner-ui-conventions or say ‘follow our UI skill’, the agent already knows Fraunces, the teal palette, and that we don’t sneak in React.”*

---

## Minute 14–15 · Cloud Agents (work while you sleep)

Point at the agent input **dropdown** → **Cloud**, or open [cursor.com/agents](https://cursor.com/agents).

*“Everything so far ran on my laptop. Cloud Agents get their own VM, branch, and PR. I can close the lid.”*

Paste (do **not** wait for it to finish):

```text
On a new branch, add a "Packing list" section to the Fidelis trip dossier. Match existing card styles in index.html (no new dependencies). Include 6–8 Lisbon-appropriate items for the sample trip. Open a pull request when done.
```

*“Kick it off from the editor, the web dashboard, Slack (@cursor), or your phone. Review the PR in the morning — that’s the same loop as shipping product at a startup.”*

Stop. Recap in 20 seconds:

1. Agent for a real feature on a real repo.
2. Cmd+K for a surgical edit.
3. Skills so the next agent matches your UI.
4. Cloud so work continues after the meetup.

---

## What you should *not* do on stage

- Don’t run the quiz “Plan my trip” live unless Netlify + `ANTHROPIC_API_KEY` are confirmed.
- Don’t start from `main` with uncommitted demo experiments — use a fresh branch.
- Don’t accept a rewrite into React/Next. Prompt 1 already forbids it; if the agent tries, stop it and paste: `Stay in index.html. Vanilla JS only.`
- Don’t debug silently. Narrate: “It’s stuck on X, I’ll paste the error.”

---

## Reset between practice takes

```bash
git checkout -- .
git clean -fd
# or
git reset --hard HEAD
```

Keep `demo/sample-trip.js` — that is the fixture, not the feature.

---

## Backup if Agent is slow or wifi dies

You still win the room by showing:

1. File tree: `index.html` (UI + views), `demo/sample-trip.js` (trip data), `netlify/functions/plan.js` (real planner).
2. Cmd+K on the hero `<h1>`: `Make this one line shorter. Keep the brand.`
3. The Cloud Agents tab even if you don’t wait for a PR.

The feature can be finished after the meeting. The point is the **loop**, not a perfect itinerary.
