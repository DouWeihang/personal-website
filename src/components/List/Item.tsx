import Link from "next/link";
import Image from "next/image";

interface TypeListItemProps {
  /** @param src 封面地址 */
  src: string;
  /** @param name 名称 */
  name: string;
  /** @param desc 简介 */
  desc?: string | null;
  /** @param url 链接 */
  url: string;
  children?: React.ReactNode;
}

/**
 * @name Item 内容列表-单个元素
 * @description 凑合用吧
 */
const Item: React.FC<TypeListItemProps> = ({ src, url, name, desc }) => (
  <Link
    href={url}
    className="w-[302px] mb-[10px] p-[10px] rounded-md border border-slate-100 overflow-hidden cursor-pointer hover:shadow-post duration-75"
  >
    <div className="overflow-hidden rounded-md">
      <Image
        alt="#"
        priority
        width={280}
        height={180}
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${src}`}
        className="min-w-[280px] h-[180px] object-cover w-auto transition hover:scale-110"
      />
    </div>
    <h2 className="mt-[10px] text-[16px] font-bold truncate">{name}</h2>
    <p className="mt-[4px] truncate text-black/[0.5]">{desc}</p>
  </Link>
);

export default Item;
