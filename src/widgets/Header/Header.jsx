import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <h2 className={s.title}>SHOP.CO</h2>
            </div>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li className={s.item}>Shop</li>
                    <li className={s.item}>On Sale</li>
                    <li className={s.item}>New Arrivals</li>
                    <li className={s.item}>Brands</li>
                </ul>
            </nav>
        </header>
    );
};
