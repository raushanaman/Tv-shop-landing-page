import { useEffect, useState } from "react";

const CountdownTimer = ({endDate})=>{
    const calculateTime = ()=>{
        const difference = new Date(endDate)- new Date();

        if(difference <=0){
            return {
                days:0,
                hours:0,
                minutes:0,
                seconds:0
            }
        }
        return {
            days:Math.floor(difference/(1000*60*60*24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60 ))%24
            ),
            minutes: Math.floor((difference/(1000*60))%60),
            seconds: Math.floor((difference/1000)%60),
        }
    }
    const [timeLeft, setTimeLeft]=useState(calculateTime());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(calculateTime());
        },1000);
        return ()=> clearInterval(timer);
    }, [endDate]);
    return (
        <div className="mt-8 flex justify-center gap-6">
            {Object.entries(timeLeft).map(([label, value])=>(
                <div 
                    key={label}
                    className="rounded-xl bg-white p-5 text-center shadow-md"
                >
                    <h3 className="text-3xl font-bold text-blue-600">
                        {String(value).padStart(2,'0')}
                    
                    </h3>
                    <p className="mt-2 text-sm capitalize text-slate-500">
                        {label}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default CountdownTimer;