import { FC } from "react";

interface Props {
  label: string;
}

const CollectionBtn: FC<Props> = ({ label }) => {
  return (
    <button className="w-[100px] h-12 border border-[#b4bfc7] border-solid rounded-md text-xl font-semibold hover:bg-orange-400">
      {label}
    </button>
  );
};

export default CollectionBtn;
