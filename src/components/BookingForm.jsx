import { useState, useEffect } from 'react';
import ConfirmDialog from './ConfirmDialog';

const BookingForm = ({ availableTimes, updateTimes, submitData, dispatchOnDateChange }) => {
  function formatDate(date) {
    return date.toISOString().slice(0, 10);
  }

  const today = formatDate(new Date());

  const occasionOptions = [
    { value: 'none', label: 'No special occasion' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'business', label: 'Business' },
  ];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(17);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('none');

  useEffect(() => {
    const times = updateTimes(date);
    dispatchOnDateChange({ type: 'SET_TIMES', times }); // Dispatch action
    setTime(times[0]?.value ?? 0); // Set the first available time as default
  }, [date, updateTimes, dispatchOnDateChange]);

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  const getIsFormValid = () => {
    return date && time && guests > 0 && occasion;
  };

  const clearForm = () => {
    setDate(today);
    setTime(availableTimes[0]?.value);
    setGuests(2);
    setOccasion('none');
  };

  const [confirmDialog, setConfirmDialog] = useState({
    message: '',
    toggle: false,
  });

  const handleConfirmDialog = (message, toggle) => {
    setConfirmDialog({
      message,
      toggle,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (getIsFormValid()) {
      handleConfirmDialog('Are you ready to confirm your reservation?', true);
    } else {
      alert('Please check the information provided and try again');
    }
  };

  const makeReservation = confirm => {
    if (confirm) {
      submitData({ date, time, guests, occasion });
      clearForm();
    }
    handleConfirmDialog('', false);
  };

  return (
    <div className="bg-light py-12 px-24 rounded-lg" data-testid="booking-form">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-primary-1 subtitle" htmlFor="res-date">
          Choose date
        </label>
        <input
          aria-label="Choose a date"
          className="form-input"
          min={today}
          type="date"
          id="res-date"
          value={date}
          onChange={e => {
            handleDateChange(e.target.value);
          }}
        />
        {availableTimes.length > 0 ? (
          <>
            <label className="text-primary-1 subtitle" htmlFor="res-time">
              Choose time
            </label>
            <select
              aria-label="Choose a time"
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
              aria-label="Select the number of guests"
              className="form-input"
              type="number"
              placeholder="2"
              min="2"
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
              aria-label="Select an occasion"
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
            <input
              aria-label="Confirm reservation"
              className="mt-6 bg-primary-2 hover:brightness-105 "
              type="submit"
              value="Confirm Reservation"
            />
          </>
        ) : (
          <div>
            <p className="font-bold text-primary-1">Looks like we're fully booked! Please select a different date</p>
          </div>
        )}
      </form>
      {confirmDialog.toggle && <ConfirmDialog onConfirm={makeReservation} message={confirmDialog.message} />}
    </div>
  );
};

export default BookingForm;
