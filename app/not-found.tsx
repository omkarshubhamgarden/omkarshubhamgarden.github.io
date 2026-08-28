import Link from 'next/link';
import { sitePath } from '@/lib/site';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href={sitePath('/')}>Return Home</Link>
    </div>
  )
}
