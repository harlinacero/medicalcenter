namespace MedicalCenterDomain.Entities
{
    public record UserToken(int Id, int UserId, string Token, DateTime Expiration, User User);
}
