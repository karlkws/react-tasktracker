import React from 'react'
import PropTypes from 'prop-types'

const Button = ( {color, text, onClick} ) => {
    return (<button 
        onClick={onClick} 
        style ={{ backgroundColor: color}} 
        className='btn'>
            {text}
            </button>   
    )
}

// Default props object
Button.defaultProps = {
    color: 'steelblue',
}

// Prop type object
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
