import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDeatil";
import Cart from "./pages/Cart";
// import Header from './components/Header'

const App = () => {
  return (
    <>
      {/* <h1>Welcome to E-commerceWeb!!!</h1> */}
      {/* <Header/> */}
      
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="carddata" element={<CardData />} />
            <Route path="prodetail/:proid" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="insertpro" element={<InsertProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
