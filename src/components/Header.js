import logo from '../assets/logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={logo} className="w-full sm:w-1/4 mx-8" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
