import React,{ useState,useMemo } from "react";

const UseMemoComponent = () => {
const [count,setCount]=useState(0)
const [number,setNumber]=useState(2)
const squaredNum = useMemo(() => { return sqRootNum(number) }, [number]);

const handleNumChange = (num) => {alert(num)
    setNumber(num);
}
const handleCountChange = () => {
    setCount(prev => prev + 1);
}
return (
    <>
        Use Memo
        <input type='number' name='number' id='number' onChange={(e)=>handleNumChange(e.target.value)}/>
        <button onClick={()=>handleCountChange()}>IncreaseCount +</button><br/>
        <span>count = {count}</span><br/>
        <span>Sq root of Number = {squaredNum}</span>
    </>
) 
}
const sqRootNum = (number) => {
    console.log('sqRoot - ', number)
    return Math.pow(number, 2);
}
export default UseMemoComponent;
