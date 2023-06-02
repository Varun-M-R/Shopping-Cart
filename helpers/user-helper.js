var db=require('../config/connection')
var collection=require('../config/collections');
const bcrypt=require('bcrypt');
const { status } = require('express/lib/response');


module.exports={
    doSignup:(userData)=>{
       return new Promise(async(resolve,reject)=>{
        userData.password=await bcrypt.hash(userData.password,10)
        db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
          console.log("hiiiii"+JSON.stringify(data));
           resolve(data)
        })
         

       })

    },
    doLogin:(userData)=>{
      return new Promise(async(resolve,reject)=>{
         let loginstatus=false;
         let response={}
         let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.Email})
         if(user){
            bcrypt.compare(userData.password,user.password).then((status)=>{
            if(status){console.log('success')
            response.user=user
            response.status=true
            resolve(response)
         }else{
               console.log('failed')
               resolve({status:false})
            }
            })
         }else{console.log('failed 1');
               resolve({status:false})
      }
      })
    }
}