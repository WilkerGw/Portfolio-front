/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lmkyii2kcbi12kxo.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      // --- ADICIONE ESTE BLOCO NOVO AQUI ---
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      // ------------------------------------
    ],
  },
};

export default nextConfig;