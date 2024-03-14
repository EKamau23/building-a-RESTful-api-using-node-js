const db = require("../model/dbConnect") //Export
const Student = db.students //import from dbConnect
module.exports = {
  addStudent :async(req, res, next) =>{ //req = request and res = response
    try {
      let info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender
      }

      const addStudent = await Student.create(info)
      res.status(200).send(addStudent)
    }catch (error) {next(error)}
  },
};