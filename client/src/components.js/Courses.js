import React, { useState, useEffect, useContext } from 'react';

export default function CourseDetail() {

    useEffect(() => {
// Similar to componentDidMount and componentDidUpdate
//resource: https://www.javascripttutorial.net/javascript-fetch-api/#:~:text=The%20Fetch%20API%20allows%20you,resolve%20into%20the%20actual%20data.
        async function fetchURL() {
            try {
                const res = await fetch("http://localhost:5000/courses");
                console.log(res.status); // 200
                if (res.status === 200) {
                    return await res.json(); //fetches res.json from the server
                 } else {
                    // res.status === 500
                }
            } catch (error) {
                console.log("error");
            }}
            fetchURL();
    } 
        )
;


    return (
        <body>
            <div id="root">
                <header>
                    <div class="wrap header--flex">
                        <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                        <nav>
                            <ul class="header--signedout">
                                <li><a href="sign-up.html">Sign Up</a></li>
                                <li><a href="sign-in.html">Sign In</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div class="wrap main--grid">
                        <a class="course--module course--link" href="course-detail.html">
                            <h2 class="course--label">Course</h2>
                            <h3 class="course--title">Build a Basic Bookcase</h3>
                        </a>
                        <a class="course--module course--link" href="course-detail.html">
                            <h2 class="course--label">Course</h2>
                            <h3 class="course--title">Learn How to Program</h3>
                        </a>
                        <a class="course--module course--link" href="course-detail.html">
                            <h2 class="course--label">Course</h2>
                            <h3 class="course--title">Learn How to Test Programs</h3>
                        </a>
                        <a class="course--module course--add--module" href="create-course.html">
                            <span class="course--add--title">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                                New Course
                            </span>
                        </a>
                    </div>
                </main>
            </div>
        </body>
    );
    }


