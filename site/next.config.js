/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Moon',
    description: 'Moon custom workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://farfar.github.io/kasm-registry/',
    contactUrl: 'https://farfar.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
