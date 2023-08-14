import { FC } from "react";

import BuyBtn from "../Buttons/BuyBtn";

interface Props {
  image: string;
  description: string;
  amount: number;
  currency: string;
}

const NftCard: FC<Props> = ({ image, description, amount, currency }) => {
  return (
    <div className="px-5 py-6 border border-[#b4bfc7] border-solid rounded-2xl w-80">
      <div className="py-7">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="flex gap-1">
        <h3 className="w-[182px] h-12 border  border-solid rounded-lg bg-[#5fbdc1] text-xl font-semibold">
          React Project
        </h3>
      </div>
      <p className="py-7 text-lg font-bold text-white">{description}</p>
      <div className="flex justify-around">
        <h3>
          {currency}
          {amount}
        </h3>
        <BuyBtn label="Buy Now" />
      </div>
    </div>
  );
};

export default NftCard;
