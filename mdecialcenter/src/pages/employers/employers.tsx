import './employers.css';

export default function Employers() {
    return (
        <div className="employers">
            <div className="section-title">
                <h2>Fechas Límite de pago</h2>
                <p>Es importante que realices el pago oportunamente a través de la PILA, por esta razón te damos a conocer las fechas límites de pago</p>
            </div>
            <div className="section-body">
                <div className="section-body-item">
                    <table className="payment-table">
                        <thead>
                            <tr>
                                <th>Dos últimos dígitos del NIT o documento de Identidad</th>
                                <th>Día hábil de vencimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00 al 07</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>08 al 14</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>15 al 21</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>22 al 28</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>29 al 35</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>36 al 42</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>43 al 49</td>
                                <td>8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section-body-item">
                    <table className="payment-table">
                        <thead>
                            <tr>
                                <th>Dos últimos dígitos del NIT o documento de Identidad</th>
                                <th>Día hábil de vencimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>50 al 56</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>57 al 64</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>65 al 72</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>73 al 80</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>80 al 87</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>88-95</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>95-99</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}