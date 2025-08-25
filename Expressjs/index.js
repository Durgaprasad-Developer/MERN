const express = require('express');

const app = express();

app.use(express.json());

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
    res.status(200).send(courses);
})

app.get('/courses/:id', (req, res)=>{
    const course = courses.find((c)=>c.courseid === parseInt(req.params.id));
    if(!course) return res.status(404).send('invalid id');
    res.send(course).status(200);
})

// Read
// app.read()

// Update
app.post('/courses', (req, res)=>{
    const course = {
        courseid: req.body.courseid,
        name: req.body.name,
        instructor: req.body.instructor
    }

    courses.push(course);
    res.status(201).send('course is added')
})

// to update a course
app.put('/courses/:id', (req, res)=>{
    const course = courses.find((c)=>c.courseid === parseInt(req.params.id));
    if(!course) return res.status(404).send('Invalid request');
    course.instructor = req.body.instructor;
    res.status(200).send(course);
})

// Delete
app.delete('/courses/:id', (req, res)=>{
    const id = courses.findIndex((c)=>c.courseid === parseInt(req.params.id));
    if(id==-1) return res.status(404).send('invalid id');

    let course = courses.splice(id, 1);
    res.status(200).json({
        message:"Deleted successfully",
        item:course[0]
    });
})

app.listen(8080, ()=> {
    console.log("Server is running on port 8080");
})
