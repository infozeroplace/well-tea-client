import Empty_Cart from "../../public/images/empty_cart.jpg";
import { SectionLinkButton } from "../shared";
import NextImage from "../shared/NextImage";

const EmptyBasket = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mx-auto w-fit p-16">
      <div>
        <NextImage img={Empty_Cart} alt="empty_cart" presets={{ width: 50, height: 50 }} />
      </div>
      <div className="text-center">
        <p className="text-teagreen-600 text-brand__font__size__md font-brand__font__500">
          Your cart is empty
        </p>
        <p className="text-gray-500 text-brand__font__size__base">
          Add something to make me happy :)
        </p>
      </div>
      <div>
        <SectionLinkButton
          title="Return to Shopping"
          url="/collection/tea"
          buttonClass="text-sm w-[200px] h-8"
        />
      </div>
    </div>
  );
};

export default EmptyBasket;
