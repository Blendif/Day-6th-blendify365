import React from 'react';

const coloringPages = [
  { title: 'Butterfly', thumbnail: 'butterfly.jpg', downloadLink: '#' },
  { title: 'Flower', thumbnail: 'flower.jpg', downloadLink: '#' },
];

function ColoringPages() {
  return (
    <div className="coloring-section py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Printable Coloring Pages</h2>

      <div className="grid grid-cols-3 gap-6">
        {coloringPages.map((page, index) => (
          <div key={index} className="glass-card p-4 rounded-lg text-center">
            <img src={page.thumbnail} alt="Coloring Page" className="w-full" />
            <a href={page.downloadLink} className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full inline-block">Download</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColoringPages;
