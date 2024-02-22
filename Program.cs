
using Api_with_React.Context;
using Api_with_React.Interface;
using Api_with_React.Repository;
using Api_with_React.Model;

namespace Api_with_React
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllersWithViews();
            

            builder.Services.AddSingleton<Config>();
            builder.Services.AddScoped<IDealerInterface, DealerRepository>();

            builder.Services.AddCors(c =>
            {
                c.AddDefaultPolicy(defpolicy => defpolicy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
            }

            app.UseStaticFiles();
            app.UseRouting();


            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}