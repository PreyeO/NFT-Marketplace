import { FC } from "react";
import TextInput from "../Inputs/TextInput";
import CartBtn from "../Buttons/CartBtn";

// interface Props {
// }

const CheckoutForm: FC = () => {
  return (
    <form className="flex flex-col gap-3 items-center mb-12">
      <TextInput
        placeholder={"Enter your email"}
        type={"Number"}
        label="Card Number"
        id="id"
      />
      <TextInput
        placeholder={"Enter your password"}
        type={"date"}
        label="Exp Date"
        id="id"
      />
      <TextInput
        placeholder={"Enter your cvv number"}
        type={"number"}
        label="CVV/CVV2"
        id="id"
      />
      <TextInput
        placeholder={"Enter your card pin"}
        type={"password"}
        label="Card Pin"
        id="id"
      />
      <CartBtn label="Make Payment" />
    </form>
  );
};

export default CheckoutForm;
