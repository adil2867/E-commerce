import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of goods or services over the internet. It allows businesses to reach a global audience and enables consumers to shop conveniently from anywhere with an internet connection.</p>
            <p>E-commerce websites can vary greatly in scale and complexity, ranging from small independent online stores to large multinational platforms like Amazon or eBay. They play a crucial role in modern commerce, enabling businesses of all sizes to reach customers globally and offering consumers a convenient way to shop for a wide range of products and services.</p>
        </div>
    </div>
  )
}

export default DescriptionBox