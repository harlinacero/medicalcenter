import appmovil from '../../assets/images/app movil.svg';
import web from '../../assets/images/web.svg';
import chatbot from '../../assets/images/ana maria.svg';
import telefono from '../../assets/images/linea telefonica.svg';
import presencial from '../../assets/images/presencial.svg';
import './contact.css';

export function Contact() {
    return (
        <div className="contact">
            <div className="contact-info">
                <h2>Contáctanos</h2>
                <p>Tus opiniones son importantes para nosotros, por lo que ponemos a tu disposición
                    los siguientes canales de atención, através de los cuales podrás radiccar tus sugerencias, felicitaciones o PQRS.
                </p>
            </div>
            <div className="contact-items">
                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src={appmovil} alt="App Móvil" />
                    </div>
                    <div className="contact-card-content">
                        <h4>App Móvil Medical Center</h4>
                        <p>Ponemos a tu disposición una APP móvil disponible para iOS y Android,
                            para que disfrutes de nuestros servicios. Puedes acceder las 24
                            horas del día, los 7 días a la semana.
                        </p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src={web} alt="Web" />
                    </div>
                    <div className="contact-card-content">
                        <h4>Web</h4>
                        <p>Consulta nuestra pagina web si requieres información sobre citas médicas,
                            información general o acceso a nuestra oficina virtual de afiliados,
                            recuerda que nuestro canal web está disponible las 24 horas del día.
                        </p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src={chatbot} alt="ChatBot" />
                    </div>
                    <div className="contact-card-content">
                        <h4>ChatBot</h4>
                        <p>Comunícate con tu asistente virtual en salud por chat web o WhatsApp
                            para recibir información y poder orientarte.
                        </p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src={telefono} alt="Línea Telefónica" />
                    </div>
                    <div className="contact-card-content">
                        <h4>Línea Telefónica</h4>
                        <p>Comunícate a través de nuestra línea de atención en
                            Bogotá al 6013000000 o a nuestra línea nacional 018000000000
                            (Tel. Fijo) las 24 horas del día.
                        </p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-card-image">
                        <img src={presencial} alt="Atención Presencial" />
                    </div>
                    <div className="contact-card-content">
                        <h4>Atención Presencial</h4>
                        <p>Contamos con Oficinas de Atención al Afiliado y Puntos de Atención
                            Integral a nivel nacional, donde podrás gestionar el direccionamiento
                            de servicios médicos, radicación y novedades de afiliaciones.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};