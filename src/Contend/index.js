import React from 'react'
import './style.css'
import  Card from '../Card/index'
import {data} from '../server'

class Contend extends React.Component{
    render(){
        return(
            <div className='contend'>
              {/* <Card /> */}

              {
                  data.map((value, index)=>{
                      return <Card value={value} />
                  })
              }
              
            </div>
        )
    }
}

export default Contend