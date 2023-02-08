
const conexion = require('../database/db');
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const auth = async(req,res)=>{
    let {email,pass} = await req.body;
    let Pass;
    const sql = `SELECT names,pass ,email,typeUser,documento FROM users WHERE email = '${email}'`;
    if(email == undefined){
        res.json('ingresa los campos ');
    }else{
        conexion.query(sql,(error,results)=>{
            if(error){
                res.json(error);
            }else{
                results.forEach(element => {
                    Pass = element.pass;
                    
                });
                const compare =  bcrypt.compareSync(pass,Pass);
                if(!compare){
                    res.json({error : 'contraseña incorrecta'});
                }else{
                   if(results.length >0){
                    let data = JSON.stringify(results[0]);
                    const token = jwt.sign(data,'still');
                    console.log('loggeado')
                    res.json({token})
                   } 
                }
            }
        })
    }
}
module.exports = {
    auth
}

