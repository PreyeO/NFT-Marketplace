import { FC } from "react";

interface Props {
  label: string;
}

const BuyBtn: FC<Props> = ({ label }) => {
  return (
    <button className="w-[100px] h-10 border bg-[green] border-solid rounded-md text-lg font-semibold hover:bg-black">
      {label}
    </button>
  );
};

export default BuyBtn;
