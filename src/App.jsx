import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutWrapper from './wrappers/LayoutWrapper';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import DashboardWrapper from './wrappers/DashboardWrapper';
import authLoader from './loaders/units/authLoader';
import AdminDashboardWrapper from './wrappers/AdminDashboardWrapper';
import Logout from './components/Logout';
import ErrorPage from './pages/ErrorPage';
import Alert from './components/Alert';
import Dashboard from './pages/user/Dashboard';
import Jobs from './pages/user/Jobs';
import Applied from './pages/user/Applied';
import dashboardLoader from './loaders/combined/dashboardLoader';
import jobsLoader from './loaders/units/jobsLoader';

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Layout Wrapper...</div>,
    children: [
      {
        path: "",
        element: <HomePage />,
        hydrateFallbackElement: <div>Loading Home Page...</div>,
      },
      {
        path: "register",
        element: <RegisterPage />,
        hydrateFallbackElement: <div>Loading Register Page...</div>,
      },
      {
        path: "login",
        element: <LoginPage />,
        hydrateFallbackElement: <div>Loading Login Page...</div>,
      },
      {
        path: "logout",
        element: <Logout />,
        hydrateFallbackElement: <div>Logging out...</div>,
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    hydrateFallbackElement: <div>Loading Dashboard Page...</div>,
    loader: authLoader,
    children: [
      {
        path: "",
        element: <Dashboard />,
        hydrateFallbackElement: <div>Loading User Dashboard Page...</div>,
        loader: dashboardLoader,
      },
      {
        path: "jobs",
        element: <Jobs />,
        hydrateFallbackElement: <div>Loading Jobs Page...</div>,
        loader: jobsLoader,
      },
      {
        path: "applied",
        element: <Applied />,
        hydrateFallbackElement: <div>Loading Applied Jobs Page...</div>,
      },
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardWrapper />,
    hydrateFallbackElement: <div>Loading Admin Dashboard Page...</div>,
    loader: authLoader,
  },
  {
    path: "*",
    element: <ErrorPage />
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
      <Alert />
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