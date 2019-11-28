using System;
using System.Collections.Generic;

namespace BusinessSearchService.Common
{
    public class PagedResult<T>
    {
        public int Pages => (int) Math.Ceiling((double) TotalNumberOfItems / ItemsPerPage);
        public int Page { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalNumberOfItems { get; set; }
        public List<T> Items { get; set; } = new List<T>();
    }
}
