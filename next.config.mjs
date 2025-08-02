/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Adicione a linha 'formats' abaixo
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lmkyii2kcbi12kxo.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;