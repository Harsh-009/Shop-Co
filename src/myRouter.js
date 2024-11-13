const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductRoot />,
        children: [
          { index: true, element: <Products /> },  // Show all products by default
          {
            path: "category/:categoryId",          // Dynamic category routing
            element: <Products />
          },
          {
            path: "search",                        // Search results page
            element: <Products />
          },
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "cart",                             // Cart route
        element: <Cart />
      },
      {
        path: "checkout",                         // Checkout route
        element: <Checkout />
      },
      {
        path: "account",                          // User account section
        element: <AccountLayout />,
        children: [
          { index: true, element: <Profile /> },
          { path: "orders", element: <Orders /> },
          { path: "wishlist", element: <Wishlist /> }
        ]
      }
    ],
  },
]);