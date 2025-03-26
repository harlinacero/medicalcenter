namespace MedicalCenterDomain.Entities
{
    public class Patient : User
    {
        public int? CivilStatusId { get; set; }
        public int? DisabilityId { get; set; }
        public virtual CivilStatus CivilStatus { get; set; }
        public virtual Disability Disability { get; set; }
    }
}
