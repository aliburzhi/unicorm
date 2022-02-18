"use strict";
const fs = require("fs");
const path = require("path");

const rf = fs.promises.readFile;
const wf = fs.promises.writeFile;

// 1
const DEFAULT_STORAGE_PATH = path.join(__dirname,"..", "storage", "books.json");

class LibraryDao {
    constructor(storagePath) {
        this.bookStoragePath = storagePath ? storagePath : DEFAULT_STORAGE_PATH;
    }

    // 2
    async getBook(code) {
        let books = await this._loadAllBooks();

        return books.find(book => {
            return book.code === code;
        });
    }

    // 3
    async addBook(book) {
        const books = await this._loadAllBooks();
        if (this._isDuplicate(books, book.code)) {
            const e = new Error(`Book with code '${book.code}' already exists.`);
            e.code = "DUPLICATE_CODE";
            throw e;
        } else {
            books.push(book);
        }
        try {
            await wf(this._getStorageLocation(), JSON.stringify(books, null, 2))
            return {status: 'OK', data: book};
        } catch (e){
            return {status: 'Error', data: e
            }
        }
    }

    async _loadAllBooks() {
        return JSON.parse(await rf(this._getStorageLocation()));
        }


    _isDuplicate(books, code) {
        const result = books.find(b => {
            return b.code === code;
        });
        return !!result
    }
    _getStorageLocation() {
        return this.bookStoragePath;
    }
}

module.exports = LibraryDao;