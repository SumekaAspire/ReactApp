const express = require("express");
const cors = require("cors"); //cors origin
const jwt = require("jsonwebtoken"); //authentication
const bcrypt = require("bcrypt"); //hashpassword encrypt
const bodyParser = require("body-parser"); // middleware-  to get body, it is used

const app = express();
app.use(cors());
app.use(bodyParser.json()); //middlewares

//secret key
const secretKey = "abcdef";

//jwt token validate
//Login users - backend - database - store
const users = [];

//middleware verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).send("Request Denied");
    
    try{
        const verified = jwt.verify(token,secretKey);

        req.user = verified;
        next();
     }catch(error){
        res.status(400).send("InvalidToken");
     }
}

app.post("/signUp", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10); //value- saltRoun, hackers - hard to decrypt
    users.push({ username, password: hashpassword });
    console.log(users);

    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error while creating user!!");
  }
});

//login - check user is in the list
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = users.find((u) => u.username === username);
    console.log(user);

    if (!user) return res.status(400).send("User Not found");

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) return res.status(400).send("Password Invalid");

    //using jwt token
    const token = jwt.sign({ username: user.username }, secretKey); // use unquie data to check
    res.send({ token });
    // after this run the link, token is genearted, use that in forntend - localstorage/ browser storage/cookies
    //when user request the page, got token also, then validate the token and futher process.
  } catch (error) {
    res.status(500).send("Error Logging In.");
  }
});

//homepage after login and validate token(middleware)
app.get('/home',verifyToken,(req,res)=>{

    res.send(`Welcome ${req.user.username} to Home Page`)

})

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.listen(3001, () => console.log("Backend is running in the port 3001"));
