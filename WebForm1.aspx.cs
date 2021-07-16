using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using apexcharts.Model;
using Newtonsoft.Json;

namespace apexcharts
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string GetCharts()
        {
            Class1 calsse = new Class1(55, 42, 20, 32, 10);
            return JsonConvert.SerializeObject(calsse);
        }
    }
}