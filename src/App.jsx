// src/App.js
import Posts from "./features/posts/Posts";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <div className="App">
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
