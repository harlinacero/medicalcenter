namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad DocumentType
    /// </summary>
    /// <param name="Id"></param>
    /// <param name="Name"></param>
    /// <param name="ShortName"></param>
    public record DocumentType(int Id, string Name, string ShortName);
}
