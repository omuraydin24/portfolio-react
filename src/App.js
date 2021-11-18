import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Intro from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Comments from "./components/comments/Comments"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import "./app.scss"


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Comments
          currentUserId="1"
        />
        <Contact />
      </div>
    </div>
  );
}

export default App;
