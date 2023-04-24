import { QueryClientProvider, QueryClient } from "react-query";
import Searchbar from "./components/Searchbar";
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Searchbar />
      </div>
    </QueryClientProvider>
  );
}

export default App;
