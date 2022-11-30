import React from "react";

import CryptoCard from "./CryptoCard";
import "./CryptoList.css";

const CryptoList = ({ coinsData }) => {
    return (
        <div className='crypto_list'>
            {coinsData.map((coin, index) => {
                return (
                    <CryptoCard
                        key={index}
                        image={coin.cryptoImage}
                        name={coin.cryptoName}
                        price={coin.cryptoPrice}
                        symbol={coin.cryptoSymbol}
                    />
                );
            })}
        </div>
    );
};

export default CryptoList;
