var db=require('../config/connection')
var collection=('../config/collections')
module.exports={
    addProduct:(product,callback)=>{
        
        db.get().collection('product').insertOne(product).then((data)=>{
          console.log("hiiiii"+JSON.stringify(data));  
         callback(data.insertedId)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection('product').find().toArray()
           
            resolve(products)
        })
    }
}