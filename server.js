import express from 'express'
import  mongoose  from 'mongoose'
import Cards from '../tinder-backend/dbCard.js';
import Cors from 'cors'
//W91ORHpxJncVpWd3
//App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url=`mongodb+srv://admin:W91ORHpxJncVpWd3@cluster0.e2o5l.mongodb.net/tinderdb?retryWrites=true&w=majority`
//Middlewares
app.use(express.json())
app.use(Cors())
//DB Config
mongoose.connect(connection_url,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
})
//Api EndPoints
app.get('/',(req,res)=>{
    res.status(200).send(`Hello Clever Programmer!!!`)
})
app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err)
        res.status(500).send(err);
        else
        res.status(201).send(data)
    })
})
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
        res.status(500).send(err);}
        else{
        res.status(201).send(data)}
}) })

//Listener
app.listen(port,() =>  console.log(`listening of locol host:${port}`));
