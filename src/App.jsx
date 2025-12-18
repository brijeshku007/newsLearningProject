import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import News from "./page/News";
import Catogary from "./components/Catogary";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
        <Navbar className="sticky top-0 z-50" />
        <Catogary className="sticky top-15 z-50 bg-base-100"/>
        <News/>
        <Footer/>

    </>
  );
}

export default App;
