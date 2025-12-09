// // require('dotenv').config();
// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.get('/pranjal',(req,res)=>{
// //     res.send("Hey pranjal how are you");
// // })

// // app.get('/login',(req,res)=>{
// //     res.send("<h1>Login here</h1>")
// // })

// // app.get('/youtube',(req,res)=>{
// //     res.send("<h2>YouTube Channel</h2>")
// // })

// // app.listen(process.env.PORT, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })


// require('dotenv').config();
// const express=require('express')
// const app=express()
// const port=3000;

// app.get('/',(req,res)=>{
//     res.send("This is demo");
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running port ${port}`);
// })



const express=require('express')
const app=express()
const port=4000


app.get('/',(req,res)=>{
    res.send("<h1>Please follow this structure</h1>")
})

app.listen(port,()=>{
    console.log(`running this port ${port}`)
})