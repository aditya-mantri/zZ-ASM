import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar';
import { SliderData } from '../Data/SliderData';
import firebase from 'firebase/app';

const Home = ({ refreshCart, currentUser}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const user = firebase.auth().currentUser;
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar refreshCart={refreshCart} currentUser={currentUser} isOpen={isOpen} toggle={toggle} />
      <Navbar refreshCart={refreshCart} toggle={toggle} user={user} currentUser={currentUser} />
      <Hero slides={SliderData}/>
      <Services />
      <Info {...homeObjTwo} />
      <Info {...homeObjOne} />
      <Info {...homeObjThree}/>
      <Info {...homeObjFour}/>
      <Info {...homeObjFive} currentUser={currentUser} user={user}/>
      <Footer id='music' />
    </>
  )
}

export default Home
