import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUpPage from "./Pages/SignUp/SignUp";
import Footer from "./Pages/Shared/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUpPage></SignUpPage>

      <Footer></Footer>
    </>
  );
}

export default App;
