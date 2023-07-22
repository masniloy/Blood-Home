
import './App.css';

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
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
import Banner from './Pages/Home/Banner/Banner';
import Do from './Pages/FiendDonor/Do';
import MyBloodRequest from './Pages/MyBloodRequest/MyBloodRequest';
import Chat from './Pages/Chat/Chat';
import Myok from './Pages/Chat/Myok';
import ChatHome from './Pages/Chat/ChatHome';

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
        },
        {
          path: '/Banner',
          element: <Banner></Banner>
        }
        ,
        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/Loading',
          element: <Loading></Loading>
        },
        {
          path: '/Chat',
          element: <PrivateRoutes><ChatHome></ChatHome></PrivateRoutes>
        }
        ,
        {
          path: '/BloodRequest',
          element: <PrivateRoutes><BloodRequest></BloodRequest></PrivateRoutes>

        },
        {
          path: '/MyBloodRequest',
          element: <PrivateRoutes><MyBloodRequest></MyBloodRequest></PrivateRoutes>

        },
        // {
        //   path: '/Chat',
        //   element: <PrivateRoutes><Myok></Myok></PrivateRoutes>

        // },
        {
          path: '/AllBloodRequest',
          element: <PrivateRoutes><AllBloodRequest></AllBloodRequest></PrivateRoutes>

        }
      ]
    }
  ])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ChatHome2">
            <Route
              index
              element={

                <PrivateRoutes><ChatHome></ChatHome></PrivateRoutes>

              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="App ">

        <RouterProvider router={router}></RouterProvider>

      </div>

    </>

  );
}

export default App;

