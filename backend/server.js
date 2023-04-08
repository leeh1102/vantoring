const express = require("express");
const app = express();
var http = require("http").Server(app);

const path = require("path");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose")
app.use(express.json());

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


