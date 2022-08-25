import React, { useState } from "react";
import {contextCreate} from './context'
import NestedChild1 from './nested-child1'

const ParentContextComponent = () => {
    const [test,setTest] = useState('names');
    
return (
    <>
    <h1>Context</h1>
    <contextCreate.Provider value={{test:test,setTest:setTest}}>
        <NestedChild1/>
    </contextCreate.Provider>
    </>
)
}
export default ParentContextComponent;