import React from 'react'
import './styles.css'
import {useStateValue} from '../../StateProvider'
function CheckProduct({image,id,title,price,rating}) {
      const [{basket},dispatch] = useStateValue()
      const removeItems = ()=>{
           dispatch({
                 type:"DELATE",
                 id:id
           })
      }
      return (
            <div className="checkproduct">
                  <img src={image}/>
                  <div className='check_info'>
                        <p className="check_title">{title}</p>
                        <p className="check_price">
                              <small>$</small>
                              <strong>{price}</strong>
                        </p>
                        <div className='check_rating'>
                        {Array(rating).fill().map((_,i)=><p>⭐</p>)}
                  </div>
                  <button onClick={removeItems}>Remove from Basket</button>
                  
                  </div>
                 
                  
            </div>
      )
}

export default CheckProduct
