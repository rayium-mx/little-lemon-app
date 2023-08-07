import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    nav: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: 'about',
      },
      {
        name: 'Menu',
        link: 'menu',
      },
      {
        name: 'Reservations',
        link: 'book',
      },
      {
        name: 'Order online',
        link: 'order',
      },
      {
        name: 'Log in',
        link: 'login',
      },
    ],
    contact: {
      address: '123 Citrus Ave. Sunshineville, Chicago',
      phone: '(555) 123-4567',
      email: 'hello@littlelemon.com',
    },
    social: [
      {
        name: 'Facebook',
        link: 'http://www.facebook.com',
      },
      {
        name: 'Instagram',
        link: 'http://instagram.com',
      },
    ]
  });

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
