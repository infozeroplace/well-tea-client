import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div>
      <Image src="/images/welltea_hero.png" alt="Hero Image" width={2400} height={800}/>
    </div>
  );
}

export default Hero