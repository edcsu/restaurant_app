"use client"

import Countdown from "react-countdown";

const dateNow = new Date()
const endingDate = dateNow.setDate(dateNow.getDate() + 5);

const CountDown = () => {
    return ( 
        <Countdown className="font-bold text-5xl text-yellow-300" date={endingDate} />
     );
}
 
export default CountDown;