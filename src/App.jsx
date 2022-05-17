import "./App.css";
import Home from "./pages/Home";
import { RickAndMortyProvider } from "./store/RickAndMortyContex";

function App() {
  return (
    <RickAndMortyProvider>
      <Home />
    </RickAndMortyProvider>
  );
}

export default App;
