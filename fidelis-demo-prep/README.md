# Apply this kit to Fidelis (your laptop)

This cloud environment cannot push to `idildogaturkmen/fidelis`. Copy these files into your **local Fidelis clone**, then commit there.

From the Fidelis repo root:

```bash
git checkout main
git pull
git checkout -b demo/startup-club-live

# If this kit lives next to fidelis (adjust the path):
cp /path/to/cursor-demo/fidelis-demo-prep/demo/sample-trip.js demo/sample-trip.js
mkdir -p demo
cp /path/to/cursor-demo/STARTUP_CLUB_DEMO.md DEMO_SCRIPT.md
cp /path/to/cursor-demo/fidelis-demo-prep/favicon.svg favicon.svg
git apply /path/to/cursor-demo/fidelis-demo-prep/fidelis.patch
```

Or copy by hand:

1. Add `demo/sample-trip.js` (this folder).
2. Add `DEMO_SCRIPT.md` (the `STARTUP_CLUB_DEMO.md` file in the parent repo).
3. Patch `index.html` / `README.md` with `fidelis.patch` (Lisbon demo button + script tag).
4. Optional: `favicon.svg` so the browser tab isn’t a 404 on stage.

Then:

```bash
npx --yes serve . -p 5173
```

Open `http://localhost:5173` → **Open the Lisbon demo trip →**.

Do **not** add the itinerary view, the skill, or Cmd+K copy changes ahead of time — those are the live prompts in `DEMO_SCRIPT.md`.
