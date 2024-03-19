const db = require('../model/dbConnect')
const student = db.student

module.exports = {
    addStudent : async(req, res, next)=> {
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
// get student by id
    getStudent: async(req,res,next)=>{
        try{
            let id = req.params.student_id
            let student = await StudentModel.findOne({where: {student_id: id}})

            if(!student){
                throw(createError(404,"student does not exist"))
            }
            res.status(200).send(student)
        }catch(error) {
            next(error)
        }
    },
// update student
    updateStudent : async(req, res, next) =>{
        try{
            let id = req.params.id

            const student = await StudentModel.update(req.body, {where: {student_id: id}})
            if(!student){
                throw(createError(404,"student does not exist"))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
      }
    },

}
