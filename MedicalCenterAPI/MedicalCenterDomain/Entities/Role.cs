namespace MedicalCenterDomain.Entities
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<MenuRoute> Menus { get; set; } // Cambiado a virtual
    }
}
