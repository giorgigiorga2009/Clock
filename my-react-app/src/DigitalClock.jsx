import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return ()=> clearInterval(interval);
    }, []);
    function formatTime(time){``
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;

    }

    function padZero(number){
        return (number < 10 ? "0": "") + number;
    }

    return(<div className="clock-container">
        <div className="clock">
            <span>{formatTime(time)}</span>
        </div>
        <h1 style={{textAlign: "center", color: "white"}}>Made By Giorgi Giorgashvili</h1>

    </div>)
}

export default DigitalClock;