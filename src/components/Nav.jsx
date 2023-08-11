import { useState } from 'react';
import { useData } from '../DataContext';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { nav } = useData().data;
  const [selected, setSelected] = useState(0);
  return (
    <nav className="w-full px-12 mt-12 sm:mt-0">
      <ul className="flex flex-wrap items-center justify-evenly font-bold text-lg  text-primary-1 gap-4">
        {nav.map((item, index) => (
          <li
            key={index}
            className={`border-primary-1 ${selected === index ? 'border-b-2' : 'hover:border-b hover:-mb-px'}`}
            onClick={e => {
              e.preventDefault();
              setSelected(index);
            }}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
