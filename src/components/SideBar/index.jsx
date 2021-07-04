import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'
import { auth } from '../../firebase/utils'
const Sidebar = ({isOpen,toggle, currentUser, refreshCart}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
        <SidebarLink to='discover' onClick={toggle}>Hangman</SidebarLink>
        <SidebarLink to='about' onClick={toggle}>LightsOut</SidebarLink>
        <SidebarLink to='signup' onClick={toggle}>Yahtzee</SidebarLink>
        <SidebarLink to='joke' onClick={toggle}>Smile?</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {!currentUser && <SidebarRoute to='/signin'>Sign in</SidebarRoute>}
        </SideBtnWrap> 
        <br/> 
        <SideBtnWrap>
        {!currentUser && <SidebarRoute to='/signup'>Sign up</SidebarRoute>}
        </SideBtnWrap>  
        {currentUser && <SideBtnWrap onClick={() => {auth.signOut(); refreshCart();}}> 
             <SidebarRoute to='/'>Log Out </SidebarRoute>
          </SideBtnWrap>}
         

      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
