const express = require("express");
const app = express();
var http = require("http").Server(app);

const path = require("path");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose")
app.use(express.json());

// dotenv : to use environment variable
require('dotenv').config();

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
            process.env.DB_URL

        ).then(() => console.log("Connected to database"));
    } catch (error)
    {
        console.log("db error");
    }
    console.log("Server running on port: ", port);
})


