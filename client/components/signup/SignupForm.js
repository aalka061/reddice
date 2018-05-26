import React, { Component } from 'react';
import timezones from '../../data/timezones'
import _ from 'lodash'
import {Field, reduxForm} from 'redux-form'
import axios from 'axios'
import { connect } from 'react-redux';
import {createUser} from '../../actions'

class SignupForm extends Component {

    onSubmit(values){

        this.props.createUser(values, () => {
            this.props.history.push('/')
        })
      
    }

    renderfield(field){

        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (

            <div className={className}>
                <label className="control-label">{field.label}</label>
                <input
                
                    type={field.type}
                    name={field.name}
                    className="form-control"
                    {...field.input}
                />
                  <div className="text-help">
                    {field.meta.touched ? field.meta.error:''}
                </div>
           </div>

        )
    }

    renderfieldSelect(field){
        const options = _.map(timezones, (val,key)=>
            <option key={key} value={val}>{key} </option>
         )
        return (

            <div className="form-group">
                    <label className="control-label">Time Zone:</label>
                    <select
                        name={field.name}
                        {...field.input}
                        className="form-control" >
                    <option value="" disabled > Choose your Time zone</option>
                    {options}
                    </select>
            </div>

        )
    }
    render() { 
        const { handleSubmit } = this.props;
      
        return ( 
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h1>Join our community!</h1>

                <Field label="Username" type="text" 
                     name="username" component={this.renderfield}/>

                <Field label="Email" type="email" 
                     name="email" component={this.renderfield}/>

                
                <Field label="Password" type="password" 
                     name="password" component={this.renderfield}/>

                <Field label="Confirm password" type="password" 
                     name="password2" component={this.renderfield}/>

                <Field label="Time Zone"  
                     name="timezone" component={this.renderfieldSelect}/>

                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary">Sign Up </button>

                </div>
            </form>
         )
    }
}

function validate (values){
    const errors = {};
    if(!values.username) {
        errors.username = "Enter User Name"
    }

    if(!values.email) {
        errors.email = "Enter email"
    }

    if(!values.password) {
        errors.password = "Enter password"
    }

    if(!values.password2) {
        errors.password2 = "Enter password"
    } else if(values.password !== values.password2) {
        errors.password2 = "Passwords do not match"
    }




    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewUser'
}) (
    connect(null, {createUser})(SignupForm)
) 
 
