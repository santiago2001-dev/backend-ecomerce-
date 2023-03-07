const bank = require('epayco-sdk-node/lib/resources/bank');
const conexion = require('../database/db')
const {epayco}= require('../middelwares/epayco')
const { sendEmail,sendInfoCli } = require('../middelwares/sendEmail');
const {insertRegistroVentas} = require('./registroventas')

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
    epayco.bank.create(info)
    .then(function(bank) {
        confirmPago(bank.data.ticketId)
        res.json(bank)
    })
    .catch(function(err) {
        console.log("err: " + err);
    });
}

const confirmPago= async(ticketId)=>{
    epayco.bank.get(ticketId)
    .then(function(bank) {
        console.log(bank);

        return bank
    })
    .catch(function(err) {
        console.log("err: " + err);

        return err
    });
}
module.exports = {listBank,pago}