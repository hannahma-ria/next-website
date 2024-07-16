import React from 'react';
import navStyles from '../../styles/Nav.module.css';
import * as data from './links.json'
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
}
const NavBar: React.FC<{}>= () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles['logo-container']}>
        <a href="/">Link</a>
         
      </div>
      <div className={navStyles['link-container']}>
        {links.map((link: Link) => {
          return (
            <div key={link.href} className={navStyles['link']}>
              <a href={link.href}>
                {link.label}
              </a>
            </div>
          )
        })}
      </div>

    </nav>
  );
};

export default NavBar;
