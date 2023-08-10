export const dateTimes = [];
export const defaultTimes = [
  { value: 17, label: '17:00 p.m' },
  { value: 18, label: '18:00 p.m' },
  { value: 19, label: '19:00 p.m' },
  { value: 20, label: '20:00 p.m' },
  { value: 21, label: '21:00 p.m' },
  { value: 22, label: '22:00 p.m' },
];

export function fetchAPI(date) {
  const dateTime = dateTimes.find(dt => dt.id === date.toISOString().slice(0, 10));
  if (dateTime) {
    return dateTime.availableTimes;
  } else {
    dateTimes.push({ id: date.toISOString().slice(0, 10), availableTimes: defaultTimes });
    return defaultTimes;
  }
}

export const submitAPI = formData => {
  dateTimes.map(dateTime => {
    if (dateTime.id === formData.date) {
      dateTime.availableTimes = dateTime.availableTimes.filter(time => time.value !== formData.time);
    }
    return dateTime;
  });
};
