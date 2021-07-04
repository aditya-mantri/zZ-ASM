import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
//import useStyles from './styles';
import "./styles.css";

const PrimarySearchAppBar = ({ handleLibToggle , totalItems }) => {
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  //const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className="custom-navbar" >
        <Toolbar>
          <Typography component={Link} to="/Shop-e-wasool" variant="h6"  className="custom-title" color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className="logo" />
          </Typography>
          <Typography/>
          <Typography className="gamezon" component={Link} to="/" variant="h6"  color="inherit">
                    zZ_ASM.
          </Typography>
          <div className="basket-wrapper" />
          {location.pathname === '/Shop-e-wasool' && (
          <div className="basket-wrapper">
            <IconButton component={Link} to="/Shop-e-wasool/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
