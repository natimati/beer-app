import './App.css';
import BeerList from './components/BeersList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BeerDetails from './components/BeerDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
});
const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Header />
        <BeerList />
      </>
  },
  {
    path: '/beer-details/:beerId',
    element: 
      <>
        <Header />
        <BeerDetails />
      </>
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
