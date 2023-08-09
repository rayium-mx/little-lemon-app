import './App.css';
import '../src/components/Header';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import { DataProvider } from './DataContext';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import { useReducer } from 'react';

const App = () => {
  function availableTimesReducer(state, action) {
    return state;
  }

  const initialTimes = initializeTimes();

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialTimes);

  function initializeTimes() {
    return [
      { value: 17, label: '17:00 p.m' },
      { value: 18, label: '18:00 p.m' },
      { value: 19, label: '19:00 p.m' },
      { value: 20, label: '20:00 p.m' },
      { value: 21, label: '21:00 p.m' },
      { value: 22, label: '22:00 p.m' },
    ];
  }

  function updateTimes(selectedDate) {
    console.log("hello!", selectedDate);
  }

  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="book" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />}></Route>
      </Routes>
      <Footer />
    </DataProvider>
  );
};

export default App;
