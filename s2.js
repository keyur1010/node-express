 const express=require('express')
 const app=express()
 const port=3000

 app.set('view engine', 'ejs')
 app.set('views', path.join(__dirname, 'views'))



 app.get('/',(req,res)=>{
    res.send('hiii')
 })
 app.post('/k',(req,res)=>{
   res.send('hello')
 })
app.all('/s',(req,res,next)=>{
   console.log('Accessing the secret section')
   res.end(`this is secret section you access`)
   next()
})

app.get('/users/34/books/898',(req,res)=>{
   res.send(req.params)
})
app.get('/b/c',(req,res,next)=>{
   console.log('thi')
   next()
},(req,res)=>{
   res.send('hiii there')
})
// app.get('/.*fly$/',(req,res)=>{
//    console.log(`client running link http://localhost:${port}/.*fly$/`)
//    res.end('you are on A')
// })





 app.listen(port,(req,res)=>{
    console.log(`server running at http://localhost:${port}`)
    console.log(`you are access secret code at http://localhost:${port}/s`)
   
 })