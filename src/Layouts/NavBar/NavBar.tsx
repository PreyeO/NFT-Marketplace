import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <header className="flex flex-col h-[8rem]">
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
        <Link to="details">
          <div className="flex ">
            <AiOutlineShoppingCart size={50} style={{ color: "white" }} />
            <h1 className="pt-5 text-xl text-[#5fbdc1]">Cart</h1>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
