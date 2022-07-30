const express = require('express');
const v1Router= require('./v1/routes')
//TRAIGO EXPRESS
const app = express();
//INSTANCIO EXPRESS
const PORT= process.env.PORT ||3000;
//SELECIONO UN PUERTO

app.use("/api/v1", v1Router);


//IMPLEMENTO UNA HANDLER FUNC
app.listen(PORT,()=>{console.log(`🚀 listening on port${PORT}`)}); 
//PONGO EL SERVIDOR A ESCUCHAR PETICIONES





