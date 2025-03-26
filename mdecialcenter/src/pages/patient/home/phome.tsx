import Card from '../../../components/cards/card';
import { cardsPatientHomeConfig } from '../../../config/cardsHomeConfig';
import './phome.css';

export default function PatientHome() {
    return (
        <div className="home">
            <div className="content-container">
                <div className="cards-container">
                    {cardsPatientHomeConfig.map((card) => (
                        <Card card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}