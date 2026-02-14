import type { Metadata } from "next";
import { meta, company } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "お問い合わせ | Contact",
  description: `${company.name}へのお問い合わせはこちら。プロジェクトのご相談、お見積り、採用に関するお問い合わせなど、お気軽にご連絡ください。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `お問い合わせ | Contact | ${meta.siteName}`,
    description: `${company.name}へのお問い合わせはこちら。プロジェクトのご相談、お見積りなど。`,
    url: `${meta.siteUrl}/contact`,
    siteName: meta.siteName,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `お問い合わせ | Contact | ${meta.siteName}`,
    description: `${company.name}へのお問い合わせはこちら。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/contact",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}のお問い合わせページ。プロジェクト相談、見積り、採用に関するお問い合わせを受付。`,
    "ai:topics": "お問い合わせ, 相談, 見積り, 連絡先, 採用",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
