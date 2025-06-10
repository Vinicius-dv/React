const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const {Schema} = mongoose
const cors = require('cors')
app.use(cors())

async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testes_02')
        console.log('mongoose iniciado')
    } catch (error) {
        console.log(error)
    }
}
main()

const UserSchema = new Schema({
    nome:String,
    email:String,
    senha:String
})
const USer = mongoose.model('user',UserSchema)

app.post('/cad',async(req,res)=>{
    const {nome,email,senha} = req.body
    try {
        const novo_user = await new USer({
            nome:nome,
            email:email,
            senha:senha
        })
        await novo_user.save()
        return res.status(200).json({message:'Cadastro efetuado com sucesso'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Erro interno'})
    }
})

app.listen(5000,()=>{
    console.log('servidor iniciado')
})