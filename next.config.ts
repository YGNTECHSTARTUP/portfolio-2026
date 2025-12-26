import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow fetching images from Last.fm CDN used by the music player
    domains: ["lastfm.freetls.fastly.net"],
    // alternatively, use `remotePatterns` for more granular control
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "lastfm.freetls.fastly.net",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;
