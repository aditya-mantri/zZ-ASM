import React, {useState} from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {  SocialIconLink, SocialIcons, SocialMediaWrap } from '../Footer/FooterElements'
import {  ImageBg, HeroSlider, HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, PrevArrow, NextArrow, SliderButtons} from './HeroElements'
import { Button } from '../ButtonElements'
import {  Link } from "react-router-dom";
import { useRef } from 'react';
import { useEffect } from 'react';
import Typical from 'react-typical';
import './hero.css';
 


const Hero = ({slides, slidesrelatedtoecomm}) => {
  const [hover, setHover] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  
  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length-1 ? 0 : current +1 ))
    }
   
    if(current===0)
    timeout.current = setTimeout(nextSlide, 11100000)
    else
    timeout.current = setTimeout(nextSlide, 5200000)

    return function() {
      if(timeout.current){
        clearTimeout(timeout.current)
      }
    }
  },[current, length])

  const nextSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }

    setCurrent(current === length-1 ? 0 : current+1 );
  };

  const prevSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }

    setCurrent(current === 0 ? length-1 : current-1 );
  };

  

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id='home' ecomm={slidesrelatedtoecomm} >

      {slides.map((slide,index) => {
          return(
            <HeroBg key={index}>  
            {index === current && 
            <HeroSlider>
              {slide.video && <VideoBg 
               autoPlay loop muted src={slide.video} type='video/mp4' />}
              {slide.imgsrc && 
                 <>
                <ImageBg src={slide.imgsrc} alt=''/>
                 </>
              }    
               <HeroContent>  


        {slide.intro && 
        <div class="bodz">
        <div class="words word-1">
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>T</span>
  <span>Y</span>
  <span>A</span>
</div>

<div class="words word-2">
  <span>M</span>
  <span>A</span>
  <span>N</span>
  <span>T</span>
  <span>R</span>
  <span>I</span>
</div>
</div> 
        
        }
        <HeroH1>{slide.text}</HeroH1>
        <HeroP>{slide.para}
          {slide.intro &&   <Typical 
           loop={Infinity}
           wrapper='b'
           steps={[ 
           'B.Tech MNNIT, Final Year.',1000,
           'A passionate Web Developer.',1000,
           'Lets get in touch. Shall we?',1000,
           ]}/> }
           </HeroP>
    
          {(slide.homepg && !slide.intro) && 
        <HeroBtnWrapper>
          <Button to={slide.scrollpath} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} exact='true' offset={-80}>
          <Link to={slide.path}>{slide.clicktext}</Link>{hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>}
      
     {slide.intro &&  
          <SocialMediaWrap>
          <SocialIcons> 
             <SocialIconLink href='https://www.facebook.com/aditya.mantri.58/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/o_.mantri._o/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/aditya-mantri-8bb358123/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
         }
        
      </HeroContent>
            </HeroSlider>
            }
               </HeroBg>
          )
      })}
      
     
      <SliderButtons  ecomm={slidesrelatedtoecomm}>
          <PrevArrow onClick = {prevSlide}/>
          <NextArrow onClick = {nextSlide}/>
        </SliderButtons>
    </HeroContainer>
  )
}

export default Hero
