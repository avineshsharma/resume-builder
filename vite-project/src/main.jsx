import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App1 from "./App1"
import App from './App'


createRoot(document.getElementById('root'))
  .render(
      <StrictMode>
    <>
    <App/>
    {/* <App1 /> */}

    </>
      </StrictMode>,
  )
