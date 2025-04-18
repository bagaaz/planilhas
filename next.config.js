/** @type { import('next').NextConfig } */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Adicione aqui os domínios de onde irá carregar imagens, ex.: 'images.unsplash.com'
    ],
  },
}

module.exports = nextConfig;