import type {NextConfig} from 'next';

// For user/org pages repo (omkarshubhamgarden.github.io) the site is served at root "/".
// For project pages (e.g., vighneshnilajakar.github.io/shubham-omkar) it would be "/shubham-omkar".
// Default to "" for https://omkarshubhamgarden.github.io/ — override via NEXT_PUBLIC_BASE_PATH if needed.
const githubPagesBasePath = '';
const configuredBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? githubPagesBasePath : '');

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
