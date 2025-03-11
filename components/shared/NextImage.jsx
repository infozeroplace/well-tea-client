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
      alt={alt ?? "well-tea-image"}
      // height={presets?.height}
      // width={presets?.width}
      // fill={props?.fill}
      // unoptimized={img.startsWith("http")}
      {...(props.fill
        ? { fill: true }
        : { width: presets?.width, height: presets?.height })}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("w-full h-full object-cover", props?.className)}
      style={props.style}
      priority={true}
      quality={props.quality ?? 75}
    />
  );
}
