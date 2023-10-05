"use strict";
let Models = require("../Models"); //matches index.js

const getNotes = (res) => {
  
  Models.Note.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserNotes = (req,res) => {
  
  Models.Note.find({user: req.params.id})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createNote = (data, res) => {
  
  console.log(data);
  new Models.Note(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateNote = (req, res) => {
  
  console.log(req.body)
  Models.Note.updateOne({_id: req.params.id}, req.body )
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  };

  const deleteNote = (req, res) => {
  
  Models.Note.deleteOne({_id:req.params.id})
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }

module.exports = {
  getNotes,
  getUserNotes,
  createNote,
  updateNote,
  deleteNote,
};