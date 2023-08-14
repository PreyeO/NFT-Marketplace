import { FC } from "react";

interface Props {
  label: string;
}

const MainBtn: FC<Props> = ({ label }) => {
  return (
    <button className="w-[182px] h-12 border  border-solid rounded-lg bg-[#5fbdc1] text-xl font-semibold hover:bg-orange-400">
      {label}
    </button>
  );
};

export default MainBtn;
