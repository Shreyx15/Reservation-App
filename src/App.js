import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/List';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/hotels",
    element: <List />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
