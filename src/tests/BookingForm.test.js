import BookingForm from '../components/BookingForm';
import ConfirmDialog from '../components/ConfirmDialog';
import { render, screen, fireEvent } from '@testing-library/react';

const mockTimes = [{ value: 19, label: '19:00 p.m' }];
function updateTimesMock() {
  return mockTimes;
}
const dispatchOnDateChangeMock = jest.fn();

test('renders form inputs and submit button', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      updateTimes={updateTimesMock}
      dispatchOnDateChange={dispatchOnDateChangeMock}
    />
  );

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText("What's the occasion?");
  const submitButton = screen.getByRole('button', { name: 'Confirm reservation' });

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('updates state on form input changes', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      updateTimes={updateTimesMock}
      dispatchOnDateChange={dispatchOnDateChangeMock}
    />
  );

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

test('submits form on valid input and clears form', () => {
  updateTimesMock = jest.fn(() => {
    return mockTimes;
  });
  render(
    <BookingForm
      availableTimes={mockTimes}
      updateTimes={updateTimesMock}
      submitData={jest.fn()}
      dispatchOnDateChange={dispatchOnDateChangeMock}
    />
  );

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText("What's the occasion?");
  const submitButton = screen.getByRole('button', { name: 'Confirm reservation' });

  fireEvent.change(dateInput, { target: { value: '2023-08-10' } });
  fireEvent.change(timeSelect, { target: { selectedIndex: 0 } });
  fireEvent.change(guestsInput, { target: { value: '3' } });
  fireEvent.change(occasionSelect, { target: { selectedIndex: 2 } });
  fireEvent.click(submitButton);

  const confirmDialog = screen.getByTestId('confirm-dialog');
  expect(confirmDialog).toBeInTheDocument();
  const confirmButton = screen.getByText('Yes, continue');
  expect(confirmButton).toBeInTheDocument();
  fireEvent.click(confirmButton);

  expect(updateTimesMock).toHaveBeenCalledWith('2023-08-10');
  expect(dateInput.value).toBe('2023-08-11');
  expect(timeSelect.value).toBe('19'); // Reset to initial value
  expect(guestsInput.value).toBe('2'); // Reset to initial value
  expect(occasionSelect.value).toBe('none'); // Reset to initial value
});

test('dont do anything if user doesnt confirm submit', () => {
  updateTimesMock = jest.fn(() => {
    return mockTimes;
  });
  render(
    <BookingForm
      availableTimes={mockTimes}
      updateTimes={updateTimesMock}
      submitData={jest.fn()}
      dispatchOnDateChange={dispatchOnDateChangeMock}
    />
  );

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText("What's the occasion?");
  const submitButton = screen.getByRole('button', { name: 'Confirm reservation' });

  fireEvent.change(dateInput, { target: { value: '2023-08-10' } });
  fireEvent.change(timeSelect, { target: { selectedIndex: 0 } });
  fireEvent.change(guestsInput, { target: { value: '3' } });
  fireEvent.change(occasionSelect, { target: { selectedIndex: 2 } });
  fireEvent.click(submitButton);

  const confirmDialog = screen.getByTestId('confirm-dialog');
  expect(confirmDialog).toBeInTheDocument();
  const goBackButton = screen.getByText('No, go back');
  expect(goBackButton).toBeInTheDocument();
  fireEvent.click(goBackButton);

  expect(dateInput.value).toBe('2023-08-10');
  expect(timeSelect.value).toBe('19');
  expect(guestsInput.value).toBe('3');
  expect(occasionSelect.value).toBe('anniversary');
});
