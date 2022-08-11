import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
// import { Provider } from './Context';
import { Consumer } from './Context';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';
import withContext from './Context';
import CreateCourse from './components/CreateCourse';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';


const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const CreateCourseWithContext = withContext(CreateCourse);
const UserSignOutWithContext = withContext(UserSignOut);
const updateCourseWithContext = withContext(UpdateCourse);



export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <HeaderWithContext />
        <Switch>
          <Route exact path="/" component={Courses} />
          <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
          <PrivateRoute path="/courses/:id/update" component={updateCourseWithContext} />
          <Route exact path="/courses/:id" component={CourseDetail} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route component={NotFound} />
          {/* <PrivateRoute path="/settings" component={AuthWithContext} /> */}


          {/* <PrivateRoute path="/authenticated" component={AuthWithContext} />  */}
          {/* <Route path="/signout" component={UserSignOutWithContext} /> */}

        </Switch> 
    </BrowserRouter>
    );
  }

};
