import { Inter } from '@next/font/google';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] });

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
      name: 'Contact',
      href: '#contact',
    },
    {
      name: <BsInstagram />,
      href: '#socials',
    },
  ];

  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">NAT TATS</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <div className="dropdown dropdown-end"></div>
        </div>
      </div>
    </main>
  );
}
