import React, { useState, useEffect } from 'react';
import './HomePage.css';
import axios from 'axios';
import Cards from '../Cards/Cards';

function HomePage(){
    const[user ,getUser] = useState([]);

    

    return(
        <div> 
            <div className="JobPost">Job Post</div>
            <Cards/>
            
        </div>

    )
}
export default HomePage