import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Headphones from "./pages/headphones";
import Speakers from "./pages/speakers";
import Earphones from "./pages/earphones";

function App() {
  return (
    <div className="main">
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="headphones" element={<Headphones />} />
             <Route path="speaker" element={<Speakers />} />
             <Route path="earphones" element={<Earphones />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
