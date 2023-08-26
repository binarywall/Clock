import React, { useEffect,useState } from "react";



const Clock=()=>{
  const [time,setTime]=useState([])
  useEffect(()=>{
    setInterval(()=>{
            const currentDateTime=Date();
            let newDateTime=currentDateTime.split(' ')
            setTime(newDateTime)
    },1000)
  },[])
  // console.log(time)
  
  return(
    <div>
      <div className="container">
        <div className="card text-center" style={{width:'50rem' ,margin:'50px',marginLeft:'250px'}}>
          <div className="card-body">
            <h2 className="card-title" style={{color:'red'}}>Current Date & Time</h2>
            <h3 className="card-text">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-title"> <span style={{color:'green'}}>Date</span><br/><hr/>
                      <span>{time[2]}</span>/<span>{time[1]}</span>/<span>{time[3]}</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <div className="card-title"> <span style={{color:'green'}}>Time</span><br/><hr/>
                     <span>{time[4]}</span>
                    </div>
                  </div>  
                </div>
              
              </div>
              
                          
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clock