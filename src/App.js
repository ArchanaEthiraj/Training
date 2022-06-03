import React from 'react'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'  
import Product from './Product'

function App() {
  return (
    <Router>
    <Switch>
       <Route exact path='/'><Home/></Route>
       <Route path='/Product/:id'><Product/></Route>
     </Switch>
     </Router>
  )
}

export default App