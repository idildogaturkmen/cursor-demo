# Tonight: get Fidelis ready in Cursor

You are currently in **cursor-demo** (Orbit Board). Tomorrow’s demo is **[fidelis](https://github.com/idildogaturkmen/fidelis)**.

## 1. Open Fidelis (not this chat)

In the left sidebar under **Projects**, click **fidelis**.

Then look at the top of the window:

- If you see **IDE** — click it. You want the **editor** (files + chat), not the Agents Window.
- Or: right-click **fidelis** → **Open in IDE**.

**Cmd+K in the Agents Window is not inline edit.** It opens the search overlay you screenshotted (“Search projects, agents, Canvas…”). That is expected. Inline edit only works in the **IDE**, with a **file open** and **code selected**.

## 2. New chat on Fidelis

Once Fidelis is the active project, press **Cmd+N**.

**Say tomorrow:** new chat per feature. One long thread fills the context window and the model gets worse. **Cmd+N** starts clean.

## 3. Branch + sample trip (so you don’t need the API)

In the Fidelis folder, terminal:

```bash
cd /path/to/fidelis
git checkout main
git pull
git checkout -b demo/startup-club-live
mkdir -p demo
```

Copy from this cursor-demo repo (adjust the first path):

```bash
cp /path/to/cursor-demo/fidelis-demo-prep/demo/sample-trip.js demo/
cp /path/to/cursor-demo/STARTUP_CLUB_DEMO.md DEMO_SCRIPT.md
cp /path/to/cursor-demo/fidelis-demo-prep/favicon.svg .
git apply /path/to/cursor-demo/fidelis-demo-prep/fidelis.patch
```

Then:

```bash
npx --yes serve . -p 5173
```

Open `http://localhost:5173` → **Open the Lisbon demo trip**. You should see the dossier. There must **not** already be a “View itinerary” button.

## 4. Practice Cmd+K once (then undo)

1. In the **IDE**, open `index.html`.
2. Select any short sentence (the hero `<p>` is fine).
3. **Cmd+K** — a bar should appear **on the code**, not a full-screen search.
4. Type `make this one clause shorter` → Return → accept.
5. **Cmd+Z** to undo. Do not leave the edit.

If Cmd+K still opens search: you are still in the Agents Window, or the editor didn’t have a selection. Click in the file first.

## 5. Practice `/create-skill` (don’t save)

In Agent chat type `/create-skill` so you see the menu. **Esc** — do not create the skill tonight. You’ll do that live.

## 6. Leave the branch clean

No itinerary view. No `.cursor/skills/fidelis-ui`. Sample trip + script only.

Commit locally if you want (`git add demo index.html DEMO_SCRIPT.md && git commit -m "demo fixture"`). You don’t have to push.
