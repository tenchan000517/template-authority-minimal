import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '代表メッセージ | Philosophy',
  description: '代表者の考え方と価値観をお伝えします。本質を、かたちに。',
};

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
