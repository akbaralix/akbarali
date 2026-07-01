import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/db.js";
import Post from "./Post.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

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

app.post("/api/post/view/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { korildi: 1 } },
      { returnDocument: "after" },
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post topilmadi" });
    }

    // 2. Frontendga hammasi yaxshi bo'lganini bildiramiz
    res.status(200).json({ success: true, views: updatedPost.views });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
});

// 🟢 TO'G'RI BACKEND KODI:
app.delete("/api/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const ocharotganPost = await Post.findByIdAndDelete(postId);

    if (!ocharotganPost) {
      return res.status(404).json({ message: "Maqola topilmadi! ❌" });
    }

    res.status(200).json({ message: "Maqola o'chirildi! 🎉" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🖥️ Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishladi... 🚀`);
});
