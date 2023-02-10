import { HiMenuAlt1 } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';

export default function Nav() {
  const navItems = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Artwork',
      href: '#artwork',
    },
    {
      name: "FAQ's",
      href: '#faqs',
    },
    {
      name: 'Book Now',
      href: '#book-now',
    },
    {
      name: <BsInstagram />,
      href: '#socials',
    },
  ];

  return (
    <main className="sticky top-0 z-50">
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Nat Tats</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-left dropdown-bottom">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <HiMenuAlt1 className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
