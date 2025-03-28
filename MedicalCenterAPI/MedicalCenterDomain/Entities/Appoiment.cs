namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad Cita médica
    /// </summary>
    /// <param name="Id"></param>
    /// <param name="UserId"></param>
    /// <param name="DoctorId"></param>
    /// <param name="Date"></param>
    /// <param name="Status"></param>
    public record Appoiment(int Id, int UserId, int DoctorId, DateTime Date, int Status);
}
