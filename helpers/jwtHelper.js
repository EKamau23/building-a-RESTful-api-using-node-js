const createError = require('http-errors');
const JWT = require('jsonwebtoken');
const student = require('../model/registrationModel');

module.exports = {
    signAccessToken: (UserId)=>{
        return new Promise ((resolve, reject)=>{
            const payload = {UserId, role:userRole}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options ={
                expiresIn:'10m',
                issuer:'EliudTechSolutions.com',
                audience: 'UserId.toString'(),
            }
            JWT.sign(payload, secret, options,(error, token)=>{
                if(error) {
                    console.log(error.message)
                    reject(createError.InternalServerError());
                }
                resolve(token);
            })
        });
        
    },

    verifyAccessToken:(req, res, next)=> {
        if(!req.headers['authorization']) return next (createError.unauthorized())
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split('')
        const token = bearerToken[1]
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload)=>{
            if(err) {
                if(err.name ==='jsonwebtoken error'){
                    return next(createError.unauthorized(error.message))
                }
            }
            req.payload = payload
            next()
        })
    },

    signRefreshToken:(UserId)=>{
        return new Promise((resolve, reject)=>{
            const payload = {}
            const secret = process.env.REFRESH_TOKEN_SECRET;
            const options ={
                expiresIn: '1y',
                issuer: 'EliudTechSolutions.com',
                audience: UserId.toString
            }
            JWT.sign(payload, secret, options, (error, token)=>{
                if(error) {
                    console.log (error.message)
                    reject(createError.InternalServerError());
                }
                resolve(token);
            })
        })
        
    },

    verifyRefreshToken: (refreshToken)=>{
        return new Promise ((resolve, reject)=> {
            JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload)=>{
                if(err) return reject(createError.unauthorized())
                const UserId = payload.aud
            resolve(UserId.toString())
            })
        })
    },
}
