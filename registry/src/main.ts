import express, { response } from 'express';

const app = express()

app.get("/",(req,res)=>{
    return response.json({service: "Servico de registros"})
})

app.listen(8083)