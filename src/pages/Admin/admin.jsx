import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./admin.css";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔄 Yuklanish holati uchun

  const [yangiMaqola, setYangiMaqola] = useState({
    sarlavha: "",
    rasm: "",
    matn: "",
    data: "",
    sluge: "", // Agar slug deb nomlamoqchi bo'lsangiz, 'slug' qilsangiz to'g'riroq bo'ladi
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"],
    ],
  };
  const api = import.meta.env.API_URL;
  // 🚀 BACKENDGA YUBORISH FUNKSIYASI
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const generateRandomSlug = () => {
      const belgilar =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let slug = "";

      for (let i = 0; i < 7; i++) {
        // Tasodifiy indeksni aniqlaymiz
        const randomIndeks = Math.floor(Math.random() * belgilar.length);
        // O'sha indeksdagi belgini slug'ga qo'shamiz
        slug += belgilar.charAt(randomIndeks);
      }

      return slug;
    };

    const yuboriladiganMaqola = {
      ...yangiMaqola,
      data: new Date().toISOString(),
      sluge: generateRandomSlug(),
    };

    try {
      // 🌐 Backend URL manzilini shu yerga yozasiz
      const response = await fetch(`${api}/api/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Agar backendda token so'ralsa, quyidagini yoqing:
          // "Authorization": `Bearer ${Sizning_Tokeniz}`,
        },
        body: JSON.stringify(yuboriladiganMaqola),
      });

      if (response.ok) {
        alert("Maqola muvaffaqiyatli saqlandi! 🎉");
        // Formani tozalash
        setYangiMaqola({
          sarlavha: "",
          rasm: "",
          matn: "",
          data: "",
          sluge: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Xatolik yuz berdi: ${errorData.message || "Xatolik"}`);
      }
    } catch (err) {
      console.error("Ulanishda xatolik:", err);
      alert("Server bilan ulanishda xatolik yuz berdi! ❌");
    } finally {
      setLoading(false);
    }
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

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Yuborilmoqda..." : "Maqola tayyor"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
