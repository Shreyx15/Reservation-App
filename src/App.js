import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/hotels",
    element: <List />
  },
  {
    path: "/hotel",
    element: <Hotel />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
