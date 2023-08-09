import logo from '../assets/logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header data-testid="header">
      <div className="header">
        <img src={logo} className="w-full sm:w-1/4 mx-8" alt="Little Lemon Logo" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
