// //STATELESS
// import React from 'react';
// // import signOut from './UserSignOut';
// // import signIn from './UserSignOut';
// import { Link } from 'react-router-dom';

// const Header = () =>{
//     const { context } = this.props;
//     const authUser = context.authenticatedUser;    
  
//     return (
//     <div className="header">
//     <div className="bounds">
//       <h1 className="header--logo">MyAuth</h1>
//       <nav>
//         {authUser ? (
//           <React.Fragment>
//             <span>Welcome, {authUser.name}!</span>
//             <Link to="/signout">Sign Out</Link>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Link className="signup" to="/signup">Sign Up</Link>
//             <Link className="signin" to="/signin">Sign In</Link>
//           </React.Fragment>
//         )}
//       </nav>
//     </div>
//   </div>
//         )
// }

