import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '事例 | Case Studies',
  description: 'これまでに手掛けたプロジェクトの事例をご紹介します。',
};

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
