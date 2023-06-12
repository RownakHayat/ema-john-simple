
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layouts/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import { productsAndcartLoader } from './Loaders/producteAndcartLoaders';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Shipping from './components/Shipping/Shipping';
import Routes from './components/Routes/Routes';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndcartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Routes>
            <Inventory></Inventory>
          </Routes>
        },
        {
          path: 'shipping',
          element: <Routes>
            <Shipping></Shipping>
          </Routes>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>

        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },

  ]);
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
