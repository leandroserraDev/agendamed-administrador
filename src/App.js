import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'
import DoctorsPage from './Pages/Doctor/doctorsView/DoctorsPage.js';
import DoctorPage from './Pages/Doctor/DoctorCrud/DoctorPage.js'
import Home from './Pages/Home/Home.js';
import Login from './Pages/Auth/Login.js';
import PrivateRoutes from './Protected/PrivateRoutes.js'
import AuthPage from './Pages/Auth/AuthPage.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children:[

  
  {
    path: "/",
    element: <Home />
  },
  {
    path: 'doctor',
    element: <DoctorPage/>
  },

  {path: 'doctors',

    element: <DoctorsPage/>
  }
]},
  
{
  path: 'auth',
  element: <AuthPage/>
}
]);

function App() {
  return (
    <>
    <Header/>

    <RouterProvider router={router}/>
    </>
  );
}

export default App;
