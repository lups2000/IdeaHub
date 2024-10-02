import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostsContainer } from "./components/Posts/PostsContainer";
import { SearchBar } from "./components/SubReddits/SearchBar";
import { SubRedditsContainer } from "./components/SubReddits/SubRedditsContainer";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen"
        style={{ backgroundColor: "rgb(249, 249, 245)" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<SubRedditsContainer />} />
          <Route path="/:subreddit/posts" element={<PostsContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
