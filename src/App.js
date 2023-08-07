import './App.css';
import '../src/components/Header';
import Header from '../src/components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider>
      <Header />
      <Main />
      <Footer />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
