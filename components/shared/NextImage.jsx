import Image from "next/image";
import { cn } from "@/utils/cn";

export default function NextImage({
  img,
  alt,
  presets,
  ...props
}) {
  return (
    <Image
      title={props.title}
      src={img}
      alt={alt ?? "zero-place-image"}
      height={presets?.height ?? 350}
      width={presets?.width ?? 350}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("w-full h-full object-cover", props.className)}
      priority={true}
    />
  );
}
