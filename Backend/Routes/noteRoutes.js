let express = require("express");
let router = express.Router();
let Controllers = require("../Controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.getNotes(res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createNote(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateNote(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteNote(req, res);
});

module.exports = router;
