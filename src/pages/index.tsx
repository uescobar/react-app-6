import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hola Mundo</>,
    errorElement: <>Error element</>,
    children: [
      {
        index: true,
        element: <>Home</>,
      },
      { path: "/games", element: <>Juegos</> },
    ],
  },
]);

export default router;
