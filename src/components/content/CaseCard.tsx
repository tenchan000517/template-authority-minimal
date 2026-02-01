import Link from 'next/link';
import Image from 'next/image';

interface CaseCardProps {
  image: string;
  client: string;
  scope: string[];
  title: string;
  href: string;
  isMain?: boolean;
}

export default function CaseCard({
  image,
  client,
  scope,
  title,
  href,
  isMain = false,
}: CaseCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative ${
          isMain ? 'aspect-[16/9]' : 'aspect-[4/3]'
        } bg-gray overflow-hidden`}
      >
        <Image
          src={image}
          alt={`${client}：${title}`}
          fill
          sizes={isMain ? '(max-width: 1024px) 100vw, 800px' : '(max-width: 1024px) 50vw, 400px'}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className={isMain ? 'mt-6' : 'mt-5'}>
        <p className={`text-light ${isMain ? 'text-[13px]' : 'text-[12px]'}`}>
          {client} / {scope.join('、')}
        </p>
        <h3
          className={`mt-2 font-mincho text-main group-hover:text-sub transition-colors ${
            isMain
              ? 'text-[20px] lg:text-[24px]'
              : 'text-[18px] lg:text-[20px]'
          }`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
