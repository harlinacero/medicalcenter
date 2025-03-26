
export interface NewProps {
    id: number;
    title: string;
    text: string;
}

interface NewComponentProps {
    newItem: NewProps;
}

export default function New({ newItem }: NewComponentProps) {
    return (
        <div className="news-item">
            <h3>{newItem.title}</h3>
            <p>{newItem.text}</p>
        </div>
    );
}