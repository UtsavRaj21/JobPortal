import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
// import './detail.css';
import { selected,rejected } from "../../App";



function Selected() {
    const[user ,getUser] = useState([]);
    let select  = useContext(selected);
    let reject  = useContext(rejected);

    useEffect(async () => {
        let data = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        // console.log("data"+data)
        console.log(data.data)
        let dataDetail = data.data
        var arr =[];
        var dataFilterd;
        var filteredData = dataDetail.filter((Candidate) => {
            var CandidateId = Candidate.id;
             dataFilterd = select.filter((selectCandidate) => {
                let selectedId= selectCandidate;
                console.log("CandidateId "+CandidateId);
                console.log("selectedId "+selectedId);
                if(CandidateId == selectedId){
                    arr.push(Candidate)
                }
                return CandidateId != selectedId;
            })
            if(dataFilterd == false){
                return true;
            }
        })
        // console.log("filteredData"+filteredData);
        // console.log("dataFilterd"+dataFilterd);
        getUser(arr);
    },[])
    // console.log(select);

   return(
       <div>
           <h1>Selected Candidate</h1>
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
         </div>
   )
}
export default Selected