import React, { Component } from 'react';

class RegistrationForm extends Component {
  render(){
    return (
        <form>
          <label>
            Name:
            <input type="text" name="name"/>
            Password:
            <input type="password" name="password"/>
          </label>
          <button type="submit" value="Submit" name="Submit"/>
        </form>
    );
  }
}

export default RegistrationForm;
