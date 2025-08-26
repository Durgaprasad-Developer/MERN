const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())


mongoose.connect(
  "mongodb+srv://durgaprasad:durga@cluster0.yivezvw.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
  console.log("DB connected");
}).catch((err) => {
  console.log(err);
});

// Course Schema

let courseSchema = new mongoose.Schema({
    course_name:{
        type: String,
        required: true
    },

    instructor:{
        type: String,
        required: true
    },

    ratings:{
        type:Number,
    },
    isLive:{
        type:Boolean,
        required:true
    }
})

const CourseModel = mongoose.model('courses',courseSchema);

// get
app.get("/", (req, res) => {
  res.send("Message From Server"); 
});
app.get("/courses", async(req, res)=>{
    try{
    const courses = await CourseModel.find();
    res.status(200).send(courses);
    }catch(err){
        res.status(500).send(err.message)
    }
})

app.get("/courses/:_id", async(req,res)=>{
    try{
        const course = await CourseModel.findById(req.params._id)
        res.status(200).send(course);
    }catch(err){
        res.status(404).send(err.message);
    }
})

// post
app.post('/courses', async(req, res)=>{
    try{
        let course = await CourseModel.create({
        course_name: req.body.course_name,
        instructor:req.body.instructor,
        ratings:req.body.ratings,
        isLive:req.body.isLive
    })
    res.status(201).send(course);
    }catch(err){
        res.status(400).send(err.message)
    }
    
})

// put
app.put('/courses/:_id', async(req, res)=>{
    try{
        const courseid = req.params._id;
        const instructorname = req.body.instructor;
        const course = await CourseModel.findByIdAndUpdate(
            courseid,
            {instructor: instructorname},
            {new:true}
        )
        if(!course) return res.status(404).send('courseid not found')
            res.status(200).send(course);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// delete
app.delete('/courses/:_id', async(req, res)=>{
    try{
        const courseid = req.params._id;
        const course = await CourseModel.findByIdAndDelete(
            courseid
        )
        if(!course) return res.status(404).send('courseid not found');
        res.send(await CourseModel.find())
    }catch(err){
        res.status(500).send(err.message);
    }
})

app.listen(8801, () => {
  console.log("Server Started");
});