import './App.css';
import '../src/components/Header';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import { DataProvider } from './DataContext';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import BookingConfirmed from './pages/BookingConfirmed';
import HomePage from './pages/HomePage';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../src/fakeAPI/api';
import { useNavigate } from 'react-router-dom';
import NotFound from './pages/NotFound';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.times;
    default:
      return state;
  }
};
const App = () => {
  const navigate = useNavigate();
  const updateTimes = date => {
    const times = fetchAPI(new Date(date));
    return times;
  };

  const initializeTimes = () => [...fetchAPI(new Date())];

  const [availableTimes, dispatchOnDateChange] = useReducer(reducer, [], initializeTimes);

  const submitData = formData => {
    submitAPI(formData);
    dispatchOnDateChange({ type: 'SET_TIMES', times: updateTimes(formData.date) });
    navigate('booking_confirmation', { state: formData });
  };

  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="book"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitData={submitData}
              dispatchOnDateChange={dispatchOnDateChange}
            />
          }></Route>
        <Route path="booking_confirmation" element={<BookingConfirmed />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </DataProvider>
  );
};

export default App;
