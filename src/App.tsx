import './App.css';
import BeerList from './components/beerList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BeerList />
    </QueryClientProvider>
  );
}

export default App;
