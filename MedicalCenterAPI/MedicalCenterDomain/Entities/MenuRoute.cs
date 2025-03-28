namespace MedicalCenterDomain.Entities
{
    /// <summary>
    /// Entidad MenuRoute, contiene la definición del menú de rutas y la ruta correspondiente
    /// </summary>
    public class MenuRoute { 
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
    }
}
