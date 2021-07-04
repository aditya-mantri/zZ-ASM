import React from 'react';
import {Grid , Container , Typography} from '@material-ui/core';
import { useState} from 'react';
import Product from './Product/Product';
import useStyles from './styles';
import './style.css';
import styled from 'styled-components';
import Hero from '../../../components/Hero/index';
import {Modal} from '../../../Modal/modal';
import { SliderDataEcomm } from '../../../Data/SliderDataEcomm';
import Footer from '../../../components/Footer/index';
import PacmanLoader from 'react-spinners/PacmanLoader';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#8fa1bd')};
  border: 2px solid #283342;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  text-align : center;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }`
  
const Products = ({ authok, categories, onAddToCart }) => {
  const classes = useStyles();
  const [showModal,openModal]=useState(true)
  const [searchTerm,setSearchTerm] =useState('');
  const [selectTerm,setSelectedTerm] =useState('');
  if (!categories.length) return <div className='containerz'><PacmanLoader color={'#BFDAD1'} size={30} speedMultiplier={3} /></div>;

  if (!authok) return (
    <>
    <div className='containerz' >
    <Modal authokay={true} abouturl='https://cdn3.iconfinder.com/data/icons/pretty-office-part-3/256/Male_User_Warning-512.png' aboutdata ='Oops, You are not logged in!' showModal={showModal} setShowModal={openModal} />
    </div>
    <Footer/>
     </>
   
    );

  return (
    
    <main className={classes.content}>

      <div className={classes.toolbar} />
      <Hero slidesrelatedtoecomm={true} slides={SliderDataEcomm}/>
      <div class="searchInput">
        <div>
      <label> Search:</label>
      <input type="text" placeholder="Search your product here..." onChange={event => {setSearchTerm(event.target.value)}}/>
      </div>

     <select
        className="custom-select selectioncat"
        value={selectTerm}
        onChange={(e) => {
          const selectedcat = e.target.value;
          setSelectedTerm(selectedcat);
        }}
      >
        <option value="">All Categories </option>
        <option value="mouse">Mouse</option>
        <option value="mobile">Mobile</option>
        <option value="earphones">Earphones</option>
        <option value="headphones">Headphones</option>
      </select>

      </div>


      
      <div id="products">
        {categories.filter((val)  => {
    // eslint-disable-next-line
    if(selectTerm == ""){ 
      return val}
    else if (val.name.toLowerCase().includes(selectTerm.toLowerCase()))
    {return val}
  }).map((category)=>
        {
          return(
            <div className="contents" id="bgclr" > 
            <Container>
            <Typography className="headline" variant="h3" component="h2">
                     {category.name}
             </Typography>
               <Grid className={classes.grid} container justify="center" spacing={4}>
                 {category.productsData.filter((val)  => {
    // eslint-disable-next-line
    if(searchTerm == ""){ 
      return val}
    else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
    {return val}
  }).map((product) => (
   
                   <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} onAddToCart={onAddToCart} />
                   </Grid>  ))}
                 </Grid>
                </Container>
                </div>
          );
        })}
       </div> 
       <Footer ecomm={true}/>
     </main>
  );
};

export default Products;

