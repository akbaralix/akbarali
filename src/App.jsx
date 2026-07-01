import Button from "./components/Button";
import AppRoutes from "./routes";
import Navbar from "./pages/navbar/navbar";
import ScrolToTop from "./components/ScrolToTop";
import Lenis from "lenis";
import "./App.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <ScrolToTop />
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default Home;
