const LibraryDao = require('../../dao/library-dao');

const dao = new LibraryDao();

async function DeleteAbl(query, res) {
    const result = await dao._deleteBook(query)
    // let newArray = books.filter(book => book.code !== code)
    res.json(result)
}
module.exports = DeleteAbl;