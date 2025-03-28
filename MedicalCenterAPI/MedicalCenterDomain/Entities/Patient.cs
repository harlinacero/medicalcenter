namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad Patient
    /// </summary>
    public class Patient : User
    {
        /// <summary>
        /// Estado civil del paciente
        /// </summary>
        public int? CivilStatusId { get; set; }
        /// <summary>
        /// Discapacidad del paciente
        /// </summary>
        public int? DisabilityId { get; set; }
        public virtual CivilStatus CivilStatus { get; set; }
        public virtual Disability Disability { get; set; }
    }
}
