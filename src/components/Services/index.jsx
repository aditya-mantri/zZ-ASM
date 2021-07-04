import React from 'react'
//import { Link } from 'react-router-dom'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/merch.svg'
import Icon5 from '../../images/music.svg'
import Icon6 from '../../images/laugh.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper,ServicesWrapperrow2, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'
import {NavLinks} from  '../Navbar/NavbarElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard  >
        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
             <ServicesIcon src={Icon1}/> </NavLinks>
          <ServicesH2>Hangman</ServicesH2>
          <ServicesP>Dont get hanged.Just find the word. Guesswork? Maybe.</ServicesP>
          </ServicesCard>
    

        <ServicesCard>
        <NavLinks to='about'smooth={true} duration={500} spy={true} exact='true' offset={-80}>
        <ServicesIcon src={Icon2}/> </NavLinks>
          <ServicesH2>LightsOut</ServicesH2>
          <ServicesP>Try to turn off all the lights. Quitter? Skip.</ServicesP>
        </ServicesCard>

        <ServicesCard >
        <NavLinks to='signup'smooth={true} duration={500} spy={true} exact='true' offset={-80}>
          <ServicesIcon src={Icon3}/></NavLinks>
          <ServicesH2>Yahtzee</ServicesH2>
          <ServicesP>Its all luck and relative. Know Maths? Cake : Complicated.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
           <br/>
      <ServicesWrapperrow2>
      <ServicesCard>
      <NavLinks to='joke' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
          <ServicesIcon src={Icon6}/></NavLinks>
          <ServicesH2>DAD-Joke</ServicesH2>
          <ServicesP>Wanna test your patience and persistance,Simply Joke it. </ServicesP>
        </ServicesCard>


      <ServicesCard>
      <NavLinks to='merch' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
          <ServicesIcon src={Icon4}/></NavLinks>
          <ServicesH2>E-Shop</ServicesH2>
          <ServicesP>Love Shopping? Pay visit to our exclusive inactive product line.</ServicesP>
        </ServicesCard>
      
      <ServicesCard>
      <NavLinks to='music' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
          <ServicesIcon src={Icon5}/></NavLinks>
          <ServicesH2>zZ_Flow</ServicesH2>
          <ServicesP>Having a bad day? or Wanna lighten your mood! Just groove around. </ServicesP>
        </ServicesCard>
        </ServicesWrapperrow2>

    </ServicesContainer>
  )
}

export default Services
