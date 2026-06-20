import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  sarlavha: { type: String },
  rasm: { type: String },
  matn: { type: String },
  data: { type: String },
  sluge: { type: String },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
