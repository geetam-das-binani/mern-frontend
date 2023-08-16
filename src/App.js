import "./App.css";
import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import webFont from "webfontloader";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './component/Home/Home'

export default function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto Mono", "monospace"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
