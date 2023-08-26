import React, { useState,useEffect } from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const CountryTime=()=>{
const URL= 'https://worldtimeapi.org/api/timezone'
  const {cont,time}=useParams();
  console.log(cont,time)
  const [ctime,setTime]=useState({})
  const getdata=async()=>{
  try{
    let res=await axios.get(`${URL}/${cont}/${time}`);
    console.log(res.data)
    setTime(res.data)
  }catch(err){
    console.log(err)
  }
}
  useEffect(()=>{
    getdata()
  },[])
  
  return(
    <div>
      <Navbar/>
      <div className="container" style={{marginTop:'200px'}}>
        <div className="card text-center" style={{width:'50rem' ,margin:'50px',marginLeft:'250px'}}>
          <div className="card-body">
            <h2 className="card-title" style={{color:'red'}}>{ctime.timezone}</h2>
            <h3 className="card-text">{ctime.datetime}</h3>
            <Link to='/worldclock' className='btn btn-dark'>Back</Link>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default CountryTime