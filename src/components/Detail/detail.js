import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './detail.css';
import { useHistory } from 'react-router-dom';
import { selected,rejected } from "../../App";


function Detail() {
    const[user ,getUser] = useState([]);
    const {id} = useParams();
    const history = useHistory();
    let select  = useContext(selected);
    let reject  = useContext(rejected);
    useEffect(async () => {
        let data = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        let dataDetail = data.data;
        var filteredData = dataDetail.filter((Candidate) => {
            let CandidateId = Candidate.id;
            let searchId= id;
            return CandidateId.includes(searchId);
        })
        console.log(id);
        console.log(filteredData);
        getUser(filteredData);
    },[])
    console.log(select+"selected" );
    console.log(reject+"rejected");

   return(
       <div>
          <div className="detailOfCandidate">Detail of Candidate</div>
          {user.map((obj, key) => (
                <div className="card" key={key}>
                    <div className="container">
                        <h4><b>Name : {user[key].name}</b></h4>
                        {/* <p>Id : {user[key].id}</p> */}
                       
                    </div>
                    <div >
                        <img src={user[key].Image} style={{ width: '10vw', height: '20vh' }} />
                    </div>
                </div>

            ))}

            <div className="btn">
                <button className="selected"  onClick={()=> {select.push(id); history.push(`/`)}}>Selected</button>
                <button className="rejected"  onClick={()=> {reject.push(id); history.push(`/`)}}>Rejected</button>
            </div>
       </div>
   )
}
export default Detail