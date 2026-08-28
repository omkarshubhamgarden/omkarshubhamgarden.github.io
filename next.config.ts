import type {NextConfig} from 'next';

const githubPagesBasePath = '/shubham-omkar';
const configuredBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? githubPagesBasePath : '');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: configuredBasePath,
  assetPrefix: configuredBasePath,
};

export default nextConfig;
