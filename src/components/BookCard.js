import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="bookCard">
      <div className="bookMeta">
        <div><strong>Author:</strong> {book.author}</div>
        <div><strong>Genre:</strong> {book.genre}</div>
        <div><strong>Year:</strong> {book.year}</div>
        <div><strong>Rating:</strong> {book.rating.toFixed ? book.rating.toFixed(1) : book.rating}</div>
      </div>
    </div>
  );
}
