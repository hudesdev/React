import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router';
import AuthStorage from '../Logic/AuthStorage'

function OnlyAuthenticated2(props){
    if (!AuthStorage.isAuthValid(props.auth)){ // --- this can happen due to AuthStorage timer expired
        return  <Redirect to='/SignIn' />
    }

return (
    <div>
        <h3>OnlyAuthenticated2 component</h3>
        <p>Your email is : {props.getEmail()}</p> 
    </div>
    );
}

OnlyAuthenticated2.propTypes = {
    getEmail : PropTypes.func , 
    auth :  PropTypes.object
}

export default OnlyAuthenticated2;