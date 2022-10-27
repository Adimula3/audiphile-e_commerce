import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/productPage/productPage";
import CategoryPage from "./pages/categoryPage/categoryPage";

function App() {
  return (
    <div className="main">
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/:category" element={<CategoryPage />} />
             <Route path='/:category/:product' element={<ProductPage />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
