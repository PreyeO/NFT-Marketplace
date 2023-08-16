import { FC } from "react";

interface Props {
  image: string;
  description: string;
  price: number;
  currency: string;
  name: string;
  onBuyNowClick?: () => void;
  onSeeCartClick?: () => void;
}

const NftCard: FC<Props> = ({
  image,
  description,
  price,
  currency,
  onBuyNowClick,
  onSeeCartClick,
  name,
}) => {
  return (
    <div className="px-5 py-6 border border-[#b4bfc7] border-solid rounded-2xl w-80">
      <div className="py-7">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="flex gap-1">
        <h3 className="w-[182px] h-12 border  border-solid rounded-lg bg-[#5fbdc1] text-xl font-semibold py-2">
          {name}
        </h3>
      </div>
      <p className="py-7 text-lg font-bold text-white">{description}</p>
      <div className="flex justify-around">
        <h3 className="pt-3">
          {currency}
          {price}
        </h3>
        <button onClick={onBuyNowClick}>Buy Now</button>
        <button onClick={onSeeCartClick}>See Cart</button>
      </div>
    </div>
  );
};

export default NftCard;
