import React, { useState, useEffect } from 'react';
import './Cards.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function Cards() {
    const [user, getUser] = useState([]);
    const [search, getSeach] = useState("");
    const history = useHistory();
    useEffect(async () => {
        console.log("data")
        let data = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        console.log(data.data)
        getUser(data.data);
        console.log(user);

    }, [])

    const searchFn = async () => {
        var filteredData = user.filter((Candidate) => {
            console.log(Candidate.name.toLowerCase())
            console.log(search.toLowerCase())
            let CandidateName = Candidate.name.toLowerCase();
            let name = search.toLowerCase();
            return CandidateName.includes(name);
        })
        getUser(filteredData);
    }

    const profile = async (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="searchCandidate">
                <input type="text" style={{ height: '30px', fontSize: '20px' }} placeholder="Candidate Name" value={search} onChange={(e) => {
                    getSeach(e.target.value)
                }}
                />
                <div className="containerImage" onClick={searchFn}>
                    <img src="https://static.thenounproject.com/png/3134345-200.png" style={{ width: '5vw', height: '5vh' }} />
                </div>
            </div>
            {user.map((obj, key) => (
                <div className="card" key={key}>
                    <div className="container">
                        <h4><b>Name : {user[key].name}</b></h4>
                        {/* <p>Id : {user[key].id}</p> */}
                        <div>
                            
                           <button onClick={()=> {history.push(`/detail/${user[key].id}`)}}>View Detail</button>
                        </div>
                    </div>
                    <div >
                        <img src={user[key].Image} style={{ width: '10vw', height: '20vh' }} />
                    </div>
                </div>

            ))}

       

        <div className="btn-required">
            <button className="btn" onClick={()=> {history.push(`/Selected`)}}>Selected Candidate</button>
            <button className="btn" onClick={()=> {history.push(`/Rejected`)}}>Rejected Candidate</button>
            
        </div>
    </div>

    )
}
export default Cards
