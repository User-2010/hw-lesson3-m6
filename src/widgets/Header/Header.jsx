
import { NavLink } from "react-router-dom";
import { useCategories } from "./Header.api";
import s from "./Header.module.scss";

const renderCategoryLink = (name) => {
    const toCategory = `/category/${name}`;

    return (
        <li className={s.item} key={name}>
            <NavLink to={toCategory}>
                {name}
            </NavLink>
        </li>
    );
};

export const Header = () => {
    const { data: categories } = useCategories();

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <NavLink to="/" className={s.title}>
                    SHOP.CO
                </NavLink>
            </div>

            <nav className={s.nav}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink to="/">Main Page</NavLink>
                    </li>

                    <li className={s.item}>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>

                    {categories?.map(renderCategoryLink)}
                </ul>
            </nav>
        </header>
    );
};
