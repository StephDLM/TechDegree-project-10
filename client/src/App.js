import React from 'react';
import './App.css';
// import { Provider } from './components.js/Context';
// import { Consumer } from './components.js/Context';
// import Courses from './components/Courses';
// import Header from './components/Header';
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

    function App() {
      fetch('http://localhost:5000/api/courses')
      .then((response) => response.json())
       .then((data) => console.log(data));
       return (
     <div>Header</div>
       );
     }


export default App;

// export default class App extends component {

//   render() {
//     return (
//       <BrowserRouter>
//         <HeaderWithContext />
//         <Routes>
//           <Route exact path="/" component={Public} />
//           <PrivateRoute path="/authenticated" component={AuthWithContext} />
//           <Route path="/signin" component={UserSignInWithContext} />
//           {/* <Route path="/signup" component={UserSignUpWithContext} />
//           <Route path="/signout" component={UserSignOutWithContext} />
//           <Route component={NotFound} /> */}
//         </Routes>
//     </BrowserRouter>
//     );
//   }

// };


// export default () => (
//   <Router>
//     <div>
//       <HeaderWithContext />

//       <Switch>
//         <Route exact path="/" component={Public} />
//         <PrivateRoute path="/authenticated" component={AuthWithContext} />
//         <Route path="/signin" component={UserSignInWithContext} />
//         <Route path="/signup" component={UserSignUpWithContext} />
//         <Route path="/signout" component={UserSignOutWithContext} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// );