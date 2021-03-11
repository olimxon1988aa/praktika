import React from 'react'
import './style.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <h1 className='logo'>AliExpress</h1>
                <div className='inputContainer'>
               
                  <input className='input' placeholder="Im Shopping for ...." />
                  <i class="fa fa-search" ></i>
                </div>
                <i class="fa fa-shopping-cart" ></i>
            </div>
        )
    }
}
export default Navbar