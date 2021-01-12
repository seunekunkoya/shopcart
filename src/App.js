import React from "react"
import { Switch, Router  } from "react-router-dom"
import { Products } from "./page/Product"
import { Navbar } from "./components/Navbar"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Router exact path='/' component={Products} />
      </Switch>
    </div>
  )
}

export default App
