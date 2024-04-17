const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
     },
     year: {
          type: Number,
          required: true,
     },
     books: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Book",
          },
     ],
});

const genreSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
          unique: true,
     },
});

const bookSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
     },
     publishedDate: {
          type: String,
     },
     genres: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Genre",
          },
     ],
     author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Author",
     },
});

const RegisterSchema = new mongoose.Schema(
     {
          username: {
               type: String,
               required: true,
               minLength: 6,
               maxLength: 255,
               unique: true,
          },
          email: {
               type: String,
               required: true,
               minLength: 10,
               maxLength: 255,
               unique: true,
          },
          password: {
               type: String,
               required: true,
               minLength: 6,
          },
          admin: {
               type: Boolean,
               default: false,
          },
     },
     { timestamps: true }
);

let Book = mongoose.model("Book", bookSchema); // model 1
let Author = mongoose.model("Author", authorSchema); // 2
let Genre = mongoose.model("Genre", genreSchema); // 3
let Register = mongoose.model("Register", RegisterSchema); // 4

module.exports = { Book, Author, Genre, Register };
