// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Context } from 'react';



// export default function CreateCourse({context}) {
//     //creating objects in state that we can use to update each object
//     const newCourse = () => {
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
// //handlesumbit function (e)
// inputs for the forms: e.target[0].value
// description
// //how to send a post request with fetch==> 
// //sending post request to create this course
//     fetch(`http://localhost:5000/api/courses/${id}`,  { method: 'POST'}) 
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
// //add prevent default ?==> add e.preven

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
//           <Form>
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
//           </Form>
//         </div>
//       </main>
//     )};
    
      
//     //covert to function 
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

