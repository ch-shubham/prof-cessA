import React from 'react'
import ApplicationForm from './components/ApplicationForm'
// Adding all styles here
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/applicationForm.css'
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to prof-Cess</h1>
      <br />
      <br />
      <ApplicationForm />
    </div>
  )
}

export default App
