module.exports=(sequelize, DataTypes) =>{
    const student = sequelize.define('student', {
        student_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return student;
}
