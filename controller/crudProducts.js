
const conexion = require('../database/db');
const {imgHost} = require('../middelwares/hostimg');


//nav bar
const search = async(req,res) =>{
    const {busqueda} = req.body
    console.log(req.body)
    const sql = `SELECT * FROM productos WHERE  codigo_prod = '${busqueda}' OR titulo = '${busqueda}' OR fecha = '${busqueda}'OR tipo = '${busqueda}}'   OR sinopsis = '${busqueda}'`
      conexion.query(sql, (error,rows,fields) => {
  
        if(error){
            throw error;
           
       }else{
           res.json(rows);
           
       }
    }
    )
}
//get all products
const  getProducts =async(req,res)=>{
    const sql = 'SELECT * from productos order by codigo_prod desc' ;
      conexion.query(sql,(error,rows,fields,results)=>{
          if(error){
              throw error;
             
          }else{
              res.json(rows);
              
          } 
      })
}

// get products by id
const getProductsbyid =  async(req,res)=>{ 
    const {codigo_prod} = req.params;
    const sql = `select * from productos where  codigo_prod = ${codigo_prod}`;
        conexion.query(sql,(error,rows,fields)=>{
        if(error){
             throw error;
            
        }else{
            res.json(rows);
            
        }
    }) 
}
//insert product
const insertProdcut = async(req,res)=>{
    const {titulo ,precio,tipo,sinopsis, imagenUno,imagenDos,imagenTres} = req.body

   const imagenuno =  await imgHost(imagenUno);
   const imagendos =  await imgHost(imagenDos);
   const imagentres =  await imgHost(imagenTres);
   const date = new Date();
   let dia = date.toString().substring(7,10)
   let mes = date.toString().substring(4,7)
   let anio = date.toString().substring(11,16)

   let fecha = `${dia}/${mes}/${anio}`
   let sql =`INSERT INTO productos (titulo,fecha,precio,tipo,sinopsis ,imagenUno,imagenDos,imagenTres) values ('${titulo}','${fecha}',${precio},'${tipo}','${sinopsis}','${imagenuno}','${imagendos}','${imagentres}')`
   
   conexion.query(sql,(error,rows,fields)=>{
       if(error){
        throw error;
      
       }else{
           res.json({status : 'registro agregado'}) 
       }
   })
}

//uodate products

const updateProducts =  async(req,res)=>{
    const {codigo_prod}= req.params
    const {titulo ,precio,tipo,sinopsis} = req.body

    const date = new Date();
    let dia = date.toString().substring(7,10)
    let mes = date.toString().substring(4,7)
    let anio = date.toString().substring(11,16)

    let fecha = `${dia}/${mes}/${anio}`
    let sql =  `update productos set titulo ='${titulo}',fecha = '${fecha}',precio = ${precio}, tipo = '${tipo}',  sinopsis = '${sinopsis}'
     where codigo_prod = ${codigo_prod}`
     await conexion.query(sql, (error, results) => {
        if (error) { 
            throw error;
           
        } else {  
            res.json({ 
                status: 'registro actualizado'
            }) 
 
        }
    }) 
}


 const deleteProduct = async (req,res)=>{
    const {codigo_prod}= req.params
    let  sql =  `delete from productos where codigo_prod = ${codigo_prod}`
     await conexion.query(sql,(error,rows,fields)=>{ 
        if(error){
            throw error;
         
        }else{
            res.json({status : 'registro eliminado'})
 
        }    
    })
}

module.exports = {
    search,
    getProducts,
    getProductsbyid,
    insertProdcut,
    updateProducts,
    deleteProduct


}

