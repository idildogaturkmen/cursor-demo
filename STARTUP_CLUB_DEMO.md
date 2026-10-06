# Fidelis × Cursor — speaker card (15 min)

Repo: [github.com/idildogaturkmen/fidelis](https://github.com/idildogaturkmen/fidelis)

Print this or keep it on your phone. **Left = what you say / type. Right = only you see.**

Do not paste a manifesto. Type like you would at 11pm on your own project.

---

## Night before (not on stage)

1. Open **Fidelis** in Cursor Desktop (File → Open Folder → the `fidelis` clone).
2. New branch: `git checkout -b demo/startup-club-live`
3. Optional but safer: copy `fidelis-demo-prep/` from cursor-demo so you have **Open the Lisbon demo trip** (no API on stage). Or generate a trip tonight and use **Resume your last trip**.
4. `npx --yes serve . -p 5173` — confirm the dossier opens.
5. Practice **Cmd+K once** on any sentence, then Undo (`Cmd+Z`).
6. Practice typing `/create-skill` in Agent so you know the menu.

Do **not** leave an itinerary view or a skill in the branch. Live room starts clean.

---

## How this room should feel

You are a founder using Cursor on **your** app. The audience should think: “I could type that.”

If you freeze, the **TYPE** line is the whole prompt. If you are fluent, use your own words — same idea is enough.

---

## 0:00–1:30 · What Cursor is + models

| You | Notes (don’t read) |
| --- | --- |
| **SAY:** “This is Fidelis — I built it as a travel planner. Cursor is the editor I actually use on it.” | File tree left, Agent chat right. Open `http://localhost:5173` in the **browser side tab** so the app sits next to the code. |
| **DO:** Click the **model name** on the Agent input (bottom of the chat). | `Cmd+/` also cycles models. |
| **SAY:** “You pick a model per chat. When I am planning or starting from scratch I use **Fable 5** — smarter, uses more tokens. Once I know the change, I switch to **Grok 4.6 or 4.7** so it implements faster and cheaper.” | Stay on **Grok 4.7** for the rest if switching live feels messy. The *point* is the picker exists. |
| **SAY:** “Same box has modes: **Agent** does the work, **Plan** only writes a plan, **Ask** is read-only. We want Agent.” | Leave mode on **Agent**. |

---

## 1:30–2:00 · Show the product

| You | Notes |
| --- | --- |
| **DO:** Click **Open the Lisbon demo trip** (or Resume last trip). | Dossier: dark header, hotel, “Your days, mapped”. Day 3 is empty on purpose. |
| **SAY:** “Quiz in the front, trip dossier in the back. Days already exist as morning / afternoon / evening. I want a dedicated itinerary view — that’s a real ticket, not a hello-world.” | If they ask “why not generate live?” — API key lives on Netlify; sample trip is the honest demo path. |

---

## 2:00–10:00 · Agent (type this like a human)

Click the Agent chat. Type slowly enough that people can read. Send when it looks like a Slack message.

**TYPE (one breath):**

> look around this repo first so I know how views work — then add a simple day-by-day itinerary for this trip. one card per day, empty days should feel friendly, and a button on the trip page to open it. match the current look. this is vanilla JS, don’t add react.

| You | Notes |
| --- | --- |
| **SAY while it runs:** “I didn’t paste a spec. I said the outcome. Cursor searches the repo — that’s the point vs a chatbot that doesn’t have your files.” | It should mention `index.html`, `show()`, `plan.days`, maybe `demo/sample-trip.js`. |
| If it asks a question, answer in one line: “yes, keep it in index.html” | If it starts scaffolding Next/React: type **stay in index.html, vanilla only** and send. |
| When the diff appears, click `index.html` so they see the new view. | Refresh the browser if it doesn’t hot-reload (static `serve`). |
| **DO:** Click **View itinerary** (or whatever it named the button). | Day 3 should look empty. That’s your Cmd+K setup. |

**If it breaks:** don’t panic. Copy the error, type:

> that’s the error — smallest fix, don’t refactor

**If it is slow:** narrate the files it opened. Silence is worse than a slow agent.

---

## 10:00–12:00 · Cmd+K (inline edit)

This is the teaching beat. Slow down.

### What Cmd+K is

Agent is the sidebar coworker. **Cmd+K** (Mac) / **Ctrl+K** (Windows) is a highlighter on the code itself: select a few lines, say what to change, it edits **only that**.

You do **not** need chat for “rename this heading.”

### Do it live

| You | Notes |
| --- | --- |
| **DO:** In `index.html`, click the itinerary heading (the `<h2>` it just added). Select that line. | Select the empty-state sentence too if you want both in one shot. |
| **SAY:** “Chat is overkill for this. Select the code, **Cmd+K**.” | Press **Cmd+K** / **Ctrl+K**. A small inline bar appears **on the code**. |
| **TYPE:** `call this Your trip, day by day` | Short. Human. Press **Return**. |
| **DO:** Accept the diff (Tab / Keep, depending on what the UI shows). | To undo: **Cmd+Z**. To ask instead of edit: **Opt+Return** (Mac) / **Alt+Return** (Win) after Cmd+K. |
| Optional second Cmd+K on the empty day: **TYPE:** `make this empty state "Free day. Add something fun?"` | Two tiny edits look more real than one mega-prompt. |
| **SAY:** “Cmd+K stays in the file. **Cmd+L** would throw this selection into Agent if it got bigger.” | Refresh browser, point at the new heading. |

Practice tonight: pick any `<p>` on the homepage, Cmd+K `make this one clause shorter`, then Undo.

---

## 12:00–14:00 · Skills (create one live)

### What a skill is

A **skill** is a markdown playbook in the repo. Next time, Agent reads it so you don’t re-explain “we use Fraunces, teal, no React.”

It lives at `.cursor/skills/some-name/SKILL.md`. You can also type `/` in chat to attach one, or `/create-skill` to make a new one.

### Do it live

New Agent message. Type `/create-skill` — pick it from the menu — then keep typing in plain English:

**TYPE:**

> /create-skill for fidelis UI. save it in the repo. whenever we change the interface, reuse our cards and buttons, keep the teal palette and Fraunces headings, empty states stay short and travel-y, and new screens are another view in index.html — not a new framework.

| You | Notes |
| --- | --- |
| **SAY:** “I’m not writing the skill by hand. I’m telling Cursor how we like to work, and it writes the file.” | It should create `.cursor/skills/…/SKILL.md` with `name:` + `description:` at the top. |
| **DO:** Open the file, scroll it for 10 seconds. | Point at frontmatter (`---` block) and 5–6 bullets. |
| **SAY:** “Next time I type `/` and the skill name, or I just say ‘follow our UI skill’. Teammates get it because it’s in git.” | Don’t read the skill aloud. |

If `/create-skill` is awkward on stage, skip the slash and type:

> make a small project skill at .cursor/skills/fidelis-ui/SKILL.md so future agents match our cards, colors, and how we add views

Same outcome.

---

## 14:00–15:00 · Cloud Agents (then stop)

| You | Notes |
| --- | --- |
| **DO:** On the Agent input, open the dropdown and click **Cloud** (or open [cursor.com/agents](https://cursor.com/agents) on your phone). | Don’t wait for it to finish. |
| **SAY:** “Everything so far used my laptop. Cloud Agents get their own machine and a PR. I kick it off and close the lid.” | GitHub repo is already [idildogaturkmen/fidelis](https://github.com/idildogaturkmen/fidelis). |
| **TYPE (short):** `add a short packing list to the trip dossier, same card style, then open a PR` | You can send this from the website or Slack `@cursor` too. |
| **SAY:** “I’d review that PR tomorrow. That’s the loop — not magic autocomplete.” | End. Don’t demo the packing list if it isn’t done. |

---

## Recap (20 seconds)

1. **Agent** — a real feature, typed like a Slack message.
2. **Cmd+K** — a few lines, in place.
3. **Skill** — teach the repo how you like UI, once.
4. **Cloud** — same agent, not on your laptop.

---

## If wifi / Agent dies

You can still look like you meant it:

1. File tree: `index.html` is the app, `netlify/functions/plan.js` is the planner.
2. Cmd+K on the homepage `<h1>`: `make this punchier, keep the line break`.
3. Show [cursor.com/agents](https://cursor.com/agents) even if you don’t launch.

---

## Cheatsheet (if your mind blanks)

| Beat | Type this, nothing else |
| --- | --- |
| Agent | `look around first, then add a day-by-day itinerary for this trip — one card per day, friendly empty days, button on the trip page, match existing styles, no react` |
| Cmd+K | select heading → `call this Your trip, day by day` |
| Skill | `/create-skill fidelis UI — same cards, teal, Fraunces, views stay in index.html` |
| Cloud | `packing list on the dossier, same style, open a PR` |
| Fix | `smallest fix, don’t refactor` |
