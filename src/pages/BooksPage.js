import React from 'react';

const books = [
  { title: 'The Secret Book', description: 'A mystery novel with twists.' },
  { title: 'Adventure Stories', description: 'A thrilling adventure saga.' },
];

function BooksPage() {
  return (
    <div className="books-section py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">E-books & Audiobooks</h2>

      <div className="grid grid-cols-2 gap-8">
        {books.map((book, index) => (
          <div key={index} className="book-card p-6 neumorphic-shadow rounded-lg">
            <h3 className="text-2xl font-semibold">{book.title}</h3>
            <p>{book.description}</p>
            <div className="flex items-center justify-between mt-4">
              <button className="neumorphic-button">E-book</button>
              <button className="neumorphic-button">Audiobook</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
