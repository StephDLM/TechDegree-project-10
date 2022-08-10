import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
    const [courses, setCourses] = useState([]);//initializing an array  //[variables, what you call when you wanna update courses]-
    useEffect(() => {
         async function fetchURL() {
            try {
            await fetch('http://localhost:5000/api/courses')
            .then ((response) => response.json())
            .then ((data) => setCourses(data.courses)) // use this.state to save the data )}
            } catch (error){
                throw error; 
            }}
            fetchURL();
        }, []); 

//mapping courses from api to render in html which was converted from JXM
    return ( 
        <main>
            <div className="wrap main--grid">
             {courses.map((course, index) => { return( //gives and index key for each course
                    <Link className="course--module course--link" to={`/courses/${course.id}`} key ={index}> 
                    <l className="course--label">Course</l>
                    <h3 className="course--title">{course.title}</h3> 
                    </Link>);}
                  )}
                <Link className="course--module course--add--module" to="/createcourse">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
    )};
            
// // Similar to componentDidMount and componentDidUpdate
// //resource: https://www.javascripttutorial.net/javascript-fetch-api/#:~:text=The%20Fetch%20API%20allows%20you,resolve%20into%20the%20actual%20data.



