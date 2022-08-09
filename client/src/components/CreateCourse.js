// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Context } from 'react';



// export default function CreateCourse() {
//     //creating objects in state that we can use to update each object
//     const newCourse = () => {
//     const context = useContext(Context); //importing conext
//     const authUser = context.authenticatedUser;

//     //need to import autheticatedUser 
    
//     const [course, setCourse] = useState({
//         title: '',
//         description: '',
//         estimatedTime: '',
//         materialsNeeded: '',
//         errors: [], //use errors for later 
//     });
    
//    }
 
//     render() {
//     // const  {
//     //     title,
//     //     description,
//     //     estimatedTime,
//     //     materialsNeeded,
//     //     errors
//     // } = this.state;
//     fetch(`http://localhost:5000/api/courses/${id}`) 
//     .then ((response) => response.json())
//     .catch(err => console.log('Oh noes!', err))
// //create new course 
//     function createCourse (){
//         const newCourse= {
//             title: "",
//             description: "",
//             estimatedTime: "",
//             materialsNeeded: "",
//     }
//     };

// //add prevent default ?

//     return (
//         <main>
//         <div className="wrap">
//           <h2>Create Course</h2>
//           <div className="validation--errors">
//             <h3>Validation Errors</h3>
//             <ul>
//               <li>Please provide a value for "Title"</li>
//               <li>Please provide a value for "Description"</li>
//             </ul>
//           </div>
//           <form>
//             <div className="main--flex">
//               <div>
//                 <label htmlFor="courseTitle">Course Title</label>
//                 <input id="courseTitle" name="courseTitle" type="text" defaultValue />
//                 <p>By Joe Smith</p>
//                 <label htmlFor="courseDescription">Course Description</label>
//                 <textarea id="courseDescription" name="courseDescription" defaultValue={""} />
//               </div>
//               <div>
//                 <label htmlFor="estimatedTime">Estimated Time</label>
//                 <input id="estimatedTime" name="estimatedTime" type="text" defaultValue />
//                 <label htmlFor="materialsNeeded">Materials Needed</label>
//                 <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={""} />
//               </div>
//             </div>
//             <button className="button" type="submit">Create Course</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
//           </form>
//         </div>
//       </main>
//     )};
//     change = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
    
//         this.setState(() => {
//           return {
//             [name]: value
//           };
//         });
//       }
    
//       submit = () => {
//         const { context } = this.props;
//         const {
//           title,
//           description,
//           estimatedTime,
//           materialsNeeded
//         } = this.state;
//       }
    
//         context.data.createCourse(newCourse)
//           .then( errors => {
//             if (errors.length) {
//               this.setState({ errors });
//             } 
//             // else {
//             //   context.actions.createCourse(username, password)
//             //     .then(() => {
//             //       this.props.history.push('/authenticated');    
//             //     });
//             // }
//           })
//           .catch((err) => {
//             console.log(err);
//             this.props.history.push('/error');
//           });
      
      
    
//       cancel = () => {
//        this.props.history.push('/');
//       }}
//       //every time you type= value equals what you typr
//       change = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//       // test with = console.log(event.target.value)  
    
//         this.setState(() => {
//           return {
//             [name]: value
//           };
//         });
//       }
// //e.target value 

