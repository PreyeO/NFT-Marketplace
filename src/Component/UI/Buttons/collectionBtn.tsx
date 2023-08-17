import { FC } from "react";

interface Props {
  label: string;

  isActive: boolean; //
  onClick?: () => void;
}

const CollectionBtn: FC<Props> = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`w-[120px] h-12 border border-[#b4bfc7] border-solid rounded-md text-xl font-semibold hover:bg-orange-400 ${
        isActive ? "bg-orange-400" : " hover:bg-orange-400"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CollectionBtn;
