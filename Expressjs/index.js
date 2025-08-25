const express = require('express');

const app = express();

// Create
app.get('/', (req,res)=>{
    res.send("Welcome to my server")
});
app.get('/about', (req, res)=>{
    res.send("This is Durga prasad Reddy");
})

// Read
// app.read()

// Update
// app.put()

// app.patch()

// Delete
// app.delete()

app.listen(8080, ()=> {
    console.log("Server is running on port 8080");
})
