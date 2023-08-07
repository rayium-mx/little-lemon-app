import logo from '../assets/logo2.png';
import { useData } from '../DataContext';

const Footer = () => {
  const { nav, contact, social } = useData().data;
  return (
    <footer className="bg-primary-1 p-8">
      <div className="w-9/12 mx-auto flex items-start justify-between mt-12">
        <img src={logo} className="w-40 mr-24" alt='Little Lemon Logo' />
        <div className="flex flex-wrap">
          <p className="text-light font-bold text-lg w-full">Navigation</p>
          <ul className="flex flex-wrap text-light">
            {nav.map((item, index) => (
              <li key={index} className="w-full">
                <a href={item.link}>{item.name}</a>
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
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
