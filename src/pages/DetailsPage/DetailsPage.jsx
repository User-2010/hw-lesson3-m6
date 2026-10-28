import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

const fetchProductById = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        throw new Error('Не удалось загрузить данные о товаре');
    }
    return res.json();
};

export const DetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id),
    });

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Произошла ошибка: {error.message}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <button 
                onClick={() => navigate(-1)} 
                style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '20px', background: 'white', borderRadius: '8px' }}
            >
                ← Назад
            </button>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', }}>
                <img
                    src={data.thumbnail}
                    alt={data.title}
                    style={{ width: '300px', borderRadius: '8px', border: '1px solid #ddd' }}
                />
                <div
                style={{border: 'black solid 1px', borderRadius: '8px', padding: '20px' }}
                >
                    <h2>{data.title}</h2>
                    <p><strong>Категория:</strong> {data.category}</p>
                    <p><strong>Описание:</strong> {data.description}</p>
                    <p style={{ fontSize: '20px', color: 'green', fontWeight: 'bold' }}>${data.price}</p>
                    <p><strong>Рейтинг:</strong> ⭐ {data.rating}</p>
                </div>
            </div>
        </div>
    );
};