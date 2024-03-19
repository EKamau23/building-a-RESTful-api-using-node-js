const db = require('../model/dbConnect')
const register = db.register

module.exports = {
    addRegister : async(req, res, next)=> {
        try{
            let info = {
                student_id: req.body.student_id,
                first_name: req.body.first_name, 
                last_name: req.body.last_name,
                gender: req.body.gender,
            };
            const addStudent = await student.create(info);
        

        res.status(200).send("addStudentMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
    getAllStudents:(req,res,next)=>{
        try{
            let student = student.findAll({})
            res.status(200).send(student)
        }
        catch (error)
        {
            next(error)
        }
},

}                     