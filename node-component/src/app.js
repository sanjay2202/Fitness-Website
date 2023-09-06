const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");

require("./db/conn");

const Register = require("./models/signup")
//assigning port
const port = 3003;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.get("/index", async (req,res) => {
    res.render("index")
});

app.get("/",async (req,rs) => {
    rs.render("login");
});
//login authentication
app.post("/login",async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});

        if(useremail.password === password){
            res.status(201).render("index");
        }else{
            res.render("login")
            
        }

    } catch (error) {
        res.status(400).render("login");
        
        
    }
    
   
});
//obatianing all the pages by using app.get
app.get("/about",async(req,res) => {
    res.render("about");
});

app.get("/contact",async(req,res) => {
    res.render("contact");
});

app.get("/signup",async(req,res) => {
    res.render("signup");
});

app.get("/bmi",async(req,res) => {
    res.render("bmi");
});

app.get("/wotu",async(req,res) => {
    res.render("wotu");
});

app.get("/wopa",async(req,res) => {
    res.render("wopa");
});

app.get("/r&c",async(req,res) => {
    res.render("r&c");
});

app.get("/n&d",async(req,res) => {
    res.render("n&d");
});

app.get("/supp",async(req,res) => {
    res.render("supp");
});

// to create a new user in the database
//requests checks if password === confirm passowrd and if yes then appedns the data into the mongodb database

app.post("/signup",async (req,res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){

            const signup = new Register({
                FullName : req.body.FullName,
                gender : req.body.gender,
                email : req.body.email,
                phone : req.body.phone,
                age : req.body.age,
                password : password,
                confirmpassword : cpassword,
                // checkbox1 : req.body.checkbox1
            })

            const registered = await signup.save();
            res.status(201).render("login");
        //if the passowrds dont match
        }else{
            
            res.render("signup");
            

        }
        
    } catch (error) {
        res.status(400).render("signup");
        
        
    }
});


//assigining a port for the app
app.listen(port,() => {
    console.log(`server is running at port no ${port}`);
});


