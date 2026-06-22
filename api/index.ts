import type { VercelRequest, VercelResponse } from "@vercel/node";
import { app } from "../server";

// Wrapper eksplisit agar kompatibel dengan Vercel Node Function handler.
export default function handler(req: VercelRequest, res: VercelResponse) {
  return (app as any)(req, res);
}

export const config = {
  // Vercel config mendukung runtime: "nodejs" | "edge" | "experimental-edge"
  // Express + fs butuh Node.js.
  runtime: "nodejs",
  maxDuration: 60,
};
