"use strict";
let Models = require("../Models"); //matches index.js
const { createToken } = require('../Middleware/auth');

const bcrypt = require("bcryptjs")

const loginUser = async (req, res) => {
  try {
      // Get user input from request body
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
          res.status(400).json({ result: "All input is required" });
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }
      // Validate if user exists in our database
      const user = await Models.User.findOne( { email: email });

      // if they do exist, make sure their password matches - need to check encrypted version of password
      if (user && (await bcrypt.compare(password, user.password))) {
          // Create token for use based on their id and email
          const token = createToken(user.id, email);
          // save user token
          user.token = token;

          console.log(user)

          // send back logged in user details including token
          res.status(200).json({ result: 'User successfully logged in', data: user });
      }
      else res.status(400).json({ result: "Invalid user credentials" });
  } catch (err) {
      console.log(err);
      res.status(500).json({ result: err.message })
  }
};

// registers a new user by validating their details, encrypting their password, and generating a token
const registerUser = async (req, res) => {

  try {
      // Get user input by destructuring request body
      const { firstName, lastName, email, password } = req.body;

      // Validate user input
      if (!(email && password && firstName && lastName)) {
          res.status(400).json({ result: "All input is required"});
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }

      // Validate if user exists in our database
      const oldUser = await Models.User.findOne({ email: email});

      if (oldUser) {
          res.status(409).json({ result: "User already exists. Please login" });
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }

      // Encrypt user password
      let encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = new Models.User({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: encryptedPassword,
      })
        await user.save() 
        const token= createToken(user._id, email)
        user.token=token

      // return new user
      res.status(201).json({ result: "User successfully registered", data: user });
  } catch (err) {
      console.log(err);
      res.status(500).json({ result: err.message })
  }
}


const getUsers = (res) => {
  //finds all users
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body)
  Models.User.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false })
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  };

  const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  Models.User.findByIdAndRemove(req.params.id, req.body, {
  useFindAndModify: false })
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }

module.exports = {
  loginUser,
  registerUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
