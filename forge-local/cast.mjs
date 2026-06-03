#!/usr/bin/env node
/**
 * Local multi-model forge for the Enspyr StartSpace flyer.
 *
 * Thin wrapper over forge-web-app/local: Claude designs, Gemini + Codex judge (a foreign panel,
 * so the evaluator doesn't share the builder's blind spots). Iterates ./flyer.html against the
 * enspyr profile's canon criteria + your riff.
 *
 *   node forge-local/cast.mjs --wish "make the hook bigger and bolder" [--base ../flyer.html] [--rounds 3]
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runLocalForge } from "forge-web-app/local";
import { profile } from "../profile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const a = { rounds: profile.maxIterations, base: join(__dirname, "..", "flyer.html") };
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k === "--wish") a.wish = argv[++i];
    else if (k === "--base") a.base = argv[++i];
    else if (k === "--rounds") a.rounds = parseInt(argv[++i], 10) || profile.maxIterations;
  }
  return a;
}

const args = parseArgs(process.argv);
if (!args.wish) {
  console.error('Usage: node forge-local/cast.mjs --wish "…" [--base ../flyer.html] [--rounds 3]');
  process.exit(1);
}

const base = readFileSync(args.base, "utf8");
await runLocalForge(profile, {
  wish: args.wish,
  base,
  rounds: args.rounds,
  outDir: join(__dirname, "out"),
}).catch((e) => { console.error("forge error:", e.message); process.exit(1); });
