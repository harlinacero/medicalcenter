using MedicalCenterDomain.Entities;

namespace MedicalCenterAPI.DTOs
{
    public class PatientDto
    {
        /// <summary>
        /// Estado civil del paciente
        /// </summary>
        public int? CivilStatusId { get; set; }
        /// <summary>
        /// Discapacidad del paciente
        /// </summary>
        public int? DisabilityId { get; set; }
        /// <summary>
        /// Referencia del Estado civil del paciente
        /// </summary>
        public virtual CivilStatus CivilStatus { get; set; }
        /// <summary>
        /// Referencia Discapacidad del paciente
        /// </summary>
        public virtual Disability Disability { get; set; }
    }
}
