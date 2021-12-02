import express, { response } from 'express';

const app = express()

app.get("/",(req,res)=>{
    return response.json({service: "Servico de autenticacao"})
})

app.listen(8082);