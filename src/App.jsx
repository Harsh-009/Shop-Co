import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductDetails from './components/ProductDetails.jsx'
import ProductRoot from "./pages/ProductRoot.jsx";
import Products from "./components/Products.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/products',
        element: <ProductRoot />
      },
      {
        path: '/products/:productId',
        element: <DetailsPage />
      },
      {
        path: '/products/:category',
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <ProductDetails />
  )
}

export default App;
