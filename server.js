// const express = require('express')
// const app = express()
// const port  = 3000


// app.get('/', (req,res) => {
//     res.send("working fine")
// })
// app.get('/keyur',(req,res) => {
//     res.send('my name is ')
// })


// app.listen(port, ()=> {
//     console.log(`your app is running on http://localhost:${port}`)
// })








const express=require('express')
const app= express()
const port = 3000
const path = require('path')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/',(req,res)=>{
    // res.send("working great")
    res.render('render')
    // res.redirect('/k')
})
app.get('/k',(req,res)=>{
    res.send(`cjjefiin`)
})
app.post('/test', (req,res) => {
    const username = req.body
    res.send(username)
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})