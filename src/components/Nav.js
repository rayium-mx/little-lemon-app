import { useData } from '../DataContext';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { nav } = useData().data;
  return (
    <nav className="w-full px-12 mt-12 sm:mt-0">
      <ul className="flex flex-wrap items-center justify-evenly font-bold text-lg  text-primary-1">
        {nav.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
