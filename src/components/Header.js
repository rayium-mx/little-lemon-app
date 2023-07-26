import logo from '../assets/Logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="w-9/12 mx-auto mt-6 mb-12 px-12 flex items-center justify-center">
        <img src={logo} className="w-52 mx-8" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
