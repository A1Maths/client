import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Worksheet from './components/Worksheet/Worksheet';
import Register from './pages/Register/Register';
import Starters from './pages/Starters/Starters';
// import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            {/* <Route path="/login" element={<Login/>}/> */}
            <Route path='/' element={<Home/>} />
            <Route path='/worksheet' element={<Worksheet/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/starters' element={<Starters/>} />
            {/* <Route path='/pricing' element={<Pricing/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/dashboard' element={<Dashboard/>} /> */}
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
