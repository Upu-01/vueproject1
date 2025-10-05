using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repo;
using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;

namespace Service
{
    public class ServiceHelper
    {
        private IConfiguration _configuration;
        public ServiceHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void Configure(IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(_configuration.GetConnectionString("psql")));
            services.AddScoped(typeof(Repository<>));
            //services.AddScoped(typeof(IPirsRepository<>), typeof(PirsRepository<>));
            //services.AddScoped(typeof(IDrxRepository<>), typeof(DrxRepository<>));
            //services.AddTransient<IUserService, UserService>();
            //services.AddTransient<IDemoService, DemoService>();
            //services.AddScoped<InitRepository>();
        }
        public void Migrate(Microsoft.Extensions.Hosting.IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                var context = services.GetRequiredService<ApplicationContext>();
                if (context.Database.GetPendingMigrations().Any())
                {
                    context.Database.Migrate();
                }
            }
        }
    }
}
