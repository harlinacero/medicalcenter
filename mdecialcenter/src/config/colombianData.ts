const colombiaData: { id: number; nombre: string; ciudades: { id: number; nombre: string }[] }[] = [
    {
        id: 1,
        nombre: "Antioquia",
        ciudades: [
            { id: 1, nombre: "Medellín" },
            { id: 2, nombre: "Envigado" },
            { id: 3, nombre: "Itagüí" },
            { id: 4, nombre: "Bello" },
        ],
    },
    {
        id: 2,
        nombre: "Cundinamarca",
        ciudades: [
            { id: 1, nombre: "Bogotá" },
            { id: 2, nombre: "Soacha" },
            { id: 3, nombre: "Chía" },
            { id: 4, nombre: "Zipaquirá" },
        ],
    },
    {
        id: 3,
        nombre: "Valle del Cauca",
        ciudades: [
            { id: 1, nombre: "Cali" },
            { id: 2, nombre: "Palmira" },
            { id: 3, nombre: "Buenaventura" },
            { id: 4, nombre: "Tuluá" },
        ],
    },
    {
        id: 4,
        nombre: "Atlántico",
        ciudades: [
            { id: 1, nombre: "Barranquilla" },
            { id: 2, nombre: "Soledad" },
            { id: 3, nombre: "Malambo" },
            { id: 4, nombre: "Puerto Colombia" },
        ],
    },
];

export { colombiaData };