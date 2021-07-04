import React from 'react'
import { AddShoppingCart } from '@material-ui/icons';

import './styles.css';

const Product = ({ product, onAddToCart }) => {


const handleAddToCart = () => onAddToCart(product.id, 1);

  
  return (
      <div class="container">
        <div class="card" >
            <div class="sneaker">
                <div class="circle"></div>
                <img src={product.media.source} alt={product.name}/>
             </div>
            <div class="info">
                <h1 class="title">{product.name}</h1>
                <h3 dangerouslySetInnerHTML={{ __html: product.description }} ></h3>
                <h1> ${product.price.formatted} </h1>
                <div class="purchase">
                    <button onClick={handleAddToCart}>Add to Cart
                    <AddShoppingCart style={{ marginLeft: '2rem' }} />
                    </button>
                </div>
            </div>
        </div>
        </div>
      

  );
};

export default Product;

