/**
 * Enspyr · StartSpace flyer — a forge-web-app instance.
 *
 * The SECOND instance of the forge-web-app engine (after beamers-network), and a deliberate
 * stress-test of the profile contract: where beamers is mythic parchment + terminal, this is a
 * clean modern dev-studio aesthetic (indigo #4f46e5 + amber #fbbf24, Geist, soft shadows). Same
 * engine, opposite skin — if both work, the generalization holds.
 *
 * Brand pulled from enspyrco-site: indigo primary, amber accent, Geist Sans/Mono, white/near-black.
 * Voice from Enspyr's own copy: "we build digital products people actually want to use",
 * "one studio, lots of agents" (AI agents as first-class collaborators), Melbourne, since 2013.
 */
import { defineProfile } from "forge-web-app";

export const profile = defineProfile({
  name: "enspyr-startspace",
  workerUrl: "https://enspyr-forge-api.nick-meinhold.workers.dev",
  allowedOrigins: [
    "https://enspyrco.github.io",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:8011",
    "http://127.0.0.1:8011",
  ],

  artifact: {
    kind: "html-document",
    spec:
      "ONE self-contained A4 PORTRAIT print flyer (210x297mm) — all CSS inline in a <style> tag, " +
      "no external JS, no external assets except Google Fonts (Geist / Geist Mono) via <link> and " +
      "an inlined QR as a data: URI. Must print clean at A4 with `@page { size: A4; margin: 0 }`, " +
      "render immediately in an iframe, and read well both pinned on a wall (from a distance) and up close.",
    baseArtifactUrl: "../flyer.html", // the current flyer (root) — the /forge/ UI riffs on it
  },

  builderPersona:
    "You design print flyers for Enspyr — a small Melbourne digital-products studio (since 2013) that " +
    "builds web & mobile apps, custom software, and AI for founders. House style is clean, modern and " +
    "confident: indigo (#4f46e5) primary with an amber (#fbbf24) accent, Geist / Geist Mono type, white " +
    "background, near-black (#171717) text, soft shadows, generous whitespace. Voice: warm, plain-spoken, " +
    "a little playful — never corporate jargon. The studio's edge is shipping like a big team because it " +
    "builds with AI agents as first-class collaborators.",

  // Always scored, every cast — the things a riff must not break.
  canonCriteria: [
    "leads with the hook 'we eat complexity for breakfast' and the offer 'we build apps for people'",
    "stays on Enspyr brand: indigo #4f46e5 primary + amber #fbbf24 accent, Geist/Geist Mono, white bg, near-black text, soft shadows",
    "names what Enspyr builds (web & mobile, custom software, AI & data) and the 'one studio, lots of agents' edge",
    "speaks to StartSpace founders and has a clear call to action with a scannable QR to enspyr.co",
    "fits ONE A4 portrait page, prints clean (no clipped content), and reads from a distance when pinned to a wall",
    "all text passes WCAG AA contrast",
  ],

  examples: [
    "make the hook bigger and more in-your-face — bolder hero",
    "warmer and friendlier for non-technical founders",
    "lean into the breakfast pun more playfully (menu styling)",
    "a calmer, more premium / minimal version with more whitespace",
    "dark version — near-black background, indigo and amber glowing",
    "add a 'from idea to launch in weeks' speed angle",
  ],

  copy: {
    castButton: "Forge the flyer",
    judgmentTitle: "evaluation",
    building: "designing…",
    judging: "scoring…",
    shipped: "shipped — best is iteration {best}.",
    exhausted: "iterations spent; the best is marked. Refine the brief and forge again.",
    shipBadge: "SHIP",
    nextFix: "next change:",
    wishPlaceholder: "e.g. make the hook bigger, or try a dark version…",
  },
});
