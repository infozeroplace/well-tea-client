import Link from "next/link";
import Image from "next/image";
import BackToTopButton from "./BacktoTopButton";
import Newsletter from "./Newsletter";
import NextImage from "../shared/NextImage";
function Footer() {
  const aboutLinks = [
    {
      name: "Company Info",
      href: "/about", 
    },
    {
      name: "Goal",
      href: "/",
    },
    {
      name: "Location",
      href: "/",
    }
  ]

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: "bx bxl-facebook-circle",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: "bx bxl-instagram",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      icon: "bx bxl-twitter",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: "bx bxl-linkedin",
    },
    // {
    //   name: "Youtube",
    //   url: "https://www.youtube.com",
    //   icon: "bx bxl-youtube",
    // },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com",
      icon: "bx bxl-tiktok",
    }
  ]

  const shopLinks = [
    {
      name: "Gifts",
      href: "/collection/gift",
    },
    {
      name: "Sales",
      href: "/collection/sale",
    },
  ];

  const supportLinks = [
    {
      name: "Customer Care",
      href: "/",
    },
    {
      name: "Terms & Conditions",
      href: "/terms-conditions",
    },
    {
      name: "Return & Refund",
      href: "/return-refund",
    },
    {
      name: "Cookie Policy",
      href: "/cookie-policy",
    },
    {
      name: "Delivery",
      href: "/delivery",
    },
    {
      name: "Blog",
      href: "/articles",
    },
  ];

  const FooterBar = () => {
    return <div className="w-full h-[1px] bg-teagreen-100"></div>;
  };
  const FooterTitle = ({ name }) => {
    return (
      <h4 className="mb-2 md:mb-5 text-white uppercase text-lg">{name}</h4>
    );
  };
  const FooterListItem = ({ name, href }) => {
    return (
      <Link
        href={href}
        className="text-teagreen-100 hover:text-teagreen-200 text-sm"
      >
        {name}
      </Link>
    );
  };

  return (
    <div className="bg-[#194A34]">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20 py-10">
        <div className=" mx-auto grid grid-cols-6 lg:grid-cols-7 gap-5 justify-around py-10 section-gap">
          {/* ------- About Links ------- */}
          <div className="col-span-2 lg:col-span-1 text-white flex flex-col gap-2 lg:mb-0">
            <FooterTitle name="About" />
            {aboutLinks.map((item) => (
              <FooterListItem
                key={item.name}
                name={item.name}
                href={item.href}
              />
            ))}

            {/* ------ Socials Icons ------ */}
            <div className="text-white flex items-center gap-2 mt-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.url} target="_blank">
                  <i
                    className={`${item.icon} text-lg 2xl:text-2xl text-[25px] cursor-pointer hover:scale-110 transition-all duration-300`}
                  ></i>
                </Link>
              ))}
            </div>
          </div>

          {/* ------- Shop Links ------- */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left text-white flex flex-col gap-2 content-gap lg:mb-0">
            <FooterTitle name="Shop" />
            {shopLinks.map((item) => (
              <FooterListItem
                key={item.name}
                name={item.name}
                href={item.href}
              />
            ))}
          </div>

          {/* ------- Support Links ------- */}
          <div className="col-span-2 lg:col-span-1 text-right lg:text-left text-white flex flex-col gap-2 content-gap lg:mb-0">
            <FooterTitle name="Help Center" />
            {supportLinks.map((item) => (
              <FooterListItem
                key={item.name}
                name={item.name}
                href={item.href}
              />
            ))}
          </div>

          {/* ------- Get in touch ------- */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 text-center md:text-left md:mr-10 content-gap md:mb-0">
            <div className="text-white flex flex-col gap-2 mb-5">
              <FooterTitle name="Get in touch" />
              <p>
                Dolor eiusmod velit occaecat in adipisicing proident aliqua
                deserunt eu enim pariatur.
              </p>
            </div>
            <div className="text-white flex flex-col gap-2">
              <p>
                Phone: <Link href="tel:+88012349732497">+440347934739</Link>
              </p>
              <p>
                Email: <Link href="tel:+88012349732497">example@gmail.com</Link>
              </p>
            </div>
          </div>

          {/* ------- News Letter ------- */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 text-white flex flex-col gap-2 mb-5">
            <FooterTitle name="Newsletter" />
            <p className="text-justify">
              Dolor eiusmod velit occaecat in adipisicing proident aliqua
              deserunt eu enim pariatur.
            </p>
            <Newsletter />
          </div>
        </div>
        <div>
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-2 justify-between items-center">
            {/* ------- Copyrights ------- */}
            <p className="text-white text-center">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-teagreen-500">Welltea.</span> All rights
              reserved
            </p>

            {/* ------- Payment Methods ------- */}
            <div className="">
              <NextImage
                img="/images/payment_methods.png"
                alt="Payment Methods"
                presets={{ width: 350, height: 50 }}
                className="mx-auto"
              />
            </div>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
