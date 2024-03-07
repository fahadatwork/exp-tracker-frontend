import { Route, Routes, Navigate } from "react-router-dom";
import Test from "./components/test";
import Home from "./components/Home";
import SideBar from "./components/sidebar";
import ErrorPage from "./components/error-page";

function App() {

   const user = localStorage.getItem('user');

  return (
    <>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
 

      
     
    </>
  );
}


export default App;
