import React from "react";

import "./CryptoCard.css";

const CryptoCard = ({ image,name, price ,symbol}) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_info'>
                <h2 className="in">{name}  </h2><h2 className="in">({symbol})</h2>
                <h3>$ {price}</h3>
                
            </div>
        </div>
    );
};

export default CryptoCard;
