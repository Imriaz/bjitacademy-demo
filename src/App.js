import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Banner from "./pages/Banner/Banner";
import Training from "./pages/Training/Training";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Training />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
