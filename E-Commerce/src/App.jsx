import { useState,lazy,Suspense } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Shop = lazy(() => import("./Pages/Shop.jsx"));
const ShopCategory = lazy(() => import("./Pages/ShopCategory.jsx"));
const Cart = lazy(() => import("./Pages/Cart.jsx"));
const Product = lazy(() => import("./Pages/Product.jsx"));
const LoginSignup = lazy(() => import("./Pages/LoginSignup.jsx"));
const Layout = lazy(() => import("./Layout.jsx"));
const ProtectedRoute = lazy(() =>import("./Protected_Routes/ProtectedRoute.jsx"));

// import Navbar from "./Components/Navbar.jsx"
// import Shop from "./Pages/Shop.jsx"
// import ShopCategory from "./Pages/ShopCategory.jsx"
// import Cart from "./Pages/Cart.jsx"
// import Product from "./Pages/Product.jsx"
// import LoginSignup from "./Pages/LoginSignup.jsx"
// import Layout from "./Layout.jsx"
// import men_banner from "./assets/banner_mens.png"
// import women_banner from "./assets/banner_women.png"
// import kids_banner from "./assets/banner_kids.png"
import "./index.css";

function App() {
 
  return (
    <>
     <Router>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Shop />} />

              <Route
                path="/mens"
                element={<ShopCategory category="men" banner={men_banner} />}
              />
              <Route
                path="/womens"
                element={
                  <ShopCategory category="women" banner={women_banner} />
                }
              />
              <Route
                path="/kids"
                element={<ShopCategory category="kid" banner={kids_banner} />}
              />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:productId" element={<Product />} />

              {/* Protected Route */}
              <Route
                path="/login"
                element={
                  <ProtectedRoute>
                    <LoginSignup />
                  </ProtectedRoute>
                }
              />

              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
{/*   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route path="" element={<Shop/>}/>

       <Route path="/mens" element={<ShopCategory category="men" banner={men_banner}/>}/>
       <Route path="/womens" element={<ShopCategory category="women" banner={women_banner}/>}/>
       <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner}/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/product/:productId" element={<Product/>}/>
       
       {/* Protected Route */}
{/*        <Route path="/login" element={<ProtectedRoute>
          <LoginSignup/>
        </ProtectedRoute> }/>
       
       <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
  </Router> */} */}
    
      
    </>
  )
}
export default App
