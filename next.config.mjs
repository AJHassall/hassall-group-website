import bundleAnalyzer from '@next/bundle-analyzer';

const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/hassall-group-website'
  : '';


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

  env: {
    pathPrefix,
  },
  
});
