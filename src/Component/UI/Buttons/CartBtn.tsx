import { FC } from "react";

interface Props {
  label: string;
}

const CartBtn: FC<Props> = ({ label }) => {
  return (
    <button className="w-[20rem] h-[50px] border border-[#b4bfc7] bg-[#5fbdc1] border-solid rounded-md text-xl font-semibold mt-3 hover:bg-orange-400">
      {label}
    </button>
  );
};

export default CartBtn;
