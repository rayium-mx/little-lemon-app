import logo from '../assets/logo2.png';
import { useData } from '../DataContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { nav, contact, social } = useData().data;
  return (
    <footer className="bg-primary-1 p-8">
      <div className="w-9/12 mx-auto flex items-start justify-between my-12 gap-12 sm:gap-24 flex-col sm:flex-row">
        <img src={logo} className="w-40" alt="Little Lemon Logo" />
        <div className="flex flex-wrap">
          <p className="text-light font-bold text-lg w-full">Navigation</p>
          <ul className="flex flex-wrap text-light">
            {nav.map((item, index) => (
              <li key={index} className="w-full">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap">
          <p className="text-light font-bold text-lg w-full">Contact Us</p>
          <ul className="flex flex-wrap text-light">
            {Object.values(contact).map((contact, index) => (
              <li key={index} className="w-full">
                <p>{contact}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap">
          <p className="text-light font-bold text-lg w-full">Social Media</p>
          <ul className="flex flex-wrap text-light">
            {social.map((item, index) => (
              <li key={index} className="w-full">
                <Link to={item.link} target="blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
