const conexion = require('../database/db');
const {epayco} = require('../middelwares/epayco');
const { sendEmail,sendInfoCli } = require('../middelwares/sendEmail');
const {insertRegistroVentas} = require('../controller/registroVentas')

var ref_payco
var  id_session_token
var emailCliente
var names 
var netoValue
var nameProduct
var medidas 
var document
var fecha 
var direccion
var email
var cel

const CreatePagoDaviplata = async(req,res)=>{

var info =  await req.body;
medidas =  await info.medidas;

cel = info.infoPago.phone 

epayco.daviplata.create(info.infoPago)
    .then(function(daviplata){
        
        res.json(daviplata)
       if(daviplata.success == false){
        ref_payco =   daviplata.data.refPayco // It is obtained from the create response
        id_session_token =daviplata.data.idSessionToken
        emailCliente = daviplata.data.email
        names  = `${daviplata.data.name} ${daviplata.data.lastName}`
        netoValue = daviplata.data.netoValue
        nameProduct = daviplata.data.description,
        document = daviplata.data.document
        fecha = daviplata.data.date
        direccion  = daviplata.data.address
        email = daviplata.data.email
       }
        
       
    }).catch(function(err){
        res.json({ error : err})
        
       
    })

}

const confirmPagoDaviplata= async(req,res)=>{
    

    const opt = await req.body;
    const sql  = ` SELECT titulo , imagenUno,tipo FROM productos WHERE titulo = '${nameProduct}' `
    
    epayco.daviplata.confirm({
       
        ref_payco: ref_payco, // It is obtained from the create response
        id_session_token: id_session_token, // It is obtained from the create response
        otp: opt
    }).then(function(daviplata){
             res.json(daviplata)

             if(daviplata.success == false){

                conexion.query(sql,(error,rows)=>{
                    if(error){
                        console.log(error)
                    }else{
                    
                    const imagenUno = rows[0].imagenUno
                    const tipo = rows[0].tipo
                    sendEmail(emailCliente,"compra realizada en staycloo","compra realizada en staycloo","",names,netoValue,nameProduct,imagenUno)
                 
                    insertRegistroVentas(  names, 
                        netoValue,
                        nameProduct,
                        medidas ,
                        document,
                        fecha, 
                        tipo,
                        email,
                        cel,
                        direccion)
                        
                }
                })
                
            }
        }).catch(function(err){
          res.json({ err:  err});
        })
}




module.exports= {

    CreatePagoDaviplata,
    confirmPagoDaviplata
}