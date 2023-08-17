import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

const NavBar: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  return (
    <header className="flex flex-col h-[6rem]">
      <nav className="flex justify-around pt-5">
        <Link to="/">
          <div>
            <figure className="w-[140px] h-[55px]">
              <img
                src="https://risidio.com/_next/static/media/risidio_logo_white.995cf7c6.svg"
                alt="logo"
              />
            </figure>
          </div>
        </Link>

        <div className="flex ">
          <AiOutlineShoppingCart size={50} style={{ color: "white" }} />
          <h1 className="pt-5 text-xl text-[#5fbdc1]">Cart</h1>
          <span className="ml-1 text-white">{cartItemCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
