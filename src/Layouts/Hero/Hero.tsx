import { FC } from "react";
import heroImage from "../../assets/heroimage.webp";
import MainBtn from "../../Component/UI/Buttons/MainBtn";
import { HashLink as Link } from "react-router-hash-link";

const Hero: FC = () => {
  return (
    <section className="flex flex-col py-5 flex-wrap px-5 pt-10">
      <div className="flex justify-evenly lg-justify-around">
        <div className="flex-col flex-wrap">
          <h1 className="md:text-7xl font-bold leading-[160%] text-4xl">
            Discover & Buy
          </h1>
          <h1 className="md:text-6xl font-bold text-orange-400 pb-2 text-5xl">
            Extraordinary
          </h1>
          <h1 className="md:text-5xl font-bold pt-1 text-4xl">NFTS</h1>
          <p className="text-xl leading-[150%] max-w-[25rem] pt-6 pb-10">
            The Leading NFT marketplace On Etherum. Home To The Next Generation
            Of Digital Creators. The Leading NFT marketplace On Etherum.
          </p>
          <Link to="#collection" smooth>
            <MainBtn label="Explore" />
          </Link>
        </div>
        <div className="flex-col py-10 hidden lg:block">
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
