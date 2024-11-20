import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutWrapper from './wrappers/LayoutWrapper';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const App = () => {
  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />
}

export default App;