import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPO_NAME;
const isProjectPages = Boolean(repoName) && repoName !== "Dbilynskyy.github.io";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: isProjectPages ? `/${repoName}/` : ""
};

export default nextConfig;
