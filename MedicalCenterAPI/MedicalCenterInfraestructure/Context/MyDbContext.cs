using MedicalCenterDomain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MedicalCenterInfraestructure.Context
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }
        
        public DbSet<User> Users { get; set; }
        public DbSet<DocumentType> DocumentTypes { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<CivilStatus> CivilStatuses { get; set; }
        public DbSet<Disability> Disabilities { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Speciality> Specialities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(u => u.DocumentType)
                .WithMany()
                .HasForeignKey(u => u.DocumentTypeId);
            modelBuilder.Entity<User>()
                .HasOne(g => g.Gender)
                .WithMany()
                .HasForeignKey(u => u.GenderId);            
            modelBuilder.Entity<User>()
                .HasOne(u => u.City)
                .WithMany()
                .HasForeignKey(u => u.CityId);
            modelBuilder.Entity<User>()
                .HasOne(u => u.Role)
                .WithMany()
                .HasForeignKey(u => u.RoleId);
            modelBuilder.Entity<City>()
                .HasOne(c => c.Department)
                .WithMany()
                .HasForeignKey(c => c.DepartmentId);
            modelBuilder.Entity<Patient>()
                .HasOne(u => u.CivilStatus)
                .WithMany()
                .HasForeignKey(u => u.CivilStatusId);
            modelBuilder.Entity<Patient>()
                .HasOne(u => u.Disability)
                .WithMany()
                .HasForeignKey(u => u.DisabilityId);
            modelBuilder.Entity<Doctor>()
                .HasOne(u => u.Speciality)
                .WithMany()
                .HasForeignKey(u => u.SpecialityId);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}
