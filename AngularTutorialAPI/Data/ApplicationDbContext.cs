using AngularTutorialAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularTutorialAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Ciudad> Ciudades => Set<Ciudad>();
    }
}
