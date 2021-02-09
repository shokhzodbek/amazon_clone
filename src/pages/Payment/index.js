import React, { useEffect, useState } from 'react'
import './styles.css'
import {useStateValue} from "../../StateProvider"
import CheckProduct from '../../components/CheckoutProduct'
import { Link,useHistory } from 'react-router-dom'
import {getTotal} from '../../reducer'
import CurrencyFormat from 'react-currency-format'
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import axios from '../../axios'
function Payment() {
      const stripe = useStripe()
      const elements = useElements()
      const history = useHistory()
      
      const [error,setError] = useState(null)
      const [disable,setDisable] = useState(true)
      const [secret,setSecret] = useState(true)
      const [succeed,setSucceed] = useState(false)
      const [process,setProcess] = useState('')
      const [{user,basket},dispatch] = useStateValue()
      

      useEffect(()=>{
            const getClientSecret = async ()=>{
                  const response = await axios({
                        method:'post',
                        url:`/payments/create?total=${getTotal(basket)*100}`
                  })
                  setSecret(response.data.secret)
            }
            getClientSecret();

      },[basket])
      const submit = async (e)=>{
            e.preventDefault()
             setProcess(true)
            const payload = await stripe.confirmCardPayment(secret,{
                  payment_method:{
                        card:elements.getElement(CardElement)
                  }
            }).then(({payIntent})=>{
                  setSucceed(true)
                  setError(null)
                  setProcess(false)
                  history.replace('/')

            })

      }

      const handleChange =(e)=>{

        setDisable(e.empty);
        setError(e.error?e.error.message:"")
      }
      return (
            <div className="payment">

                  <div className="payment_container">
                        
                              <h2>Checkout {<Link to="/check">{basket?.length} items</Link>}</h2>
                        
                      <div className="payment_section">
                          <div className="payment_title">
                                 <h3>Delivery address</h3>
                          </div>
                          <div className="payment_address">
                                <p>{user?user.email:"Guest"}</p>
                                <p>New Yourk</p>
                                <p>Monk street 33</p>
                          </div>
                      </div>
                      <div className="payment_section">
                            <div className="payment_title">
                                  <h3>Review items and delivery</h3>
                            </div>
                            <div className="payment_items">
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
                      <div className="payment_section">
                            <div className="payment_title">
                                  <h3>Payment Method</h3>
                            </div>
                            <div className="payment_detail">
                                  <form onSubmit={submit}>
                                        <CardElement onChange={handleChange}/>
                                        <div className="priceContainer">
                                        <CurrencyFormat
                                          renderText={(value)=>(
                                                 <>
                                                 <h3>
                                                      Order total :<strong>{value}</strong>

                                                      </h3>
                                                              </>
                                                       )}
                                                       decimalScale={2}
                                                       value={getTotal(basket)}
                                                       displayType ={"text"}
                                                       thousandSeparator = {true}
                                                       prefix={"$"}
                                                   />
                                                   <button disabled={process || disable || succeed}>
                                                         <span>{process? <p>Processing</p>:"Buy now"}</span>
                                                   </button>
                                        </div>
                                        {
                                              error && <div>{error}</div>
                                        }
                                  </form>

                            </div>
                            
                       </div>
                       
                  </div>
                
                  
            </div>
      )
}

export default Payment
