import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      imageSrc: 'path/to/image1.jpg',
      alt: 'Product 1 Image',
    },
    {
      id: 2,
      name: 'Product 2',
      imageSrc: 'path/to/image2.jpg',
      alt: 'Product 2 Image',
    },
    // Add more products as needed
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.imageSrc} alt={product.alt} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;