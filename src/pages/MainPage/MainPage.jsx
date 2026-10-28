import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
        throw new Error('Ошибка при загрузке списка товаров');
    }
    return res.json();
};

export const MainPage = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Произошла ошибка: {error.message}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Каталог товаров</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '20px',
                    marginTop: '20px',
                }}
            >
                {data.products.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <h3>{product.title}</h3>
                        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};