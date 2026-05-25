import { useState } from "react";
import loginAssets from "/src/assets/login-assets.jpg";
import Button from "../../components/Button";

import "./login.css";

function Login() {
  const [loading, setLoading] = useState(false);

  const handleLoginBtn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleRegisterBtn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-header">
          <img src="favicon.png" alt="" />
          <div className="header-title">
            <h1>JADID</h1>
            <p>Jaditchilar makoni</p>
          </div>
        </div>
        <img className="login-assets" src={loginAssets} alt="" />
        <p className="login-description">
          O‘qish jarayonini oson va samarali boshqaring. <br /> Maqsad sari
          aqlli qadam.
        </p>
        <div className="login-page-btn">
          <Button
            title="Kirish"
            className="login-btn"
            onClick={handleLoginBtn}
          />
          <Button
            title="Ro'yihatdan o'tish"
            className="register-btn"
            onClick={handleRegisterBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
