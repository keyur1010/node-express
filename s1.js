const express=require('express')
const app=express()

const port=9999

app.set('engine','ejs')



app.get('/',(req,res)=>{
    console.log("Here")
    res.send('this is just a message9')
})
app.get('/download',(req,res)=>{
    console.log('file is downloading')
    res.download("download.txt")
})
app.get('/render',(req,res)=>{
    console.log('file is rendered')
    res.render('render')
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})
app.get('/song',(req,res)=>{
    console.log(`song name with memorystouch this link http://localhost:${port}/song `)
    res.end(`baby we build this house with memoryb take my picture now with your fantasy bacame your legacy`)
    
})