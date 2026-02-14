import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サービス | Services',
  description: '戦略設計、デザイン、ブランディング。本質的な課題に向き合い、持続的な価値を生み出します。',
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
