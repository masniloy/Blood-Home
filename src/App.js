
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import DonateBlood from './Pages/DonateBlood/DonateBlood';
import FiendDonor from './Pages/FiendDonor/FiendDonor';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import BloodRequest from './Pages/BloodRequest/BloodRequest';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Loading from './Loading/Loading';
import AllBloodRequest from './Pages/AllBloodRequest/AllBloodRequest';
import DonorContract from './Pages/DonorContract/DonorContract';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: '/Home',
          element: <Home></Home>
        },
        {
          path: '/About',
          element: <About></About>
        },
        {
          path: '/DonateBlood',
          element: <PrivateRoutes><DonateBlood></DonateBlood></PrivateRoutes>
        },
        {
          path: '/FiendDonor',
          element: <PrivateRoutes><FiendDonor></FiendDonor></PrivateRoutes>
        },
        {
          path: '/Login',
          element: <Login></Login>
        }
        ,
        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/Loading',
          element: <Loading></Loading>
        }
        ,
        {
          path: '/BloodRequest',
          element: <PrivateRoutes><BloodRequest></BloodRequest></PrivateRoutes>

        },
        {
          path: '/AllBloodRequest',
          element: <PrivateRoutes><AllBloodRequest></AllBloodRequest></PrivateRoutes>

        }
      ]
    }
  ])

  return (
    <div className="App ">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;

