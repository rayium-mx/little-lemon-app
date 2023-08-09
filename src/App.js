import './App.css';
import '../src/components/Header';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import { DataProvider } from './DataContext';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="book" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
