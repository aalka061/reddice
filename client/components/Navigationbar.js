import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Navigationbar extends Component {

    render(){
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Reddice</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </nav> 
        )
    }
}

export default Navigationbar;