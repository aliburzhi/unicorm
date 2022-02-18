"use strict"
const express = require('express');
const bookRouter = require('./controller/book-controller')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/book", bookRouter);

app.listen(PORT, () => {
    console.log(`Hello world, your port is //localhost:${PORT}`);
})

