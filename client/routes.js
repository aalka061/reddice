import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App'
import Greetings from './components/Greetings'
import Signup from './components/signup/signup_page'

export default(
        <div>
           <Switch>
                <Route path="/"  component={App}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/"  component={Greetings}/>
           </Switch>
       </div>
        
)