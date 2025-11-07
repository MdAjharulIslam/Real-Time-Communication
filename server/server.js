import express from "express";
import { WebSocketServer } from "ws";
const app = express();

const port = 3000

app.get('/',(req, res)=>{
    res.send("server is running")


})
const server = app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

const wss = new WebSocketServer({server})

wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log(data);
        ws.send("thanks for your req")
    })
})