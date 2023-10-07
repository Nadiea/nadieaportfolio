import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimeCursor from './component/AnimeCursor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AnimeCursor/>
    <App />
  </React.StrictMode>,
)
