import React from 'react'

function MerqueeText() {
  return (
    <div className="">
      <div class="marquee relative w-[100vw] max-w-full h-32 bg-teagreen-500 overflow-x-hidden">
        <div class="track flex absolute mt-12 -translate-y-1/2 text-teagreen-800 whitespace-nowrap will-change-transform">
          <div class="uppercase whitespace-nowrap font-medium text-2xl tracking-wider px-4">
            We Blend for People & Planet / We Blend for People & Planet
            / We Blend for People & Planet / We Blend for People & Planet
            / We Blend for People & Planet /
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerqueeText;