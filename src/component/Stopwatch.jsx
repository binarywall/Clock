import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";



const Stopwatch = () => {

  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let intervel;
    if (running) {
      intervel = setInterval(() => {
        setTime((preTime) => preTime + 10);
      }, 10)
    } else if (!running) {
      clearInterval(intervel)
    }
    return () => clearInterval(intervel)
  }, [running])
  // const startTime=()=>{
  //   setInterval(()=>{
  //     setSeconds(seconds=>seconds+1)
  //   },1000)
  // }
  // const stopTime=()=>{
  //   clearInterval(setSeconds(0))
  //   document.querySelector('#counter').remove();
  // }


  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card text-center" style={{ width: '50rem', margin: '50px', marginLeft: '250px' }}>
          <div className="card-body">
            <h2 className="card-title" style={{ color: 'red' }}>Stop Watch</h2>

            <div className="row">
              <div className="col-3">
                <div className="card" style={{ width: '100%' }}>Hour
                  <span style={{ fontSize: '60px', fontWeight: '600' }}>{('0' + Math.floor((time / 360000) % 60)).slice(-2)}</span>
                </div>
              </div>
              <div className="col-3">
                <div className="card" style={{ width: '100%' }}>Min
                  <span style={{ fontSize: '60px', fontWeight: '600' }}>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>
                </div>
              </div>
              <div className="col-3">
                <div className="card" style={{ width: '100%' }}>Sec
                  <span style={{ fontSize: '60px', fontWeight: '600' }}>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                </div>
              </div>
              <div className="col-3">
                <div className="card" style={{ width: '100%', }}>Microsec
                  <span style={{ fontSize: '60px', fontWeight: '600' }}>{('0' + (time / 10) % 60).slice(-2)}</span>
                </div>
              </div>
            </div>




          </div>
        </div>
        <div style={{ marginLeft: '500px', marginTop: '30px' }}>
          <button className="btn btn-primary btn-lg" style={{ marginRight: '20px' }} onClick={() => setRunning(true)}>Start</button>
          <button className="btn btn-warning btn-lg" style={{ marginRight: '20px' }} onClick={() => setRunning(false)}>Stop</button>
          <button className="btn btn-danger btn-lg" style={{ marginRight: '20px' }} onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch