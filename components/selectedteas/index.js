import React from 'react';
import Image from 'next/image';
import SelectedTeaSlider from './SelectedTeaSlider';

function SelectedTeas() {

  return (
    <div className="section-gap">
      <div className="grid grid-cols-8">
        <div className="relative col-span-5 w-full overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="20"
            width="100%"
            height="100%"
            className="absolute top-0 -left-full z-10 ml-60 font-semibold uppercase text-white text-4xl rotate-90"
          >
            • Save Up To 50% • Save Up To 50% • Save Up To 50% • Save Up To 50%
            • Save Up To 50% • Save Up To 50% • Save Up To 50% •
          </marquee>

          {/* <div className="absolute text-nowrap flex overflow-hidden top-0 -left-full z-10 ml-10 font-semibold uppercase text-white text-4xl rotate-90">
            <div className="marquee__item">
              • Save Up To 50% • Save Up To 50% • Save Up To 50% •
            </div>
            <div className="marquee__item">
              • Save Up To 50% • Save Up To 50% • Save Up To 50% •
            </div>
          </div> */}

          <div className="w-full h-[80vh]">
            <Image src="/images/selected_tea.jpg" alt="Offer" fill />
          </div>
          <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h4 className="uppercase text-xs font-semibold mb-3 tracking-widest">
              Save Up To 50%
            </h4>
            <h3 className="text-6xl font-extralight mb-5">
              Selected Teas and <br /> Teawares
            </h3>
            <p className="mb-5 font-light">
              We delight in creating flavours and sharing rare teas
            </p>
            <button className="uppercase text-xs font-semibold tracking-widest bg-teagreen-100 text-teagreen-800 py-4 px-10">
              Shop Now
            </button>
          </div>
          <marquee
            behavior="scroll"
            direction="right"
            scrollamount="20"
            className="absolute bottom-0 -right-full z-10 mr-32 uppercase font-semibold text-white text-4xl rotate-90"
          >
            • Save Up To 50% • Save Up To 50% • Save Up To 50% • Save Up To 50%
            • Save Up To 50% • Save Up To 50% • Save Up To 50% •
          </marquee>
        </div>
        <div className="col-span-3 mx-5 overflow-hidden">
          <SelectedTeaSlider />
        </div>
      </div>
    </div>
  );
}

export default SelectedTeas;