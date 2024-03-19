const express = require("express")
const studentController = require('../controller/studentController')
const router = express.Router();

router.post('/addStudent', studentController.addStudent);
router.get("/getAllStudents", studentController.getAllStudents);
router.get("/getStudent/:student_id", studentController.getStudent);
router.patch("/updateStudent/:id", studentController.updateStudent);

module.exports = router;
