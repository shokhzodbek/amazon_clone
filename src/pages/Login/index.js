import React,{useState,useEffect} from 'react'
import {auth} from '../../firebase'
import {useHistory} from 'react-router-dom'
import './styles.css'
function Login() {
      const [email,setEmail] = useState('')
      const [password,setPassword]= useState('')
      const history=useHistory()


      const signIn =(e)=>{
            e.preventDefault()
         auth.signInWithEmailAndPassword(email,password)
         .then(auth=>{
               history.push('/')
         })
         .catch(error=>alert(error))

      }

      const register = (e) =>{
            e.preventDefault()
            auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                  if(auth){
                        history.push('/')
                  }
            })
            .catch(error=>alert(error))
      }
      return (
            <div className="login">
                  <img src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"/>
                  <div className="login_container">
                        <h1>Sign-in</h1>
                        <form>
                              <h5>E-mail</h5>
                              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                              <h5>Password</h5>
                              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                              <button onClick={signIn} className="login_button">Sign In</button>
                        </form>
                        <p>By signing-in you agree to Amazon's
                              Condations of Use & Sale. PLease
                              see our Privacy Notice,our Cookies Notice
                              and our Interest-Based Ads Notice.
                        </p>
                        <button onClick={register} className="create_account">Create your Amazon account</button>
                  </div>
            </div>
      )
}

export default Login
