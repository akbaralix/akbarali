import Button from "./components/Button";
import Login from "./pages/login/login";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Home;
