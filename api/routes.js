'use strict';

const express = require('express');
const { restart } = require('nodemon');
const router = express.Router(); // Construct a router instance.
const {User, Course} = require('./models');
const { authenticateUser } = require('./middleware/auth-user');


// Handler function to wrap each route.
function asyncHandler(cb) {
    return async (req, res, next) => {
      try {
        await cb(req, res, next);
      } catch (error) {
        next(error); // Forward error to the global error handler

      }
    }
  }

//route returns all properties and values for the currently authenticated user
router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
    const user = req.currentUser; // Store the user on the Request object
    res.status(200).json({ 
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress,
     });
  }));


  // Route that creates a new user.
router.post('/users', asyncHandler(async (req, res) => {
    try {
      await User.create(req.body);
      res.location("/");
      res.status(201).json({ "message": "Account successfully created!" });
    } catch (error) {
      console.log('ERROR: ', error.name);
      if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') { //validation to ensure that the following required values are properly submitted 
        const errors = error.errors.map(err => err.message);
        res.status(400).json({ errors });   
      } else {
        throw error;
      }
    }
  }));

//Get route that will return all courses including the User associated with each course and a 200 HTTP status code.
//source: https://teamtreehouse.com/library/data-relationships-with-sql-and-sequelize-2/retrieve-related-data-in-sequelize-queries/retrieve-data-with-findall
//source for attributes: https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#fetching-all-associated-elements
router.get('/courses', asyncHandler(async(req, res) =>{
    const courses = await Course.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },//do not include created at and updated at for users
        include: [ 
            {
              model: User,
              as: 'user', //courses and user associated with the course
              attributes: ['firstName', 'lastName', 'emailAddress']
              
            },
          ],through: {
            attributes: ['title', 'description'] //don't include created at and updated at for courses    
          }
        });
        // Set the status to 201 Created and end the response.
        res.status(200).json({courses});
    }  
));

/// Get route that will return the corresponding course including the User associated with that course and a 200 HTTP status code.
//attributes exclude resource: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
router.get('/courses/:id', asyncHandler(async(req,res) =>{
    const courses = await Course.findByPk(req.params.id, {
        //do not include created at and updated at for users and courses 
        attributes: { exclude: ['createdAt', 'updatedAt'] }, 
        include: [ 
            {
              model: User,
              as: 'user', //courses and user associated with the course
            }
          ],         
    });
    res.status(200).json({courses})
    }));


/*Post route that will create a new course, set the location header to the URI for the newly created course,
 and return a 201 HTTP status code and no content.
*/
router.post('/courses', authenticateUser, asyncHandler(async(req,res) => {
    try {
        const course = await Course.create(req.body);
        res.location(`/courses/${course.id}`);
        res.status(201).json({message: "Course was successfully created!"}).end();
    } catch (error) {
        if ( error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });   
        } else{
            throw error;
        }    
    }
}));


//put route that will update the corresponding course and return a 204 HTTP status code and no content.
router.put('/courses/:id', authenticateUser,  asyncHandler(async(req,res) =>{
let course ;
    try {
        course = await Course.findByPk(req.params.id); //async call
        if (course) {
            //if requester user id is the same as userId course, allow update course, else provide a 403 error
            if(req.currentUser.id === course.userId) {
                await course.update(req.body);
                res.status(204).end();
            } else {
                res.sendStatus(403).json({message: "You aren't authorized to update this course"});
            }
        } else {
        res.sendStatus(404);
        }
    } catch (error) {
        if ( error.name === "SequelizeValidationError" || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });   
        } else{
            throw error;
        }
}}));

//api/courses/:id DELETE route that will delete the corresponding course and return a 204 HTTP status code and no content.
router.delete('/courses/:id', authenticateUser, asyncHandler(async(req,res) =>{ 
    const course = await Course.findByPk(req.params.id);
    if (course) {
      if (req.currentUser.id === course.userId){
        await course.destroy();
        res.status(204).end();
      } else {
        res.status(403).json({message: "You aren't authorized to delete this course"});
      }
    } else {
      res.sendStatus(404);
    }}));

 module.exports = router;

