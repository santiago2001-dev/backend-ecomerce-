
const db = require('../database/db');

const existeMailTrue = async(req,res,next)=>{
    const correo = await req.body.email;
    let validation ;
    const sql = ` SELECT email FROM  users  WHERE email = '${correo}'`;
     db.query(sql,(error,results)=>{
            if(error){
                throw error 
            }else{
                results.forEach(element => {
                    validation = element.email
       
                  });
            }
            if(validation == correo){
                return res.status(400).json('correo ya esta registrado');

            }else if(validation == undefined){
                next();

            }
    })
}


const existeMaiFalse = async(req,res,next)=>{
    const correo = await req.body.email;
    let validation ;
    const sql = ` SELECT email FROM  users  WHERE email = '${correo}'`;
     db.query(sql,(error,results)=>{
            if(error){
                throw error 
            }else{
                results.forEach(element => {
                    validation = element.email
       
                  });
            }
            if(validation !== correo){
                return res.status(400).json('correo no  esta registrado');
            }else{
                next();

            }
    })
}

const validarPass = async(pass)=>{
  
    let regxp = /^([a-zA-Z0-9*-]){6,}$/;


    return (regxp.test(pass));
}

const ValidarPass =  async(req,res,next)=>{
    const contraseña =  await req.body.contraseña;
   
    const rta = await validarPass(contraseña);
    
    if( rta == false){
        res.json({error : 'contraseña debe tener Mínimo 6 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial '})
    }else{
        next();
    }


  }
  module.exports  = {
    existeMailTrue,
    existeMaiFalse,
    ValidarPass

  }