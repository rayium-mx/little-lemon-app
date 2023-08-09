import { useState } from 'react';

const BookingForm = () => {
  const today = new Date().toISOString().slice(0, 10);

  const availableTimes = [
    { value: 17, label: '17:00 p.m' },
    { value: 18, label: '18:00 p.m' },
    { value: 19, label: '19:00 p.m' },
    { value: 20, label: '20:00 p.m' },
    { value: 21, label: '21:00 p.m' },
    { value: 22, label: '22:00 p.m' },
  ];

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

  const getIsFormValid = () => {
    console.log(today, date);
    return date && time && guests > 0 && occasion !== 'occasion';
  };

  const clearForm = () => {
    setDate(today);
    setTime(17);
    setGuests(1);
    setOccasion('occasion');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert('Account created!');
      clearForm();
    } else {
      alert('Llenalo bien puto');
    }
  };

  return (
    <div className="bg-light py-12 px-24 rounded-md">
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
            setDate(e.target.value);
          }}
        />
        <label className="text-primary-1 subtitle" htmlFor="res-time">
          Choose time
        </label>
        <select
          className="form-input"
          id="res-time "
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
        <label className="text-primary-1 subtitle" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="form-input"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={e => {
            setGuests(e.target.value);
          }}
        />
        <label className="text-primary-1 subtitle" htmlFor="occasion">
          Occasion
        </label>
        <select
          className="form-input"
          id="occasion"
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
