
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
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
    const [errors, errorsNeeded] = useState ('');   

    //how to use a put request with fetch => https://jasonwatmore.com/post/2021/09/20/fetch-http-put-request-examples 
    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ UpdateCourse })
    };
    fetch('https://reqres.in/api/articles/1', requestOptions)
        .then(response => response.json())
        .then(data => data.updatedAt);

    function handleSubmit () {
        const UpdateCourse= {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId: authUser.id

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
                  <label htmlFor="courseTitle">Course Title</label>
                  <input id="courseTitle" name="courseTitle" type="text" value={setTitle} />
                  <p>By Joe Smith</p>
                  <label htmlFor="courseDescription">Course Description</label>
                  <textarea id="courseDescription" name="courseDescription" value={setDescription} />
                </div>
                <div>
                  <label htmlFor="estimatedTime">Estimated Time</label>
                  <input id="estimatedTime" name="estimatedTime" type="text" value={setTime} />
                  <label htmlFor="materialsNeeded">Materials Needed</label>
                  <textarea id="materialsNeeded" name="materialsNeeded" value={setmaterialsNeeded} />
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
//check keyboard 
function change(e){
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'title') {
        setTitle(value) //grab the value to whatever 
    } else if (name === 'description'){
        setDescription(value); //grab the value to whatever 
    } else if (name === 'estimatedTime'){
        setTime(value); //grab the value to whatever 
    } else if (name === 'materialsNeeded'){
        setmaterialsNeeded(value);
    }

};

}}
 
    //https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
