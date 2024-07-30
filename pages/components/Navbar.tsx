import React from 'react';
import navStyles from '../../styles/Nav.module.css';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Navbar: React.FC<{}> = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logoContainer}>
        <a href="/">
          <img src="/HUNCH academy logo.png" alt="logo" ></img>
        </a>
      </div>
      <div className={navStyles.rightContainer}>
      <div className={navStyles.linkContainer}>
          {links.map((link: Link) => (
            <a key={link.href} href={link.href} className={navStyles.link}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={navStyles.searchContainer}>
          <input type="text" placeholder="Search..." className={navStyles.searchInput} />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
