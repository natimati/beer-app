import './App.css';
import BeerList from './components/BeerList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Pagination from './components/Pagination';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
        <Pagination />
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
