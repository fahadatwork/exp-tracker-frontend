import { Route, Routes, Navigate } from "react-router-dom";
import Test from "./components/test";
import Home from "./components/Home";
import SideBar from "./components/sidebar";

function App() {

   const user = localStorage.getItem('user');

  return (
    <>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
 

      
     
    </>
  );
}


export default App;
