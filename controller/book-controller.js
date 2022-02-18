const express = require("express");
const router = express.Router();
const AllAbl = require("../abl/book/all-abl")
const CreateAbl = require("../abl/book/create-abl");
const GetAbl = require("../abl/book/get-abl");
const DeleteAbl = require("../abl/book/delete-abl")

router.get("/get", async (req, res) => {
    const { query } = req;
    await GetAbl(query, res)
});

router.post("/create", async (req, res) => {
    const { body } = req;
    await CreateAbl(body, res)
});

router.get('/all', async (req, res) => {
    await AllAbl(req, res);
});

router.delete('/delete', async (req, res) => {
    const { query } = req;
    await DeleteAbl(query, res);
});

module.exports = router;