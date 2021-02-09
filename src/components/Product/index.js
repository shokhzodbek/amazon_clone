import React from 'react'
import './styles.css'
import {useStateValue} from '../../StateProvider'


function Product({id,price,title,rating,image}) {
    const[{basket},dispatch] = useStateValue()
    const addItems=()=>{
          dispatch({
                type:"ADD",
                item:{
                      id:id,
                      title:title,
                      image:image,
                      price:price,
                      rating:rating
                }
          })
    }
      return (
            <div className="product">
                  <div className="product_info">
                        <p>{title}</p>
                        <p className="product_price">
                              <small>$</small>
                              <strong>{price}</strong>
                        </p>
                        <div className="product_rating">
                         {Array(rating).fill().map((_,i)=><p>⭐</p>)}
                        </div>
                        
                  </div>
             <img src={image}/>
             <button onClick={addItems}>Add to Basket</button>
            </div>
      )
}

export default Product
