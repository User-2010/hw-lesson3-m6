import React from 'react';
import { Link } from 'react-router-dom';
import s from './Product.module.scss';

export const ProductCard = (props) => {
  const { id, title, image, price } = props;

  return (
    <Link to={`/product/${id}`} className={s.card}>
      <div className={s.wrapper}>
        <img className={s.image} src={image} alt={title} />
      </div>
      <h3 className={s.title}>{title}</h3>
      <span className={s.price}>${price}</span>
    </Link>
  );
};