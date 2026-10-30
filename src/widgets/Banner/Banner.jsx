import React from "react";
import s from "./Banner.module.scss";
import banner from '../../img/bg.banner.png'; // Проверьте, точно ли файл называется так

export const Banner = () => {
    return (
        <section className={s.bannerSection}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>
                        FIND CLOTHES<br />
                        THAT MATCHES<br />
                        YOUR STYLE
                    </h1>
                    <p className={s.description}>
                        Browse through our diverse range of meticulously crafted garments, designed
                        to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className={s.btn}>Shop Now</button>

                    <div className={s.stats}>
                        <div className={s.statItem}>
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className={s.statDivider}></div>
                        <div className={s.statItem}>
                            <h3>2,000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className={s.statDivider}></div>
                        <div className={s.statItem}>
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>

                <div className={s.imageWrapper}>
                    <img src={banner} alt="Banner" className={s.bannerImg} />
                </div>
            </div>

            <div className={s.brandsBar}>
                <div className={s.brandsContainer}>
                    <span>VERSACE</span>
                    <span>ZARA</span>
                    <span>GUCCI</span>
                    <span>PRADA</span>
                    <span>Calvin Klein</span>
                </div>
            </div>
        </section>
    );
};