import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

const App = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(async () => {
        const response = await axios.get(
     "https://localhost:7202/api/crypto/GetAllCrypto"
               );

        setCoinsData(response.data);
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>Your Own Api</h1>
            {/* <h1>Cryptogallery</h1> */}
            <CryptoList coinsData={currentPosts} />
            <Pagination
                totalPosts={coinsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default App;
