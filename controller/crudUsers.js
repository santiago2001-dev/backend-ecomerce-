const { body } = require('express-validator');
const conexion = require('../database/db');
const {encript} = require('../middelwares/encriptPass');
const {sendEmail} = require('../middelwares/sendEmail')

 const CreateUserClient = async(req,res)=>{
   
    let {names,email,pass,document} = await req.body;
    const hash =  await encript(pass);
    const sql =   `INSERT INTO users (names,email,pass,typeUser,documento) VALUES ('${names}','${email}','${hash}','user','${document}')`;
    conexion.query(sql,(error,results)=>{
        if(error){
            res.json({error : error})
        }else{
            res.json("usuario creado de fomra correcta");
        }
    })
    sendEmail(email,'cuenta creada','creacion de cuenta','Bienvenido a staycloo store ya puedes comprar !!','https://www.google.com/');


 }




const getUsers= (req,res)=>{
    const sql = 'SELECT * from users';
    
    
    conexion.query(  sql,(error,results)=>{
        if(error){
           throw error;
           
       }else{
            res.json(results);
           
       } 
       
   })
    
}  

const getUserbyd =  async(req,res)=>{ 
    const {id} = req.params;
    const sql = `select * from users where  id = ${id}`;
        conexion.query(sql,(error,rows,fields)=>{
        if(error){
             throw error;
            
        }else{
            res.json(rows);
            
        }
    }) 
}

 const insertUser = async(req,res)=>{
    const {names,email,pass,typeUser,document} = await req.body;
    const hash  = await encript(pass);
    const sql =   `INSERT INTO users (names,email,pass,typeUser,documento) VALUES ('${names}','${email}','${hash}','${typeUser}',${document})`;
    conexion.query(sql,(error,results)=>{
        if(error){
            res.json({error : error});
        }else{
            res.json('usuario agregado de forma correcta');
        }
    })
    sendEmail(email,'cuenta creada','creacion de cuenta','Bienvenido a staycloo store ya puedes comprar !!','https://www.google.com/');



 }

 const updateuser = async(req,res)=>{
    const {id} = await req.params;
    const {names,email,pass,typeUser} = await req.body;
    const hash = await encript(pass);
   
    let sql = `update users set names = '${names}',pass = '${hash}',email = '${email}',typeUser = '${typeUser}'
    where id = ${id}`;
    await conexion.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro actualizado'
            })
        }
    })

}


const deleteUser = async(req,res)=>{
    const {id} =  await req.params;
    let sql = `DELETE FROM users where id = '${id}'`;
    await conexion.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro eliminado'
            })
        }
    })

}


 module.exports = { 
    getUsers,
    getUserbyd,
    insertUser,
    updateuser,
    deleteUser,
    CreateUserClient
}