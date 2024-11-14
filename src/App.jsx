import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductRoot from "./pages/ProductRoot.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

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
      },
      {
        path: '/profile', 
        element: <ProfilePage />
      }
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <ProductDetails />
  )
}

export default App;
