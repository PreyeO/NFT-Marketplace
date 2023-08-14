import { FC } from "react";
import Hero from "../../Layouts/Hero/Hero";
import Collection from "../../Layouts/Collections/Collection";
// import Footer from "../../Layouts/Footer/Footer";

const Landing: FC = () => {
  return (
    <main>
      <Hero />
      <Collection />
      {/* <Footer /> */}
    </main>
  );
};

export default Landing;
