import express, { response } from 'express';

const app = express()

app.get("/",(req,res)=>{
    return response.json({service: "Servico de debitos"})
})

app.listen(8081)