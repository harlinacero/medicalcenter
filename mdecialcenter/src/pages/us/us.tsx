import organigrama from '../../assets/images/organigrama.png';
import './us.css';

export default function Us() {
    return (
        <div className="content-container">
            <div className="us-columns">
                {/* Primera columna */}
                <div className="us-column">
                    {/* Sección Historia */}
                    <section className="history-section">
                        <h2>Historia</h2>
                        <p>
                            Medical Center es la empresa promotora de salud creada en 1995 como respuesta a la reforma de la Seguridad Social en Colombia. Ofrecemos los servicios de atención en salud y prestaciones económicas a las cuales tiene derecho todo afiliado dentro del Plan de Beneficios en Salud (PBS).
                        </p>
                    </section>

                    {/* Sección Matriz 2x2 */}
                    <section className="matrix-section">
                        <div className="matrix">
                            <div className="matrix-item">
                                <div className='matrix-item-column'>
                                    <h3>60</h3>
                                </div>
                                <div className='matrix-item-column'>
                                    <p>Centros Médicos Propios</p>
                                </div>
                            </div>
                            <div className="matrix-item">
                                <div className="us-column image-column">
                                </div>
                            </div>
                            <div className="matrix-item">
                                <div className='matrix-item-column'>
                                    <h3>89</h3>
                                </div>
                                <div className='matrix-item-column'>
                                    <p>Oficinas de Atención al Afiliado</p>
                                </div>
                            </div>
                            <div className="matrix-item">
                                <div className='matrix-item-column-2'>
                                    <h3>1.584</h3>
                                    <p>Entidades de Salud Adscritas</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Segunda columna */}
                <div className="us-column image-column">
                    <img src={organigrama} alt="Nuestra institución" />
                </div>
            </div>
        </div>
    );
}