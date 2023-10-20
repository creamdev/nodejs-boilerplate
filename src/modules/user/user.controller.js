const {insert,loginUser,modify} = require("./user.service");
const { generateAccessToken, passwordToHash} = require("../../common/scripts/utils/helper")


const register = async (req,res) => {
    try {
        let data = req.body
        data.password = await passwordToHash(data.password)
        await insert(data)

        return res.status(201).send({status:201,title:"CREATED",message:"Kullanıcı oluşturuldu"})
    } catch (error) {
        return res.status(500).send({status:500,title:"INTERVAL SERVER ERROR",message:error.message})
    }
} 
const login = async (req,res) => {
    try {
        req.body.password = passwordToHash(req.body.password);
        let data = req.body
        let user = await loginUser({email:data.email})
    
        if(!user) return res.status(404).send({status:404,title:"NOT FOUND",message:"Kullanıcı bulunamadı"})
        if(user){
            if(user.password != req.body.password){
                return res.status(400).send({status:400,title:"BAD REQUEST",message:"Şifreniz yanlış"})
            }
            let token = await generateAccessToken(user)
            let result = {
                user,
                token
            }
            return res.status(200).send({status:200,title:"SUCCESS",data:result})
        }
    } catch (error) {
        return res.status(500).send({status:500,title:"INTERVAL SERVER ERROR",message:error.message})
    }
}


module.exports = {
    register,
    login
}