require('dotenv').config()           //recuperation du donnee  dans le fichier .env

const express=require('express');    //recuperation du module express
const mysql= require('./src/modele/mysql.js');
const app = express() ;               //demarrage de l'instance express
const port=3000   ;                //port de communication du serveur
const bodyParser = require('body-parser');
app.use (bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
 


//app.use(mysql,connection,'pool')

app.get('/formulaire',(req,res)=>{
    mysql.query(
        'SELECT * FROM adherents WHERE NA =1',(err,results,fields)=>{
           if(err){
               return console.log(err);
            }else{
                return res.send(JSON.stringify(results)),
                console.log(fields);}
            }
        )
})



//creation du premier point de terminaison de notre API 
app.get("/",(req,res) => (res.send("Hello Nomena")))
app.listen(port,()=>console.log("notre serveur va demarer sur le http://localhost:"+port))

//Appel de tout les dossier et fichier dans le dossier evaluation version final_1
app.use(express.static(__dirname,''));

//la création d’une API pour connécter avec les page html 

app.get("/sayna/index.html",(req,res)=>{
    (res.sendFile(__dirname +'/index.html'))
})

app.use(express.static(__dirname,''))
app.get("/sayna/backend.html",(req,res)=>{
    (res.sendFile(__dirname +'/backend.html'))
})

app.use(express.static(__dirname,''))
app.get("/sayna/contact.html",(req,res)=>{
    (res.sendFile(__dirname +'/contact.html'))
})
app.post("/sayna/contact.html",(req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var avis = req.body.avis;
    var note = req.body.Note;
    var formation = req.body.formation;

    con.connect(function(error){
    console.log(error);

var sql = "INSERT INTO formulaire (fname,lname,avis,Note,formation) VALUES ?";

var values =[
    [fname,name,avis,note,formation]
]

con.query(sql,[values],function(error,result){
    console.log(error);
    res.send("data succesfull");
})
    });
})


app.use(express.static(__dirname,''))
app.get("/sayna/frontend.html",(req,res)=>{
    (res.sendFile(__dirname +'/frontend.html'))
})

app.use(express.static(__dirname,''))
app.get("/sayna/marketing.html",(req,res)=>{
    (res.sendFile(__dirname +'/marketing.html'))
})

app.use(express.static(__dirname,''))
app.get("/sayna/signup.html",(req,res)=>{
    (res.sendFile(__dirname +'/signup.html'))
})

app.use(express.static(__dirname,''))
app.get("/sayna/uxui.html",(req,res)=>{
    (res.sendFile(__dirname +'/uxui.html'))
})


