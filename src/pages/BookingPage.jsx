import BookingForm from '../components/BookingForm';
const BookingPage = ({ availableTimes, updateTimes, submitData, dispatchOnDateChange }) => {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-primary-1 p-8 h-80 text-center">
        <h1 className="text-light title">Reserve a table</h1>
      </div>
      <div className="w-3/4 mx-auto sm:my-12 flex items-center justify-center" data-testid="booking-page">
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange}/>
      </div>
    </>
  );
};
export default BookingPage;
