import BookingForm from '../components/BookingForm';
const BookingPage = ({ availableTimes, updateTimes }) => {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-primary-1 p-8 h-80 text-center">
        <h1 className="text-light">Reserve a table</h1>
      </div>
      <div className="w-3/4 mx-auto sm:mt-12 sm:mb-24 flex items-center justify-center" data-testid="booking-page">
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
      </div>
    </>
  );
};
export default BookingPage;
