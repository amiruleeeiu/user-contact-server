const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes')
const cors = require('cors')

const app=express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/contacts',router)

// let schema=mongoose.Schema
// let testSchema=new mongoose.Schema({
//     name:String
// })

// let Test=mongoose.model('Test',testSchema)

app.get('/',(req,res)=>{
    
    res.send('Express js')
    // let test=new Test({
    //     name:'Shohag'
    // })

    // test.save()
    //     .then(t=>{
    //         res.json(t)
    //     })
    //     .catch(e=>{
    //         console.log(e);
    //         res.status(500).json({
    //             errpr:'Error occured'
    //         })
    //     })
})

mongoose
    .connect('mongodb+srv://amirul2347:t9jjNvivMPN1ozbj@cluster0.pa181.mongodb.net/<dbname>?retryWrites=true&w=majority',{
        useNewUrlParser:true
    })
    .then(()=>{
        console.log("Server is running");
    })
    .catch(e=>{
        console.log(e);
    })

const port=4040;
app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
})