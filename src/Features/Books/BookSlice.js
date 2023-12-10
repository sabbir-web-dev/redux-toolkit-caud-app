import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBook = {
  books: [
    { id: uuidv4(), book: "Irrfan Khan: A Life in Movies", author: "British historian Simon Sebag Montefiore" },
    { id: uuidv4(), book: "Breaking Barriers: the Story of a Dalit Chief Secretaryt", author: "Kaki Madhava Rao" },
    { id: uuidv4(), book: "Ambedkar: A Life", author: "	Shashi Tharoor" },
    { id: uuidv4(), book: "Human Anatomy", author: "Mukhyamantrir Diary 1" },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState: initialBook,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action) => {
      const filterBook = state.books.filter((book) => book.id !== action.payload
      );
      state.books = filterBook;
    },
    editBook: (state, action) => {
      const { id, book, author } = action.payload;
      const isBook =  state.books.filter((book) => book.id === id);
      if (isBook) {
        isBook[0].book = id;
        isBook[0].book = book;
        isBook[0].author= author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
