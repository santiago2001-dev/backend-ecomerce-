
const {mercadopago} = require('../middelwares/mercadopag');
const {sendEmail} = require ('../middelwares/sendEmail')

const realizarCompra = (req,res)=>{
    const { title,unit_price,quantity} =  req.body;
   
    
let preference = {
  back_urls : {
    sucess : 'https://a2eb-186-84-88-250.ngrok.io/api/product/notification'
  },
    items: [
      {
        title: title,
        unit_price: unit_price,
        quantity: quantity,
        
      },
    ],
   notification_url : 'https://a2eb-186-84-88-250.ngrok.io/api/product/notification'
  };
 

  
  mercadopago.preferences.create(preference)
  .then(function (response) {
    res.json(
      response.body.init_point

    );
  }).catch(function (error) {
    console.log(error);
  });
}
const notificationCompra = async(req,res)=>{
    res.json({status: 200});
    const datos  =  req.query;
    console.log(datos);
    sendEmail("santiagomoraless2001@gmail.com","compra realizada","compra exitosa en staycloo","disfruta tu producto")
   
   

}








module.exports = {
    realizarCompra,
    notificationCompra
}