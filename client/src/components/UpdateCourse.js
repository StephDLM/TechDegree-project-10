
import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import  Context from '../Context';
import { Buffer } from 'buffer';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import { useParams } from 'react-router-dom';

export default function UpdateCourse({context}) {
    const authUser = context.authenticatedUser;
    let history = useHistory();
    let { id } = useParams();

    const [user, setUser] = useState('')
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState('')
    const [estimatedTime, setTime] = useState ('')
    const [materialsNeeded, setmaterialsNeeded] = useState('')
    const [errors, setErrors] = useState ('');   

// setup course state with the properties that the course object has
    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        user: {
            id: '',
            firstName: '',
            lastName: '',
            emailAddress: ''
        }        
        });
        useEffect(() => {
        function fetchCourses() {
        fetch(`http://localhost:5000/api/courses/${id}`)
        .then ((response) => response.json())
        .then ((data) => setCourse(data.courses))
        .catch(err => console.log('Oh noes!', err))
        }
            fetchCourses();
            console.log("fetch was successful")
        }, []);
            

    function handleSubmit () {
    //     const error = [];
    //     if (!title){
    //         console.log("title missing")
    //         error.push(['Please provide a value for "Title"'])
    //     } else if (!description){
    //         console.log("description missing")
    //         error.push(['Please provide a value for "Description"'])
    //     } else {
    // //put request to update the course information using UpdateCourse object
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Authorization': 'Basic ' + Buffer.from(`${authUser.emailAddress}:${authUser.password}`).toString("base64"),
                "Content-Type": "application/json" ,    
            },
            body: JSON.stringify(course)};
        fetch(`http://localhost:5000/api/courses/${id}`, requestOptions) //how to use a put request with fetch => https://jasonwatmore.com/post/2021/09/20/fetch-http-put-request-examples 
        history.push('/')
    };


    return (
        <main>
          <div className="wrap">
            <h2>Update Course</h2>
            <Form
                cancel={cancel}
                errors={errors}
                submit={handleSubmit}
                submitButtonText="Update Course"
                elements={() => (
                <React.Fragment>  
              <div className="main--flex">
                <div>
                  <label htmlFor="title">Course Title</label>
                  <input id="title" name="title" type="text" value={course.title} onChange ={change}/>
                  <p>By {user.firstName} {user.lastName}</p>
                  <label htmlFor="description">Course Description</label>
                  <textarea id="description" name="description" value={course.description} onChange ={change}/>
                </div>
                <div>
                  <label htmlFor="estimatedTime">Estimated Time</label>
                  <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime} onChange ={change}/>
                  <label htmlFor="materialsNeeded">Materials Needed</label>
                  <textarea id="materialsNeeded" name="materialsNeeded" value={course.materialsNeeded} onChange ={change}/>
                </div>
              </div>
                </React.Fragment>  )}/> 
          </div>
        </main>
      );


  //cancel button   
  function cancel () {
    history.push('/');
    }
//function to type when there is an event 
function change(e){
    const { name, value } = e.target;
//this will update the letters in each property
    setCourse(prevState => ({
        ...prevState,
        [name]: value,
    }));
  };

    // if (name === 'title') {
    //     setTitle(value) //grab the value to whatever 
    // } else if (name === 'description'){
    //     setDescription(value); //grab the value to whatever 
    // } else if (name === 'estimatedTime'){
    //     setTime(value); //grab the value to whatever 
    // } else if (name === 'materialsNeeded'){
    //     setmaterialsNeeded(value);
    // }
};

