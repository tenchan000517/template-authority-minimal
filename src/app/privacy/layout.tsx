import { company } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Privacy Policy',
  description: `${company.name}の個人情報保護方針をご確認いただけます。`,
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
