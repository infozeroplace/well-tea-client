import Link from "next/link";
import Image from "next/image";
import BackToTopButton from "./BacktoTopButton";

function Footer() {
  const socialIconsExtraClasses =
    "text-[25px] cursor-pointer hover:scale-110 transition-all duration-300";

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
      <div className="container px-4 lg:px-20 py-10">
        <div className=" mx-auto grid grid-cols-6 lg:grid-cols-7 gap-5 justify-around py-10">
          <div className="col-span-2 lg:col-span-1 text-white flex flex-col gap-2content-gap lg:mb-0">
            <FooterTitle name="About" />
            <FooterListItem name="Company Info" href="/about" />
            <FooterListItem name="Goal" href="/" />
            <FooterListItem name="Location" href="/" />
          </div>
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left text-white flex flex-col gap-2 content-gap lg:mb-0">
            <FooterTitle name="Shop" />
            <FooterListItem name="Shop" href="/" />
            <FooterListItem name="Shop" href="/" />
            <FooterListItem name="Shop" href="/" />
          </div>
          <div className="col-span-2 lg:col-span-1 text-right lg:text-left text-white flex flex-col gap-2 content-gap lg:mb-0">
            <FooterTitle name="Help Center" />
            <FooterListItem name="Customer Care" href="/" />
            <FooterListItem
              name="Terms & Conditions"
              href="/terms-conditions"
            />
            <FooterListItem name="Privacy Policy" href="/privacy-policy" />
            <FooterListItem name="Return & Refund" href="/return-refund" />
            <FooterListItem name="Cookie Policy" href="/cookie-policy" />
            <FooterListItem name="Delivery" href="/delivery" />
            <FooterListItem name="Blog" href="/blog" />
          </div>
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
          <div className="col-span-6 md:col-span-3 lg:col-span-2 text-white flex flex-col gap-2 mb-5">
            <FooterTitle name="Newsletter" />
            <p className="text-justify">
              Dolor eiusmod velit occaecat in adipisicing proident aliqua
              deserunt eu enim pariatur.
            </p>
            <div className="flex mt-3">
              <input
                type="text"
                className="w-full px-5 py-3 max-w-96 text-black"
                placeholder="Your Email"
              />
              <button className="bg-teagreen-600 text-white px-4 uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div>
          <div className="flex items-center justify-center gap-10 py-10">
            <FooterBar />
            <div className="flex-none">
              <Link href="/">
                <Image
                  src="/logo/welltea_logo_white_color.png"
                  alt="Brand Logo"
                  width={200}
                  height={100}
                />
              </Link>
            </div>
            <FooterBar />
          </div>

          <div className="content-gap">
            <Image
              src="/images/payment_methods.png"
              alt="Payment Methods"
              width={350}
              height={50}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-2 justify-between items-center">
            <p className="text-white text-center">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-teagreen-500">Welltea.</span> All rights
              reserved
            </p>
            <div className="text-white flex items-center gap-2">
              <i
                className={"bx bxl-facebook-circle " + socialIconsExtraClasses}
              ></i>
              <i className={"bx bxl-instagram " + socialIconsExtraClasses}></i>
              <i
                className={"bx bxl-linkedin-square " + socialIconsExtraClasses}
              ></i>
              <i className={"bx bxl-twitter " + socialIconsExtraClasses}></i>
              <i className={"bx bxl-tiktok " + socialIconsExtraClasses}></i>
            </div>

            <BackToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
