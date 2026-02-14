import { company } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | About',
  description: `${company.name}の会社概要。所在地、事業内容、沿革をご紹介します。`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
