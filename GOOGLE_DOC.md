# Fidelis × Cursor — one pager (slides + live demo)

Copy this into your Google Doc. One timeline. Don’t keep both old scripts.

---

## So what is Cursor?

Cursor, now part of SpaceXAI, is a coding agent for building ambitious software.

The best way I know to explain it: Cursor is a harness for AI models. An agent is three things put together.

**Instructions.** Your prompt, plus any rules or skills you've set up for your project. This is how you tell it what you want and how your codebase works.

**Tools.** The agent can edit files, search your codebase, run commands in the terminal, and use a browser to check its own work. This is what makes it more than a chatbot. It can actually do things in your project.

**Model.** The AI model you pick to drive it.

Instructions plus tools plus model equals an agent that can plan a change, edit across files, run it, and check it.

And the part I care about most: you stay in control. You can ask it to plan before it writes any code. You review every diff before you accept it. And there are checkpoints, so if it goes somewhere you don't like, you roll back. Think of it as a really strong collaborator that you steer, not autopilot.

Three things to watch for in my demo: Agent building a multi-file feature, Cmd+K for quick inline edits, and skills, which are reusable instructions that live in your repo in a `.cursor/skills` folder.

---

## Shortcuts I’ll mention

| Keys | What |
| --- | --- |
| **Cmd+I** | Open the side Agent panel |
| **Cmd+/** | Change / cycle the model |
| **Cmd+N** | New chat. New feature → new conversation. Long threads fill context and get worse. |
| **Cmd+K** | Inline edit. Select code in the **IDE** first. (In the Agents Window this is search — ignore that.) |
| **Cmd+L** | Send the selection to Agent |
| **/** then **`/create-skill`** | Write a skill into `.cursor/skills/` |

**Modes** (dropdown on the Agent box): **Ask** = questions, no edits · **Plan** = plan, no code · **Agent** = build it · **Debug** = something is red · **Cloud** = VM + PR. **Cmd+N** again while one run is going = two things at once.

**Models:** Fable 5 to plan or start from scratch. Grok 4.6 / 4.7 to implement faster with fewer tokens. Staying on Grok 4.7 the whole 15 min is fine; the picker is the point.

---

## Before the room (not on the clock)

Already on branch `demo/startup-club-live` in `~/Desktop/fidelis`.

```bash
cd ~/Desktop/fidelis
npx --yes serve . -p 5173
```

Leave that running. Confirm [http://localhost:5173](http://localhost:5173) shows **Open the Lisbon demo trip**. No “View itinerary” yet.

---

## Live (15 min) — type these, don’t paste a spec

### 0:00 · Live site
Browser: [fidelisapp.netlify.app](https://fidelisapp.netlify.app)

**Say:** This is Fidelis — I shipped it. Quiz in, trip dossier out. Cursor is how I actually build on it.

Don’t run the quiz live. Then switch to Cursor, project **fidelis**, **IDE** (not Agents Window).

### 1:00 · New chat + model
**Cmd+N.** **Cmd+I** if the side Agent panel isn’t open. **Cmd+/**

**Say:** Cmd+/ is the model. Fable 5 to plan or start from scratch; Grok 4.6/4.7 to implement cheaper. Cmd+N because context rots.

Click **Open the Lisbon demo trip**.

**Say:** Quiz in front, dossier in back. I want a dedicated itinerary view — a real ticket.

### 2:00 · Plan mode
Switch dropdown to **Plan**. Type:

> I want a day-by-day itinerary for the current trip — one card per day, friendly empty days, a button on the trip page. don’t write code yet, just plan it. this is just JS in index.html, no react.

**Say (one breath):** Ask = questions, no edits. Debug = something is red. Agent = build it. Cmd+N again = two things at once.

### 5:00 · Agent (same chat)
Switch to **Agent**. Type:

> ok implement that plan. keep it small. match the existing look.

While it runs: I didn’t paste a spec. Cursor has the files.

If it reaches for React: `stay in index.html, vanilla only`

If it errors: `that’s the error — smallest fix, don’t refactor`

Then click the new itinerary button.

### 10:00 · Cmd+K
Select the new itinerary heading. **Cmd+K**. Type:

> call this Your trip, day by day

Return → accept. Undo is **Cmd+Z**.

Optional: empty-day sentence → Cmd+K → `make this empty state "Free day. Add something fun?"`

**Say:** Chat is overkill for a heading. Cmd+L would throw this selection into Agent if it got bigger.

### 12:00 · Skills
Type `/create-skill` then:

> for fidelis UI. save it in the project. reuse our cards and buttons, teal palette, and fonts, empty states stay short, new screens are another view in index.html not a new framework.

Open the file for 10 seconds.

**Say:** Next time I type / and the skill name. Teammates get it because it’s in the repo.

### 14:00 · Cloud
Agent box dropdown → **Cloud** (or [cursor.com/agents](https://cursor.com/agents)). Don’t wait. Type:

> add a short packing list to the trip dossier, same card style, open a PR

**Say:** Laptop vs a VM and a PR I review tomorrow. Stop.

### Recap
Agent = a feature. Cmd+K = a few lines. Skill = teach the repo once. Cloud = same loop after you close the lid.

If Agent dies: Cmd+K the homepage headline `make this punchier`, and still show the Cloud tab.
