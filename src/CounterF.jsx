import { useEffect, useState } from 'react'
const CounterF = ({step}) =>{
    console.log("CounterF : Render");
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        },3000);
        return ()=>clearTimeout(timer);
    },[])

    useEffect(()=>{
        console.log("Component Did update");
    },[count])
    const handleClick = () =>{
        setCount((prev)=>prev+step);
    }
    const handleClickDec = () =>{
        setCount((prev)=>prev-step);
    }
    const handleReset = () =>{
        setCount(0);
    }
    return (
       <>
       {loading ? <h1>Loading ....</h1> : 
        <>
        <p>Count ={ count}</p>
        <button onClick={handleClick}>Incrementer de {step}</button>
        <button onClick={handleClickDec}>Decrementer de {step}</button>
        <button onClick={handleReset}>Reset</button>
        </>}
         </>
    );
};
export default CounterF;