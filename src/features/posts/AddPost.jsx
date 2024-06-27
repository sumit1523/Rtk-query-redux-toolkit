// src/features/posts/AddPost.js
import { useState } from "react";
import { useAddPostMutation } from "../api/apiSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [addPost] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost({ title }).unwrap();
      setTitle("");
    } catch (err) {
      console.error("Failed to add post: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Post Title:</label>
      <input
        id="postTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
