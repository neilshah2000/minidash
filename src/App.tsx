import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import { useDispatch } from 'react-redux'
import { minimaInit } from './state/minima.action'

function App() {

  const dispatch = useDispatch()
    
    // const user = useSelector(state => state.login.user)

    useEffect(() => {
        dispatch(minimaInit())
    },[dispatch])


  return (
    <div className="App">
        <Dashboard></Dashboard>
    </div>
  );
}

export default App;
