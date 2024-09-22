import React from 'react';

const affiliateProducts = [
  { title: 'Elegant Necklace', image: 'necklace.jpg', link: 'https://affiliate-link.com' },
  { title: 'Stylish Bracelet', image: 'bracelet.jpg', link: 'https://affiliate-link.com' },
];

function Affiliate() {
  return (
    <div className="affiliate-section py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Jewelry Affiliate</h2>

      <div className="grid grid-cols-3 gap-6">
        {affiliateProducts.map((product, index) => (
          <div key={index} className="glass-card p-6 text-center">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-2xl mt-4 font-semibold">{product.title}</h3>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple-700 text-white py-2 px-4 rounded-full">
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Affiliate;
