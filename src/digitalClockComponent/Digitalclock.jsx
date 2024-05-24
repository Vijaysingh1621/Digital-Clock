import React,{useState,useEffect} from 'react'
import "./digitalclock.css"


const Digitalclock = () => {
const [time, setTime]=useState(new Date());

useEffect(() =>{
  const intervalId= setInterval(() => {
    setTime(new Date());
    
  },1000);

  return() => {
    clearInterval(intervalId);
  }
  
},[]);

useEffect(() => {
  const updateBackground = () => {
    const hours = time.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    
    let backgroundImage;
    if (hours >= 5 && hours < 12 && meridiem === "AM") {
      backgroundImage = "url(./assets/morningclock.jpg)";
    } else if (hours >= 12 && hours < 16 && meridiem === "PM") {
      backgroundImage = "url(./assets/noonclock.jpg)";
    } else if (hours >= 16 && hours < 21 && meridiem === "PM") {
      backgroundImage = "url(./assets/eveningclock.jpg)";
    } else {
      backgroundImage = "url(./assets/nightclock.jpg)";
    }

    document.body.style.backgroundImage = backgroundImage;
  };
  return()=>{

  updateBackground();}
}, [time]);

function formatTime(){
  let hours= time.getHours();
  const minutes=time.getMinutes();
  const seconds=time.getSeconds();
  

  hours =hours%12 || 12;

  return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}`
  
}

function formatMeridiem(){
  let hours= time.getHours();
  const meridiem= hours>=12? "PM":"AM" ;
  return meridiem;
}

function padzero(number){
  return (number<10 ? "0":"")+ number;
}




  return (
    
    <div className="clock-container" >
        <div className="clock">
            <span >{formatTime()}<p style={{fontSize:"4rem",display:'inline-block',paddingLeft:"20px"}}>{formatMeridiem()}</p></span>
        </div>
    </div>
  )
}

export default Digitalclock