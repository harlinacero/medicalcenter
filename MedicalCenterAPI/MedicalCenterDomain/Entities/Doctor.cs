namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad Doctor
    /// </summary>
    public class Doctor : User
    {
        /// <summary>
        /// Id del de la especialidad
        /// </summary>
        public int SpecialityId { get; set; }
        /// <summary>
        /// Especialidad del doctor
        /// </summary>
        public virtual Speciality Speciality { get; set; }
    }
}
