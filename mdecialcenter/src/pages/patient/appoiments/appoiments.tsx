import { useNavigate } from 'react-router-dom';
import './appoiments.css';
import { AppoimentsProps, AppoimentsStatus } from '../../../models/AppoimentsProps';


const appoiments: AppoimentsProps[] = [
    {
        id: 1,
        date: new Date(),
        doctor: "Dr. Juan Pérez",
        location: "Hospital General",
        specialty: "Cardiología",
        status: AppoimentsStatus.PENDING
    },
    {
        id: 2,
        date: new Date(),
        doctor: "Dr. Juan Pérez",
        location: "Hospital General",
        specialty: "Cardiología",
        status: AppoimentsStatus.CONFIRMED
    },
    {
        id: 3,
        date: new Date(),
        doctor: "Dr. Juan Pérez",
        location: "Hospital General",
        specialty: "Cardiología",
        status: AppoimentsStatus.CANCELLED
    },
    {
        id: 4,
        date: new Date(),
        doctor: "Dr. Juan Pérez",
        location: "Hospital General",
        specialty: "Cardiología",
        status: AppoimentsStatus.COMPLETED
    }
];

export default function Appoiments() {

    const navigate = useNavigate();

    const createAppoimentHandle = () => {
        navigate('/createAppoiments');
    };


    return (
        <div className="appoiments">
            <div className="appoiments-header">
                <div className="appoiments-header-title">
                    <h1>Mis Citas</h1>
                </div>
                <div className="appoiments-header-button">
                    <button className='appoiment-add-button' onClick={createAppoimentHandle}>Agendar Cita</button>
                </div>
            </div>
            <div className="appoiments-list">
                {
                    appoiments.map((appoiment) => (
                        <div key={appoiment.id} className="appoiments-list-item">
                            <div className={`appoiments-list-item-status ${appoiment.status.toLowerCase()}`}>
                                <p>{appoiment.status}</p>
                            </div>
                            <div className="appoiments-list-item-text">                                
                                <p>Fecha: {appoiment.date.toLocaleDateString()} - {appoiment.date.toLocaleTimeString()}</p>
                            </div>
                            <div className="appoiments-list-item-text">
                                <p>Especialista: <b>{appoiment.doctor}</b></p>
                            </div>
                            <div className="appoiments-list-item-text">
                                <p>{appoiment.specialty}</p>
                            </div>
                            <div className="appoiments-list-item-text">
                                <p>Lugar: {appoiment.location}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}