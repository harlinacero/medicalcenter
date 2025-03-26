import React, { useState } from 'react';
import './careNetwork.css';

const colombiaData: Record<string, string[]> = {
    Antioquia: ['Medellín', 'Envigado', 'Itagüí', 'Bello'],
    Cundinamarca: ['Bogotá', 'Soacha', 'Chía', 'Zipaquirá'],
    ValleDelCauca: ['Cali', 'Palmira', 'Buenaventura', 'Tuluá'],
    Atlántico: ['Barranquilla', 'Soledad', 'Malambo', 'Puerto Colombia'],
};

const medicalCenters = [
    {
        name: 'Medical Center Sede Norte',
        address: 'Calle 123 #45-67',
        phone: '(+57) 300 123 4567',
        schedule: 'L-V 06:00-18:00 S 06:00-15:00',
        services: ['Vacunación', 'Urgencias', 'Medicina Interna'],
    },
    {
        name: 'Medical Center Sede Sur',
        address: 'Carrera 89 #12-34',
        phone: '(+57) 310 987 6543',
        schedule: 'L-V 07:00-19:00 S 07:00-14:00',
        services: ['Pediatría', 'Laboratorio Clínico', 'Odontología'],
    },
    {
        name: 'Medical Center Sede Centro',
        address: 'Avenida 10 #20-30',
        phone: '(+57) 320 456 7890',
        schedule: 'L-V 08:00-17:00 S 08:00-13:00',
        services: ['Vacunación', 'Medicina General', 'Radiología'],
    },
    {
        name: 'Medical Center Sede Oriente',
        address: 'Carrera 50 #10-20',
        phone: '(+57) 301 654 9870',
        schedule: 'L-V 07:00-18:00 S 07:00-13:00',
        services: ['Cardiología', 'Dermatología', 'Fisioterapia'],
    },
    {
        name: 'Medical Center Sede Occidente',
        address: 'Calle 80 #25-50',
        phone: '(+57) 302 789 6543',
        schedule: 'L-V 06:30-17:30 S 06:30-14:00',
        services: ['Psiquiatría', 'Neurología', 'Rehabilitación'],
    },
    {
        name: 'Medical Center Sede Las Flores',
        address: 'Avenida 15 #45-90',
        phone: '(+57) 303 456 7891',
        schedule: 'L-V 08:00-16:00 S 08:00-12:00',
        services: ['Vacunación', 'Medicina General', 'Odontología'],
    },
    {
        name: 'Medical Center Sede Los Pinos',
        address: 'Carrera 70 #30-40',
        phone: '(+57) 304 123 4568',
        schedule: 'L-V 07:00-18:00 S 07:00-13:00',
        services: ['Pediatría', 'Laboratorio Clínico', 'Radiología'],
    },
];

export default function CareNetwork() {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [municipalities, setMunicipalities] = useState<string[]>([]);

    const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const department = event.target.value;
        setSelectedDepartment(department);
        setMunicipalities(colombiaData[department] || []);
    };

    return (
        <div className="careNetwork">
            <div className="form-container">
                <h2>Red de Atención</h2>
                <form>
                    {/* Dropdown de departamentos */}
                    <div className="form-group">
                        <label htmlFor="department">Departamento:</label>
                        <select
                            id="department"
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                        >
                            <option value="">Seleccione un departamento</option>
                            {Object.keys(colombiaData).map((department) => (
                                <option key={department} value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Dropdown de municipios */}
                    <div className="form-group">
                        <label htmlFor="municipality">Municipio:</label>
                        <select id="municipality" disabled={!selectedDepartment}>
                            <option value="">Seleccione un municipio</option>
                            {municipalities.map((municipality) => (
                                <option key={municipality} value={municipality}>
                                    {municipality}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>

            <div className="medical-centers">

                {medicalCenters.map((center, index) => (
                    <div key={index} className="medical-center">
                        <h4>{center.name}</h4>
                        <p><strong>Dirección:</strong> {center.address}</p>
                        <p><strong>Teléfono:</strong> {center.phone}</p>
                        <p><strong>Horario:</strong> {center.schedule}</p>
                        <p><strong>Servicios:</strong> {center.services.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};