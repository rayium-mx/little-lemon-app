import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To mock React Router behavior
import App from './App';

describe('App component', () => {
  test('renders header and footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerElement = screen.getByTestId('header');
    const footerElement = screen.getByTestId('footer');

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  test('renders HomePage component when on root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homePageElement = screen.getByTestId('home-page');

    expect(homePageElement).toBeInTheDocument();
  });

  test('renders BookingPage component with availableTimes prop', () => {
    render(
      <MemoryRouter initialEntries={['/book']}>
        <App />
      </MemoryRouter>
    );

    const bookingPageElement = screen.getByTestId('booking-page');
    const bookingFormElement = screen.getByTestId('booking-form');

    expect(bookingPageElement).toBeInTheDocument();
    expect(bookingFormElement).toBeInTheDocument();
  });
});
