import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import {NavLinks} from '../Navbar/NavbarElements';
import { Link } from 'react-router-dom';


function Dropdown({games , user} ) {
  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >

        {MenuItems.map((item, index) => {
          if(item.game && games) {
          return (
            <li key={index}>
              <NavLinks
                className='dropdown-link'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </NavLinks> 
            </li>  
          );
        }
        else if (!item.game && !games) {
        return (
          <>
          <h6> <i className='fas fa-bezier-curve' />  </h6>
          <h5>WELCOME</h5>
          <h6>{user.email}</h6>
        <li key={index}>
           <Link
              className='dropdown-link'
              to={item.path}

            >
              {item.title}
            </Link>
          </li>
          </>
        );
        }
      
      }
        
        
        )}
      </ul>
    </>
  );
}

export default Dropdown;