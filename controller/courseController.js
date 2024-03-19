const db = require('../model/dbConnect')
const course = db.course

module.exports = {
    addCourse : async(req, res, next)=> {
        try{
            let info = {
                course_id: req.body.course_id,
                course_name: req.body.course_name, 
            };
            const addCourse = await course.create(info);
        

        res.status(200).send("addCourseMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
    getAllCourses:(req,res,next)=>{
        try{
            let course = course.findAll({})
            res.status(200).send(course)
        }
        catch (error)
        {
            next(error)
        }
},

}
