import type { VercelRequest, VercelResponse } from "@vercel/node";
import { app } from "../server";

// Catch-all agar semua route `/api/*` masuk ke Express app.
export default function handler(req: VercelRequest, res: VercelResponse) {
  return (app as any)(req, res);
}

export const config = {
  runtime: "nodejs",
  maxDuration: 60,
};
