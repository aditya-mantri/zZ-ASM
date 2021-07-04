import "./App.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import firebase from "firebase";
import ".././ecomm/components/Products/Product/styles.css"
import CKEditor from 'ckeditor4-react';
import { Button } from "../components/ButtonElements";
import { BtnWrap } from "../components/Info/InfoElements";
import { PrevArrow , NextArrow } from "../components/Hero/HeroElements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


 function App({currentUser , user}) {
  
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [reviews, setReviews] = useState();
  const [Desc, setDesc] = useState('');

  useEffect(() => {
    const reviewref = firebase.database().ref('Todo');
    reviewref.on('value', (snapshot) => {
      const reviewz = snapshot.val();
      const reviewList = [];
      for (let id in reviewz) {
        reviewList.push({ id, ...reviewz[id] });
      }
      setReviews(reviewList);
    });
  }, []);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };


  const createReview = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      Desc,
    };

    todoRef.push(todo);
  };

  const routeChange = () =>{ 
    let path = '/signin'; 
    history.push(path);
  }
  const NextArrowz = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <NextArrow />
      </div>
    );
  };

  const PrevArrowz = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <PrevArrow />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [view, setView] = useState(true);
  const unknown ='ANONYMOUS';

  const changeView = () => {
    setView(!view)
  }

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrowz />,
    prevArrow: <PrevArrowz />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  
  let btn_class = view ? "datainput" : "datainputnone";
  



  return (

  

    <div className='bgclr'>
        
      <div class="datainput"><h1>RE_VIEWS.</h1>
       
    {currentUser &&    <Button 
                  onClick={changeView}
                  primary={0}
                  dark={0}
                  dark2={1}
                  > 
                  <FontAwesomeIcon
            icon={view ? faTimesCircle  : faBars }
          />
              </Button> }
          <br/>
           </div>
      <Slider {...settings}>
        {reviews ? 
        reviews.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
  
            <div class="container">
            <div className={idx === imageIndex ? "cardz" : "cardy"} >
            <div class="sneaker">
                <div class="circlez"></div>
                <h1 class="nameval">{img.title? img.title : unknown}</h1>   
                
             </div>
            <div class="info">
              <h2>Says...</h2>
           <h3 dangerouslySetInnerHTML={{ __html: img.Desc }}></h3>
            </div >
        </div>
        </div>
          
            </div>
          
        ))  : ''}
        
      </Slider>
   {currentUser &&  <div class={btn_class}>
        <br/>
        <input type="text" onChange={handleOnChange} placeholder=" Please enter your name..." value={user.displayName? user.displayName : title} />
        <input type="text"  placeholder="Please enter your email..." value={user.email? user.email : ""}/>
        <br/>
        <div className="Ck">
        <CKEditor 
              data="<p>Please limit your emotions to < 50 words. <br/> <br/> 
                  With Regards, <br/>
                  ASM :)  <br/><br/><br/><br/> PS: Please erase this before writing.
                   </p>" 
              onChange={evt => setDesc(evt.editor.getData())}
            />
          <br/> 
          </div> 
          <div className='Cntr'>
          <BtnWrap>
                  <Button 
                  onClick={() => {createReview(); changeView(); }}
                  primary={0}
                  dark={0}
                  dark2={1}
                  >Submit
                  </Button>
           </BtnWrap>
           </div>
        <br/>
      </div>
      }
      
   
     {!currentUser  &&  <div class="datainput">
          <BtnWrap>
                  <Button 
                  onClick={routeChange}
                  primary={0}
                  dark={0}
                  dark2={1}
                  >Write a Review?
                  </Button>
           </BtnWrap>
          </div>}

    </div>
  );
}

export default App;
