import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import ParentContextComponent from './component/context/parent-context.js'
import UseCallbackComponent from './component/use-callback/use-callback'
import UseReducerComponent from './component/use-reducer/use-reducer'

const App = () => {
  return (
    <>
      <BrowserRouter>    
      <ul>
        <li>
          <button><Link to='/context'>Context</Link></button>
          <button><Link to='/use-memo'>UseMemo</Link></button>
          <button><Link to='/use-callback'>UseCallBack</Link></button>
          <button><Link to='/use-reducer'>Use Reducer</Link></button>
        </li>
      </ul>

        <Routes>
          <Route path='/context' element={<ParentContextComponent/>} />
          {/* <Route path='/use-memo' element={<UseMemoComponent/>} /> */}
          <Route path='/use-callback' element={<UseCallbackComponent/>} />
          <Route path='/use-reducer' element={<UseReducerComponent/>} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
