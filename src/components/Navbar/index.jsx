import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Musictext, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import { auth } from '../../firebase/utils';
import Dropdown from './Dropdown';
import logomusic from '../../images/music.svg';
import logo from '../../ecomm/assets/commerce.png';
import Typical from 'react-typical';
import './index.css';

const Navbar = ({ refreshCart, toggle , currentUser , user }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

 

  const [dropdown, setDropdown] = useState(false);
  const [dropdownLogout, setDropdownLogout] = useState(false);
  const [dropdownmusic , setDropdownMusic] = useState(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEntermusic = () => {
    if (window.innerWidth < 960) {
      setDropdownMusic(false);
    } else {
      setDropdownMusic(true);
    }
  };

  const onMouseLeavemusic = () => {
    if (window.innerWidth < 960) {
      setDropdownMusic(false);
    } else {
      setDropdownMusic(false);
    }
  };

  const onMouseEnterLogout = () => {
    if (window.innerWidth < 960) {
      setDropdownLogout(false);
    } else {
      setDropdownLogout(true);
    }
  };

  const onMouseLeaveLogout = () => {
    if (window.innerWidth < 960) {
      setDropdownLogout(false);
    } else {
      setDropdownLogout(false);
    }
  };

  return (
    <> 
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>zZ_ASM. 
          <NavLinks 
              onMouseEnter={onMouseEntermusic}
              onMouseLeave={onMouseLeavemusic}
              to='music'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                <div className="beta">
              <img src={logomusic} alt="music.js" height="35px" width="35px" />
                </div>
                <Musictext>
                {dropdownmusic &&  
                <Typical 
                 wrapper='b'
                steps={[ 
             ' - Having a bad day ?',800,
           ' - Click Me !!!',800,
           ' - Lets grove to some music.',800,
           ]}/>}
  
                </Musictext>
               </NavLinks>
          </NavLogo>
          
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          <NavItem>  
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Services 
               </NavLinks>
            </NavItem>
            <NavItem
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
              <NavLinks to=''
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >zZ_Games <i className='fas fa-caret-down' /> 
              </NavLinks>
               {dropdown && <Dropdown games={true} />}
            </NavItem>
            <NavItem>
              <NavLinks to='merch'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}>
               <img src={logo} alt="commerce.js" height="35px" width="35px" />
              </NavLinks>
            </NavItem>
          </NavMenu>

        

          {!currentUser && <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>}

          {currentUser && 
          <NavBtn 
          onMouseEnter={onMouseEnterLogout}
          onMouseLeave={onMouseLeaveLogout}
          >
            <NavBtnLink to='/' onClick={() => {auth.signOut(); refreshCart();}}>Logout</NavBtnLink>
            {dropdownLogout && <Dropdown user={user} games={false}/>}
          </NavBtn>}


         

        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

Navbar.defaultProps = {
  currentUser: null
};

export default Navbar
