import express from 'express'; 
import { Request , Response } from 'express';

const app = express(); 

app.get("/" , (req : Request, res : Response) => {
    res.send({
        message : "Hi to the collection server bro"
    });
})

app.get("/health" , (req : Request , res : Response) => {
    res.send({
        message :" Server Health OK !"
    })
});

app.listen(8001 , () => {
    console.log(`The server is running on PORT 8001`)
})