import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import About from './pages/About'
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <div className="mb-8 bg-zinc-700">
          <Header />
          <div className="flex gap-5">
            <div className="w-1/3">
              <Sidebar/>
            </div>
            <div className="w-full mt-8">
              <Navigation />
              <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </div>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
