import Button from "./components/Button";
import AppRoutes from "./routes";
import Navbar from "./pages/home/navbar/navbar";
import ScrolToTop from "./components/ScrolToTop";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <ScrolToTop />
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default Home;
