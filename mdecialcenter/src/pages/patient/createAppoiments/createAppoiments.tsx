import { useState } from "react";
import "./createAppoiments.css";
import { Modal } from "../../../components/modal/modal";
import { AppoimentsProps, AppoimentsStatus } from "../../../models/AppoimentsProps";

const specialties = [
    { id: 1, name: "Cardiología" },
    { id: 2, name: "Dermatología" },
    { id: 3, name: "Pediatría" },
];

const doctorsBySpeciality = [
    {
        speciality: 1,
        doctors: [
            { id: 1, name: "Dr. Juan Pérez", availability: [{ day: "Lunes", time: "10:00 AM" }, { day: "Miércoles", time: "2:00 PM" }] },
            { id: 2, name: "Dra. Ana Gómez", availability: [{ day: "Martes", time: "11:00 AM" }, { day: "Jueves", time: "3:00 PM" }] },
        ]
    },
    {
        speciality: 2,
        doctors: [
            { id: 3, name: "Dr. Carlos López", availability: [{ day: "Lunes", time: "9:00 AM" }, { day: "Viernes", time: "1:00 PM" }] },
        ]
    },
    {
        speciality: 3,
        doctors: [
            { id: 4, name: "Dra. María Fernández", availability: [{ day: "Miércoles", time: "10:00 AM" }, { day: "Viernes", time: "4:00 PM" }] },
        ]
    },
];


export default function CreateAppoiments() {
    const [selectedSpecialty, setSelectedSpecialty] = useState<number | null>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedAppoiment, setSelectedAppoiment] = useState<AppoimentsProps | null>(null);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

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
        setSelectedDate(new Date());
        const appoiment: AppoimentsProps = {
            id: 0,
            date: new Date(selectedDate || ""),
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

        setOpenConfirmModal(true);
    };

    const handleCloseModal = () => {
        setOpenConfirmModal(false);
    };

    const saveAppointment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };

    return (
        <div className="createAppoinments">
            <h1>Agendamiento de citas</h1>
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

                <div className="button-container">
                    <button type="button" onClick={handleSelectedAppoiment}>Confirmar</button>
                </div>
            </form>
            <Modal
                title="Confirmación de cita"
                message="¿Está seguro que desea agendar esta cita?"
                onConfirm={() => saveAppointment}
                isOpen={openConfirmModal}
                onClose={handleCloseModal}
            />
        </div>
    );
}