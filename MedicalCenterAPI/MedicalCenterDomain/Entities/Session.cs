namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad Session
    /// </summary>
    /// <param name="UserId"></param>
    /// <param name="UserName"></param>
    /// <param name="Role"></param>
    /// <param name="Token"></param>
    public record Session(int UserId, string UserName, Role Role, string Token);
}
