import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutWrapper from './wrappers/LayoutWrapper';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import DashboardWrapper from './wrappers/DashboardWrapper';

const routes = [
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
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
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />
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
  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  )
}

export default App;