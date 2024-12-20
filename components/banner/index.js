import Image from "next/image";

function Banner() {
  return (
    <div className="grid grid-cols-2 gap-5 my-14">
      <div className="relative group overflow-hidden w-full">
        <div className="group-hover:scale-125 transition-all duration-500 overflow-hidden">
          <Image
            src="/images/banner_one.jpg"
            alt="Banner Image"
            width={760}
            height={250}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="absolute top-10 left-10">
          <h1 className="text-4xl font-bold mb-2">Wellness Tea</h1>
          <p className="text-lg text-gray-500">
            Indulge in a delightful blend.
          </p>
          <div className="mt-24">
            <button className="flex items-center">
              See More<i className="bx bx-chevron-right text-[25px]"></i>
            </button>
            <div className="w-[73px] h-[1px] bg-teagreen-800 group-hover:w-0 transition-all duration-500"></div>
          </div>
        </div>
      </div>
      {/* Second Banner */}
      <div className="relative group overflow-hidden w-full">
        <div className="group-hover:scale-125 transition-all duration-500 overflow-hidden">
          <Image
            src="/images/banner_two.jpg"
            alt="Banner Image"
            width={760}
            height={250}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="absolute top-10 left-10">
          <h1 className="text-4xl text-white font-bold mb-2">Wellness Tea</h1>
          <p className="text-lg text-gray-400">
            Indulge in a delightful blend.
          </p>
          <div className="mt-24">
            <button className="text-white flex items-center">
              See More<i className="bx bx-chevron-right text-xl"></i>
            </button>
            <div className="w-[73px] h-[1px] bg-white group-hover:w-0 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;