import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />}/>
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;