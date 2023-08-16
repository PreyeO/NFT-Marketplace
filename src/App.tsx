import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import NavBar from "./Layouts/NavBar/NavBar";
import CheckOut from "./Pages/CheckoutPage/CheckOut";
import Landing from "./Pages/LandingPage/Landing";
import Details from "./Pages/DetailsPage/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/details/:identifier" element={<Details />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
