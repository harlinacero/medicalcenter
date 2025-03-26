import Card from '../../components/cards/card';
import { cardsAffiliationsConfig } from '../../config/cardsHomeConfig';
import './affiliations.css';

export default function Affiliations() {
    return (
        <div className='afflliations-container'>
            <div className='header'>
                <h2>Cómo y donde afiliarte</h2>
                <p>Conoce el procedimiento a seguir y documentación necesaria para afiliarte.</p>
            </div>
            <div className='cards-container'>
                {
                    cardsAffiliationsConfig.map((card) => (
                       <Card card={card} />
                    ))
                }
            </div>
        </div>
    );
}