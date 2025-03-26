using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicalCenterDomain.Enums
{
    public enum RoleEnum
    {
        Admin = 1,
        Doctor,
        Patient
    }

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

    public enum GenderEnum
    {
        Male = 1,
        Female
    }
}