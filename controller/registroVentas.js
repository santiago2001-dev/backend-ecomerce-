const conexion = require('../database/db');
const {sendInfoCli} = require  ('../middelwares/sendEmail')

const insertRegistroVentas = async( 
    names, 
    netoValue,
    nameProduct,
    medidas ,
    document,
    fecha, 
    tipo,
    email,
    cel,
    direccion
)=>{
   
    
    if(tipo  == "superior"){
        const sql  =`INSERT INTO ventas (documento_user,nombre_producto,fecha,total,direccion_dom,email,cel,medidaUno,medidaDos,medidaTres,medidaCuatro,medidaCinco,nombres_clien,tipoProduct) values ( '${document}', '${nameProduct}','${fecha}',${netoValue},'${direccion}','${email}','${cel}','${medidas.medidaUno}','${medidas.medidaDos}','${medidas.medidaTres}','${medidas.medidaCuatro}','${medidas.medidaCinco}','${names}','${tipo}') `
         conexion.query(sql,(error,rows)=>{
            if(error){
                throw error
            }else{
                console.log('registro de venta add')
                
                sendInfoCli("staycloo90@gmail.com","Información de cliente compra realizada en stayCloo store","Información de cliente compra realizada en stayCloo store","",names,email,cel,nameProduct,netoValue,medidas.medidaUno,medidas.medidaDos,medidas.medidaTres,medidas.medidaCuatro,medidas.medidaCinco)

              
            }
         })


    }  else if(tipo  == "inferior"){
        const sql  =`INSERT INTO ventas (documento_user,nombre_producto,fecha,total,direccion_dom,email,cel,medidaUno,medidaDos,medidaTres,medidaCuatro,medidaCinco,nombres_clien,tipoProduct) values ( '${document}', '${nameProduct}','${fecha}',${netoValue},'${direccion}','${email}','${cel}','${medidas.medidaUno}','${medidas.medidaDos}','${medidas.medidaTres}','${medidas.medidaCuatro}','NA','${names}','${tipo}') `
         conexion.query(sql,(error,rows)=>{
            if(error){
                throw error
            }else{
                console.log('registro de venta add')
              
            }
         })


    }

}


const obtenerVentas =  async(req,res)=>{
    conexion.query("select * from ventas",(error,rows)=>{
        if(error){
            throw error
        }else{
            res.json(rows)
        }
    })
}


module.exports = { insertRegistroVentas,obtenerVentas}