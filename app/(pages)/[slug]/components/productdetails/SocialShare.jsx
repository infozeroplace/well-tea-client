"use client";
import { FacebookShareButton, TwitterShareButton } from "next-share";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
// import { env } from "@/config/env";

function SocialShare({ productUrl }) {
  const siteUrl = "https://welltea.bikolpo.com/";

  const socialSites = [
    {
      shareButton: FacebookShareButton,
      url: `${siteUrl}${productUrl}`,
      icon: GrFacebookOption,
      ariaLabel: "Share on Facebook",
    },
    {
      shareButton: TwitterShareButton,
      url: `${siteUrl}${productUrl}`,
      icon: FaXTwitter,
      ariaLabel: "Share on Twitter",
    },
  ];

  return (
    <div>
      <div className="flex gap-5">
        <h3>Share</h3>
        {/* <div className="flex gap-5">
          {socialSites.map((site, index) => (
            <Link
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-2">
                <site.icon className="" />
              </div>
            </Link>
          ))}
        </div> */}
        <div className="flex gap-5">
          {socialSites.map((site, index) => (
            <site.shareButton
              key={index}
              url={site.url}
              target="_blank"
              className="flex items-center space-x-2"
            >
              <site.icon className="" />
            </site.shareButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialShare;
