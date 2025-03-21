import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <MainSection />
    <Footer/>
  </div>
);
