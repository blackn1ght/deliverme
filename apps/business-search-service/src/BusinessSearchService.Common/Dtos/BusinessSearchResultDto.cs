using System.Collections.Generic;

namespace BusinessSearchService.Common.Dtos
{
    public class BusinessSearchResultDto
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string Description { get; set; }
        public IEnumerable<string> Tags { get; set; }
    }
}
