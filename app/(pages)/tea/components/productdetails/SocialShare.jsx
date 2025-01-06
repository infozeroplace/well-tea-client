// "use client"
import React from 'react'
import Link from 'next/link';
// import { useRouter } from "next/navigation";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function SocialShare({ productUrl}) {
//   const router = useRouter();
//   const currentUrl =
//     typeof window !== "undefined" && router.isReady
//       ? `${window.location.origin}${router.asPath}`
//       : "";

//       console.log(currentUrl);
    const socialSites = [
      {
        name: "Facebook",
        icon: GrFacebookOption,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          productUrl
        )}`,
        ariaLabel: "Share on Facebook",
      },
      {
        name: "Instagram",
        icon: FaXTwitter,
        url: `https://www.instagram.com/?url=${encodeURIComponent(productUrl)}`,
        ariaLabel: "Share on Instagram",
      },
      {
        name: "X",
        icon: FaInstagram,
        url: `https://twitter.com/share?url=${encodeURIComponent(productUrl)}`,
        ariaLabel: "Share on X",
      },
    ];

  return (
    <div>
        <div className="flex gap-5">
            <h3>Share</h3>
            <div className="flex gap-5">
                {socialSites.map((site, index) => (
                    <Link key={index} href={site.url} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center space-x-2">
                            <site.icon className="" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SocialShare;