import type { NextConfig } from "next";

/**
 * Site 100 % statique (dossier out/).
 * Publié sur Cloudflare Pages (keurbible.com) par .github/workflows/deploy.yml ;
 * en-têtes et redirections dans public/_headers et public/_redirects.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
  poweredByHeader: false,
  // CSS écrit dans la page au lieu d'un fichier à télécharger avant l'affichage : un aller-retour réseau de moins sur téléphone.
  experimental: { inlineCss: true },
};

export default nextConfig;
