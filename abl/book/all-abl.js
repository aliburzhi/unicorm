const LibraryDao = require('../../dao/library-dao');

const dao = new LibraryDao();

async function AllAbl(req, res) {
    const result = await dao._loadAllBooks();
    res.json(result);
}
module.exports = AllAbl;