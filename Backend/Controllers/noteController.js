"use strict";
let Models = require("../Models"); //matches index.js

const getNotes = (res) => {
  
  Models.Notes.find({})
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
  Models.Note.updateOne({id: req.params.id}, req.body )
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  };

  const deleteNote = (req, res) => {
  
  Models.Note.deleteOne({id:req.params.id})
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};