const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/notes.model");

const app = express();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("done");
});

app.post('/create', async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNote = await NotesModel.create({
            title, description,
        });

        res.status(201).send({
            success: true,
            message: "Notes aa gaye",
            data: newNote,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error creating note",
            error: error.message
        });
    }
});

module.exports = app;