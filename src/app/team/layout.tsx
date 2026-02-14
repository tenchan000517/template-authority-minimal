import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'チーム | Team',
  description: '私たちと一緒に、本質的な価値を生み出しましょう。',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
