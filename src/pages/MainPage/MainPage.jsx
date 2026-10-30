import React from 'react';
import { Banner } from '../../widgets/Banner';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import s from './MainPage.module.scss';

export const MainPage = () => {
  const { data: products, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      return res.json();
    }
  });

  if (isPending) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <Banner /> 
      
      <div className="container">
        <h2 className={s.heading}>NEW ARRIVALS</h2>
        <div className="list">
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};