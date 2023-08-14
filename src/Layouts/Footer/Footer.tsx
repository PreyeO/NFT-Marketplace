import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" flex flex-col">
      <div className="absolute h-[1px] left-0 bg-[#8e9faa] w-full"></div>
      <div className="flex justify-around items-start py-20 flex-col gap-10 lg:flex-row flex-wrap">
        <div className="flex flex-col gap-4 max-w-[440px]">
          <div className="flex gap-4 items-center justify-center md:justify:flex-start">
            <img
              src="https://risidio.com/_next/static/media/risidio_logo_white.995cf7c6.svg"
              alt="logo"
            />
          </div>
          <p className="flex-col flex-wrap text-center md:text-left">
            The ultimate destination for connecting creatives and business, a
            revolutionary platform that bridges the gap between innovative
            creators and forward-thinking businesses.
          </p>
        </div>
        <div className="flex gap-14 pt-5">
          <ul>
            <li className="pb-3">OverView</li>
            <li className="pb-3">Features</li>
            <li className="pb-3">Projects</li>
          </ul>
          <ul>
            <li className="pb-3">About Us</li>
            <li className="pb-3">Contact</li>
            <li className="pb-3">Career</li>
          </ul>
        </div>
        <div className="flex gap-10 pt-10">
          <ul>
            <li className="flex gap-2 text-center pb-3">
              <BsTwitter style={{ marginTop: 4 }} />
              Twitter
            </li>
            <li className="flex gap-2 text-center">
              <BsLinkedin style={{ marginTop: 4 }} />
              Linkedin
            </li>
          </ul>
          <ul>
            <li className="flex gap-2 text-center pb-3">
              <BsInstagram style={{ marginTop: 4 }} />
              Instagram
            </li>

            <li className="flex gap-2 text-center ">
              <BsFacebook style={{ marginTop: 4 }} />
              Facebook
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[1px] left-0 bg-[#8e9faa] w-full"></div>
      <h6 className="text-center pt-6 pb-10 text-sm mb-5">
        Copyright &copy; 2023 Risidio. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
