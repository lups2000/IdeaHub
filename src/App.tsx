import { Navbar } from "./components/Navbar";
import { PostsContainer } from "./components/Posts/PostsContainer";
import { SearchBar } from "./components/SubReddits/SearchBar";
import { SubRedditsContainer } from "./components/SubReddits/SubRedditsContainer";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgb(249, 249, 245)" }}
    >
      <Navbar />
      <SubRedditsContainer />
      {/*<PostsContainer />*/}
    </div>
  );
}

export default App;
