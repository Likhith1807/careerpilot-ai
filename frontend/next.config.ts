import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid Next.js writing its own AGENTS.md into frontend/ on every
  // `next dev` -- this repo has a single project-wide guidelines file at the
  // repo root (../AGENTS.md).
  agentRules: false,
  // Smaller, self-contained production image for Docker.
  output: "standalone",
};

export default nextConfig;
