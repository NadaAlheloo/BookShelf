import React, { useState } from "react";
import BookCard from "../components/BookCard";

export default function Home({ books }) {

  // for search and sort
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title-az");

  // here filter books based on the search
  const filteredBooks = books.filter((b) => {
    const q = search.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.genre.toLowerCase().includes(q)
    );
  });

  // here sort them 
  filteredBooks.sort((a, b) => {
    if (sort === "year-desc") return b.year - a.year;
    if (sort === "year-asc") return a.year - b.year;
    if (sort === "rating-desc") return b.rating - a.rating;
    if (sort === "author-az") return a.author.localeCompare(b.author);
    return a.title.localeCompare(b.title);
  });

  return (
    <section className="page">
      <h1>Book Catalog</h1>

      {/* el search part */}
      <div className="control">
        <label>Search</label>
        <input
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Title, author or genre"
        />
      </div>

      {/* sort part */}
      <div className="control">
        <label>Sort by</label>
        <select className="select-bar" onChange={(e) => setSort(e.target.value)}>
          <option value="title-az">Title</option>
          <option value="author-az">Author</option>
          <option value="year-desc">Year</option>
          <option value="rating-desc">Rating</option>
        </select>
      </div>

      <div className="grid">
        {filteredBooks.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
