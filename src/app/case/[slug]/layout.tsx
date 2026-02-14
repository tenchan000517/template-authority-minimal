import type { Metadata } from "next";
import { meta, company, getCaseBySlug, cases } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

// 動的ページ用のメタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);

  if (!caseData) {
    return {
      title: "事例が見つかりません",
      robots: { index: false },
    };
  }

  const title = `${caseData.title} | Case Study`;
  const description = caseData.lead || `${caseData.client}様の事例：${caseData.title}`;

  return {
    // === 基本SEO ===
    title: title,
    description: description,

    // === OpenGraph (SNS共有時) ===
    openGraph: {
      title: `${title} | ${meta.siteName}`,
      description: description,
      url: `${meta.siteUrl}/case/${slug}`,
      siteName: meta.siteName,
      locale: "ja_JP",
      type: "article",
      images: caseData.mainImage
        ? [
            {
              url: caseData.mainImage,
              alt: `${caseData.client}：${caseData.title}`,
            },
          ]
        : undefined,
    },

    // === Twitter Card ===
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${meta.siteName}`,
      description: description,
      images: caseData.mainImage ? [caseData.mainImage] : undefined,
    },

    // === Canonical URL (重複コンテンツ対策) ===
    alternates: {
      canonical: `/case/${slug}`,
    },

    // === LLMO対応 (AI検索エンジン最適化) ===
    other: {
      "ai:summary": `${caseData.client}様の事例。${caseData.lead}`,
      "ai:topics": `事例, 実績, ${caseData.industry}, ${caseData.scope.join(", ")}`,
    },
  };
}

export default function CaseDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
