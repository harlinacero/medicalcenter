import { CardProps } from "../components/cards/card";
import soporteEnLinea from '../assets/images/soporte-en-linea.png';
import medicamento from '../assets/images/medicamento.png';
import microscopio from '../assets/images/microscopio.png';
import autorizacion from '../assets/images/autorizacion.png';
import vacunacion from '../assets/images/vacunacion.png';

const cardsConfig: CardProps[] = [
    {
        id: 1,
        image: soporteEnLinea,
        title: 'Asesor en línea',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
    },
    {
        id: 2,
        image: medicamento,
        title: 'Medicamentos',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
    },
    {
        id: 3,
        image: microscopio,
        title: 'Resultados médicos',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
    },
    {
        id: 4,
        image: autorizacion,
        title: 'Autorizaciones',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
    },
    {
        id: 5,
        image: vacunacion,
        title: 'Vacunación',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
    }
];

const cardsAffiliationsConfig: CardProps[] = [
    {
        id: 1,
        image: 'https://estudios.unad.edu.co/images/2023/postgrado1.jpg',
        title: 'Independiente',
        text: 'Si eres trabajador independiente y deseas formar parte del Medical Center, ingresa a la página de Mi Seguridad Social del Ministerio de Salud y Protección Social y sigue los pasos para afiliarte.',
        style: 'card-image-big',
        buttonLabel: 'Ir al sitio',
    },
    {
        id: 2,
        image: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/06/5-actitudes-habituales-debes-evitar-ser-feliz-2365211.jpg?tf=1920x',
        title: 'Pensionados',
        text: 'Si eres pensionado y deseas formar parte del Medical Center, ingresa a la página de Mi Seguridad Social del Ministerio de Salud y Protección Social y sigue los pasos para afiliarte.',
        style: 'card-image-big',
        buttonLabel: 'Ir al sitio',
    },
    {
        id: 3,
        image: 'https://s7d1.scene7.com/is/image/wbcollab/lac-mexico2equal?qlt=90&fmt=webp',
        title: 'Empleado',
        text: 'Si eres empleado y deseas formar parte del Medical Center, contácta con el personal encargado de tu empresa y sigue las instrucciones.',
        style: 'card-image-big',
        buttonLabel: 'Ir al sitio',
    }
];

const cardsPatientHomeConfig: CardProps[] = [
    {
        id: 1,
        image: 'https://estudios.unad.edu.co/images/2023/postgrado1.jpg',
        title: 'Agendamiento de citas',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
        link: '/phome/appointments',
    },
    {
        id: 2,
        image: microscopio,
        title: 'Resultados médicos',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
        link: '/phome/medical-history',
    },
    {
        id: 3,
        image: autorizacion,
        title: 'Autorizaciones',
        text: '',
        style: 'card-image',
        buttonLabel: 'Ver más',
        link: '/phome/exam-results',
    }
];

export { cardsConfig, cardsAffiliationsConfig, cardsPatientHomeConfig };