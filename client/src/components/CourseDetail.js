//Stateful Component 
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Context } from '../Context';
import { Buffer } from 'buffer';
import authenticateUser  from '../Context';

export default function CourseDetail() {
    const [course, setCourse] = useState(null);//initializing an array-->[variables, what you call when you wanna update courses]-
    // const context = Context
    // const authUser = Context.authenticatedUser
    let emailAddress = authenticateUser.emailAddress
    let userPassword = authenticateUser.password
    let history = useHistory();
    //accessing EmailAddress and Password from Context 
    // const emailAddress = context.emailAddress
    let { id } = useParams();
    console.log(course);

    useEffect(() => {
        function fetchCourses() {
        fetch(`http://localhost:5000/api/courses/${id}`) //course variable is empty here 
        .then ((response) => response.json())
        .then ((data) => setCourse(data.courses))
        .catch(err => console.log('Oh noes!', err))
 
        }
            fetchCourses();
            console.log("fetch was successful")
        }, []); //list variables that you want useeffect to depend on, this will just do what useEffect used for

/* use params from from : https://v5.reactrouter.com/web/api/Hooks/useparams
*/
///fetch request to delete 
//Rendering HTML 
return(
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                    <Link className="button" to="/" onClick={ deleteCourse }>Delete Course</Link> 
                    <Link className="button button-secondary" to="/">Return to List</Link>
                </div>
            </div>
       {course !== null ?
            <div className="wrap">
             <h2>Course Details</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {course.user.firstName} {course.user.lastName}</p>
                            <p>{course.description}</p>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                            </ul>
                        </div>
                    </div>
                </form>
             </div>
           : <h1> nothing </h1>}
        
         </main>
    );
// DELETE request using fetch with error handling
        function deleteCourse() {
        fetch(`http://localhost:5000/api/courses/${id}`, { 
            method: 'DELETE',
            headers: {
                'Authorization':
                  "Basic " + Buffer.from(`${emailAddress}:${userPassword}`).toString("base64"),
                "Content-Type": "application/json"
            },
                body: null,
            }) 
        .then(res => res.json())
        .then (()=> history.push('/'))
        .catch(err => console.log(err));
        console.log(authenticateUser)
        };
        }
//delete method inside my fetch ==> how to send a delete request
