import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
// import './detail.css';
import { selected,rejected } from "../../App";



function Rejected() {
    const[user ,getUser] = useState([]);
    let select  = useContext(selected);
    let reject  = useContext(rejected);

    useEffect(async () => {
        let data = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        // console.log("data"+data)
        console.log(data.data)
        let dataDetail = data.data
        var arr=[];
        var dataFilterd;
        var filteredData = dataDetail.filter((Candidate) => {
            var CandidateId = Candidate.id;
             dataFilterd = reject.filter((rejectCandidate) => {
                let rejectedId= rejectCandidate;
                console.log("CandidateId "+CandidateId);
                console.log("rejectedId "+rejectedId);
                if(CandidateId == rejectedId){
                    arr.push(Candidate)
                }
                return CandidateId != rejectedId;
            })
           
        })
        // console.log("filteredData"+filteredData);
        // console.log("dataFilterd"+dataFilterd);
        console.log(arr);
        getUser(arr);
    },[])
    // console.log(reject);

   return(
       <div>
           <h1>Rejected Candidate</h1>
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
export default Rejected