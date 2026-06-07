import Button from "./components/Button";
import AppRoutes from "./routes";
import Navbar from "./pages/home/navbar/navbar";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default Home;
