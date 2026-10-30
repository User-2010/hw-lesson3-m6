import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error('Не удалось загрузить данные о товаре');
  return res.json();
};

export const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isPending, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  });

  if (isPending) return <div style={{ padding: '40px', textAlign: 'center' }}>Загрузка товара #{id}...</div>;
  if (isError) return <div style={{ padding: '40px', textAlign: 'center' }}>Ошибка: {error.message}</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '0 20px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '8px 16px',
          marginBottom: '20px',
          cursor: 'pointer',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
        }}
      >
        ← Назад
      </button>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '20px' }}>
          <img src={product.image} alt={product.title} style={{ maxHeight: '350px', maxWidth: '100%', objectFit: 'contain' }} />
        </div>

        <div style={{ flex: '1 1 400px' }}>
          <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '12px' }}>
            ID карточки: {product.id} | Категория: {product.category}
          </p>
          <h1 style={{ fontSize: '28px', margin: '10px 0' }}>{product.title}</h1>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>${product.price}</p>
          
          <div style={{ margin: '15px 0', color: '#f39c12' }}>
            ★ {product.rating?.rate} <span style={{ color: '#777' }}>({product.rating?.count} отзывов)</span>
          </div>

          <p style={{ color: '#555', lineHeight: '1.6', marginTop: '20px' }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};