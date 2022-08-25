import { useState,useCallback,useEffect } from "react";

const UseCallbackComponent = () => {
    const [numcallback, setNumcallback] = useState(0);
    const [countcallback, setCountcallback] = useState(0);
    const incrementCount = () => { setCountcallback(prev => prev + 1); console.log('incrementCount', countcallback) }
    const incrementNumber = () => { setNumcallback(prev => prev + 1); console.log('incrementNumber', numcallback) }
    // callback function
    const getCallback = useCallback(() => { return (numcallback + 1); }, [numcallback])

    return (
        <>
            Use CallBack
            <span>Counter - </span> {countcallback}
            <button onClick={incrementCount}>Increment + </button>
            <button onClick={incrementNumber}>Increment Number</button>
            <UseCallbackEx getCallback={getCallback} />
        </>
    ) 
    }


// Use Callback
const UseCallbackEx = ({ getCallback }) => {
    const [num, setNum] = useState(0);

    // component did update,component did mount
    useEffect(() => {
        setNum(getCallback());
        console.log('update Items');
    }, [getCallback])
    return (<><span>Number - </span> {num}</>)
}


export default UseCallbackComponent;