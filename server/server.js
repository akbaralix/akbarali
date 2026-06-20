import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/db.js";
import Post from "./Post.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 🔌 Ma'lumotlar bazasiga ulanish
connectDB();

// 🧱 Middleware: Kelayotgan JSON ma'lumotlarni o'qish uchun juda muhim!

// 🚀 1. MA'LUMOTNI BAZAGA SAQLASH (CREATE)
app.post("/api/post", async (req, res) => {
  try {
    const { sarlavha, rasm, matn, data, sluge } = req.body;

    // Yangi post ob'ektini yaratamiz
    const newPost = new Post({
      sarlavha,
      rasm,
      matn,
      data,
      sluge,
    });

    // Bazaga saqlaymiz
    const savedPost = await newPost.save();

    // Muvaffaqiyatli javob qaytaramiz
    res.status(201).json({
      success: true,
      message: "Maqola muvaffaqiyatli saqlandi! 🎉",
      data: savedPost,
    });
  } catch (error) {
    console.error("Saqlashda xatolik:", error);
    res.status(500).json({
      success: false,
      message: "Serverda xatolik yuz berdi! ❌",
      error: error.message,
    });
  }
});

// 📖 2. BARCHA MAQOLALARNI BAZADAN OLISH (READ)

app.get("/api/post", async (req, res) => {
  try {
    // Bazadagi barcha postlarni eng yangisi birinchi chiqadigan qilib olamiz
    const posts = await Post.find().sort({ data: -1 });

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error("Ma'lumotlarni olishda xatolik:", error);
    res.status(500).json({
      success: false,
      message: "Ma'lumotlarni yuklashda xatolik yuz berdi! ❌",
      error: error.message,
    });
  }
});

// 🖥️ Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishladi... 🚀`);
});
