import { useParams } from "react-router-dom";
import { useCategoriesList } from "./Categories.api";
import { ProductCard } from "../ProductCard/ProductCard";
import { MainPage } from "../../pages/MainPage";

export const CategoriesList = () => {
  const { slug } = useParams();
  const {
    data: products,
    error,
    isError,
    isPending,
  } = useCategoriesList(slug);

  if (isPending) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при получении данных: {error}</div>;
  }

  return (
    <section className="container list">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};