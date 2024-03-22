import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Next_register from "./pages/next_register/next_register";
import { useState } from "react";
import Sms_code from "./pages/sms_code/sms_code";
import Kurslar from "./pages/kurslar/kurslar";

function App() {
  const [isResgistred, setisResgistred] = useState(false);
  console.log(isResgistred);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register setisResgistred={setisResgistred} />} />
        <Route path="/next_register" element={<Next_register />} />
        <Route path="/sms_code" element={<Sms_code />} />
        <Route path="/kurslar" element={<Kurslar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
