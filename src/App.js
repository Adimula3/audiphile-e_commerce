import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Headphones from "./pages/headphones";
import Speakers from "./pages/speakers";
import Earphones from "./pages/earphones";
import ProductPage from "./pages/productPage/productPage";
import CategoryPage from "./pages/categoryPage/categoryPage";

function App() {
  return (
    <div className="main">
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="speaker" element={<Speakers />} />
             <Route path="earphones" element={<Earphones />} />
             <Route path="/:category" element={<CategoryPage />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
