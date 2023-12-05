import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RouteLayout from "./pages/RouteLayout";
import ProductDetail from "./pages/ProductDetail";
import { ProductContext } from "./store/product-context";
import ProductForm from "./pages/ProductForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/category", element: <CategoryPage /> },
      { path: "/productForm", element: <ProductForm /> },
    ],
  },
]);
function App() {
  const value = {
    products: [],
    handleFilter: () => {},
    cardItems: [],
    addCard: () => {},
    handleFilterForType: (type, values) => {},
    filteredProducts: [],
  };
  return (
    <ProductContext.Provider value={value}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  );
}

export default App;
