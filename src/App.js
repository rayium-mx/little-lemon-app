import './App.css';
import '../src/components/Header';
import Header from '../src/components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { DataProvider } from './DataContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
