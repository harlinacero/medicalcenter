import { useEffect, useState } from "react";
import { patientService } from "../../../services/patientapi.service";
import { useNavigate } from "react-router-dom";
import { localStorageUtil } from "../../../utils/localStorageUtil";
import "./register.css";
import { colombiaData } from "../../../config/colombianData";
import { Modal } from "../../../components/modal/modal";
import { Patient } from "../../../models/User";



export default function Register() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [municipalities, setMunicipalities] = useState<any[]>([]);
    const [patientData, setPatientData] = useState<Partial<Patient>>({
        firstName: "",
        lastName: "",
        document: "",
        email: "",
        password: "",
        genderId: undefined,
        documentTypeId: undefined,
        birthDate: "",
        cityId: undefined,
        address: "",
        addressComplement: "",
        phone: "",
        mobilePhone: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        emergencyContactRelationShip: "",
        civilStatusId: undefined,
        disabilityId: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPatientData({ ...patientData, [name]: value });
    };


    const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const departmentId = parseInt(event.target.value, 10);
        const selectedDepartment = colombiaData.find((dept) => dept.id === departmentId);
        setSelectedDepartment(selectedDepartment?.nombre || "");
        setMunicipalities(selectedDepartment?.ciudades || []);
    };

    useEffect(() => {
        const sessionData = localStorageUtil.getToken();
        if (!sessionData) {
            navigate('/login');
        }

        const fetchData = async () => {
            try {
                const patient = await patientService.getPatient(sessionData?.userId);
                setPatientData(patient);
                setSelectedDepartment(patient.city?.departmentId.toString() || "");
                setMunicipalities(colombiaData.find(c => c.id === patient.city.departmentId)?.ciudades || []);
            } catch (error: any) {
                setErrorMessage(error.message);
            }
        };
        fetchData();

    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setErrorMessage('');
            const sessionData = localStorageUtil.getToken();
            if (!sessionData) {
                throw new Error('No se ha iniciado sesión');
            }
            patientData.userName = sessionData.userName
            if ((patientData?.id || 0) > 0) {
                await patientService.updatePatiente(patientData as Patient);
                setIsModalOpen(true);
            } else {
                const response = await patientService.postRegister(patientData as Patient);
                localStorageUtil.setToken(response.token);
                localStorageUtil.setMenus(response.role.menus);
            }
            setIsModalOpen(true);
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        if (!errorMessage) {
            navigate('/phome'); // Navega solo si no hay error
        }
    };

    return (
        <div className="register-page">
            <h2>Actualizar información</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="container">
                    {/* Primer contenedor */}
                    <div className="container-left">
                        <div className="avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s" alt="Avatar" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">Nombre</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={patientData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Apellido</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={patientData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="document">Documento</label>
                            <input
                                type="text"
                                id="document"
                                name="document"
                                value={patientData.document}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={patientData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={patientData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    {/* Segundo contenedor */}
                    <div className="container-right">

                        <div className="form-group-container">
                            <div className="form-group">
                                <label htmlFor="genderId">Género</label>
                                <select
                                    id="genderId"
                                    name="genderId"
                                    value={patientData.genderId || ""}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                                <input
                                    type="date"
                                    id="birthDate"
                                    name="birthDate"
                                    value={patientData.birthDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="c">Estado civil</label>
                                <select
                                    id="civilStatusId"
                                    name="civilStatusId"
                                    value={patientData.civilStatusId || ""}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Soltero</option>
                                    <option value="2">Casado</option>
                                    <option value="3">Divorciado</option>
                                    <option value="4">Viudo</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabilityId">Discapacidad</label>
                                <select
                                    id="disabilityId"
                                    name="disabilityId"
                                    value={patientData.disabilityId || ""}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Ninguna</option>
                                    <option value="2">Visual</option>
                                    <option value="3">Auditiva</option>
                                    <option value="4">Física</option>
                                    <option value="5">Mental</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className="form-group-container">
                            <div className="form-group">
                                <label htmlFor="c">Departamento</label>
                                <select
                                    id="department"
                                    value={selectedDepartment}
                                    onChange={handleDepartmentChange}
                                >
                                    <option value="">Seleccione un departamento</option>
                                    {colombiaData.map((department) => (
                                        <option key={department.id} value={department.id}>
                                            {department.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cityId">Ciudad</label>
                                <select
                                    id="cityId"
                                    name="cityId"
                                    value={patientData.cityId || ""}
                                    onChange={handleChange}
                                    disabled={!selectedDepartment}
                                    required
                                >
                                    {municipalities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Dirección</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={patientData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="addressComplement">Complemento dirección</label>
                                <input
                                    type="text"
                                    id="addressComplement"
                                    name="addressComplement"
                                    value={patientData.addressComplement}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobilePhone">Celular</label>
                                <input
                                    type="number"
                                    id="mobilePhone"
                                    name="mobilePhone"
                                    value={patientData.mobilePhone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono fijo</label>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    value={patientData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="form-group-container">
                            <div className="form-group">
                                <label htmlFor="emergencyContactName">Contacto de emergencia</label>
                                <input
                                    type="text"
                                    id="emergencyContactName"
                                    name="emergencyContactName"
                                    value={patientData.emergencyContactName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emergencyContactPhone">Celular</label>
                                <input
                                    type="number"
                                    id="emergencyContactPhone"
                                    name="emergencyContactPhone"
                                    value={patientData.emergencyContactPhone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emergencyContactRelationShip">Parentesco</label>
                                <input
                                    type="text"
                                    id="emergencyContactRelationShip"
                                    name="emergencyContactRelationShip"
                                    value={patientData.emergencyContactRelationShip}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-button">
                    <button type="submit" className="update-button">Actualizar</button>
                </div>
            </form>
            <Modal
                title={errorMessage ? "Error" : "Usuario actualizado"}
                message={errorMessage || "La información se actualizó correctamente."}
                confirmText="Aceptar"
                onConfirm={handleCloseModal}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}