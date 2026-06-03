# Enspyr · StartSpace flyer

A print flyer for [Enspyr](https://enspyr.co) to pin up at **StartSpace** — *"we eat complexity
for breakfast / we build apps for people"* — **and** a [forge-web-app](https://github.com/nickmeinhold/forge-web-app)
instance that can iterate it.

- **`flyer.html`** — the artifact. Self-contained **A4** portrait poster (wall / noticeboard),
  Geist via Google Fonts + an inlined QR. Open it and print at A4, or **File → Print → Save as PDF**.
- **`flyer-a5.html`** — the same design at **A5** (handout). Prints as one clean A5 page.
- **The QR is a prefilled email**, not a link: scanning opens the phone's mail composer addressed
  to `contact@enspyr.co` with subject *"Idea from StartSpace"* and a short fill-in body (the idea +
  how to reach them). No form to host — it deep-links straight into "work with us".
- **`profile.mjs`** — the forge contract for this instance: Enspyr brand canon, builder persona,
  acceptance criteria, riff examples. The second instance of the engine (beamers was the first),
  proving the contract holds across opposite aesthetics.
- **`forge-local/cast.mjs`** — iterate the flyer locally: Claude designs, Gemini + Codex judge.

## Iterate the flyer

```bash
npm install
node forge-local/cast.mjs --wish "make the hook bigger and bolder" --rounds 2
# -> writes candidates to forge-local/out/, scored by a foreign model panel + trajectory analysis
```

(Needs the `claude`, `gemini`, and `codex` CLIs on PATH. A hosted single-model web forge can be
added later — `worker/` + `forge/` like beamers-network — if this wants to live online.)

## Brand

Indigo `#4f46e5` primary · amber `#fbbf24` accent · Geist / Geist Mono · white / near-black
`#171717` · soft shadows. Pulled from `enspyrco-site`.
