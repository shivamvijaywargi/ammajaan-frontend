import GetProducts from '@/components/products/GetProducts';
import React from 'react';

const productsPage = () => {
  return (
    <div className="px-2 md:px-5 mx-auto max-w-7xl">
      <GetProducts />
    </div>
  );
};

export default productsPage;
