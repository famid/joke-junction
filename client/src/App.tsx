import { useEffect, useState } from 'react'
import './App.css';
import socketIO from 'socket.io-client';

const WS = 'http://localhost:8000';

function App() {
  useEffect(() => {
    socketIO(WS);
  }, []);

  return (
    <>
    
    </>
  )
}

export default App
