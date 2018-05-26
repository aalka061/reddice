import React, {Component} from 'react'
import Navigationbar from './Navigationbar'
import Main from './Main'

class App extends Component {
    
    render() {
        return (
            <div className="container">
                <Navigationbar/>
                <Main/>
                
            </div>
        )
    }
}
export default App;