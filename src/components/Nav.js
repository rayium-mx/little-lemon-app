const menu = [
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
];

const Nav = () => {
  return (
    <nav className="w-full px-12 mt-12 sm:mt-0">
      <ul className="flex flex-wrap items-center justify-evenly font-bold text-lg  text-primary-1">
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
