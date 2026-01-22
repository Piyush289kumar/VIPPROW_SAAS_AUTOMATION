import Image from "next/image";

interface EditorialCardProps {
  image: string;
  title: string;
  meta: string;
}

export default function EditorialCard({
  image,
  title,
  meta,
}: EditorialCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Card */}
      <div
        className="
          relative aspect-[1/1] overflow-hidden rounded-sm
          bg-zinc-900
        "
      >
        {/* Background image */}
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Text */}
      <div className="mt-3 space-y-1">
        <p className="text-md text-zinc-200">{title}</p>
        <span className="text-xs text-zinc-300">{meta}</span>
      </div>
    </div>
  );
}
