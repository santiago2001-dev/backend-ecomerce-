const conexion = require('../database/db')
const {epayco}= require('../middelwares/epayco')
const { sendEmail,sendInfoCli } = require('../middelwares/sendEmail');
const {insertRegistroVentas} = require('./registroventas')
var Names 
var Value 
var Email 
var Cel 
var NameProduct
var medidas
var document
var Fecha
var Direccion
const listBank= async(req,res)=>{
    epayco.bank.getBanks()
    .then(function(bank) {
        console.log(bank);
        res.json(bank)
        
     })
    .catch(function(err) {
         console.log("err:" + err);
         res.json({error : err})
     });
}


const pago= async(req,res)=>{
    var info = await req.body;
    medidas = await info.medidas
    Direccion = await info.direccion.direccion
   const {email,name,last_name,description,value,cell_phone,doc_number} = await info.infoPago;
    Email = email
    Names =`${name} ${last_name}` 
    NameProduct = description
    Value = value 
    Cel = cell_phone
    document = doc_number
   epayco.bank.create(info.infoPago)
    .then(function(bank) {
        confirmPago(bank.data.ticketId)
        Fecha = bank.data.fecha
        res.json(bank)
    })
    .catch(function(err) {
        console.log("err: " + err);
    });
}

const confirmPago= async(ticketId)=>{
    epayco.bank.get(ticketId)
    .then(function(bank) {
        //console.log(bank);

        return bank
    })
    .catch(function(err) {
        console.log("err: " + err);

        return err
    });
}

const rtaPago = async(req,res)=>{
    const {x_respuesta,x_response} = await req.body
    const sql  = ` SELECT titulo , imagenUno,tipo FROM productos WHERE titulo = '${NameProduct}' `
    console.log(x_respuesta,x_response);
    if(x_response == 'Aceptada' && x_respuesta == 'Aceptada'){
        //if(x_response == 'Pendiente' && x_respuesta == 'Pendiente'){
        console.log('PAGO CORRECTO')
        conexion.query(sql,(error,rows)=>{
            if(error){
                console.log(error)
            }else{
            
            const imagenUno = rows[0].imagenUno
            const tipo = rows[0].tipo
            sendEmail(Email,"compra realizada en staycloo","compra realizada en staycloo","",Names,Value,NameProduct,imagenUno)
         
            insertRegistroVentas(  
                Names, 
                Value,
                NameProduct,
                medidas ,
                document,
                Fecha, 
                tipo,
                Email,
                Cel,
                Direccion)
                
        }
        })

    }

}
module.exports = {listBank,pago,rtaPago}