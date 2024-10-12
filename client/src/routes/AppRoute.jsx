import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
const MainLayout = lazy(() => import("../layouts/MainLayout"));

// pages
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <MainLayout />
      </Suspense>
    ),
    // errorElement: errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense>
            {" "}
            <Register />{" "}
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense>
            {" "}
            <Login />{" "}
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: <Suspense>{/*     <Profile /> */}</Suspense>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
