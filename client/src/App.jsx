import { createContext, useContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import UserHome from './pages/user_ui/UserHome';
import AdminHome from './pages/admin-ui/AdminHome';
import ProductDetails from './pages/user_ui/ProductDetails';
import productsReducer from './pages/reducers/productsReducer';
import cardReducer from './pages/reducers/cardReducer';
import wishListReducer from './pages/reducers/wishListReducer';
import MyBag from './pages/user_ui/MyBag';
import MyWishlist from './pages/user_ui/MyWishlist';
import Profile from './pages/user_ui/Profile';
import Products from './pages/admin-ui/Products';
import Users from './pages/admin-ui/Users';
import Categories from './pages/admin-ui/Categories';
import userReducer from './pages/reducers/userReducer';
import NewPassword from './pages/user_ui/NewPassword';
import ForgetPassword from './pages/admin-ui/forgetPassword';

// context for products
export const ProductContext = createContext({ products: [] });
// context for card
export const CardContext = createContext({ cards: [] });
// context for wishlist 
export const wishListContext = createContext({ wishlist: [] });
// context for user
export const UserContext = createContext({ user: {} });

const App = () => {
  const initailProductsState = useContext(ProductContext);
  const intailCardState = useContext(CardContext);
  const intailwishListState = useContext(wishListContext);
  const intailuserState = useContext(UserContext);

  const [productState, productDispatch] = useReducer(productsReducer, initailProductsState);
  const [cardState, cardDispatch] = useReducer(cardReducer, intailCardState);
  const [wishListState, wishListDispatch] = useReducer(wishListReducer, intailwishListState);
  const [userState, userDispatch] = useReducer(userReducer, intailuserState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      <ProductContext.Provider value={{ productState, productDispatch }}>
        <CardContext.Provider value={{ cardState, cardDispatch }}>
          <wishListContext.Provider value={{ wishListState, wishListDispatch }}>
            <Toaster />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/" element={<UserHome />} />
              <Route path="/product-details:_id" element={<ProductDetails />} />
              <Route path="/my-bag" element={<MyBag />} />
              <Route path="/my-wishlist" element={<MyWishlist />} />
              <Route path="/my-profile" element={<Profile />} />
              <Route path="/admin-home" element={<AdminHome />} />
              <Route path="/admin-categories" element={<Categories />} />
              <Route path="/admin-products" element={<Products />} />
              <Route path="/admin-users" element={<Users />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/set-new-password/:_email" element={<NewPassword />} />
            </Routes>
          </wishListContext.Provider>
        </CardContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;