import BookingForm from '../components/BookingForm';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders form inputs and submit button', () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText("What's the occasion?");
  const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('updates state on form input changes', () => {
  render(<BookingForm availableTimes={[{ value: 19, label: '19:00 p.m' }]} updateTimes={() => {}} />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText("What's the occasion?");

  fireEvent.change(dateInput, { target: { value: '2023-08-10' } });
  fireEvent.change(timeSelect, { target: { selectedIndex: 0 } });
  fireEvent.change(guestsInput, { target: { value: '3' } });
  fireEvent.change(occasionSelect, { target: { selectedIndex: 2 } });

  expect(dateInput.value).toBe('2023-08-10');
  expect(timeSelect.value).toBe('19');
  expect(guestsInput.value).toBe('3');
  expect(occasionSelect.value).toBe('anniversary');
});

test('displays validation message on invalid submission', () => {
  window.alert = jest.fn();
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

  const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

  fireEvent.click(submitButton);
  expect(window.alert).toHaveBeenCalledWith('Please enter the correct information');
});

test('submits form on valid input and clears form', () => {
  const updateTimesMock = jest.fn();
  render(<BookingForm availableTimes={[{ value: 19, label: '19:00 p.m' }]} updateTimes={updateTimesMock} />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText("What's the occasion?");
  const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

  fireEvent.change(dateInput, { target: { value: '2023-08-10' } });
  fireEvent.change(timeSelect, { target: { selectedIndex: 0 } });
  fireEvent.change(guestsInput, { target: { value: '3' } });
  fireEvent.change(occasionSelect, { target: { selectedIndex: 2 } });

  fireEvent.click(submitButton);

  expect(updateTimesMock).toHaveBeenCalledWith('2023-08-10');
  expect(dateInput.value).toBe(new Date().toISOString().slice(0, 10));
  expect(timeSelect.value).toBe('19'); // Reset to initial value
  expect(guestsInput.value).toBe('1'); // Reset to initial value
  expect(occasionSelect.value).toBe('occasion'); // Reset to initial value
});
