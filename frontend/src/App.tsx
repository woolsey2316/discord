import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import Signup from './routes/signup';
import AuthLayout from './layouts/AuthLayout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // The main app area (usually protected)
    children: [
      { index: true, element: <Home /> },
      // Other protected pages go here
    ],
  },
  {
    // Auth-specific layout for Login/Signup
    element: <AuthLayout />, 
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Signup /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
