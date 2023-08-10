import { fetchAPI, submitAPI, defaultTimes, dateTimes } from '../fakeAPI/api';

describe('fetchAPI function', () => {
  test('should return defaultTimes for a new date', () => {
    const date = new Date('2023-08-10'); // Use a date that doesn't exist in dateTimes
    const result = fetchAPI(date);
    expect(result).toEqual(defaultTimes);
  });

  test('should return availableTimes for an existing date', () => {
    const existingDate = new Date('2023-08-09');
    dateTimes.push({ id: existingDate.toISOString().slice(0, 10), availableTimes: defaultTimes });
    const result = fetchAPI(existingDate);
    expect(result).toEqual(defaultTimes);
  });
});

describe('submitAPI function', () => {
  test('should filter out the specified time from availableTimes', () => {
    const formData = { date: '2023-08-09', time: 18 }; // Use an existing date and time
    dateTimes.push({ id: '2023-08-09', availableTimes: defaultTimes });

    submitAPI(formData);

    const dateTime = dateTimes.find(dt => dt.id === formData.date);
    expect(dateTime.availableTimes).not.toContainEqual({ value: 18, label: '18:00 p.m' });
  });

  test('should not modify availableTimes for non-matching date', () => {
    dateTimes.length = 0;
    const formData = { date: '2023-08-10', time: 18 }; // Use a date that doesn't exist in dateTimes
    dateTimes.push({ id: '2023-08-09', availableTimes: defaultTimes });
    submitAPI(formData);

    const dateTime = dateTimes.find(dt => dt.id === '2023-08-09');
    expect(dateTime.availableTimes).toEqual(defaultTimes);
  });
});
