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
      height={presets?.height}
      width={presets?.width}
      fill={props?.fill}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("w-full h-full object-cover", props?.className)}
      style={props.style}
      priority={true}
    />
  );
}
