import bundleAnalyzer from '@next/bundle-analyzer';

const pathPrefix = process.env.NODE_ENV === 'ghpages'
  ? '/hassall-group-website'
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
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  output: 'export',
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  images: { unoptimized: true } ,
  env: {
    pathPrefix,
    BASE_URL,
  },
  
});
