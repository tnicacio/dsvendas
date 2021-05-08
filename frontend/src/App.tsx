import { Footer } from 'components/Footer';
import { NavBar } from 'components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
