module.exports = (sequelize, Datatypes)=>{

    const Student = sequelize.define('students',{
        student_id:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        gender:{
            type: Datatypes.STRING,
            allowNull: false,
        },
    });
    return Student;
}