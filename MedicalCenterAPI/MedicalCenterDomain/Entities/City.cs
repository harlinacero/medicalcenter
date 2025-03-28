namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad City
    /// </summary>
    /// <param name="Id">Identificador de la ciudad</param>
    /// <param name="Name">Nombre de la ciudad</param>
    /// <param name="DepartmentId">Identificador del departamento al que pertenece la ciudad</param>
    public record City(int Id, string Name, int DepartmentId)
    {
        public virtual Department Department { get; init; }
    };
}
