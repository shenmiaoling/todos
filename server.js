const express = require('express')
const server = express()
server.use('/assets', express.static('assets'));
server.use(express.static(__dirname+'/static'))
server.get('/',(request,response)=>{
  response.sendFile(__dirname+'/static/index.html')
})
server.get('/sign_up',(request,response)=>{
  // response.sendFile(__dirname+'/static/index.html')
  response.sendFile(__dirname+'/static/sign_up.html')
})

server.listen(3000,()=>{
  console.log("server is running on:localhost:3000")
})

