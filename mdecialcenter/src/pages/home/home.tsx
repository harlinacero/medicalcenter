import Card from "../../components/cards/card";
import New from "../../components/new/new";
import { cardsConfig } from "../../config/cardsHomeConfig";
import newsHome from "../../config/newsHome";
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="content-container">
                <div className="cards-container">
                    {cardsConfig.map((card) => (
                        <Card card={card} />
                    ))}
                </div>

                <section className="latest-news">
                    <h2>Últimas noticias</h2>
                    <div className="news-columns">
                        {
                            newsHome.map((newItem) => (
                                <New newItem={newItem} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}