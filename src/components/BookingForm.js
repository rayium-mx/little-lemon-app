import { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, updateTimes, submitData, dispatchOnDateChange }) => {
  function formatDate(date) {
    return date.toISOString().slice(0, 10);
  }

  const today = formatDate(new Date());

  const occasionOptions = [
    { value: 'occasion', label: 'Occasion' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'business', label: 'Business' },
  ];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(17);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('occasion');

  useEffect(() => {
    const times = updateTimes(date);
    dispatchOnDateChange({ type: 'SET_TIMES', times }); // Dispatch action
    setTime(times[0].value); // Set the first available time as default
  }, [date, updateTimes]);

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  const getIsFormValid = () => {
    return date && time && guests > 0 && occasion !== 'occasion';
  };

  const clearForm = () => {
    setDate(today);
    setTime(availableTimes[0]?.value);
    setGuests(1);
    setOccasion('occasion');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (getIsFormValid()) {
      submitData({ date, time, guests, occasion });
      alert('Booking confirmed');
      clearForm();
    } else {
      alert('Please enter the correct information');
    }
  };

  return (
    <div className="bg-light py-12 px-24 rounded-md" data-testid="booking-form">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-primary-1 subtitle" htmlFor="res-date">
          Choose date
        </label>
        <input
          className="form-input"
          type="date"
          id="res-date"
          value={date}
          onChange={e => {
            handleDateChange(e.target.value);
          }}
        />
        <label className="text-primary-1 subtitle" htmlFor="res-time">
          Choose time
        </label>
        <select
          className="form-input"
          id="res-time"
          value={time}
          onChange={e => {
            setTime(e.target.value);
          }}>
          {availableTimes.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label className="text-primary-1 subtitle" htmlFor="res-guests">
          Number of guests
        </label>
        <input
          className="form-input"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="res-guests"
          value={guests}
          onChange={e => {
            setGuests(e.target.value);
          }}
        />
        <label className="text-primary-1 subtitle" htmlFor="res-occasion">
          What's the occasion?
        </label>
        <select
          className="form-input"
          id="res-occasion"
          value={occasion}
          onChange={e => {
            setOccasion(e.target.value);
          }}>
          {occasionOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input className="mt-6 bg-primary-2 button" type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
