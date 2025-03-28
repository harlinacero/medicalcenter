using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicalCenterDomain.Enums
{
    /// <summary>
    /// Enumerado de roles
    /// </summary>
    public enum RoleEnum
    {
        /// <summary>
        /// Rol de administrador
        /// </summary>
        Admin = 1,
        /// <summary>
        /// Rol de doctor
        /// </summary>
        Doctor,
        /// <summary>
        /// Rol de paciente
        /// </summary>
        Patient
    }

    /// <summary>
    /// Enumerado de especialidades médicas
    /// </summary>
    public enum SpecialityEnum
    {
        General = 1,
        Pediatrician,
        Gynecologist,
        Cardiologist,
        Neurologist,
        Dermatologist,
        Ophthalmologist,
        Otolaryngologist,
        Urologist,
        Traumatologist,
        Psychiatrist,
        Endocrinologist,
        Gastroenterologist,
        Nephrologist,
        Oncologist,
        Hematologist,
        Rheumatologist,
        Allergist,
        Immunologist,
        Anesthesiologist,
        Radiologist,
        Pathologist,
        Surgeon,
        Orthopedist,
        Dentist,
        Nutritionist,
        Physiotherapist,
        Psychologist,
        Podiatrist,
        Optometrist,
        Audiologist,
        SpeechTherapist,
        OccupationalTherapist,
        RespiratoryTherapist,
    }

    /// <summary>
    /// Enumerado de género
    /// </summary>
    public enum GenderEnum
    {
        /// <summary>
        /// Género masculino
        /// </summary>
        Male = 1,
        /// <summary>
        /// Género femenino
        /// </summary>
        Female
    }
}