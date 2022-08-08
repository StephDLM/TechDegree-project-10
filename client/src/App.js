// import React from 'react';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
// import { Provider } from './components.js/Context';
// import { Consumer } from './components.js/Context';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
// import UserSignUp from './components/UserSignUp';
// import UserSignIn from './components/UserSignIn';
// import UserSignOut from './components/UserSignOut';
// import Authenticated from './components/Authenticated';
// import withContext from './Context';
// const HeaderWithContext = withContext(Header);
// const AuthWithContext = withContext(Authenticated);
// const UserSignUpWithContext = withContext(UserSignUp);
// const UserSignInWithContext = withContext(UserSignIn);
// const UserSignOutWithContext = withContext(UserSignOut);

//     function AppOne() {
//       fetch('http://localhost:5000/api/courses')
//       .then((response) => response.json())
//        .then((data) => console.log(data));
//        return (
//      <div>puppies</div>
//        );
//      }


// export default AppOne;

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        {/* <HeaderWithContext /> */}
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route exact path="/courses/:id" component={CourseDetail} />

          {/* <PrivateRoute path="/authenticated" component={AuthWithContext} />
          <Route path="/signin" component={UserSignInWithContext} />
          {/* <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route component={NotFound} /> */}
        </Switch> 
    </BrowserRouter>
    );
  }

};
