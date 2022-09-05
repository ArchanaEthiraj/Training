import React from 'react'
import Login from './Login'
// import FetchJson from './FetchJson'
// import Local from './Local'
import Task from './Task'
// import Val from './Val'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Link to='/login'>Login</Link>
      <Link to='/task'>Register</Link>
      <Routes>
        {/* <Route path='/login'>
          <Login/>
        </Route> */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        {/* <Route path='/task'><Task/></Route> */}
      </Routes>
    </Router>
  )
}

export default App