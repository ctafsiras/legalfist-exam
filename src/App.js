import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ExamPaper from "./components/exam/ExamPaper";
import ExamTopics from "./components/exam/ExamTopics";
import Result from "./components/exam/Result";
import Home from "./components/home/Home";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exam" element={<ExamTopics />}></Route>
        <Route path="/examPaper" element={<ExamPaper />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
