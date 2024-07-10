import bundleAnalyzer from '@next/bundle-analyzer';

const pathPrefix = process.env.NODE_ENV === 'ghpages'
  ? '/hassall-group-website'
  : '';

const assetPrefix = process.env.NODE_ENV === 'ghpages'
  ? 'https://ajhassall.github.io/hassall-group-website/'
  : '';
const BASE_URL  = 'http://127.0.0.1:3000';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    //optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: pathPrefix,
  images: { loader: 'akamai', path: 'hassall-group-website/' },
  env: {
    pathPrefix,
    BASE_URL,
  },
  
});
