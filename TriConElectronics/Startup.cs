using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TriConElectronics.Startup))]
namespace TriConElectronics
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
