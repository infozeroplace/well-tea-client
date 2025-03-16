
import { cn } from "@/utils/cn";
import Image from "next/image";


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
      height={presets?.height ?? "400"}
      width={presets?.width ?? "400"}
      layout="intrinsic"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("w-full h-full object-contain", props?.className)}
      style={props.style}
      priority={props.priority ?? false}
      quality={props.quality ??  80 }
      placeholder="blur" 
      blurDataURL="/public/images/newproduct_one.jpg"
      loading={props.priority ? "eager" : "lazy"}
    />
  );
}
