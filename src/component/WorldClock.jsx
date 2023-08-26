import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'

const Worldclock=()=>{
const URL='https://worldtimeapi.org/api/timezone'
const [time,setTime]=useState([])
const getdata=async()=>{
  try{
    let res=await axios.get(URL);
    console.log(res.data)
    setTime(res.data)
  }catch(err){
    console.log(err)
  }
}
  useEffect(()=>{
    getdata()
  },[])
  const navigate=useNavigate();
  const click=(data)=>{
    // console.log(data)
    const text=data.split('/')
    // console.log(text)
    navigate(`${text[0]}/${text[1]}`)
  }
  return(
    <>
    <Navbar/>
    <div className="container" style={{width:'30%'}}>
      <ul className="list-group" >
        {
          time.map((ele,i)=>(
            <li className="list-group-item list-group-item-action" key={i}>{ele}
              <button className="btn btn-dark " style={{marginLeft:'450px'}} onClick={()=>click(ele)} >Get</button>
            </li>
          ))
        }
      </ul>
    </div>
    </>
  )
}

export default Worldclock