import { useState,useEffect } from "react"

export default function Home(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        setCount((prev) => 
            prev + 1);
    },[])
    return(
        <>
        <h1>Home</h1>
        <h2>{count}</h2>
        </>
    )
}