import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Basics } from './components/basics.jsx'
import { EducationSection } from './components/education.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Basics />
    <EducationSection />
  </React.StrictMode>,
)
