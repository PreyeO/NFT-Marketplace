import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import NavBar from "./Layouts/NavBar/NavBar";
import CheckOut from "./Pages/CheckoutPage/CheckOut";
import Landing from "./Pages/LandingPage/Landing";
import Details from "./Pages/DetailsPage/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
