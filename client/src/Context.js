import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext(); 

export class Provider extends Component {

  constructor() {
    super();
    this.data = new Data();
    // this.cookie = Cookies.get('authenticatedUser');

    this.state = {
      authenticatedUser: null
    };
  }

  render() {
    const { authenticatedUser, course, courses} = this.state;
    const value = {
      authenticatedUser, courses, course,
      data: this.data,
      actions: { // Add the 'actions' property and object
        signIn: this.signIn,
        signOut: this.signOut
      },
    };
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  
  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password);
    if (user !== null) {
      user.password = password; //add a password property to the object and use the password that was typed by in by the user as a plain string in the state
      this.setState(() => {
        let userPassword = user.password //saving the password without getting hashed, to use before getting 
        return {
          authenticatedUser: user,
        };
      });
      const cookieOptions = {
        expires: 1 // 1 day
      };
      Cookies.set('authenticatedUser', JSON.stringify(user), cookieOptions);
    }
    return user;
  }

  signOut = () => {
    this.setState({ authenticatedUser: null });
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
//withContext automatically subscribes (or connects) the component passed to it to all actions and context changes
export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}
// export default { withContext }
