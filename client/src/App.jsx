import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Test from "./pages/Test/Test";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
