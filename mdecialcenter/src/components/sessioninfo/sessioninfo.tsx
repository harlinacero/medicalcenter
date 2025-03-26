import { useState } from "react";
import { Session } from "../../models/Session";
import './sessioninfo.css';
import { localStorageUtil } from "../../utils/localStorageUtil";
import { useNavigate } from "react-router-dom";

export default function SessionInfo({ session }: { session: Session }) {
    const navigate = useNavigate();  
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorageUtil.removeToken(); // Elimina el token
        localStorageUtil.removeMenu(); // Elimina el token
        navigate('/login');
    };

    return (
        <div className="session-info" onClick={toggleMenu}>
            <div className="session-info-text">
                <span className='session-info-username'>{session.firstName} {session.lastName}</span>
                <span className='session-info-role'>{session.roleName}</span>
            </div>
            <div className="session-info-avatar">
                <img
                    className="session-avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s"
                    alt="Avatar"
                />
            </div>
            {menuOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li onClick={() => window.location.href = '/register'}>Perfil</li>
                        <li onClick={handleLogout}>Cerrar sesión</li>
                    </ul>
                </div>
            )}
        </div>
    );
}