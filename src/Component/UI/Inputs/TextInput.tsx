import { FC } from "react";

interface Props {
  placeholder: string;
  type: string;
  label: string;
  id?: any;
}

const TextInput: FC<Props> = ({ placeholder, type, label, id }) => {
  return (
    <div>
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className=" w-[20rem] h-10"
      />
    </div>
  );
};

export default TextInput;
