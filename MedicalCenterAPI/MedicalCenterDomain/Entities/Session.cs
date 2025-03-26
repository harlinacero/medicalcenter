namespace MedicalCenterDomain.Entities
{
    public record Session(int UserId, string UserName, Role Role, string Token);
}
