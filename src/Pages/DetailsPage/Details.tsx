import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/store";
import { removeFromCart } from "../../Layouts/Cart/CartSlice";

interface DetailsProps {}

const Details: FC<DetailsProps> = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleRemoveFromCart = (itemName: string) => {
    dispatch(removeFromCart(itemName));
  };

  const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.cartTotalAmount
  );
  const price = 200;

  return (
    <main>
      <div className="flex justify-around">
        <div className="flex gap-8">
          <strong id="qty">QTY</strong>
          <strong>Unit Price</strong>
          <strong>Sub-total</strong>
        </div>
        <h2>Cart Items:</h2>
        <div className="py-12 flex">
          {cartItems.map((nft) => (
            <div key={nft.id}>
              <img src={nft.image_url} alt={nft.name} className="h-[10rem]" />
              <p>Name: {nft.name}</p>
              <p>${price}</p>
              <p>Quantity: {nft.cartQuantity}</p>
              <p>Sub-total:${price * nft.cartQuantity}</p>
              <button onClick={() => handleRemoveFromCart(nft.name)}>
                Remove
              </button>
              <hr />
            </div>
          ))}
        </div>
        <p>Total Cart Amount: {cartTotalAmount}</p>
      </div>
    </main>
  );
};

export default Details;

{
  /* // <div className="flex justify-around">
//       <h2>{name}</h2>
//       <div className="flex gap-8">
//         <strong id="qty">QTY</strong>
//         <strong>Unit Price</strong>
//         <strong>Sub-total</strong>
//       </div>
//     </div>
//     <figure>
//       {image && <img src={image} alt={name} className="h-[10rem]" />}
//     </figure>
//     <p>Quantity: {cartQuantity}</p>
//     {price && <p>Unit Price: {price}</p>}
//     <p>Sub-total: {subtotal}</p>
//     <p>Cart Total: {cartTotalAmount}</p>
//     <button onClick={handleRemoveFromCart}>Remove</button> */
}
