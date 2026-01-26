// app/not-found.tsx (Next.js 13 App Router)
import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('/'); // redirect all 404 pages to home
}