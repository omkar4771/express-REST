const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static (path.join(__dirname,"public")));

let posts = [
    {
        username :"omkar",
        date :"12 march 2024",
        heading:"You will vainly look for fruit on it in autumn.",
        content :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam."
    },
    {
        username :"shubzz",
        date :"15 march 2024",
        heading:"You will vainly look for fruit on it in autumn.",
        content :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam."
    }, {
        username :"rohan",
        date :"0 april 2024",
        heading:"You will vainly look for fruit on it in autumn.",
        content :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam."
    }
]; 

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
})

app.listen(port,()=>{
    console.log("listing on port 8080 ");
});
