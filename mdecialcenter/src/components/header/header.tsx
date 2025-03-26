import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logoname.png';
import './header.css';
import { useEffect, useState } from 'react';
import { Session } from "../../models/Session";
import SessionInfo from '../sessioninfo/sessioninfo';
import { localStorageUtil } from '../../utils/localStorageUtil';

export default function Header() {
    const navigate = useNavigate();
    const [session, setSession] = useState<Session | null>(null);
    const goToLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        const sessionData = localStorageUtil.getToken();
        if (sessionData) {
            setSession(sessionData);
        }
    }, []);

    return (
        <div className="app-header">
            <div className="header-content">
                <div className="app-logo">
                    <img src={logo} alt="Logo" />
                </div>
                {
                    session ?
                        <SessionInfo session={session} /> :
                        <div className="button-office">
                            <button onClick={goToLogin}>Oficina Virtual</button>
                        </div>
                }
            </div>
        </div>
    );
}