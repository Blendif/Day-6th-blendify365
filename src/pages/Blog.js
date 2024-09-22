import React from 'react';

const blogs = [
  { title: 'The Power of Words', excerpt: 'Exploring the magic behind great writing...' },
  { title: 'Proofreading Tips', excerpt: 'How to improve your proofreading process...' },
];

function Blog() {
  return (
    <div className="blog-section py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Blog</h2>

      <div className="grid grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card p-6 rounded-lg bg-white shadow-lg">
            <h3 className="text-2xl font-semibold">{blog.title}</h3>
            <p className="mt-2 text-gray-600">{blog.excerpt}</p>
            <button className="mt-4 text-purple-700 font-semibold">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
