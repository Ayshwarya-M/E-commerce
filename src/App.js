import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Pages/LoginSignUp';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import All_product from './Components/Assets/All_product';
import King from './Pages/King';
import Cartdetails from './Components/Cartdetails';
import { CartProvider, useCart } from './Components/Cartcontext';
import ProductDetails from './Components/ProductDetails';



function App() {
 
  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/women' element={<ShopCategory category="women" />} />
          <Route path='/men' element={<King/>} />
          {/* <Route path='/kids' element={<Princess/>} /> */}
          <Route path="/product/:id" element={<ProductDetails />}>
            {/* <Route path=':productId' element={<Product />}/> */}
            </Route>
            <Route path='/cart'element={<Cartdetails/>}/>
            <Route path='/login'element={<LoginSignUp/>}/>
            <Route path='/allproducts'element={<All_product/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
    </CartProvider>
  );
}

export default App;
