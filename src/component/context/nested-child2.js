import React, { useContext } from "react";
import {contextCreate} from './context'
 
const NestedChild2 = () =>{
    const useContextVal = useContext(contextCreate);
    return(<>
    <h4>Child2 </h4>
    <span>Context from parent = </span> {useContextVal.test}
    <button onClick={()=>{useContextVal.setTest('nameChanged')}}>Click to Change Context value</button>
    </>)
}
export default NestedChild2; 