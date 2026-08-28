const DEFAULT_GITHUB_PAGES_BASE_PATH = '';

export const siteBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? DEFAULT_GITHUB_PAGES_BASE_PATH : '');

export function sitePath(path: string) {
  if (!path || path === '/') {
    return siteBasePath ? `${siteBasePath}/` : '/';
  }

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('data:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}