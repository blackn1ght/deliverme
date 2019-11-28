using System.Threading.Tasks;
using BusinessSearchService.Common;
using BusinessSearchService.Common.Dtos;
using BusinessSearchService.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace BusinessSearchService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ISearchService _searchService;

        public SearchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        [HttpGet]
        public async Task<ActionResult<PagedResult<BusinessSearchResultDto>>> Index(string q)
        {
            if (string.IsNullOrEmpty(q) || q.Trim().Length < 2)
            {
                ModelState.AddModelError("q", "Query must be at least 2 characters long.");
                return BadRequest(ModelState);
            }

            var result = await _searchService.Search(q);

            return result;
        }
    }
}