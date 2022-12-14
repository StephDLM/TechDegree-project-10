import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import { Buffer } from "buffer";
import { useHistory } from "react-router-dom";
import Form from "./Form";

export default function CreateCourse({ context }) {
  //creating objects in state that we can use to update each object
  // let context = useContext(Context);
  const authUser = context.authenticatedUser;

  // console.log(authUser.id)
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setTime] = useState("");
  const [materialsNeeded, setmaterialsNeeded] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit() {
    console.log(authUser);
    const newCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId: authUser.id,
    };

    // //function to throw an error when title and description are empty, else send request
  let Errors = [];
  if (!title || !description){
  if (!title) {
      Errors.push(['Please provide a value for "Title".']);
      setErrors(Errors);
  }
  if (!description) {
      Errors.push(['Please provide a value for "Description".'])
      setErrors(Errors);
  }
} else {
    //how to send a post request with fetch==> source: https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/
    fetch("http://localhost:5000/api/courses",{
        // Adding method type
        method: "POST",
        // Adding headers to the request
        headers: {
          'Authorization':
            "Basic " + Buffer.from(`${authUser.emailAddress}:${authUser.password}`).toString("base64"),
          "Content-Type": "application/json"
        },
        // Adding body or contents to send
        body: JSON.stringify(newCourse)
      })
        .then((res) => {
          if (res.status === 200) console.log("new course added");
          else if (res.status === 400) throw errors;
        })
        .then(() => history.push("/"))
        .then((json) => console.log(json))

      // Displaying results to console
      .then((json) => console.log(json))
      .catch((err) => {setErrors(err);
        console.log("Oh noes!", err)
      })}
      // let error = [],
      // if (errors.length)
      // .catch((err) => console.log("Oh noes!", err));
  
}
return (
  <main>
    <div className="wrap">
      <h2>Create Course</h2>
        <Form
          cancel={cancel}
          errors={errors}
          submit={handleSubmit}
          submitButtonText="Create Course"
          elements={() => (
            <React.Fragment>
              <div className="main--flex">
                <div>
                  <label htmlFor="title">Course Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={change}
                  />
                  <p>By {authUser.firstName} {authUser.lastName}</p>
                  <label htmlFor="description">Course Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={change}
                  />
                </div>
                <div>
                  <label htmlFor="estimatedTime">Estimated Time</label>
                  <input
                    id="estimatedTime"
                    name="estimatedTime"
                    type="text"
                    value={estimatedTime}
                    onChange={change}
                  />
                  <label htmlFor="materialsNeeded">Materials Needed</label>
                  <textarea
                    id="materialsNeeded"
                    name="materialsNeeded"
                    value={materialsNeeded}
                    onChange={change}
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        />
      </div>
    </main>
  );

  //cancel button
  function cancel() {
    history.push("/");
  }
  //check keyboard
  function change(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "title") {
      setTitle(value); //grab the value to whatever
    } else if (name === "description") {
      setDescription(value); //grab the value to whatever
    } else if (name === "estimatedTime") {
      setTime(value); //grab the value to whatever
    } else if (name === "materialsNeeded") {
      setmaterialsNeeded(value);
    }
  }
}
