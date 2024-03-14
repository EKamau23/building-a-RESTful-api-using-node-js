//this code sets up a connection using sequelize
const dbConfig = require("../config/dbConfig");
const {DataTypes, Sequelize} = require("sequelize");

// const Sequelize = new Sequelize();

const sequelize = new Sequelize(
            dbConfig.DB,
            dbConfig.USER,
            dbConfig.PASSWORD,{
                host: dbConfig.HOST,
                dialect: dbConfig.dialect,
                    operatorAliases: false,  //if errors in your code will overwrite
            }); 

            sequelize
            .authenticate()
              //promise
            .then(()=> {
                console.log("Database Connection Successful...");
            })
            .catch((err)=>{
                    console.log("Error" + err);
            });

              const db = {};

            db.Sequelize = Sequelize;
            db.sequelize = sequelize;
              
            db.student = require('./studentModel')(sequelize, DataTypes);

//db.sequelize.sync ({force:false})
//.then(()=>{
 //console.log('Table created successfully');
 //})

module.exports = db;
