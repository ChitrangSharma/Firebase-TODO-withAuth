import React,{useState} from 'react'
import "../App.css"
function Colock() {
    let time = new Date().toLocaleTimeString();
    const[ctime,setTime]=useState(time);
    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(() => {
        UpdateTime()
    }, 1000);
    return (
        <div className="clock__div">
            <h3>{ctime}</h3>
        </div>
    )
}

export default Colock
