# Fidelis × Cursor — speaker card (15 min)

Repo: [github.com/idildogaturkmen/fidelis](https://github.com/idildogaturkmen/fidelis)
Live site: [fidelisapp.netlify.app](https://fidelisapp.netlify.app)

Phone / print this. **Left = say or type. Right = only you.**

Type like Slack. Don’t paste a spec.

**Must be in the IDE** (click **IDE** at the top, or right-click **fidelis** → Open in IDE). The Agents Window makes Cmd+K open search, not inline edit.

---

## Shortcuts you’ll mention

| Keys | What it is |
| --- | --- |
| **Cmd+/** | Cycle / open the **model** picker |
| **Cmd+N** | **New chat.** New feature → new conversation. Long threads fill context and get worse. |
| **Cmd+K** | **Inline edit** — only in the IDE, with code **selected**. In the Agents Window it is search (ignore that tomorrow). |
| **Cmd+L** | Send the selection to Agent |
| **/** | Skills menu. **`/create-skill`** writes a new playbook into the repo. |

Modes on the Agent box: **Ask** (read-only) · **Plan** (plan, no code) · **Agent** (does the work) · **Debug** (hunt a failure) · **Cloud** (VM + PR). Parallel chats = **Cmd+N** while another run is going (multitask).

---

## 0:00–1:00 · Live product

| You | Notes |
| --- | --- |
| Browser: **fidelisapp.netlify.app** | 30 seconds. Don’t run the quiz on stage (API). |
| **SAY:** “This is Fidelis — I shipped it. Quiz in, trip dossier out. Cursor is how I actually build on it.” | Then switch to Cursor, project **fidelis**, **IDE** view. |

---

## 1:00–2:00 · Editor + model + new chat

| You | Notes |
| --- | --- |
| **DO:** **Cmd+N** | Empty thread. |
| **SAY:** “**Cmd+N** — new chat for a new feature. If I keep one giant thread, context grows and it gets dumber and more expensive.” | |
| **DO:** **Cmd+/** | Model names flip / picker opens. |
| **SAY:** “**Cmd+/** picks the model. I use **Fable 5** to plan or start from scratch. Once I know the change I switch to **Grok 4.6 or 4.7** — faster, fewer tokens.” | Leave **Grok 4.7** on if switching live feels messy. |
| Local tab: `localhost:5173` → Lisbon demo trip (or Resume). | Side browser next to the code. |

---

## 2:00–5:00 · Plan mode (don’t code yet)

Switch the mode dropdown to **Plan**.

**TYPE:**

> I want a day-by-day itinerary for the current trip — one card per day, friendly empty days, a button on the trip page. don’t write code yet, just plan it. this is vanilla JS in index.html, no react.

| You | Notes |
| --- | --- |
| **SAY:** “Plan mode researches and writes steps. I can edit the plan before anything changes.” | Skim 3 bullets out loud. Don’t accept a rewrite to Next. |
| **SAY:** “Ask is for questions with no edits. Debug is when something is red. Agent is when I want it to build. I can **Cmd+N** a second chat if I want two things at once.” | That’s Ask / Debug / Agent / multitask in 15 seconds. Don’t demo all four as separate epics. |

---

## 5:00–10:00 · Agent implements

Switch to **Agent**. Same chat is fine.

**TYPE:**

> ok implement that plan. keep it small. match the existing look.

| You | Notes |
| --- | --- |
| While it runs: click files in the diff. | If it starts React: `stay in index.html, vanilla only`. |
| Error: | `that’s the error — smallest fix, don’t refactor` |
| Click the new itinerary button in the browser. | Day 3 empty → your Cmd+K setup. |

Optional **Ask** (Cmd+N if you want a side thread):

> how do views work in this app? don’t change anything

Optional **Debug** only if something actually broke. Don’t fake a bug.

---

## 10:00–12:00 · Cmd+K in the editor

| You | Notes |
| --- | --- |
| Open `index.html`, **select** the new itinerary heading. | If you don’t select, Cmd+K may feel like search. |
| **SAY:** “Chat is overkill for a heading. Select, **Cmd+K** — the bar sits on the code.” | |
| **TYPE:** `call this Your trip, day by day` | Return, accept. **Cmd+Z** if you need to undo. |
| Optional: select empty state → Cmd+K → `Free day. Add something fun?` | |
| **SAY:** “**Cmd+L** would throw this selection into Agent if it got bigger.” | Refresh the browser. |

---

## 12:00–14:00 · `/create-skill`

**TYPE** `/create-skill` then keep going:

> for fidelis UI. save it in the project. whenever we change the interface, reuse our cards and buttons, keep the teal palette and Fraunces headings, empty states stay short, and new screens are another view in index.html not a new framework.

| You | Notes |
| --- | --- |
| **SAY:** “A skill is a playbook in git. Next time I type `/` and the name, or it just follows the conventions.” | Open `.cursor/skills/…/SKILL.md` for 10 seconds. Don’t read it. |

---

## 14:00–15:00 · Cloud

Dropdown → **Cloud** (or cursor.com/agents). Don’t wait.

**TYPE:**

> add a short packing list to the trip dossier, same card style, open a PR

**SAY:** “That run is on a VM, not my laptop. I review the PR tomorrow.” Stop.

---

## Recap

Live site → Plan a ticket → Agent ships it → Cmd+K for a line → skill so the next agent matches your UI → Cloud while you sleep.

**Cmd+/** model · **Cmd+N** new chat · **Cmd+K** inline in the IDE.

---

## If it breaks

| Problem | Fix |
| --- | --- |
| Cmd+K opens search overlay | You’re in Agents Window. Click **IDE**. Select code in the file. |
| Agent adds React | `vanilla JS only, stay in index.html` |
| No trip on screen | Lisbon demo button / Resume last trip. Don’t quiz-generate live. |
| Wifi dies | Cmd+/ + Cmd+N + Cmd+K on the homepage headline, show Cloud tab. |
