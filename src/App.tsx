import './App.css';
import BeerList from './components/BeerList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';

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
      <Header />
      <BeerList />
    </QueryClientProvider>
  );
}

export default App;
