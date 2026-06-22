import { app } from "../server";

export default app;

export const config = {
  // Vercel config mendukung runtime: "nodejs" | "edge" | "experimental-edge"
  // Express + fs butuh Node.js.
  runtime: "nodejs",
  maxDuration: 60,
};
