namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad Role, define el rol al que pertenece un usuario
    /// </summary>
    public class Role
    {
        /// <summary>
        /// Identificador del rol
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Nombre del rol
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Lista de menus asociados al rol
        /// </summary>
        public virtual ICollection<MenuRoute> Menus { get; set; } // Cambiado a virtual
    }
}
