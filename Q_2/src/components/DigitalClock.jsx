import { useState, useEffect } from "react";


function DigitalClock()
{

    const [time, setTime] = useState(
        new Date().toLocaleTimeString()
    );


    useEffect(() => {

        const timer = setInterval(() => {

            setTime(
                new Date().toLocaleTimeString()
            );

        }, 1000);


        return () => clearInterval(timer);

    }, []);


    return (

        <div className="text-center">

            <h2>Digital Clock</h2>

            <h1>{time}</h1>

        </div>

    );
}

export default DigitalClock;