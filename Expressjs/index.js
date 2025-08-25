const express = require('express');

const app = express();

// Create
app.get('/', (req,res)=>{
    res.send("Welcome to my server")
});
app.get('/about', (req, res)=>{
    res.send("This is Durga prasad Reddy");
});

const courses = [
    {courseid:1, name:'Java', instructor: 'Kshritij'},
    {courseid:2, name:'JavaScript', instructor: 'Durga'},
    {courseid:3, name:'DBMS', instructor: 'Reddy'},
    {courseid:4, name:'Data Structures', instructor: 'Kshritij'},
]
//get all courses
app.get('/courses', (req, res)=>{
    console.log(req);
    res.send(courses.params);
})

// to get a single course based on id
app.get('/courses/:id', (req, res)=>{
    const course = courses.find(c => c.courseid === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    console.log(req.params);
    res.send(course);
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
