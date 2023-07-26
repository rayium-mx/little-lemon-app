const Nav = () => {
  return (
    <nav className="w-full px-12">
      <ul className="flex items-center justify-between font-bold text-primary-1">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="menu">Menu</a>
        </li>
        <li>
          <a href="reservations">Reservations</a>
        </li>
        <li>
          <a href="order">Order online</a>
        </li>
        <li>
          <a href="login">Log in</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
