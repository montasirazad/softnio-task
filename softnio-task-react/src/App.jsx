import "./App.css";
import About from "./components/About/About";
import Badge from "./components/Badge/Badge";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import PopularFood from "./components/PopularFood/PopularFood";
import Review from "./components/Review/Review";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <PopularFood />
      <Badge />
      <Booking />
      <Review />
      <Footer />
    </>
  );
}

export default App;
