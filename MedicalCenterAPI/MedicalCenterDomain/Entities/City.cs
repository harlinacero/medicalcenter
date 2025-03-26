namespace MedicalCenterDomain.Entities
{
    public record City(int Id, string Name, int DepartmentId)
    {
        public virtual Department Department { get; init; }
    };
}
