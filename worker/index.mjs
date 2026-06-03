/**
 * enspyr-forge-api — the hosted forge backend for the Enspyr StartSpace flyer.
 *
 * A thin instance of the forge-web-app engine: all the loop / SSE / auth / rate-limit / CORS /
 * trajectory machinery lives in forge-web-app; this binds it to the enspyr profile.
 *
 * Secrets (wrangler secret put NAME):
 *   CLAUDE_CODE_OAUTH_TOKEN   (preferred — Max subscription, from `claude setup-token`)
 *   FORGE_PASSPHRASE          (fail-closed access gate)
 *   ANTHROPIC_API_KEY         (metered fallback)
 */
import { createForgeWorker } from "forge-web-app/worker";
import { profile } from "../profile.mjs";

export default createForgeWorker(profile);
