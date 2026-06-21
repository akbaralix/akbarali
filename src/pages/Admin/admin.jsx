import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 LINK IMPORT QILINDI
import ReactQuill from "react-quill-new";
import { usePosts } from "../blog/usePosts";
import { FaRegTrashCan } from "react-icons/fa6";

import "./admin.css";
import "react-quill-new/dist/quill.snow.css";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loginError, setLoginError] = useState(""); // 👈 Ismi o'zgartirildi (chalkashmaslik uchun)
  const [loading, setLoading] = useState(false);

  const [yangiMaqola, setYangiMaqola] = useState({
    sarlavha: "",
    rasm: "",
    matn: "",
    data: "",
    sluge: "",
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"],
    ],
  };

  // postsError deb qayta nomlab oldik, loginError bilan urishib ketmaydi
  const { posts, isLoading, error: postsError } = usePosts();

  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const generateRandomSlug = () => {
      const belgilar =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let slug = "";
      for (let i = 0; i < 7; i++) {
        const randomIndeks = Math.floor(Math.random() * belgilar.length);
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
      const response = await fetch(`${api}/api/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(yuboriladiganMaqola),
      });

      if (response.ok) {
        alert("Maqola muvaffaqiyatli saqlandi! 🎉");
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
      setLoginError("");
    } else {
      setLoginError("Xato parol kiritildi! ❌");
    }
  };
  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(`${api}/api/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // 🟢 Agar server 404 yoki 500 qaytarsa, shu yerda ushlaymiz:
      if (!response.ok) {
        alert("Server bu manzilni topa olmadi (404) yoki boshqa xato bo'ldi.");
        return;
      }

      alert("Muvaffaqiyatli o'chirildi!");
      window.location.reload(); // sahifani yangilash
    } catch (err) {
      console.log(err);
      alert("Serverga ulanishda xatolik yuz berdi");
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
          {loginError && <p className="error-message">{loginError}</p>}
          <button type="submit">Tasdiqlash</button>
        </form>
      </div>
    );
  }

  // 2. Agar parol to'g'ri bo'lsa va postlar yuklanayotgan bo'lsa, skeleton ko'rsatiladi
  if (isLoading) {
    return (
      <div className="blog-container">
        <div
          className="skeleton skeleton-title"
          style={{ marginBottom: "20px", width: "150px", height: "32px" }}
        ></div>
        <div className="blog-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="skeleton-card-wrapper">
              <div
                className="skeleton skeleton-text"
                style={{ width: "80px", height: "16px", marginBottom: "10px" }}
              ></div>
              <div className="blog-card skeleton-card">
                <div
                  className="skeleton skeleton-text"
                  style={{ width: "90%", height: "28px", marginBottom: "20px" }}
                ></div>
                <div className="skeleton skeleton-img"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. Agar bazadan postlarni olishda xatolik bo'lsa
  if (postsError)
    return (
      <div className="error-message">
        Postlarni yuklashda xatolik yuz berdi...
      </div>
    );

  // 4. Parol to'g'ri va yuklanish tugagan bo'lsa, asosiy admin panel ochiladi
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

      <div className="blog-container">
        <h2 style={{ marginBottom: "20px" }}>Mavjud bloglar</h2>
        <div className="blog-grid">
          {posts &&
            posts.map((post) => (
              <div key={post.id}>
                <div className="post-date">
                  <p>{new Date(post.data).toLocaleDateString("uz-UZ")}</p>
                  <button onClick={() => handleDeletePost(post._id)}>
                    <FaRegTrashCan />
                  </button>
                </div>
                <div className="blog-card">
                  <Link to={`/blog/${post.sluge}`}>
                    <div>
                      <h2>{post.sarlavha}</h2>
                    </div>
                    <div className="blog-img">
                      <img src={post.rasm} alt={post.sarlavha} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
