import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./admin.css";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");

  const [yangiMaqola, setYangiMaqola] = useState({
    sarlavha: "",
    rasm: "",
    matn: "", // Bu yerda endi Bold/Italic formatli HTML matn saqlanadi
    data: "",
    sluge: "",
  });

  // Toolbarda qaysi funksiyalar chiqishini belgilash (Bold, Italic, Underline, List va h.k.)
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"],
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Yuborilayotgan maqola:", yangiMaqola);
    // Maqolani saqlash mantiqi shu yerda bo'ladi
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const securePassword = import.meta.env.VITE_ADMIN_KEY;

    if (password === securePassword) {
      setIsAuthorized(true);
      setError("");
    } else {
      setError("Xato parol kiritildi! ❌");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="admin-login-wrapper">
        <form onSubmit={handleLoginSubmit} className="admin-login">
          <h3>Admin panelga kirish 🔐</h3>
          <div className="form-group">
            <input
              type="password"
              placeholder="Parolni kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Tasdiqlash</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="statistik-container"></div>
      <div className="admin-container">
        <h3>Yangi maqola yozish</h3>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Maqola sarlavhasi</label>
            <input
              type="text"
              required
              placeholder="Maqola uchun sozboshi"
              value={yangiMaqola.sarlavha}
              onChange={(e) =>
                setYangiMaqola({ ...yangiMaqola, sarlavha: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Maqola uchun rasm URL li</label>
            <input
              type="text"
              required
              placeholder="Maqola rasmi"
              value={yangiMaqola.rasm}
              onChange={(e) =>
                setYangiMaqola({ ...yangiMaqola, rasm: e.target.value })
              }
            />
          </div>

          {/* 📝 TAYYOR TOOLBARLI EKRAN */}
          <div className="form-group editor-group">
            <label>Maqola matni</label>
            <ReactQuill
              theme="snow"
              modules={modules}
              value={yangiMaqola.matn}
              onChange={(content) =>
                setYangiMaqola({ ...yangiMaqola, matn: content })
              }
              placeholder="Maqola matnini formatlab yozing..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Maqola tayyor
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
