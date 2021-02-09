import React from 'react'
import './styles.css'
import Subtotal from '../../components/Subtotal'
import {useStateValue} from '../../StateProvider'
import CheckProduct from '../../components/CheckoutProduct'
function Check() {
      const [{basket,user},dispatch]=useStateValue()
      return (
            <div className="checkout">
                  <div className="checkout_left">
                        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img17/primerewards/primerewards-hero4.jpg"/>
                        <div>
                               <h3>Hello {user?user.email:""}</h3>
                              <h2 className="checkout_title">
                                    Your shopping Basket
                              </h2>
                              {
                                    basket?.map(item=><CheckProduct 
                                          title={item.title}
                                          image={item.image}
                                          rating={item.rating}
                                          id={item.id}
                                          price={item.price}
                                          />)
                              }
                        </div>

                  </div>

                  <div className="checkout_right">
                           <Subtotal/>
                  </div>
            </div>
      )
}

export default Check
