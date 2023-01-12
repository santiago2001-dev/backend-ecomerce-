const  {transporter} = require('../middelwares/configemail');

    
const sendEmail = async(email,subject,title,link,names, netoValue,nameProduct,imagenUno)=>{
   
  
    const emailOptions = {
        from: 'información sotre staycloo', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
       
        html :
         `


         <img data-imagetype="External" width="150px" height="110px" naturalwidth="150px" naturalheight="110px" src="https://res.cloudinary.com/decsantg/image/upload/v1673390414/LOGO_1_w1h1nr.png" align="left" width="100" height="21"  style="background-color:#0a0a0a;" border="0">
         <br><br><br><br><br><br><br>
        <table class="table">
            <tr>

            
            <th  bgcolor="#0a0a0a "style="font-size:20px; letter-spacing:0; line-height:44px; font-weight:600;text-align: center;"><h1 style="color:white;">${title}</h1> </th>

            </tr>
            <tr>
            

            <div style="text-align:center;padding-top:40px;height:190px;max-width:500px;border:1px solid #e7e7e7;padding:20px;border-radius:12px;margin:40px auto 20px auto;box-sizing:border-box;background-color:#ffffff;color:#5c5b5c;font-size:14px;font-family:'Open Sans',sans-serif;word-break:break-all;word-break:break-word">
                
            <strong style="font-size:18px;display:block">Hola, ${names}</strong>
                        <span style="margin:11px 0 17px 0;display:block">Ha realizado una transacción en <strong> stayCloo </strong> </span>
                        <img src="${imagenUno}" width ="100" height ="90" >
                    
        
      
        </div>
        <div style="max-width:500px;padding:20px;border-radius:12px;margin:0 auto 20px auto;box-sizing:border-box;background-color:#ffffff;color:#5c5b5c;font-family:'Open Sans',sans-serif;font-size:14px;border:1px solid #e7e7e7;word-break:break-all;word-break:break-word">
            <strong style="text-align:center;margin:34px 0;display:block">Detalle de transacción</strong>
        
            <div style="display:block;padding:14px;word-break:break-all;word-break:break-word">
                <div style="display:flex;word-break:break-all;word-break:break-word">
                    <div style="width:50%;text-align:left">
                        <strong>nombre del producto</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> ${nameProduct}</span>
                      
                    </div>
                </div>
            </div>
        
                <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>total transacción</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> $${netoValue} COP </span>
                    </div>
                </div>
            </div>
        
        
            </tr>
            
            <td bgcolor="#0a0a0a " style="border-color:#3f485c; min-width:140px; text-align:center; padding:10px; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px"><a href="${link}" target="_blank" rel="noopener noreferrer"  style="color:#ffffff; text-decoration:none; display:block" ><strong style="text-decoration:none; color:#ffffff; font-weight:normal">Iniciar sesión en staycloo store</strong> </a></td>
              

             
            
        </table>
        <br>
          `
    };

    transporter.sendMail(emailOptions,(info)=>{
      
            console.log('Email sent: ' + info.response);
          

     
  })

  
}



const sendInfoCli = async(email,subject,title,link,names,emailCli,cel,nameProduct,netoValue,medidaUno,medidaDos,medidaTres,medidaCuatro,medidaCinco)=>{
  

  const emailOptions = {
      from: 'información de cliente compra realizade en stayColoo store', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line

      html :
       `


       <img data-imagetype="External" width="150px" height="110px" naturalwidth="150px" naturalheight="110px" src="https://res.cloudinary.com/decsantg/image/upload/v1673390414/LOGO_1_w1h1nr.png" align="left" width="100" height="21" style = " background-color:#0a0a0a " border="0">
       <br><br><br><br><br><br><br><b<r><br>
      <table class="table">
          <tr>

          
          <th  bgcolor="#0a0a0a "style="font-size:20px; letter-spacing:0; line-height:44px; font-weight:600;text-align: center;"><h1 style="color:white;">${title}</h1> </th>

          

          </tr>
          <tr>
      
          <div style="max-width:500px;padding:20px;border-radius:12px;margin:0 auto 20px auto;box-sizing:border-box;background-color:#ffffff;color:#5c5b5c;font-family:'Open Sans',sans-serif;font-size:14px;border:1px solid #e7e7e7;word-break:break-all;word-break:break-word">
          <strong style="text-align:center;margin:34px 0;display:block">Detalle de la transacción</strong>
      
          <div style="display:block;padding:14px;word-break:break-all;word-break:break-word">
              <div style="display:flex;word-break:break-all;word-break:break-word">
                  <div style="width:50%;text-align:left">
                      <strong>nombres</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span> ${names}</span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>correo</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span>${emailCli}</span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>celular</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span>${cel}</span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>nombre de producto</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span>${nameProduct}</span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>total transacción</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span> $${netoValue} COP </span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>ancho espalda</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span> ${medidaUno} CM </span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>hombro</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span>${medidaDos} CM</span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>tronco</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span> ${medidaTres} CM</span>
                  </div>
              </div>
          </div>
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>lagro brazo</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span> ${medidaCuatro} CM</span>
                  </div>
              </div>
          </div>
      
      
          <div style="display:block;padding:14px">
              <div style="display:flex">
                  <div style="width:50%;text-align:left">
                      <strong>contorno cintura</strong>
                  </div>
                  <div style="width:50%;text-align:right">
                      <span>  ${medidaCinco}CM </span>
                  </div>
              </div>
          </div>

          <br>
          <br>
          </p>
          
         
          </td>
         
          </tr>
          
          <td bgcolor="#0a0a0a " style="border-color:#3f485c; min-width:140px; text-align:center; padding:10px; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px"><a href="${link}" target="_blank" rel="noopener noreferrer"  style="color:#ffffff; text-decoration:none; display:block" ><strong style="text-decoration:none; color:#ffffff; font-weight:normal">Iniciar sesión en stayCloo store</strong> </a></td>
            

           
          
      </table>
      <br>
        `
  };

  transporter.sendMail(emailOptions,(info)=>{
    
          console.log('Email sent: ' + info.response);
        

   
})


}
const sendInfoCliinf = async(email,subject,title,link,names,emailCli,cel,nameProduct,netoValue,medidaUno,medidaDos,medidaTres,medidaCuatro)=>{
  

    const emailOptions = {
        from: 'información de cliente compra realizade en stayColoo store', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
  
        html :
         `
  
  
         <img data-imagetype="External" width="150px" height="110px" naturalwidth="150px" naturalheight="110px" src="https://res.cloudinary.com/decsantg/image/upload/v1673390414/LOGO_1_w1h1nr.png" align="left" width="100" height="21" style = " background-color:#0a0a0a " border="0">
         <br><br><br><br><br><br><br><b<r><br>
        <table class="table">
            <tr>
  
            
            <th  bgcolor="#0a0a0a "style="font-size:20px; letter-spacing:0; line-height:44px; font-weight:600;text-align: center;"><h1 style="color:white;">${title}</h1> </th>
  
            
  
            </tr>
            <tr>
        
            <div style="max-width:500px;padding:20px;border-radius:12px;margin:0 auto 20px auto;box-sizing:border-box;background-color:#ffffff;color:#5c5b5c;font-family:'Open Sans',sans-serif;font-size:14px;border:1px solid #e7e7e7;word-break:break-all;word-break:break-word">
            <strong style="text-align:center;margin:34px 0;display:block">Detalle de la transacción</strong>
        
            <div style="display:block;padding:14px;word-break:break-all;word-break:break-word">
                <div style="display:flex;word-break:break-all;word-break:break-word">
                    <div style="width:50%;text-align:left">
                        <strong>nombres</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> ${names}</span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>correo</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span>${emailCli}</span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>celular</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span>${cel}</span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>nombre de producto</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span>${nameProduct}</span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>total transacción</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> $${netoValue} COP </span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>Contorno cintura</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> ${medidaUno} CM </span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>Contorno cadera</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span>${medidaDos} CM</span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>Largo  cintura tobillo</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> ${medidaTres} CM</span>
                    </div>
                </div>
            </div>
        
            <div style="display:block;padding:14px">
                <div style="display:flex">
                    <div style="width:50%;text-align:left">
                        <strong>Ancho Bota</strong>
                    </div>
                    <div style="width:50%;text-align:right">
                        <span> ${medidaCuatro} CM</span>
                    </div>
                </div>
            </div>
        
        
          
  
            <br>
            <br>
            </p>
            
           
            </td>
           
            </tr>
            
            <td bgcolor="#0a0a0a " style="border-color:#3f485c; min-width:140px; text-align:center; padding:10px; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px"><a href="${link}" target="_blank" rel="noopener noreferrer"  style="color:#ffffff; text-decoration:none; display:block" ><strong style="text-decoration:none; color:#ffffff; font-weight:normal">Iniciar sesión en stayCloo store</strong> </a></td>
              
  
             
            
        </table>
        <br>
          `
    };
  
    transporter.sendMail(emailOptions,(info)=>{
      
            console.log('Email sent: ' + info.response);
          
  
     
  })
  
  
  }
const sendEmailRegistro = async(email,subject,title,names,link)=>{
  

  const emailOptions = {
      from: 'información de cliente compra realizade en stayColoo store', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line

      html :
       `


       <img data-imagetype="External" width="150px" height="110px" naturalwidth="150px" naturalheight="110px" src="https://res.cloudinary.com/decsantg/image/upload/v1673390414/LOGO_1_w1h1nr.png" align="left" width="100" height="21" style = " background-color:#0a0a0a " border="0">
       <br><br><br><br><br><br><br><b<r><br>
      <table class="table">
          <tr>

          
          <th  bgcolor="#0a0a0a "style="font-size:20px; letter-spacing:0; line-height:44px; font-weight:600;text-align: center;"><h1 style="color:white;">${title}</h1> </th>

          

          </tr>
          <tr>
      
          <div style="text-align:center;padding-top:40px;height:190px;max-width:500px;border:1px solid #e7e7e7;padding:20px;border-radius:12px;margin:40px auto 20px auto;box-sizing:border-box;background-color:#ffffff;color:#5c5b5c;font-size:14px;font-family:'Open Sans',sans-serif;word-break:break-all;word-break:break-word">
                
          <strong style="font-size:18px;display:block">Hola, ${names}</strong>
                      <span style="margin:11px 0 17px 0;display:block">Has creado una cuenta <strong> staycloo </strong></span>
      
      <span style="text-transform:uppercase;font-size:18px;display:block;border-radius:12px;color:#ed7c76!important">Bienvenido ya puedes comprar</span><br>
           
      </div>
          <br>
          <br>
          </p>
          
         
          </td>
         
          </tr>
          
          <td bgcolor="#0a0a0a " style="border-color:#3f485c; min-width:140px; text-align:center; padding:10px; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px"><a href="${link}" target="_blank" rel="noopener noreferrer"  style="color:#ffffff; text-decoration:none; display:block" ><strong style="text-decoration:none; color:#ffffff; font-weight:normal">Iniciar sesión en stayCloo store</strong> </a></td>
            

           
          
      </table>
      <br>
        `
  };

  transporter.sendMail(emailOptions,(info)=>{
    
          console.log('Email sent: ' + info.response);
        

   
})


}
   

module.exports = {sendEmail,sendInfoCli,sendEmailRegistro,sendInfoCliinf}