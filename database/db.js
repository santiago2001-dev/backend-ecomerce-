const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: process.env.HOST_DB,
    password : process.env.PASS_DB,
    user: process.env.USER_DB,
    port: process.env.PORT_DB,
    database :process.env.NAME_DB 
})

conexion.connect((error)=>{
    if(error){
       console.log('error de :'+error);
    }else{
        console.log('conexiona a base exitosa');
    }
})
module.exports = conexion;