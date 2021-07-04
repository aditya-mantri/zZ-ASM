import Video1 from '../videos/video.mp4';
//import Video2 from '../videos/video1.mp4';
//import Video3 from '../videos/video2.mp4';
import Video6 from '../videos/Video6.mp4';
import Video5 from '../videos/Video5.mp4';
import AdiPic from '../videos/AdiPic.JPG';

export const SliderData = [
  {
    imgsrc: AdiPic,
    para: ' ',
    homepg : true,
    ecomm : false,
    intro : true,
    wait: true
  },
     {
      video: Video1,
      text:'zZ_Games.',
      para: 'Sign up to an ultimate ride of joyful family games.',
      clicktext: 'Get started',
      path:'/signin',
      homepg : true,
      ecomm : false
    },
    {
      video: Video5,
      text:'SHOP-E-WASOOL',
      para: 'Sign up to purchase and get your pockets empty.',
      clicktext: 'Start Shopping',
      path:'/Shop-e-Wasool',
      homepg : true,
      ecomm: false
    },
    {
       video : Video6,
      text:' LAUGH-E-MAUJ!',
      para: 'Scroll down to Dad Jokes and lets test your patience.',
      clicktext: 'Lets Go',
      scrollpath:'joke',
      homepg : true,
      ecomm : false
    },

]