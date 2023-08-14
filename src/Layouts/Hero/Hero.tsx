import { FC } from "react";
import heroImage from "../../assets/heroimage.webp";
import MainBtn from "../../Component/UI/Buttons/MainBtn";
import { HashLink as Link } from "react-router-hash-link";

const Hero: FC = () => {
  return (
    <section className="flex flex-col py-5 flex-wrap">
      <div className="flex justify-around">
        <div className="flex-col">
          <h1 className="text-7xl font-bold leading-[160%]">Discover & Buy</h1>
          <h1 className="text-6xl font-bold text-orange-400 pb-2">
            Extraordinary
          </h1>
          <h1 className="text-5xl font-bold pt-1">NFTS</h1>
          <p className="text-xl leading-[150%] max-w-[25rem] pt-6 pb-10">
            The Leading NFT marketplace On Etherum. Home To The Next Generation
            Of Digital Creators. The Leading NFT marketplace On Etherum.
          </p>
          <Link to="#collection" smooth>
            <MainBtn label="Explore" />
          </Link>
        </div>
        <div className="flex-col py-10 hidden md:block md:center">
          <figure className="">
            <img
              src={heroImage}
              alt="hero image"
              className="h-[20rem] w-[20rem]"
            />
          </figure>
          <div className="flex justify-evenly pt-10  gap-8">
            <div>
              <h1 className="text-2xl">432K+</h1>
              <h3 className="pt-1 text-xl">Collections</h3>
            </div>
            <div>
              <h1 className="text-2xl">432K+</h1>
              <h3 className="pt-1 text-xl">Users</h3>
            </div>
            <div>
              <h1 className="text-2xl">432K+</h1>
              <h3 className="pt-1 text-xl">Collections</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
