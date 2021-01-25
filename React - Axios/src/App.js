import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios"

import './App.css'

import { Header, Home, Blog, Hakkimizda } from "./components"

//active class link

function App() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/headerLinks')
      .then(function ({data}) {
        setLinks(data)
        console.log("sorun yok => ", data)
      })
      .catch(function (error) {
        console.log("sorun var => ", error)
      })
  }, [])

  // useEffect(function)     -> Component her güncellendikten sonra
  // useEffect(function, []) -> Component oluşturduktan sonra 1 kez

  return (
    <>
      <Router>
        <Header links={links} />

        <main>
          <section>
            <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={Hakkimizda} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </section>
        </main>

        <footer>
          footer
        </footer>
      </Router>
    </>
  );
}

export default App;
