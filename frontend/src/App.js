import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
        <div className="pages">
          <Routes>
            {/* <Route path="/login" element={<Login/>}/> */}
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
