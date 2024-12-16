import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="grid grid-cols-7 gap-5 justify-around py-10">
          <div className="text-white flex flex-col gap-2">
            <h4 className="mb-5 text-gray-300 uppercase">About</h4>
            <Link href="/" className="hover:text-gray-200">Company</Link>
            <Link href="/">Company</Link>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h4 className="mb-5 text-gray-300 uppercase">Shop</h4>
            <Link href="/">Company</Link>
            <Link href="/">Company</Link>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h4 className="mb-5 text-gray-300 uppercase">Help Center</h4>
            <Link href="/">Company</Link>
            <Link href="/">Company</Link>
          </div>
          <div className="col-span-2 mr-10">
            <div className="text-white flex flex-col gap-2 mb-5">
              <h4 className="mb-5 text-gray-300 uppercase">Get in touch</h4>
              <p className="text-justify">
                Dolor eiusmod velit occaecat in adipisicing proident aliqua
                deserunt eu enim pariatur.
              </p>
            </div>
            <div className="text-white flex flex-col gap-2">
              <h4 className="text-gray-300 uppercase">About</h4>
              <Link href="tel:+88012349732497">+440347934739</Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 text-white flex flex-col gap-2 mb-5">
            <h4 className="mb-5 text-gray-300 uppercase">Newsletter</h4>
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
              <button className="bg-secondary text-white px-4 uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div>
          <div className="grid grid-cols-5 items-center mx-auto gap-10 py-10">
            <div className="col-span-2 h-1 bg-[#13432C] "></div>
            <div className="col-span-1 flex items center justify-center">
              <Link href="/">
                <Image
                  src="/images/welltea_logo.png"
                  alt="Brand Logo"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
            <div className="col-span-2 h-1 bg-[#13432C] "></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-secondary">Welltea.</span> All rights
              reserved
            </p>
            <div>
              <Image src="/images/payment_methods.png" alt="Payment Methods" width={350} height={50}/>
            </div>
            <div className="flex gap-3">
              <div>Social icons</div>
              <div className="text-gray-300 flex">
                <p className="uppercase">Back to top</p>
                icon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer