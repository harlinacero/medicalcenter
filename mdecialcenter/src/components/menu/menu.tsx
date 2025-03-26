import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultMenuRoutes from '../../config/menuRoutes';
import './menu.css';
import { localStorageUtil } from '../../utils/localStorageUtil';

export interface MenuRoute {
    name: string;
    url: string;
}

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuRoutes, setMenuRoutes] = useState<MenuRoute[]>(defaultMenuRoutes);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Alterna el estado
    };

    useEffect(() => {
        const menus = localStorageUtil.getMenus();
        if (menus && menus.length > 0) {
            setMenuRoutes(menus);
        } else {
            setMenuRoutes(defaultMenuRoutes);
        }
    }, []);

    return (
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
                {menuRoutes.map((route) => (
                    <NavLink
                        key={route.url}
                        to={route.url}
                        className={({ isActive }) => (isActive ? 'menu-button active' : 'menu-button')}
                        onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
                    >
                        {route.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};