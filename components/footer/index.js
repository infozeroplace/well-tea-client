import Link from "next/link";
import Image from "next/image";
import BackToTopButton from "./BacktoTopButton";

function Footer() {
  const socialIconsExtraClasses =
    "text-[25px] cursor-pointer hover:scale-110 transition-all duration-300";

  const FooterBar = () => {
    return <div className="w-full h-[1px] bg-teagreen-700"></div>;
  };
  const FooterTitle = ({ name }) => {
    return <h4 className="mb-5 text-white uppercase">{name}</h4>;
  };
  const FooterListItem = ({ name, href }) => {
    return (
      <Link href={href} className="text-teagreen-100 hover:text-teagreen-200">
        {name}
      </Link>
    );
  };

  return (
    <div className="w-full bg-[#194A34]">
      <div className="py-10">
        <div className="container px-4 mx-auto grid grid-cols-7 gap-5 justify-around py-10">
          <div className="text-white flex flex-col gap-2">
            <FooterTitle name="About" />
            <FooterListItem name="Company Info" href="/about" />
            <FooterListItem name="Goal" href="/" />
            <FooterListItem name="Location" href="/" />
          </div>
          <div className="text-white flex flex-col gap-2">
            <FooterTitle name="Shop" />
            <FooterListItem name="Shop" href="/" />
            <FooterListItem name="Shop" href="/" />
            <FooterListItem name="Shop" href="/" />
          </div>
          <div className="text-white flex flex-col gap-2">
            <FooterTitle name="Help Center" />
            <FooterListItem name="Customer Care" href="/" />
            <FooterListItem name="Shop" href="/" />
          </div>
          <div className="col-span-2 mr-10">
            <div className="text-white flex flex-col gap-2 mb-5">
              <FooterTitle name="Get in touch" />
              <p className="text-justify">
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
          <div className="col-span-1 lg:col-span-2 text-white flex flex-col gap-2 mb-5">
            <h4 className="mb-5 text-white uppercase">Newsletter</h4>
            <p className="text-justify">
              Dolor eiusmod velit occaecat in adipisicing proident aliqua
              deserunt eu enim pariatur.
            </p>
            <div className="flex mt-3">
              <input
                type="text"
                className="w-full px-5 py-3"
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
          <div className="flex items-center justify-center gap-10 mx-auto py-10">
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
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <p className="text-white">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-teagreen-500">Welltea.</span> All rights
              reserved
            </p>
            <div>
              <Image
                src="/images/payment_methods.png"
                alt="Payment Methods"
                width={350}
                height={50}
              />
            </div>
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
