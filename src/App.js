import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Latest from "./components/Latest";
import Featured from "./components/Featured";
import AddNewPost from "./components/AddNewPost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/latest" element={<Latest></Latest>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/featured" element={<Featured></Featured>}></Route>
        <Route path="/add-new-post" element={<AddNewPost></AddNewPost>}></Route>
      </Routes>
    </>
  );
}

export default App;
