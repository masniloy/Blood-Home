
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
          element: <DonateBlood></DonateBlood>
        },
        {
          path: '/FiendDonor',
          element: <FiendDonor></FiendDonor>
        },
        {
          path: '/Login',
          element: <Login></Login>
        }
        ,
        {
          path: '/Register',
          element: <Register></Register>
        }
        ,
        {
          path: '/BloodRequest',
          element: <BloodRequest></BloodRequest>
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

