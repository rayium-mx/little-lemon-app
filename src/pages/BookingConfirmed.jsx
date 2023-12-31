import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookingConfirmed = () => {
  const { state } = useLocation();
  let { date, time, guests, occasion } = state;
  date = new Date(date);
  date.setHours(time);
  return (
    <>
      <div className="w-full flex items-center justify-center bg-primary-1 p-8 h-80 text-center">
        <h1 className="text-light">Reservation confirmed!</h1>
      </div>
      <div className="w-2/4 mx-auto sm:my-12" data-testid="booking-page">
        <div
          className="bg-light py-12 rounded-lg flex items-center justify-center flex-col"
          data-testid="booking-confirmation">
          <p className="subtitle text-primary-1">Your reservation: </p>
          <p className="font-bold mt-8 text-xl">Date and time:</p>
          <p className="text-2xl">{date.toLocaleString('en-GB')}</p>
          <p className="font-bold mt-8 text-xl">Number of guests:</p>
          <p className="text-2xl">{guests}</p>
          <p className="font-bold mt-8 text-xl">Occasion:</p>
          <p className="text-2xl capitalize">{occasion}</p>
          <p className="title text-primary-1 mt-8">See you soon!</p>
          <button className="primary-2 mt-12">
            <Link to="/">Back to Homepage</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default BookingConfirmed;
