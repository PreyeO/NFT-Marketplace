import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/store";
import { removeFromCart } from "../../Layouts/Cart/CartSlice";

import { Link } from "react-router-dom";
import CartBtn from "../../Component/UI/Buttons/CartBtn";

interface DetailsProps {}

const Details: FC<DetailsProps> = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleRemoveFromCart = (itemName: string) => {
    dispatch(removeFromCart(itemName));
  };

  const price = 200;
  const totalCartAmount = cartItems.reduce((total, nft) => {
    return total + price * nft.cartQuantity;
  }, 0);

  return (
    <main className="flex flex-col">
      <div className=" px-5 p-6">
        <strong className="text-2xl font-bold">Items:</strong>
      </div>

      <div className="py-12">
        {cartItems.map((nft) => (
          <div key={nft.id}>
            <div className="flex justify-evenly">
              <div className="px-8 flex-col mb-8 flex-wrap">
                <img
                  src={nft.image_url}
                  alt={nft.name}
                  className="h-[10rem] rounded-md"
                />
                <p className="text-lg">Name: {nft.name}</p>
              </div>
              <div className="text-lg  ">
                <p className="pt-4">
                  <strong> Quantity</strong>: {nft.cartQuantity}
                </p>
                <p className="pt-4">
                  {" "}
                  <strong>Unit Price</strong>: ${price}
                </p>
                <p className="pt-4">
                  <strong>Sub-total</strong>: ${price * nft.cartQuantity}
                </p>
              </div>

              <button
                onClick={() => handleRemoveFromCart(nft.name)}
                className="mb-[10rem] text-red-500 text-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center pb-4 text-xl">
        Total Cart Amount: ${totalCartAmount}
      </p>
      <Link to="/checkout">
        <div className="flex items-center text-center justify-center mb-4">
          <CartBtn label="Checkout" />
        </div>
      </Link>
    </main>
  );
};

export default Details;
