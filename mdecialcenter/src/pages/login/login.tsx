import './login.css';
import logo from '../../assets/images/logoname.png';
import { useState } from 'react';
import { medicalApiService } from '../../services/merdicalapi.service';
import { useNavigate } from 'react-router-dom';
import { localStorageUtil } from '../../utils/localStorageUtil';

export default function Login() {
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', document: '',password: '', rememberme: false, aceptcContract: false });
    const [errorMessage, setErrorMessage] = useState('');
    

    const goToLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsRegister(false);
    };

    const updateMode = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsRegister(true);
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evita que el formulario recargue la página
        setErrorMessage(''); // Limpia el mensaje de error

        try {
            const response = await medicalApiService.postLogin({
                document: loginData.document,
                password: loginData.password,
                rememberme: loginData.rememberme
            });
            localStorageUtil.setToken(response.token);
            localStorageUtil.setMenus(response.role.menus);
            navigate('/phome');
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evita que el formulario recargue la página
        setErrorMessage(''); // Limpia el mensaje de error

        try {
            const response = await medicalApiService.postRegister({
                username: loginData.username,
                document: loginData.document,
                password: loginData.password,
            });
            if(response) {
                localStorageUtil.setToken(response.token);
                localStorageUtil.setMenus(response.role.menus);
                navigate('/register');
                setIsRegister(false);
            } else {
                setErrorMessage("Error");
            }
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="image">
                    <img src={logo} alt="Logo" />
                </div>
                <form className="form-box" onSubmit={isRegister ? handleRegister: handleLogin}>
                    {
                        isRegister && <div className="form-group">
                            <div className="input-container">
                                <input type="text" id="username" placeholder="Nombre" 
                                value={loginData.username} onChange={e => setLoginData({...loginData, username: e.target.value})}/>
                            </div>
                        </div>
                    }
                    <div className="form-group">
                        <div className="input-container">
                            <input type="text" id="identification" placeholder="Cédula"
                                value={loginData.document} onChange={e => setLoginData({ ...loginData, document: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-container">
                            <input type="password" id="password" placeholder="Contraseña"
                                value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} />
                        </div>
                        {errorMessage && <p className="error-hint">{errorMessage}</p>}
                    </div>
                    {
                        isRegister && <>
                            <div className="form-group checkbox-group">
                                <input type="checkbox" id="aceptcContract" />
                                <label htmlFor="aceptcContract">Acepto términos y condiciones</label>
                            </div>
                            <button type="submit" className="login-button">Registrarme</button>
                            <div className="form-links">
                                <a href='/' onClick={goToLogin}>Ya tengo una cuenta</a>
                            </div>
                        </>
                    }
                    {
                        !isRegister && <>
                            <div className="form-group checkbox-group">
                                <input type="checkbox" id="remember"
                                    checked={loginData.rememberme} onChange={e => setLoginData({ ...loginData, rememberme: e.target.checked })} />
                                <label htmlFor="remember">Recordarme</label>
                            </div>
                            <button type="submit" className="login-button">Ingresar</button>
                            <div className="form-links">
                                <a href="/login">Olvidé mi contraseña</a>
                                <a href='/' onClick={updateMode}>Registrarme</a>
                            </div>
                        </>
                    }
                </form>
            </div>
        </div>
    );
}