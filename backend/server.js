const express = require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");
const cors = require('cors')

const port =3003
const app=express()

app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/hero')
var db=mongoose.connection
db.on('error',()=> {console.log("Error in Connecting to Database")});
db.once('open',()=> {console.log("Connected to Database")});

const shema = new mongoose.Schema({
    name:String,
    password:String,
    cpassword:String,
    mobile:Number,
    email:String
});
const User = mongoose.model('User',shema);
app.post ('/register',async(req,res)=>{
    let user = new User();
    user.name = req.body.name
    user.password = req.body.password
    user.cpassword = req.body.cpassword
    user.mobile = req.body.mobile
    user.email = req.body.email

    const doc = await  user.save()
    console.log(doc);
    res.send("finished")

});


// ... (previous code)

// Handle login request
app.post('/Atslogin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
      if (user) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
  // ... (remaining code)
  
app.listen(port,()=>{
    console.log(`the sever is running on ${port}`);
})

app.get('/',(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
//     return res.redirect('index.html')
});

// console.log("Listening on port 3001")
