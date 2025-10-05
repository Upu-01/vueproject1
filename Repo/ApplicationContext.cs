using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Repo
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() : base()
        {
        }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.HasPostgresExtension("fuzzystrmatch");
            base.OnModelCreating(modelBuilder);
            new UserMap(modelBuilder.Entity<User>());
            new BannerCarouselMap(modelBuilder.Entity<BannerCarusel>());
            new WhyMeMap(modelBuilder.Entity<WhyMe>());
            new AboutUsMap(modelBuilder.Entity<AboutUs>());
            new ServicesMap(modelBuilder.Entity<Services>());
            new PaymentInfoMap(modelBuilder.Entity<PaymentInfo>());
            new ContactsMap(modelBuilder.Entity<Contacts>());
            new ReviewMap(modelBuilder.Entity<Review>());

            //new DataSheetMap(modelBuilder.Entity<DataSheet>());
            //new MaterialMap(modelBuilder.Entity<Material>());
            //new SubWorkMap(modelBuilder.Entity<SubWork>());
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            optionsBuilder.ConfigureWarnings(w => w.Ignore(CoreEventId.LazyLoadOnDisposedContextWarning));
        }
    }
}
