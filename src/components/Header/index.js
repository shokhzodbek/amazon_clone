import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import {Search, ShoppingBasket} from '@material-ui/icons'
import {auth} from '../../firebase'
function Header() {

      const [{basket,user},dispatch]=useStateValue()
      const handleOut = ()=>{
             auth.signOut()
      }
      return (
            <div className="header">
                  <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"/></Link>
                <div className="header_search">
                      <input className="header_input"/>
                      <Search className="header_icon"/>
                </div>
                <div className="header_navbar">
                      <Link to={!user && "/login"}>
                      <div className="header_option" onClick={handleOut}>
                            <span className="optionOne">Hello {!user?"Guest":user.email}</span>
                            <span className="optionTwo">{user?'Sign out':'Sign in'}</span>
                      </div>
                      </Link>
                      <div className="header_option">
                            <span className="optionOne">Return</span>
                            <span className="optionTwo">& Order</span>
                      </div>
                      <div className="header_option">
                            <span className="optionOne">Your</span>
                            <span className="optionTwo">Prime</span>
                      </div>
                      <Link to="/check">
                      <div className="optionBas">
                            <ShoppingBasket/>
                            <span className="optionTwo count">{basket?.length}</span>
                      </div></Link>
                </div>
            </div>
      )
}

export default Header
