import { lazy, Suspense } from "react";
import ErrorPage from "@pages/error-page";
import Loader from "@components/common/Loader";
import { createHashRouter } from "react-router-dom";
import DefaultLayout from "@layouts/DefaultLayout";

// Import your page components

const SignUp = lazy(() => import("@pages/Authentication/SignUp"));
const SignIn = lazy(() => import("@pages/Authentication/SignIn"));
const Profile = lazy(() => import("@pages/Profile"));
const Buttons = lazy(() => import("@pages/UiElements/Buttons"));

export const router = createHashRouter([
  {
    path: "/dashboard",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "ui/buttons",
        element: (
          <Suspense fallback={<Loader />}>
            <Buttons />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <SignIn />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);
