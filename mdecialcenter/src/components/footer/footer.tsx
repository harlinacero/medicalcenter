import { useEffect, useState } from 'react';
import Imagen1claro from '../../assets/images/Imagen1claro.png';
import menuRoutes from '../../config/menuRoutes';
import './footer.css';
import { Session } from "../../models/Session";
import { localStorageUtil } from '../../utils/localStorageUtil';

export default function Footer() {
    const [session, setSession] = useState<Session | null>(null);
    // const goToLogin = () => {
    //     navigate('/login');
    // };

    useEffect(() => {
        const sessionData = localStorageUtil.getToken();
        const footer = document.querySelector('.footer');
        if (sessionData) {
            setSession(sessionData);
            if (footer) {
                footer.classList.add('logged');
            }
        } else {
            setSession(null);
            if (footer) {
                footer.classList.remove('logged');
            }
        }
    }, []);

    return (
        <footer className="footer">
            {
                !session &&
                <>
                    <div className='app-logo-footer'>
                        <img src={Imagen1claro} alt="medical-center-logo" />
                    </div>
                    <div className='footer-text-items'>
                        {menuRoutes.map((route, index) => {
                            return (
                                <a key={index} href={route.url}>{route.name}</a>
                            );
                        })}
                    </div>
                    <div className='footer-text-items'>
                        <a href='/'>Novedades</a>
                        <a href='/'>Páginas frecuentes</a>
                        <a href='/'>Normatividad</a>
                        <a href='/'>Ley de Transparencia</a>
                        <a href='/'>Portabilidad</a>
                        <a href='/'>Mapa del sitio</a>
                    </div>
                    <div className='footer-text-items'>
                        <a href='/'><b>Línea de atención</b></a>
                        <a href='/'>Bogotá 601 303 200</a>
                        <a href='/'>Barranquilla 601 303 201</a>
                        <a href='/'>Bucaramanga 601 303 202</a>
                        <a href='/'>Cali 601 303 203</a>
                        <a href='/'>Medellín 601 303 204</a>
                        <a href='/'>Cartagena 601 303 205</a>
                    </div>
                    <div className='footer-text-items'>
                        <a href='/'><b>Redes sociales</b></a>
                        <a href='/'>Facebook</a>
                        <a href='/'>Twitter</a>
                        <a href='/'>Instagram</a>
                        <a href='/'>Youtube</a>
                        <a href='/'>LinkedIn</a>
                    </div>
                </>
            }
        </footer>
    );
}