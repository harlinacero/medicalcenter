using MedicalCenterDomain.Entities;

namespace MedicalCenterAPI.DTOs
{
    public class PatientDto
    {
        public int? CivilStatusId { get; set; }
        public int? DisabilityId { get; set; }
        public virtual CivilStatus CivilStatus { get; set; }
        public virtual Disability Disability { get; set; }
    }
}
