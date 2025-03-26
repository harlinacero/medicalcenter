namespace MedicalCenterDomain.Entities
{
    public class Doctor : User
    {
        public int SpecialityId { get; set; }

        public virtual Speciality Speciality { get; set; }
    }
}
