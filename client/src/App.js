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
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import Header from './components/Header';

// import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';
import withContext from './Context';
import CreateCourse from './components/CreateCourse';
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const CreateCourseWithContext = withContext(CreateCourse);

// const UserSignOutWithContext = withContext(UserSignOut);


export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <HeaderWithContext />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route exact path="/courses/:id" component={CourseDetail} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/createcourse" component={CreateCourseWithContext} />
          {/* <PrivateRoute path="/authenticated" component={AuthWithContext} />  */}
          {/* <Route path="/signout" component={UserSignOutWithContext} /> */}
          {/* <Route component={NotFound} /> */} 
        </Switch> 
    </BrowserRouter>
    );
  }

};
