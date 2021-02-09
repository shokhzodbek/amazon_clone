import React from 'react'
import Product from '../Product'
import './styles.css'
function Home() {
      return (
            <div className='home'>
                  <div className="home_container">
                        <img className="home_banner" src="https://techwiztime.com/wp-content/uploads/2016/08/amazon-prime-free-30-day-trial-banner-techwiztime.jpg"/>
                        <div className="home_row">
                           <Product title={"laptop"} image={"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"}
                             price={211.34}
                             rating={4}
                             id={"1"}
                           />
                           <Product title={"laptop"} image={"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"}
                                id={"3"}
                             price={23.33}
                             rating={5}
                           />
                          

                        </div>
                        <div className="home_row">
                        <Product title={"laptop"} image={"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"}
                             price={234.34}
                             rating={3}
                             id={'4'}
                           />
                          
                           <Product title={"laptop"} image={"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"}
                             price={23.33}
                             rating={5}
                             id={"5"}
                           />
                        
                           <Product title={"Live boring staff"} image={"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"}
                             price={23.33}
                             rating={5}
                             id={"6"}
                           />
                     
                           
                        </div>
                        <div className="home_row">
                        <Product title={"Live boring staff"} image={"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"}
                             price={23.33}
                             rating={5}
                             id={"9"}
                           />
                         
                        </div>
                  </div>
            </div>
      )
}

export default Home
