import React from "react";
import NestedChild2 from './nested-child2'

const NestedChild1 = () =>{
    return(<>
        <span> {`=>`} </span>
    <h4>Child1</h4>
        <span> {`=>`} </span>
    <NestedChild2/>
    </>)
}
export default NestedChild1; 