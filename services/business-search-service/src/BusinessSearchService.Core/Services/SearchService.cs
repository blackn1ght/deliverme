using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessSearchService.Common;
using BusinessSearchService.Common.Dtos;

namespace BusinessSearchService.Core.Services
{
    public interface ISearchService
    {
        Task<PagedResult<BusinessSearchResultDto>> Search(string query);
    }

    internal class SearchService : ISearchService
    {
        public Task<PagedResult<BusinessSearchResultDto>> Search(string query)
        {
            var results = new List<BusinessSearchResultDto>
            {
                new BusinessSearchResultDto
                {
                    Id = 1, 
                    CompanyName = "The Dairy Co.", 
                    Description = "Delivering Dairy stuff since 1066.",
                    Tags = new[] {"Milk", "Dairy", "Eggs"}
                },
                new BusinessSearchResultDto
                {
                    Id = 2,
                    CompanyName = "Beer Factory no.1",
                    Description = "Beer.  To your door.  Absolutely simple.",
                    Tags = new []{ "Beer", "Alcohol", "Ale"}
                }
            };

            var pagedResult = new PagedResult<BusinessSearchResultDto>
            {
                Page = 1,
                TotalNumberOfItems = results.Count,
                ItemsPerPage = 25,
                Items = results
            };

            return Task.FromResult(pagedResult);
        }
    }
}
