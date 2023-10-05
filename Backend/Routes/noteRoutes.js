let express = require("express");
let router = express.Router();
let Controllers = require("../Controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.noteController.getNotes(res);
});

router.get("/:id", (req, res) => {
  Controllers.noteController.getUserNotes(req,res);
});

router.post("/create", (req, res) => {
  Controllers.noteController.createNote(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.noteController.updateNote(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.noteController.deleteNote(req, res);
});

module.exports = router;
