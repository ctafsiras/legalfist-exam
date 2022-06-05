import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import CallToAction from "./components/home/CallToAction";
import Features from "./components/home/Features";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {/* <Login/> */}
      <Header />
      <CallToAction />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
