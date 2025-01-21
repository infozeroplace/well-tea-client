"use client"
import React from 'react'
import Link from 'next/link';
// import { useRouter } from "next/navigation";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "next-share";

function SocialShare({ productUrl}) {
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
        icon: FaInstagram,
        url: `https://www.instagram.com/?url=${encodeURIComponent(productUrl)}`,
        ariaLabel: "Share on Instagram",
      },
      {
        name: "X",
        icon: FaXTwitter,
        url: `https://twitter.com/share?url=${encodeURIComponent(productUrl)}`,
        ariaLabel: "Share on X",
      },
    ];

  return (
    <div>
      <div className="flex gap-5">
        <h3>Share</h3>
        {/* <div className="flex gap-5">
          {socialSites.map((site, index) => (
            <Link key={index} href={site.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-2">
                <site.icon className="" />
              </div>
            </Link>
          ))}
        </div> */}
        <div className="flex gap-5">
          <FacebookShareButton url={productUrl}>
            <FacebookIcon size={16} />
          </FacebookShareButton>
          <TwitterShareButton url={productUrl}>
            <TwitterIcon size={16} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}

export default SocialShare;