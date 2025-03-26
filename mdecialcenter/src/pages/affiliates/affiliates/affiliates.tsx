import citasmedicas from '../../../assets/images/citasmedicas.png';
import autorizaciones from '../../../assets/images/autorizaciones.png';
import certificados from '../../../assets/images/certificados.png';
import './affiliates.css';

export default function Affiliates() {
    return (
        <div className='afflliations-container'>
            <div className='header'>
                <h2>Beneficiones de tu afiliación - Oficina Virtual</h2>
            </div>
            <div className='cards-container'>
                <div className='card-image-content'><img src={citasmedicas} alt="Citas Médicas" /></div>
                <div className='card-image-content'><img src={autorizaciones} alt="Autorizaciones Médicas" /></div>
                <div className='card-image-content'><img src={certificados} alt="Certificados de Afiliación" /></div>
            </div>
        </div>
    );
}