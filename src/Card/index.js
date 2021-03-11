import React from 'react'
import './style.css'

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img 
                src={this.props.value.img}
                 alt="product" className="img" />
                 <p className='description'>{this.props.value.id}</p>
                 <p className='narh'>{this.props.value.narh}</p>
                 <del className='narx'>{this.props.value.disc}</del>
                 <span className='fon'>{this.props.value.sale}</span>
            </div>
        )
    }
}

export default Card