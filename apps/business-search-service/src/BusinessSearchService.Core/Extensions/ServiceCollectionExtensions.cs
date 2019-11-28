using BusinessSearchService.Core.Services;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessSearchService.Core.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void ConfigureCoreServices(this IServiceCollection services)
        {
            services.AddScoped<ISearchService, SearchService>();
        }
    }
}
