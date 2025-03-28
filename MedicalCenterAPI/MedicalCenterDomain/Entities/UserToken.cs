namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad UserToken
    /// </summary>
    /// <param name="Id"></param>
    /// <param name="UserId"></param>
    /// <param name="Token"></param>
    /// <param name="Expiration"></param>
    /// <param name="User"></param>
    public record UserToken(int Id, int UserId, string Token, DateTime Expiration, User User);
}
