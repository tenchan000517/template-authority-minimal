import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'コラム | Column',
  description: 'ブランディング、デザイン、戦略に関するコラムをお届けします。',
};

export default function ColumnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
