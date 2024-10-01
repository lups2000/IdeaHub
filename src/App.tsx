import { Navbar } from "./components/Navbar";
import { PostsContainer } from "./components/Posts/PostsContainer";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgb(249, 249, 245)"}}>
      <Navbar />
      <PostsContainer />
    </div>
  );
}

export default App;
