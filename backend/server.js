const express = require("express");
const cors = require('cors');
const app = express();
var http = require("http").Server(app);

const path = require("path");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
app.use(cors());
app.use(express.json());

const { Question } = require("./models/Question");
const { Mentor } = require("./models/Mentor");

// Connect to the port and database
if (process.env.NODE_ENV === "production")
{
    app.use(express.static('build'));
    app.get('*', (req, res) =>
    {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.listen(port, async (err) =>
{
    if (err) return console.loge(err);
    try
    {
        await mongoose.connect(
            'mongodb+srv://root:ayG2wQLoY1GRo0GS@vantoring-be.ahjfgzl.mongodb.net/?retryWrites=true&w=majority'
        ).then(() => console.log("Connected to database"));
    } catch (error)
    {
        console.log("db error");
    }
    console.log("Server running on port: ", port);
})


app.post('/api/mentor', async (req, res) => {
    try {
      const { firstName, lastName, email, specialty, bio } = req.body;
      const mentor = new Mentor({
        firstName,
        lastName,
        email,
        specialty,
        bio
      });
      await mentor.save();
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, error });
    }
  });


app.post('/api/question', async (req, res) =>
{
    try
    {
        const { mentorId, title, contents, type, author, password, category } = req.body;
        const question = new Question({
            mentorId, title, contents, type, author, password, category
        });
        await question
        .save()
        .then(()=>{
            res.status(200).json({
                sucess: true,
            });
        })
        .catch((err)=>{
            res.status(400).json({
                sucess: false,
                err
            });
        });
    } catch (error)
    {
        console.log(error);
    }
})



app.get('/api/questions', async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json({
        success: true,
        data: questions
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  });

// GET mentor by ID
app.get('/api/mentor/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: mentor
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});