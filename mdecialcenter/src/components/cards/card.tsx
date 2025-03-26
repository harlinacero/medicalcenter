import './card.css';

export interface CardProps {
    id: number;
    image: string;
    text: string;
    title?: string;
    style: string;
    buttonLabel: string;
    link?: string;
}

interface CardComponentProps {
    card: CardProps;
}

export default function Card({ card }: CardComponentProps) {
    return (
        <div key={card.id} className="card">
            <div className={card.style}>
                <img src={card.image} alt={`Card ${card.id}`} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
            <button className="card-button">{card.buttonLabel}</button>
        </div>
    );
};