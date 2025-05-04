import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/contact';
import About from './components/About';
import Shop from './components/shop';
import LoginPage from './components/Login';
import Profile from './components/profile';
import Laptops from "../src/components/laptops";
import Tv from "../src/components/Tv";
import Tablet from "../src/components/tablet";

import ProductDetailPage from "./components/productDetail";
import MobileDetails  from './components/MobileDetails';
import TvDetails  from './components/tvDetails';
import TabletDetail  from './components/tabletDetails';

import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "laptops",
        element: <Laptops />
      },
      {
        path: "tv",
        element: <Tv />
      },
      {
        path: "tablet",
        element: <Tablet />
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />
      },
      {
        path: "mobile/:id",
        element: <MobileDetails />
      },
      {
        path : "tv/:id",
        element : <TvDetails />
      },
      {
        path: "tablet/:id",
        element: <TabletDetail />
      },

    ]
  }
]);



const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
