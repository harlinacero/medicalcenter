import { useState } from "react";
import "./createAppoiments.css";
import { Modal } from "../../../components/modal/modal";
import { AppoimentsProps, AppoimentsStatus } from "../../../models/AppoimentsProps";
import { ModalProps } from "../../../models/ModalProps";
import { useNavigate } from "react-router-dom";

const specialties = [
    { id: 1, name: "Cardiología" },
    { id: 2, name: "Dermatología" },
    { id: 3, name: "Pediatría" },
];

const doctorsBySpeciality = [
    {
        speciality: 1,
        doctors: [
            {
                id: 1, name: "Dr. Juan Pérez",
                availability: [
                    { day: "Lunes", time: "10:00 AM" },
                    { day: "Martes", time: "10:00 PM" },
                    { day: "Martes", time: "2:00 PM" },
                    { day: "Miércoles", time: "12:00 PM" },
                    { day: "Miércoles", time: "2:00 PM" }
                ]
            },
            {
                id: 2,
                name: "Dra. Ana Gómez",
                availability: [
                    { day: "Martes", time: "11:00 AM" },
                    { day: "Martes", time: "11:20 AM" },
                    { day: "Martes", time: "11:30 AM" },
                    { day: "Jueves", time: "3:10 PM" },
                    { day: "Jueves", time: "3:40 PM" },
                    { day: "Jueves", time: "3:50 PM" }
                ]
            },
        ]
    },
    {
        speciality: 2,
        doctors: [
            {
                id: 3,
                name: "Dr. Carlos López",
                availability: [
                    { day: "Lunes", time: "9:00 AM" },
                    { day: "Lunes", time: "9:30 AM" },
                    { day: "Lunes", time: "9:50 AM" },
                    { day: "Viernes", time: "1:00 PM" },
                    { day: "Viernes", time: "2:00 PM" },
                    { day: "Viernes", time: "2:30 PM" }
                ]
            },
        ]
    },
    {
        speciality: 3,
        doctors: [
            {
                id: 4,
                name: "Dra. María Fernández",
                availability: [
                    { day: "Miércoles", time: "10:00 AM" },
                    { day: "Miércoles", time: "10:20 AM" },
                    { day: "Miércoles", time: "10:40 AM" },
                    { day: "Miércoles", time: "11:00 AM" },
                    { day: "Viernes", time: "2:00 PM" },
                    { day: "Viernes", time: "2:30 PM" },
                    { day: "Viernes", time: "4:00 PM" },
                    { day: "Viernes", time: "4:30 PM" },
                    { day: "Viernes", time: "4:50 PM" }
                ]
            },
        ]
    },
];


export default function CreateAppoiments() {
    const navigate = useNavigate();
    const [selectedSpecialty, setSelectedSpecialty] = useState<number | null>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
    const [selectedAppoiment, setSelectedAppoiment] = useState<AppoimentsProps | null>(null);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalPropsSettings, setModalPropsSettings] = useState<ModalProps | null>(null);
    const [showAppoimentInfo, setShowAppoimentInfo] = useState(false);

    const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const specialtyId = parseInt(e.target.value, 10);
        setSelectedSpecialty(specialtyId);
        setSelectedDoctor(null);
        setSelectedAppoiment(null);
    };

    const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const doctorId = parseInt(e.target.value, 10);
        setSelectedDoctor(doctorId);
        setSelectedAppoiment(null);
    };

    const handleAppointmentClick = (index: number) => {
        document.querySelectorAll(".availability-card").forEach((card) => {
            card.classList.remove("selected");
        });
        document.querySelectorAll(".availability-card")[index].classList.add("selected");
        const appoiment: AppoimentsProps = {
            id: 0,
            date: doctorsBySpeciality.find((item) => item.speciality === selectedSpecialty)?.doctors.find((doctor) => doctor.id === selectedDoctor)?.availability[index].day || new Date().toLocaleDateString(),
            time: doctorsBySpeciality.find((item) => item.speciality === selectedSpecialty)?.doctors.find((doctor) => doctor.id === selectedDoctor)?.availability[index].time || new Date().toLocaleDateString(),
            doctor: doctorsBySpeciality.find((item) => item.speciality === selectedSpecialty)?.doctors.find((doctor) => doctor.id === selectedDoctor)?.name || "",
            location: "Hospital General",
            specialty: specialties.find((item) => item.id === selectedSpecialty)?.name || "",
            status: AppoimentsStatus.PENDING,
        }

        setSelectedAppoiment(appoiment);
    };

    const handleSelectedAppoiment = () => {
        if (selectedAppoiment === null) {
            return;
        }

        const modalProps: ModalProps = {
            title: "Confirmación de cita",
            message: "¿Está seguro que desea agendar esta cita?",
            onConfirm: () => {
                saveAppointment();
            },
            isOpen: true,
            onClose: handleCloseModal
        }
        setModalPropsSettings(modalProps);
        setOpenConfirmModal(true);
    };

    const handleCloseModal = () => {
        setOpenConfirmModal(false);
    };

    const saveAppointment = () => {
        const modalProps: ModalProps = {
            title: "Cita agendada",
            message: "Su cita ha sido agendada exitosamente",
            onConfirm: () => {
                handleCloseModal();
                setShowAppoimentInfo(true);
            },
            isOpen: true,
            onClose: handleCloseModal
        };
        setModalPropsSettings(modalProps);
        setOpenConfirmModal(true);
    };

    return (
        <div className="createAppoinments">
            <h2>Agendamiento de citas</h2>
            {
                showAppoimentInfo ?

                    <div className="appoiment-info">
                        <div className="appoiment-info-container">
                            <p>Le informamos que su cita médica ha sido programada con éxito.
                                A continuación, encontrará los detalles de la cita:
                            </p>
                            <p>
                                <strong>Fecha:</strong> {selectedAppoiment?.date}<br />
                                <strong>Hora:</strong> {selectedAppoiment?.time}<br />
                                <strong>Profesional:</strong> {selectedAppoiment?.doctor}<br />
                                <strong>Especialidad:</strong> {selectedAppoiment?.specialty}<br />
                                <strong>Ubicación:</strong> {selectedAppoiment?.location}<br />
                            </p>
                            <p>Para su comodidad, hemos enviado los detalles de esta cita a su correo electrónico y número de celular registrados</p>
                            <p>Si por algún motivo no puede asistir, le agradecemos cancelar su cita con anticipación a través de nuestra oficina virtual
                                o comunicándose a nuestra línea de gestión de citas.
                            </p>
                            <p>¡Gracias por confiar en nostros para su atención Médica</p>
                        </div>
                        <div className="button-container">
                            <button type="button" onClick={() => navigate('/appointments')}>Volver</button>
                        </div>
                    </div>
                    :
                    <form className="appointment-form">
                        <div className="form-group">
                            <label htmlFor="specialty">Especialidad</label>
                            <select id="specialty" onChange={handleSpecialtyChange} value={selectedSpecialty || ""}>
                                <option value="" disabled>Seleccione una especialidad</option>
                                {specialties.map((specialty) => (
                                    <option key={specialty.id} value={specialty.id}>
                                        {specialty.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {selectedSpecialty && (
                            <div className="form-group">
                                <label htmlFor="doctor">Médico</label>
                                <select id="doctor" onChange={handleDoctorChange} value={selectedDoctor || ""}>
                                    <option value="" disabled>Seleccione un médico</option>
                                    {
                                        doctorsBySpeciality.find((item) => item.speciality === selectedSpecialty)?.doctors.map((doctor) => (
                                            <option key={doctor.id} value={doctor.id}>
                                                {doctor.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        )}

                        {selectedDoctor && (
                            <div className="availability">
                                <h2>Disponibilidad</h2>
                                <div className="availability-cards">
                                    {
                                        selectedDoctor && doctorsBySpeciality.find((item) => item.speciality === selectedSpecialty)?.doctors.find((doctor) => doctor.id === selectedDoctor)?.availability.map((availability, index) => {
                                            return (
                                                <div key={index} className="availability-card" onClick={() => handleAppointmentClick(index)}>
                                                    <p><strong>Día:</strong> {availability.day}</p>
                                                    <p><strong>Hora:</strong> {availability.time}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        )}
                        {
                            selectedAppoiment &&
                            <div className="button-container">
                                <button type="button" onClick={handleSelectedAppoiment}>Confirmar</button>
                            </div>
                        }
                    </form>
            }
            <Modal
                title={modalPropsSettings?.title || ""}
                message={modalPropsSettings?.message || ""}
                onConfirm={modalPropsSettings?.onConfirm || handleCloseModal}
                isOpen={openConfirmModal}
                onClose={handleCloseModal}
            />
        </div>
    );
}