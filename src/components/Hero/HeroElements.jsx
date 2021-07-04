import styled, {css} from 'styled-components/macro';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdArrowRoundForward } from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';




export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 0 30px;
  height: ${({ecomm}) => (ecomm? '400px' : '800px')};
  position: relative;
  z-index: 1;
  
`

const arrowButtons = css`
width: 50px;
height: 50px;
color:#fff;
cursor:pointer
background:#000d1a;
border-radius: 50px;
padding:10px;
margin-right: 1rem;
user-select:none;
transition :0.3s;

&:hover {
  background:#cd853f;
  transform: scale(1.05);
}
`;

export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward) `
${arrowButtons}
`;

export const SliderButtons = styled.div`
position: absolute;
bottom: ${({ecomm}) => (ecomm? '10px' : '100px')};
display:flex;
z-index:10;
`;

export const Arrow = styled(IoMdArrowRoundForward)``;

/*:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)
    z-index: 2;
  }*/

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const ImageBg = styled.img`
  width: 170%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-size: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 10;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  width:calc(100%-100px);
  flex-direction: column;
  align-items: center;
`
export const HeroSlider = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const HeroH1 = styled.h1`
  color:#fff;
  font-size: 50px;
  text-align: center;

  @media screen and (max-wodth: 768px) {
    font-size: 40px
  }
  @media screen and (max-wodth: 480px) {
    font-size: 32px
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-wodth: 768px) {
    font-size: 24px
  }
  @media screen and (max-wodth: 480px) {
    font-size: 18px
  }
`
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`