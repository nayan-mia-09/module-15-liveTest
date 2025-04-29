const express = require("express");
const app = express();
const PORT = 5050;

app.use(express.json());

app.post("/user", (req, res)=>{
    const {name, email} =req.body;
    
    if(!name || !email){
        return res.status(400).json({error: "Name and email are required"})
    }

    res.json({
        message: 'User data received successfully',
        user : {name, email}
    })
})


app.listen(PORT, ()=>{
    console.log(`Server Running On ${PORT}`);
})