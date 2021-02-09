import React from 'react'
import './styles.css'
import {getTotal} from '../../reducer'
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
      const [{basket},dispatch] = useStateValue()
      const history = useHistory()

      return (
            <div className="subtotal">
                  <CurrencyFormat
                  renderText={(value)=>(
                        <>
                        <p>
                              Subtotal ({basket?.length} items):<strong>{value}</strong>

                        </p>
                        <small className="subtotal_gift">
                              <input type="checkbox"/> this is order contains a gift
                        </small>
                        </>
                  )}
                  decimalScale={2}
                  value={getTotal(basket)}
                  displayType ={"text"}
                  thousandSeparator = {true}
                  prefix={"$"}
                  />
                  <button onClick={()=>history.push("/payment")}>Proceed check out</button>
                  
            </div>
      )
}

export default Subtotal
