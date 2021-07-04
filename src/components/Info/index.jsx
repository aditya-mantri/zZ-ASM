import React from 'react'
import { Button } from '../ButtonElements'
import { useHistory } from "react-router-dom";
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import JokeList  from '../../dadjoke/App';
import './infocss.css';
import SliderReview from '../../slider/App'


const Info = ({user, currentUser, loc, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2,comp }) => {
  
  const history = useHistory();

  const routeChange = () =>{ 
    let path = loc; 
    history.push(path);
  }

  if(!comp){
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                  onClick={routeChange}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap className='alpha'>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
return (
  <>
<InfoContainer lightBg={lightBg} id={id}>
  <JokeList/>
  </InfoContainer>
<SliderReview user={user} currentUser={currentUser}/>
</>
)

}

export default Info
