import type { Metadata } from "next";
import { meta, company, getColumnBySlug, columns } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

// 動的ページ用のメタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const column = getColumnBySlug(slug);

  if (!column) {
    return {
      title: "記事が見つかりません",
      robots: { index: false },
    };
  }

  const title = `${column.title} | Column`;
  const description = column.subtitle || column.title;

  return {
    // === 基本SEO ===
    title: title,
    description: description,

    // === OpenGraph (SNS共有時) ===
    openGraph: {
      title: `${title} | ${meta.siteName}`,
      description: description,
      url: `${meta.siteUrl}/column/${slug}`,
      siteName: meta.siteName,
      locale: "ja_JP",
      type: "article",
      images: column.thumbnail
        ? [
            {
              url: column.thumbnail,
              alt: column.title,
            },
          ]
        : undefined,
    },

    // === Twitter Card ===
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${meta.siteName}`,
      description: description,
      images: column.thumbnail ? [column.thumbnail] : undefined,
    },

    // === Canonical URL (重複コンテンツ対策) ===
    alternates: {
      canonical: `/column/${slug}`,
    },

    // === LLMO対応 (AI検索エンジン最適化) ===
    other: {
      "ai:summary": `${column.title}。${description}`,
      "ai:topics": `コラム, 記事, ${column.category}, ${column.author}`,
    },
  };
}

export default function ColumnDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
