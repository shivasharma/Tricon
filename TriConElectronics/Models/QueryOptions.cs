﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TriConElectronics.Models
{
    public class QueryOptions
    {
        public QueryOptions()
        {
            CurrentPage = 1;
            PageSize = 1; 
            SortField = "Id";
            SortOrder = SortOrder.ASC;
        }
        public int CurrentPage { get; set; }

        public int TotalPages { get; set; }

        public int PageSize { get; set; }
        public string SortField { get; set; }

        public SortOrder SortOrder { get; set; }



        public string Sort
        {
            get
            {
                return string.Format("{0} {1}",
                  SortField, SortOrder.ToString());
            }
        }
    }
}